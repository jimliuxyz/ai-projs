/**
 * 從檔案名解析教材元數據
 * 
 * 檔案名格式：ageGroup[format][title][tags].json
 * 
 * 範例：
 * 5[vocabulary][BasicAnimals][animals^basic+beginners].json
 * 10[quiz][ColorsTest][colors^primary+quiz^basic].json
 * 
 * tags 格式：
 * - ^ 表示階層分隔 (替代 /)
 * - + 表示多個標籤分隔
 * 
 * animals^basic+beginners → ["animals/basic", "beginners"]
 */

import type { AgeGroup, ContentFormat } from '~/types/content.types';

export interface FileMetadata {
    ageGroup: AgeGroup;
    format: ContentFormat;
    title: string;
    tags: string[];
    fileName: string;
    filePath: string;
}

/**
 * 解析檔案名稱
 */
export function parseFileName(filePath: string): FileMetadata | null {
    const fileName = filePath.split('/').pop() || '';

    // 正則匹配：ageGroup[format][title][tags].json
    // 例如：5[vocabulary][BasicAnimals][animals^basic+beginners].json
    const regex = /^(\d+)\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\.json$/;
    const match = fileName.match(regex);

    if (!match) {
        console.warn(`Invalid file name format: ${fileName}`);
        return null;
    }

    const [, ageGroupStr, formatStr, titleStr, tagsStr] = match;

    // 解析標題：PascalCase → Normal Case
    const title = titleStr
        .replace(/([A-Z])/g, ' $1')  // 在大寫字母前加空格
        .trim()                       // 去除首尾空格
        .replace(/\s+/g, ' ');        // 多個空格合併為一個

    // 解析標籤
    // "animals^basic+beginners" → ["animals/basic", "beginners"]
    const tags = tagsStr
        .split('+')                   // 分割多個標籤
        .map(tag => tag.replace(/\^/g, '/'))  // ^ 轉換為 /
        .filter(tag => tag.length > 0);

    return {
        ageGroup: ageGroupStr as AgeGroup,
        format: formatStr as ContentFormat,
        title,
        tags,
        fileName,
        filePath
    };
}

/**
 * 從標題生成 PascalCase
 * "Basic Animals" → "BasicAnimals"
 */
export function titleToPascalCase(title: string): string {
    return title
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

/**
 * 從標籤生成檔案名格式
 * ["animals/basic", "beginners"] → "animals^basic+beginners"
 */
export function tagsToFileName(tags: string[]): string {
    return tags
        .map(tag => tag.replace(/\//g, '^'))
        .join('+');
}

/**
 * 生成完整檔案名
 */
export function generateFileName(metadata: {
    ageGroup: string;
    format: string;
    title: string;
    tags: string[];
}): string {
    const pascalTitle = titleToPascalCase(metadata.title);
    const tagsPart = tagsToFileName(metadata.tags);

    return `${metadata.ageGroup}[${metadata.format}][${pascalTitle}][${tagsPart}].json`;
}

/**
 * 驗證檔案名格式
 */
export function isValidFileName(fileName: string): boolean {
    const regex = /^(\d+)\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\.json$/;
    return regex.test(fileName);
}
