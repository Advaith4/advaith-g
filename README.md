# Advaith G - Personal Portfolio

A modern, interactive personal portfolio website showcasing my projects, skills, and professional journey. Built with cutting-edge web technologies for performance, accessibility, and a delightful user experience.

## 🌟 Features

- **Interactive Hero Section** - Eye-catching introduction with smooth animations
- **Animated Skills Marquee** - Showcase of technical expertise and tools
- **Project Showcase** - Detailed portfolio of professional and personal projects
- **Personal Story** - Background and professional narrative
- **Contact Section** - Easy ways to get in touch
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Smooth Animations** - Elegant motion effects powered by Framer Motion
- **Dark Mode Support** - Modern dark theme with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework** - [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** - [Vite](https://vitejs.dev/) for lightning-fast development and optimized production builds
- **Styling** - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components** - [shadcn/ui](https://ui.shadcn.com/) - High-quality, customizable components
- **Animation** - [Framer Motion](https://www.framer.com/motion/) for fluid, interactive animations
- **Routing** - [React Router](https://reactrouter.com/) for seamless page navigation
- **Forms** - [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Testing** - [Vitest](https://vitest.dev/) for unit testing
- **Package Manager** - [Bun](https://bun.sh/) for fast, efficient dependency management

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+) or [Bun](https://bun.sh/) installed

### Installation

1. Clone the repository
```bash
git clone https://github.com/Advaith4/advaith-g.git
cd advaith-g
```

2. Install dependencies
```bash
bun install
# or
npm install
```

3. Start the development server
```bash
bun dev
# or
npm run dev
```

The site will be available at `http://localhost:5173`

## 📚 Available Scripts

```bash
# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview

# Run tests
bun test

# Run tests in watch mode
bun test:watch

# Lint code
bun lint
```

## 📂 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Contact.tsx       # Contact section with form
│   ├── CursorGlow.tsx    # Interactive cursor effect
│   ├── Hero.tsx          # Hero/intro section
│   ├── Navbar.tsx        # Navigation bar
│   ├── NavLink.tsx       # Navigation link component
│   ├── Projects.tsx      # Projects showcase
│   ├── SkillsMarquee.tsx # Animated skills carousel
│   ├── Story.tsx         # Personal story section
│   └── ui/               # shadcn/ui component library
├── pages/                # Page components
│   ├── Index.tsx         # Main landing page
│   └── NotFound.tsx      # 404 page
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── assets/               # Images and static files
├── App.tsx               # Root app component
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors & Theme

Modify the Tailwind CSS configuration in `tailwind.config.ts` to customize the color scheme and theme.

### Components

All UI components from shadcn/ui can be found in `src/components/ui/` and can be customized to match your brand.

### Content

Update the individual component files in `src/components/` to modify portfolio content:
- **Hero**: Personal introduction and headline
- **SkillsMarquee**: Technical skills and tools
- **Projects**: Portfolio projects showcase
- **Story**: Professional background and narrative
- **Contact**: Contact information and form

## 🚀 Deployment

### Build for Production

```bash
bun build
```

The optimized build will be generated in the `dist/` directory.

### Deploy Options

- **Vercel** - Recommended for optimal performance
- **Netlify** - One-click deployment from Git
- **GitHub Pages** - Static site hosting
- **Traditional Hosting** - Upload `dist/` folder to any web server


## 🤝 Connect

- **Portfolio** - [advaith-g.com](https://advaith-g.com)
- **GitHub** - [@Advaith4](https://github.com/Advaith4)

---


