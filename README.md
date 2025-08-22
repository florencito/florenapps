# florenApps Hub 🚀

A modern, lightning-fast hub for Floren's collection of mini web applications. Built with privacy in mind and designed to solve boring tasks quickly.

## 🌐 Live Demo

**[florenapps.online](https://florenapps.online)**

## 🎮 Available Apps

Each app runs on its own subdomain with independent deployments:

### 📱 QR Code Generator
Create custom QR codes with support for URLs, text, WiFi, and more. Download as PNG or SVG.
- **Live**: [qr.florenapps.online](https://qr.florenapps.online)
- **Repository**: [florencito/qr-code-generator-devops](https://github.com/florencito/qr-code-generator-devops)

### 📊 Who to Unfollow
Analyze your Instagram export to find non-mutual followers. Completely private - all processing happens locally.
- **Live**: [unfollow.florenapps.online](https://unfollow.florenapps.online)
- **Repository**: [florencito/who_to_unfollow](https://github.com/florencito/who_to_unfollow)

### 🍻 DrinkMaster
Interactive party games and drinking prompts for your next hangout.
- **Live**: [drinkmaster.florenapps.online](https://drinkmaster.florenapps.online)
- **Repository**: [florencito/drinkmaster-webapp](https://github.com/florencito/drinkmaster-webapp)

## 🏗️ Architecture

This repository contains **only the hub** - a landing page and app directory built with Vite + Tailwind CSS.

**Each app is:**
- 🏠 Hosted on its own subdomain
- 💻 Maintained in a separate repository
- 🚀 Deployed independently
- ⚙️ Built with its own tech stack

### Benefits of Subdomain Architecture

- **Scalability**: Add new apps without affecting existing ones
- **Independence**: Each app can use different technologies
- **Performance**: Smaller bundle sizes, faster loading
- **Maintenance**: Easier to update individual apps
- **Reliability**: App failures don't affect the hub or other apps

## 🎯 Hub Features

- **Privacy-First**: No tracking, no accounts required, minimal telemetry
- **Lightning Fast**: Built with Vite + Tailwind for optimal performance  
- **Modern Design**: Clean, accessible interface with smooth animations
- **Mobile Optimized**: Responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, sitemap, and structured data

## 🛠️ Tech Stack

### Hub (This Repository)
- **Frontend**: Vanilla JavaScript + Vite
- **Styling**: Tailwind CSS with custom components
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics (page views only)

### Individual Apps
- **QR Generator**: Static HTML/CSS/JS
- **Who to Unfollow**: Vite + TypeScript
- **DrinkMaster**: Vite + React + Supabase

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/florencito/florenapps-hub.git
   cd florenapps-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Hub Structure

```
florenapps_hub/
├── scripts/
│   └── build.js              # Simple hub-only build script
├── public/                   # Static assets
│   ├── favicon.svg           # Modern SVG favicon
│   ├── og.png               # Open Graph image  
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
├── src/                      # Hub source code
│   ├── components/          # Modular components
│   │   ├── header.js        # Header with branding
│   │   ├── appCard.js       # App cards with interactions
│   │   └── footer.js        # Footer with privacy info
│   ├── index.css            # Tailwind styles + custom CSS
│   └── main.js              # Main app logic
├── index.html               # Hub HTML template
├── vercel.json              # Deployment config
└── package.json             # Dependencies + scripts
```

## ➕ Adding New Apps

To add a new app to the hub:

1. **Create & deploy the app** in its own repository
2. **Set up subdomain** (e.g., `newapp.florenapps.online`)  
3. **Update hub configuration** in `src/main.js`:

```javascript
const newApp = {
  id: 'new-app',
  title: 'New App',
  description: 'What it does...',
  icon: '🎯',
  bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
  route: 'https://newapp.florenapps.online',
  features: ['Feature 1', 'Feature 2'],
  status: 'Active',
  statusColor: 'bg-green-100 text-green-800',
  statusDot: 'bg-green-500'
};
```

4. **Update this README** with the new app info

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
- **Headers**: Security and caching headers
- **Analytics**: Built-in Vercel Analytics
- **Domain**: Custom domain `florenapps.online`

### Individual App Deployments
Each app is deployed independently to its subdomain:
- Apps can use different platforms (Vercel, Netlify, etc.)
- Independent CI/CD pipelines
- Individual domain configuration

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes  
4. Submit a pull request

For individual app changes, please contribute to their respective repositories.

---

**Made with ❤️ by Floren**
