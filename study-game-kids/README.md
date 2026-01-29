# 🎮 Study Game Kids

An interactive learning platform for kids with structured content management and game-based learning.

## ✨ Features

### 🎯 Game Core Architecture
- **Unified Game Engine**: Base game class providing standard lifecycle methods
- **Plugin System**: Easy to add new games through standardized interface
- **State Management**: Comprehensive game state tracking and event system

### 📚 Structured Content Management
- **Type-Safe Content**: Strongly typed content definitions (TypeScript)
- **Multiple Formats**: Support for vocabulary, lyrics, stories, quizzes, and mixed content
- **Organized Storage**: File naming convention: `[age]_[format]_[tags]_[index].json`
  - Age groups: 5, 10, 20
  - Formats: vocabulary, lyrics, story, quiz, mixed
  - Tags: flexible, multiple tags supported

### 🔄 Smart Adapter System
- **Format Conversion**: Automatically convert any content to game-compatible format
- **Content Merging**: Combine multiple content sources seamlessly
- **Custom Adapters**: Create adapters for specific content types

### ⚙️ Flexible Settings
- **Content Settings**:
  - Filter by age group, format, and tags
  - Multi-select content items
  - Search functionality
  
- **Voice Settings**:
  - Browser TTS support
  - Adjustable rate, pitch, and volume
  - Multiple language support
  
- **Game Settings**:
  - Difficulty levels (Easy, Medium, Hard)
  - Sound and music controls
  - Visual preferences

### 📱 Responsive Design
- Works on all devices and screen sizes
- Mobile-friendly controls
- Optimized touch interactions

## 🏗️ Architecture

```
study-game-kids/
├── src/
│   ├── types/              # TypeScript type definitions
│   │   ├── content.types.ts   # Content system types
│   │   ├── game.types.ts      # Game interface types
│   │   └── settings.types.ts  # Settings types
│   │
│   ├── game-core/          # Core game engine
│   │   └── BaseGame.ts        # Base game class
│   │
│   ├── adapters/           # Content adapters
│   │   └── content-adapters.ts
│   │
│   ├── games/              # Game implementations
│   │   └── QuestionListGame.ts
│   │
│   ├── stores/             # Pinia stores
│   │   ├── content.store.ts
│   │   └── settings.store.ts
│   │
│   ├── components/         # Vue components
│   │   ├── SettingsDialog.vue
│   │   └── settings/
│   │       ├── ContentTab.vue
│   │       ├── VoiceTab.vue
│   │       └── GameTab.vue
│   │
│   ├── views/              # Page views
│   │   └── QuestionListView.vue
│   │
│   ├── App.vue             # Main app component
│   └── main.ts             # App entry point
│
└── public/
    └── contents/           # Content JSON files
        ├── 5_vocabulary_animals_basic_001.json
        ├── 5_quiz_colors_basic_001.json
        └── 5_vocabulary_numbers_counting_basic_001.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📝 Creating Content

Content files should follow this structure and naming convention:

### File Naming
\`\`\`
[ageGroup]_[format]_[tag1]_[tag2]_[index].json
\`\`\`

Example: `5_vocabulary_animals_colors_001.json`

### Vocabulary Content Example
\`\`\`json
{
  "id": "unique-id",
  "title": "Basic Animals",
  "ageGroup": "5",
  "format": "vocabulary",
  "tags": ["animals", "basic"],
  "createdAt": "2026-01-29T06:00:00.000Z",
  "updatedAt": "2026-01-29T06:00:00.000Z",
  "items": [
    {
      "word": "cat",
      "translation": "貓",
      "pronunciation": "/kæt/",
      "examples": ["I have a cat."],
      "audioUrl": "/audio/cat.mp3",
      "imageUrl": "/images/cat.jpg"
    }
  ]
}
\`\`\`

### Quiz Content Example
\`\`\`json
{
  "id": "unique-id",
  "title": "Colors Quiz",
  "ageGroup": "5",
  "format": "quiz",
  "tags": ["colors", "quiz"],
  "createdAt": "2026-01-29T06:00:00.000Z",
  "updatedAt": "2026-01-29T06:00:00.000Z",
  "items": [
    {
      "question": "What color is the sky?",
      "options": [
        { "text": "Blue", "isCorrect": true },
        { "text": "Red", "isCorrect": false }
      ],
      "explanation": "The sky is usually blue.",
      "audioUrl": "/audio/sky.mp3"
    }
  ]
}
\`\`\`

## 🎮 Adding New Games

To add a new game, extend the `BaseGame` class:

\`\`\`typescript
import { BaseGame } from '~/game-core/BaseGame';

export class MyGame extends BaseGame {
  readonly id = 'my-game';
  readonly name = 'My Game';
  readonly description = 'Description';
  readonly icon = '🎮';
  readonly supportedFormats = ['vocabulary', 'quiz'];

  protected override onStart(): void {
    // Game-specific logic
  }
}
\`\`\`

## 🔌 Creating Adapters

Create custom adapters for specific content types:

\`\`\`typescript
import { BaseContentAdapter } from '~/adapters/content-adapters';

export class MyAdapter extends BaseContentAdapter {
  constructor() {
    super(['my-format']);
  }

  adapt(content: Content): GameDataItem[] {
    // Convert content to game data
    return [];
  }
}
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Vue 3 (Composition API)
- **UI Library**: Vuetify 3
- **State Management**: Pinia
- **Build Tool**: Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: CSS (Scoped)

## 📋 Design Principles

1. **Type Safety**: Strict TypeScript for all code
2. **Modularity**: Clear separation of concerns
3. **Extensibility**: Easy to add new games and content types
4. **Maintainability**: Clean, documented code
5. **Scalability**: Architecture supports growth

## 🎯 Future Enhancements

- [ ] More game types (matching, memory, etc.)
- [ ] Analytics and progress tracking
- [ ] User profiles and achievements
- [ ] Content creator tools
- [ ] Multi-language UI
- [ ] Offline support (PWA)
- [ ] Parent dashboard
- [ ] Community content sharing

## 📄 License

ISC

## 👨‍💻 Development

This project is built with commercial scalability in mind. The architecture supports:
- Easy addition of new features
- Simple refactoring and maintenance
- Clear testing boundaries
- Production deployment
