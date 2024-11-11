# Built.is Plugin: About Basic

A [Built.js](https://builtjs.com) plugin for About sections and pages, with basic Tailwind styling.

Demo: [https://builtjs-plugin-about-basic.vercel.app](https://builtjs-plugin-about-basic.vercel.app/)

## Installation
1. Install dependencies:
```
npm install
```
2. Start the development server:
```
npm run dev
```

### Pages
- Home
- About
- Author
  - Author Article

---

### Content Types
#### Author
Fields:
- fullName: string
- profile: Profile

#### Profile
Fields:
- title: string
- excerpt: text
- bio: portabletext
- position: string
- profileImage: image

#### Primary Menu Item
Fields:
- slug uid
- label: string
- url: string