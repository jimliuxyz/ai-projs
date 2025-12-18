declare module 'virtual:content-list' {
  export type ContentItem = { key: string; audio: string[]; video: string[]; image: string[] }
  export const items: Record<string, ContentItem>
}
