# either-ai

Marketing site for **ETHER_AI** — a single-page, dark “editorial tech” layout (hero video, credibility sections, pricing, CTA). Built with **Vite**, **React 19**, and **TypeScript**.

**Live:** [eitherai.wailsolaiman.com](https://eitherai.wailsolaiman.com)  
**Repository:** [github.com/WailSolaiman/either-ai](https://github.com/WailSolaiman/either-ai)

## Stack

- Vite 8, React 19, TypeScript 5.9  
- Tailwind CSS 3 (custom design tokens, forms + container-queries plugins)  
- Framer Motion (light section reveals)  
- Radix UI (mobile nav dialog)  
- react-icons (trust marquee)  

## Requirements

- Node.js 20+ (or current LTS)  
- npm  

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start dev server with HMR            |
| `npm run build`| Typecheck + production build → `dist`|
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                           |
| `npm run format` | Format with Prettier               |

## Local setup

```bash
git clone https://github.com/WailSolaiman/either-ai.git
cd either-ai
npm install
npm run dev
```

## Content & assets

- Hero background: `public/hero.mp4` with poster `public/hero.png`  
- Favicon: `public/favicon.svg`  
- Design reference: `stitch-design/` (original spec + HTML export)  

## License

Private project (`"private": true` in `package.json`). Add a license file if you open-source it later.
