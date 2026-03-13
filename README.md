# Muaddh AL-Sway - Portfolio Website

A modern, interactive portfolio website showcasing a full-stack web developer's projects, skills, experience, and certifications. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

**Live Demo**: [portfolio-prod.pages.dev](https://production.trq-studio.pages.dev/)  
**GitHub**: [MuaddhAlsway](https://github.com/MuaddhAlsway)

---

## 🎯 Features

- **Dark/Light Theme Toggle** - Seamless theme switching with persistent state
- **Animated Hero Section** - Typing animation with rotating professional titles
- **40+ Project Showcase** - Organized by category (Full Stack, HTML/CSS/JS, HTML/CSS, C Programming)
- **Project Filtering** - Filter and browse projects by technology stack
- **Featured Clients** - Carousel showcase of major client projects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI Components** - Built with Radix UI and custom components
- **Smooth Animations** - Motion library for engaging transitions
- **Contact Form** - Direct communication channel
- **Floating CTA** - Persistent call-to-action button
- **Performance Optimized** - Vite build, lazy loading, image optimization

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.12-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### UI & Components
![Radix UI](https://img.shields.io/badge/Radix%20UI-Component%20Library-000000?style=flat-square&logo=radixui&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-Icons-F97316?style=flat-square&logo=lucide&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Animations-000000?style=flat-square&logo=framer&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-Components-007FFF?style=flat-square&logo=mui&logoColor=white)

### Styling & Animation
![Emotion](https://img.shields.io/badge/Emotion-CSS--in--JS-DB7093?style=flat-square&logo=emotion&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-Processing-DD3A0A?style=flat-square&logo=postcss&logoColor=white)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Theme%20Support-1F2937?style=flat-square&logo=nightscout&logoColor=white)

### Additional Libraries
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-Forms-EC5990?style=flat-square&logo=react&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-Charts-8884D8?style=flat-square&logo=recharts&logoColor=white)
![Embla Carousel](https://img.shields.io/badge/Embla-Carousel-000000?style=flat-square&logo=carousel&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-Notifications-000000?style=flat-square&logo=notifications&logoColor=white)

### Deployment
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages%20%26%20Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-CLI-F38020?style=flat-square&logo=cloudflare&logoColor=white)

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/                          # Radix UI components
│   │   │   ├── Contact.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── FeaturedClients.tsx
│   │   │   ├── FloatingCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ImageSkeleton.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Skills.tsx
│   │   └── App.tsx                          # Main app component
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── main.tsx                             # React entry point
├── public/
│   └── Projects/                            # 40+ project images
├── index.html                               # HTML entry point
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── wrangler.toml                            # Cloudflare config
├── CERTIFICATIONS.md
├── Project.md
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MuaddhAlsway/Portfolio-Website-Design.git
   cd Portfolio-Website-Design
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output files will be in the `dist/` directory

---

## 📊 Portfolio Statistics

| Category | Count | Technologies |
|----------|-------|--------------|
| **Full Stack** | 12 | React, Next.js, TypeScript, Tailwind, Firebase, PHP, SQLite |
| **HTML/CSS/JS** | 19 | HTML5, CSS3, Vanilla JavaScript, Responsive Design |
| **HTML/CSS** | 5 | HTML5, CSS3, UI Design |
| **C Programming** | 5 | C, Data Structures, File Handling, Algorithms |
| **Total** | 40+ | Multiple tech stacks |

---

## 🎓 Certifications & Education

- **Harvard University CS50** - Computer Science: The Art of Programming (2024/25)
- **FreeCodeCamp** - JavaScript Algorithms and Data Structures (2024/25)
- **FreeCodeCamp** - Front-End Development Libraries (2024/25)
- **FreeCodeCamp** - HTML & CSS Mastery (2023/24)

---

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
- React plugin for JSX support
- Tailwind CSS plugin for styling
- Path alias: `@` → `./src`

### Tailwind Configuration
- Custom color scheme with gold accent (`#e8ab61`)
- Dark theme as default
- Light theme support

### Cloudflare Deployment (`wrangler.toml`)
- Build command: `npm run build`
- Watch paths: `src/**/*.tsx`, `src/**/*.ts`, `src/**/*.css`
- Production environment: `portfolio-prod`

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

---

## 🎨 Theme System

The portfolio supports both dark and light themes:
- **Dark Theme** (Default) - Professional dark background with gold accents
- **Light Theme** - Clean white background with gold accents
- Theme toggle in navigation bar
- Persistent theme preference

---

## 🚢 Deployment

### Cloudflare Pages
The portfolio is deployed on Cloudflare Pages with automatic builds:

1. Push to GitHub
2. Cloudflare automatically builds and deploys
3. Production URL: `portfolio-prod.pages.dev`

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy using Wrangler
wrangler pages deploy dist/
```

---

## 📝 Project Categories

### Full Stack Projects
- HealthCare Management System
- Adusity Real Estate Platform
- Netflix Clone
- Disney+ Clone
- Authentication System
- Spotify Clone
- Gemini Trading Dashboard
- TD Logistics
- TRQ Studio
- Riyadah Accounting
- Writer's Journey
- Mesaha Lakum E-commerce

### HTML/CSS/JavaScript Projects
- KOFFEE CHERRY
- Adidas Clone
- Book Store
- Alert Fashion
- Apple Clone
- Ford Clone
- Pizza Clone
- ArchDot Studio
- Construction Website
- Walthome Real Estate
- Job Portal
- Amazon Clone
- PayPal Clone
- British Council Clone
- Airbnb Clone
- H&M Clone
- Udemy Clone
- Uber Clone

### HTML/CSS Projects
- WeGo Clone UI
- Netflix Clone UI
- Spotify Clone UI
- Facebook Clone
- LinkedIn Clone

### C Programming Projects
- Calendar Event Management
- Student Management System
- Bookstore Console App
- Hospital Form Intake System
- Weather Reporter

---

## 🔗 Links

- **Portfolio**: [Live Demo](https://production.trq-studio.pages.dev/)
- **GitHub**: [MuaddhAlsway](https://github.com/MuaddhAlsway)
- **LinkedIn**: [Muaddh AL-Sway](https://www.linkedin.com/in/muaddh-alsway/)
- **Email**: [Contact](mailto:muaddh@example.com)

---

## 📄 Additional Documentation

- [CERTIFICATIONS.md](./CERTIFICATIONS.md) - Detailed certification information
- [Project.md](./Project.md) - Project specifications and details
- [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) - Third-party attributions

---

## 🤝 Contributing

This is a personal portfolio project. For inquiries or collaboration opportunities, please reach out via:
- LinkedIn: [Muaddh AL-Sway](https://www.linkedin.com/in/muaddh-alsway/)
- GitHub: [MuaddhAlsway](https://github.com/MuaddhAlsway)

---

## 📜 License

This project is personal work. All project images and content are the property of their respective owners.

---

## 🙏 Acknowledgments

- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first CSS framework
- **Vite** - For lightning-fast build tooling
- **Cloudflare** - For reliable hosting and deployment
- **FreeCodeCamp & Harvard CS50** - For educational resources

---

**Last Updated**: January 2026  
**Version**: 1.0.0

---

*Built with ❤️ by Muaddh AL-Sway*
