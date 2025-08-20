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

## 📁 Project Structure

```
florenapps_hub/
├── public/              # Static assets
│   ├── favicon.svg      # Modern SVG favicon
│   ├── og.png          # Open Graph image
│   ├── robots.txt      # SEO robots file
│   └── sitemap.xml     # SEO sitemap
├── src/
│   ├── components/     # Modular components
│   │   ├── header.js   # Header with branding
│   │   ├── appCard.js  # App cards with interactions
│   │   └── footer.js   # Footer with privacy info
│   ├── index.css       # Tailwind styles + custom CSS
│   └── main.js         # Main app logic
├── index.html          # Main HTML template
├── vercel.json         # Deployment config + rewrites
└── package.json        # Dependencies + scripts
```

## 🔄 Adding New Apps

Adding a new mini app takes just 2 steps:

1. **Add app data** in `src/main.js`:
   ```javascript
   const newApp = {
     id: 'my-new-app',
     title: 'My New App',
     description: 'What it does...',
     icon: '🎯',
     bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
     route: '/my-app',
     features: ['Feature 1', 'Feature 2'],
     status: 'Active',
     statusColor: 'bg-green-100 text-green-800',
     statusDot: 'bg-green-500'
   };
   ```

2. **Add rewrite rule** in `vercel.json`:
   ```json
   {
     "source": "/my-app/:match*",
     "destination": "https://my-app.vercel.app/:match*"
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
