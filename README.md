# Simple Astro Frame

## 🚀 Project Structure

```text
/
├── src/
│   └── pages/
│       ├── api/
│           └── handleFrameCLick.js
│       └── index.astro
└── package.json
```

index.astro is the main file for the project. The magic happens when the page is loaded through Farcaster and the custom meta tags are parsed.

Try viewing the frame on this page and interacting with it: https://warpcast.com/~/developers/frames (https://simple-astro-frame.vercel.app/)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check the [Farcaster Frames documentation](https://warpcast.notion.site/Farcaster-Frames-4bd47fe97dc74a42a48d3a234636d8c5).
