# Giri Babu Bojanapu — Developer Portfolio

A sleek, modern, and high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed with a dark aesthetic, interactive animations, and a clean separation of content and UI.

🔗 **Live Demo:** [your-deployed-link-here](#)

---

## 🚀 Features

- **Modern Dark UI**: Deep dark backgrounds paired with glowing gradients, emerald/cyan accents, and subtle grid effects.
- **Data-Driven Architecture**: All portfolio data (projects, skills, experience, socials) is cleanly organized in `src/data/`, keeping JSX clean and easily maintainable.
- **Interactive UI Components**: Powered by **Framer Motion**, **Lucide React**, and **React Icons** for micro-interactions and smooth animations.
- **Mobile Responsive**: Fully responsive layout with mobile drawer navigation and fluid typography.
- **Performance Optimized**: Sub-second bundle load and rapid build speeds powered by Vite.
- **Graceful Link Fallbacks**: Projects and social links with placeholder values (`# ADD_...`) are automatically hidden or handled safely in the UI.

---

## 🛠️ Tech Stack

| Category                 | Technologies                                                                                   |
| :----------------------- | :--------------------------------------------------------------------------------------------- |
| **Frontend Framework**   | [React 18](https://react.dev/)                                                                 |
| **Build Tool & Bundler** | [Vite 5](https://vitejs.dev/)                                                                  |
| **Styling**              | [Tailwind CSS v3](https://tailwindcss.com/), PostCSS, Autoprefixer                             |
| **Animations**           | [Framer Motion](https://www.framer.com/motion/)                                                |
| **Icons**                | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Class Utilities**      | `clsx`, `tailwind-merge`                                                                       |
| **Fonts**                | Space Grotesk, Inter, JetBrains Mono, Playfair Display                                         |

---

## 📁 Project Structure

```
giri-bojanapu-portfolio/
├── public/
│   ├── favicon/
│   │   ├── website-logo.ico     # Custom website icon
│   │   └── favicon.svg          # SVG portfolio icon
│   ├── favicon.ico              # Root fallback favicon
│   ├── images/
│   │   ├── background/          # Background and texture assets
│   │   ├── profile/             # Profile photos and avatars
│   │   └── projects/            # Project showcase screenshots
│   └── Giri-Babu-Resume.pdf     # Resume PDF downloaded via "Download CV" button
│
├── src/
│   ├── assets/                  # Local static assets
│   ├── components/              # Modular UI components
│   │   ├── About/               # Bio summary, background & education
│   │   ├── Contact/             # Contact information & interactive message form
│   │   ├── Experience/          # Internship & work history timeline cards
│   │   ├── Footer/               # Footer with copyright and stack details
│   │   ├── Hero/                 # Hero section with intro, CTAs & social links
│   │   ├── Navbar/               # Sticky desktop header + mobile drawer menu
│   │   ├── Projects/             # Project showcase cards with live demo/repo links
│   │   ├── Skills/               # Categorized tech stack & skill badges
│   │   └── ui/                   # Reusable UI primitives (Grid Background, Dock)
│   │       ├── dock.jsx
│   │       └── grid-background.jsx
│   │
│   ├── data/                     # Single source of truth for portfolio content
│   │   ├── experience.js         # Work history & internship entries
│   │   ├── projects.js           # Featured projects, tech tags & live URLs
│   │   ├── skills.js             # Categorized skills (Programming, Frontend, Backend, etc.)
│   │   └── socialLinks.js        # Contact emails, phone number, LinkedIn & GitHub links
│   │
│   ├── lib/
│   │   └── utils.js              # Utility functions (`cn` class merger)
│   │
│   ├── pages/
│   │   └── Home.jsx              # Main page aggregating all portfolio sections
│   │
│   ├── App.jsx                   # Main application wrapper
│   ├── index.css                 # Global styling, Tailwind directives & custom utilities
│   └── main.jsx                  # Application entry point
│
├── index.html                    # HTML template & Google Fonts preloading
├── package.json                  # Project dependencies & scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind configuration (tokens, themes, colors)
├── vite.config.js                # Vite configuration & path aliases (`@/*` -> `./src/*`)
└── .gitignore                    # Git ignore specifications
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- `npm` (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/giri-bojanapu-portfolio.git
   cd giri-bojanapu-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open the printed local URL (typically [http://localhost:5173](http://localhost:5173)).

---

## 🔨 Build & Deployment

### Production Build

To compile and bundle the portfolio for production:

```bash
npm run build
```

This generates an optimized static bundle in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Deployment

The static output in `dist/` can be deployed instantly to:

- **Vercel**: Import repository and deploy using default Vite settings (`npm run build`, output `dist`).
- **Netlify**: Connect repository or drag-and-drop `dist/`.
- **GitHub Pages**: Build and publish `dist/` to the `gh-pages` branch.

---

## ⚙️ Customization & Configuration

### 1. Social Links & Contact Details

Edit [`src/data/socialLinks.js`](src/data/socialLinks.js):

```javascript
export const socialLinks = {
  email: "your-email@example.com",
  phone: "+91-XXXXXXXXXX",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
};
```

_Note: Any link starting with `#` (e.g. `# ADD_LINKEDIN_URL`) is treated as a placeholder and safely suppressed in the UI until replaced._

### 2. Projects & Demos

Edit [`src/data/projects.js`](src/data/projects.js):

- Add project descriptions, technologies, and features.
- Update `github` and `liveDemo` URLs.

### 3. Experience & Skills

- Update your career timeline and internships in [`src/data/experience.js`](src/data/experience.js).
- Update technical skills and tools in [`src/data/skills.js`](src/data/skills.js).

### 4. Resume / CV

- Place your PDF resume file in the `public/` directory named `Giri-Babu-Resume.pdf`.
- The "Download CV" button in the Hero section will automatically download this file.

### 5. Hero Portrait Photo

- Drop a transparent PNG or WebP image into `public/images/profile/` (e.g., `public/images/profile/giri-babu.png`).
- Uncomment or update the `<img />` tag inside [`src/components/Hero/Hero.jsx`](src/components/Hero/Hero.jsx).

### 6. Wiring the Contact Form

`src/components/Contact/Contact.jsx` currently logs form submissions locally in state. To receive live emails from visitors, connect a service such as:

- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- Custom serverless API endpoint

Replace `handleSubmit` in [`src/components/Contact/Contact.jsx`](src/components/Contact/Contact.jsx) with your chosen provider's integration.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use this architecture as inspiration for your own portfolio.
