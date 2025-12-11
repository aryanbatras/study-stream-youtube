# StudyFlow - Live Study Companion Platform

🌙 A calm digital library powered by YouTube Live, where students can study together in a distraction-free environment.

## About Project

Build a platform for students who can see other students live that are fetched from some keywords like study with me videos that are live. And then a student can visit our platform, put himself live on YouTube, pin other live YouTube channels and study, just like a replica of study stream but completely free of cost.

🌙 “StudyFlow” — A calm digital library powered by YouTube Live
Imagine opening a website that feels like a quiet night café for students.
Soft colors. No noise. No clutter. Just people learning together.

🌟 Core Idea
A place where students:
Go live on YouTube
Join a global focus space
Pin other students’ streams
Sit together silently
And feel motivated just by knowing “someone else is studying with me too.”
The platform doesn’t judge. Doesn’t push. It just holds space.

💡 UI Inspiration
Think of a design like this:

🎴 1. Minimal card grid of live students
Each card:
A YouTube live thumbnail (auto-updating)
A tiny username
A “Join Quietly” mini button
A calm glow around the card when it’s live
Something like:
+---------------------------------+
| [YouTube stream preview iframe] |
|---------------------------------|
|  • Aryan is studying CS         |
|  Join quietly →                 |
+---------------------------------+
Warm. Cozy. Simple.

🧘 2. Your own live study booth
When a user starts their stream, show a personal booth:
Timer
Ambient mode
Task list
“Daily consistency streak”
A soft background gradient
Think:
A warm desk lamp feeling on a website.

🌍 3. Rooms
Rooms like:
Deep Focus
Competitive Study
Chill Coding
Night Owls
Pomodoro Room
“Just be here” Room
Each room simply filters different streams.
No fancy features. Just calm spaces.

🌬️ 4. Pin Your Study Buddies
Student can pin 2–4 YouTube live streams on the side:
| main screen (your live or someone else's) |
|--------------------------------------------|
| pinned streams on the right               |
Feels like sitting next to friends in a library.

🌱 5. Very quiet UX
Everything is:
Rounded
Soft
Subtle
Low-contrast
Relaxing
No bright reds, no confusion — very calming.

## 🚀 Features

### 🎥 Live Study Sessions
- View live study sessions from students worldwide
- Seamless YouTube integration for live streaming

### 📌 Smart Pinning System
- Pin your favorite study streams for quick access
- Persistent storage of pinned streams across sessions

### 🎨 Customizable Interface
- Light/Dark theme toggle
- Adjustable grid layout
- Focus mode for distraction-free studying
- Responsive design for all devices

### ⚡ Performance Optimized
- Smart caching system for faster load times
- Efficient YouTube API usage
- Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **SolidJS** - A declarative JavaScript library for building user interfaces
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS** - A utility-first CSS framework
- **DaisyUI** - Clean, accessible UI components
- **Solid Motion** - For smooth animations and transitions

### State Management
- **Solid Store** - Built-in state management
- **TanStack Query** - For server state management

### APIs
- **YouTube Data API v3** - For fetching live streams and channel data

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- YouTube Data API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/study-stream-youtube.git
cd study-stream-youtube
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env` file in the root directory and add your YouTube API key:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── animation/      # Animation components
│   ├── external/       # Third-party component integrations
│   └── reusable/       # Custom reusable components
├── contexts/           # Application contexts
├── hooks/              # Custom React hooks
├── layout/             # Layout components
├── pages/              # Application pages
├── stores/             # State management
└── utils/              # Utility functions
```

## 🔄 API Integration

The application uses the YouTube Data API v3 to:
- Fetch live streams based on study-related keywords
- Get channel information
- Retrieve video details

### Key API Endpoints Used
- `search.list` - For finding live study streams
- `videos.list` - To get video details
- `channels.list` - For channel information

## 🧪 Testing

To run tests:
```bash
npm test
# or
yarn test
```

## 🚀 Deployment

### Building for Production
```bash
npm run build
# or
yarn build
```

### Deploying to GitHub Pages
```bash
npm run deploy
# or
yarn deploy
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube API for providing the streaming infrastructure
- SolidJS and Vite teams for the amazing development experience
- All contributors who helped in building this project