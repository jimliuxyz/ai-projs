export interface Word {
  text: string;
  translation: string; // Traditional Chinese
  category: string;
  example?: string;
}

export const VOCABULARY: Word[] = [
  // Animals
  { text: 'cat', translation: '貓', category: 'animal' },
  { text: 'dog', translation: '狗', category: 'animal' },
  { text: 'elephant', translation: '大象', category: 'animal' },
  { text: 'lion', translation: '獅子', category: 'animal' },
  { text: 'monkey', translation: '猴子', category: 'animal' },
  { text: 'rabbit', translation: '兔子', category: 'animal' },
  { text: 'tiger', translation: '老虎', category: 'animal' },
  { text: 'bird', translation: '鳥', category: 'animal' },

  // Fruits
  { text: 'apple', translation: '蘋果', category: 'fruit' },
  { text: 'banana', translation: '香蕉', category: 'fruit' },
  { text: 'orange', translation: '橘子', category: 'fruit' },
  { text: 'grape', translation: '葡萄', category: 'fruit' },
  { text: 'lemon', translation: '檸檬', category: 'fruit' },
  { text: 'strawberry', translation: '草莓', category: 'fruit' },

  // Colors
  { text: 'red', translation: '紅色', category: 'color' },
  { text: 'blue', translation: '藍色', category: 'color' },
  { text: 'green', translation: '綠色', category: 'color' },
  { text: 'yellow', translation: '黃色', category: 'color' },
  { text: 'purple', translation: '紫色', category: 'color' },
  { text: 'black', translation: '黑色', category: 'color' },
  { text: 'white', translation: '白色', category: 'color' },

  // Numbers
  { text: 'one', translation: '一', category: 'number' },
  { text: 'two', translation: '二', category: 'number' },
  { text: 'three', translation: '三', category: 'number' },
  { text: 'four', translation: '四', category: 'number' },
  { text: 'five', translation: '五', category: 'number' },
  { text: 'ten', translation: '十', category: 'number' },
];
