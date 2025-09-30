# 🎵 Music Course Platform

A modern, responsive music education website built with Next.js 15, featuring beautiful animations, interactive UI components, and a comprehensive course catalog. This platform showcases various music courses with stunning visual effects and smooth user experience.

## ✨ Features

- **Modern Design**: Dark theme with gradient backgrounds and glassmorphism effects
- **Interactive Components**: 3D cards, animated tooltips, moving borders, and spotlight effects
- **Course Catalog**: 10+ music courses covering various instruments and genres
- **Responsive Layout**: Optimized for all device sizes with mobile-first approach
- **Smooth Animations**: Powered by Framer Motion for fluid user interactions
- **Dynamic Content**: JSON-based course data with featured course filtering
- **Professional UI**: Custom components with hover effects and transitions

## 🎼 Course Categories

- **Instruments**: Guitar, Piano, Drums, Vocals
- **Genres**: Jazz, Blues, Classical, Electronic Music
- **Skills**: Music Production, Songwriting, Improvisation
- **Levels**: Beginner to Advanced courses

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Custom component library
- **Development**: ESLint, Turbopack for fast builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/meghabathla/music_webapp.git
cd music_webapp
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── contact/           # Contact page
│   ├── courses/           # Course catalog page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Custom UI components
│   │   ├── 3d-card.tsx   # 3D card effect
│   │   ├── animated-tooltip.tsx
│   │   ├── background-gradient.tsx
│   │   ├── card-hover-effect.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   ├── meteors.tsx
│   │   ├── moving-border.tsx
│   │   ├── navbar-menu.tsx
│   │   ├── Spotlight.tsx
│   │   ├── sticky-scroll-reveal.tsx
│   │   └── wavy-background.tsx
│   ├── FeaturedCourses.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Instructors.tsx
│   ├── Navbar.tsx
│   ├── TestimonialCards.tsx
│   ├── UpcomingWebinars.tsx
│   └── WhyChooseUs.tsx
├── data/
│   └── music_courses.json # Course data
└── utils/
    └── cn.ts             # Utility functions
```

## 🎨 Key Components

- **Hero Section**: Animated spotlight with gradient text and call-to-action
- **Featured Courses**: 3D cards with hover effects showcasing popular courses
- **Course Catalog**: Grid layout with detailed course information
- **Instructors**: Team showcase with interactive elements
- **Testimonials**: Moving cards with user reviews
- **Webinars**: Upcoming events section

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/music_webapp)

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:

- **Netlify**: Connect your GitHub repository
- **Railway**: One-click deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎵 Course Data

The platform includes 10 music courses covering:

- Guitar Fundamentals ($99.99)
- Piano for Beginners ($109.99)
- Advanced Vocal Techniques ($119.99)
- Drumming Mastery ($129.99)
- Jazz Improvisation ($139.99)
- Music Production Fundamentals ($149.99)
- Songwriting Essentials ($159.99)
- Electronic Music Production ($169.99)
- Classical Music History ($179.99)
- Blues Guitar Techniques ($189.99)

## 🌟 Features in Detail

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance**: Optimized with Next.js 15 and Turbopack for fast builds
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **SEO Ready**: Meta tags and structured data for search engines
- **Modern Animations**: Smooth transitions and micro-interactions
- **Component Library**: Reusable UI components for consistency

---

Built with ❤️ using Next.js and modern web technologies.
