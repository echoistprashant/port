# 🎨 Prashant Yadav | Interactive 3D AI Engineer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.182-black?style=for-the-badge&logo=threedotjs" alt="Three.js" />
  <img src="https://img.shields.io/badge/R3F-9.4-purple?style=for-the-badge&logo=react" alt="React Three Fiber" />
  <img src="https://img.shields.io/badge/GSAP-3.14-green?style=for-the-badge&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
</div>

<br/>

Interactive 3D WebGL developer portfolio of **Prashant Yadav**, AI Engineer and Founding Member at **Femur Studio**. This project features a hand-drawn paper-and-ink comic aesthetic where sketch drawings dynamically reveal colored paint on hover and interaction.

> [!NOTE]
> Ensure hardware acceleration is enabled in your browser settings for smooth 60 FPS WebGL rendering.

---

## 🚀 Key Architectural Highlights

1. **Spatial WebGL & React Three Fiber:** Built with React 19, Three.js, and React Three Fiber to render an interactive corridor, project gallery, monitor stack, and first-person paper airplane flight.
2. **Dynamic 3D Typography:** Custom procedural split animations on the 8-letter hero typography (`PRASHANT`) that react symmetrically to camera scroll.
3. **Dual Content Pipeline:** Local static configuration for instant zero-dependency builds, with full headless Sanity CMS schema compatibility.
4. **Interactive Contact Paper:** Web3Forms integration featuring bigram NLP content analysis, rate limiting, and domain verification.
5. **Semantic SEO & Accessibility:** Full headless DOM fallback tree (`#seo-content`), Schema.org JSON-LD structured metadata, and a dedicated screen reader overlay (`ScreenReaderOverlay.jsx`).

---

## 🏗️ 3D Scene Architecture

```mermaid
graph TD;
    A[App.jsx] --> B[SceneProvider Context];
    A --> C[Canvas];
    A --> D[2D DOM / SEO / HUD];
    
    C --> E[Experience.jsx];
    E --> F[RoomWarmup Pre-compiler];
    E --> G[Infinite Corridor Manager];
    
    G --> H[Gallery Room - AI Projects];
    G --> I[Studio Room - Femur Studio];
    G --> J[Contact Room - Sea Dock];
    G --> K[About Room - Sky Flight];
```

---

## 🛠️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/echoistprashant/port.git
   cd port
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📬 Contact & Links

- **GitHub:** [@echoistprashant](https://github.com/echoistprashant)
- **LinkedIn:** [Prashant Yadav](https://www.linkedin.com/in/echoistprashant/)
- **X (Twitter):** [@ConstPrashant](https://x.com/ConstPrashant)
- **Instagram:** [@echoistprashant](https://www.instagram.com/echoistprashant/)
- **Studio:** [Femur Studio](https://femur.studio/)
