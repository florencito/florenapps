# florenApps Hub 🚀

A modern, lightning-fast hub for Floren's collection of mini web applications. Built with privacy in mind and designed to solve boring tasks quickly.

## 🎯 Features

- **Privacy-First**: No tracking, no accounts required, minimal telemetry
- **Lightning Fast**: Built with Vite + Tailwind for optimal performance
- **Modern Design**: Clean, accessible interface with smooth animations
- **Mobile Optimized**: Responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, sitemap, and structured data

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript + Vite
- **Styling**: Tailwind CSS with custom components
- **Deployment**: Vercel with rewrites for app routing
- **Analytics**: Vercel Analytics (page views only)

## 🎮 Available Apps

### 📱 QR Code Generator (`/qr`)
Create custom QR codes with support for URLs, text, WiFi, and more. Download as PNG or SVG.

### 📊 Who to Unfollow (`/unfollow`) 
Analyze your Instagram export to find non-mutual followers. Completely private - all processing happens locally.

### 🍻 DrinkMaster (`/drinkmaster`)
Interactive party games and drinking prompts for your next hangout.

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd florenapps_hub
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development server (Hub)**
   ```bash
   npm run dev
   ```

4. **Start individual app development**
   ```bash
   npm run dev:qr          # QR Generator
   npm run dev:unfollow    # Instagram Analyzer  
   npm run dev:drinkmaster # Party Games
   ```

5. **Build for production (all)**
   ```bash
   npm run build
   ```

6. **Build individual components**
   ```bash
   npm run build:hub       # Build only the hub
   npm run build:apps      # Build only the apps
   ```

7. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Monorepo Structure

```
florenapps_hub/
├── apps/                    # Individual mini apps
│   ├── qr/                 # QR Code Generator
│   │   └── frontend/       # Static HTML/CSS/JS
│   ├── unfollow/           # Instagram Analyzer
│   │   ├── src/            # Vite + TypeScript app
│   │   ├── package.json    # App dependencies
│   │   └── vite.config.js  # Vite configuration
│   └── drinkmaster/        # Party Games
│       ├── src/            # Vite + React app
│       ├── package.json    # App dependencies
│       └── vite.config.js  # Vite configuration
├── scripts/
│   └── build.js            # Monorepo build script
├── public/                 # Hub static assets
│   ├── favicon.svg         # Modern SVG favicon
│   ├── og.png             # Open Graph image
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/                    # Hub source code
│   ├── components/        # Modular components
│   │   ├── header.js      # Header with branding
│   │   ├── appCard.js     # App cards with interactions
│   │   └── footer.js      # Footer with privacy info
│   ├── index.css          # Tailwind styles + custom CSS
│   └── main.js            # Main app logic
├── index.html             # Hub HTML template
├── vercel.json            # Deployment config + routing
└── package.json           # Hub dependencies + scripts
```

## 🔄 Adding New Apps to Monorepo

Adding a new mini app takes 3 simple steps:

1. **Create app folder** in `apps/`:
   ```bash
   mkdir apps/my-new-app
   cd apps/my-new-app
   
   # For static apps: create frontend/index.html
   # For Vite apps: npm init vite . --template vanilla
   ```

2. **Add app configuration** in `scripts/build.js`:
   ```javascript
   {
     name: 'my-new-app',
     type: 'vite', // or 'static'
     sourceDir: '.' // or 'frontend' for static
   }
   ```

3. **Add app data** in `src/main.js`:
   ```javascript
   const newApp = {
     id: 'my-new-app',
     title: 'My New App',
     description: 'What it does...',
     icon: '🎯',
     bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
     route: '/my-new-app',
     features: ['Feature 1', 'Feature 2'],
     status: 'Active',
     statusColor: 'bg-green-100 text-green-800',
     statusDot: 'bg-green-500'
   };
   ```

4. **Add routing** in `vercel.json`:
   ```json
   {
     "src": "/my-new-app/(.*)",
     "dest": "/apps/my-new-app/$1"
   }
   ```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#6366f1`)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Status colors (green, yellow, red)

### Components
- **Cards**: Glassmorphism effect with hover animations
- **Buttons**: Gradient primary, subtle secondary
- **Typography**: Inter font with responsive sizing

### Animations
- **Loading**: Smooth fade-in with stagger delays
- **Interactions**: Scale and rotate on hover
- **Scroll**: Intersection Observer animations

## 🔒 Privacy & Security

- **No Tracking**: Only page view analytics, no personal data
- **Client-Side**: All app logic runs in the browser when possible
- **Secure Headers**: CSP, HSTS, and other security headers
- **No Cookies**: Essential functionality only

## 📊 Analytics

We use Vercel Analytics for minimal, privacy-friendly tracking:
- Page views and navigation patterns
- Performance metrics (Core Web Vitals)
- App interaction events
- No personal data collection

## 🚢 Deployment

The hub is deployed on Vercel with automatic deployments from the main branch.

### Vercel Configuration
- **Rewrites**: Route app paths to external deployments
- **Headers**: Security and caching headers
- **Analytics**: Built-in Vercel Analytics

### Environment Variables
No environment variables required for the hub itself.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Built with ❤️ by [Floren](https://github.com/floren)
- Inspired by the need for simple, privacy-friendly tools
- Thanks to the open-source community for amazing tools like Vite and Tailwind

---

**florenApps** - Mini apps that solve boring tasks fast. Privacy-friendly, no accounts required. 🚀
