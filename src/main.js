import './index.css'
import { createHeader, initHeaderAnimations } from './components/header.js'
import { createAppCard, initAppCardFunctions } from './components/appCard.js'
import { createFooter, initFooterFunctions } from './components/footer.js'

// App data configuration
const apps = [
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    description: 'Create custom QR codes in seconds. Support for URLs, text, WiFi, contacts and more. Download as PNG or SVG.',
    icon: '📱',
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    route: '/qr',
    features: [
      'Multiple QR code types (URL, Text, WiFi)',
      'Customizable colors and sizes',
      'Download as PNG or SVG',
      'Batch generation support'
    ],
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    statusDot: 'bg-green-500',
    views: '2.4k',
    lastUpdated: '1d ago',
    trending: true
  },
  {
    id: 'instagram-unfollow',
    title: 'Who to Unfollow',
    description: 'See who you follow that doesn\'t follow back using your Instagram export. Completely private - analysis happens in your browser.',
    icon: '📊',
    bgColor: 'bg-gradient-to-br from-pink-500 to-purple-600',
    route: '/unfollow',
    features: [
      'Upload Instagram data export',
      '100% client-side processing',
      'Find non-mutual followers',
      'Export results as CSV'
    ],
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    statusDot: 'bg-green-500',
    views: '3.1k',
    lastUpdated: '3d ago',
    trending: false
  },
  {
    id: 'drinkmaster',
    title: 'DrinkMaster',
    description: 'Party prompts and mini games for your next hangout. Interactive drinking games, fun challenges, and social activities.',
    icon: '🍻',
    bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
    route: '/drinkmaster',
    features: [
      'Interactive party games',
      'Customizable player names',
      'Various game modes',
      'Mobile-friendly design'
    ],
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    statusDot: 'bg-green-500',
    views: '1.8k',
    lastUpdated: '5d ago',
    trending: false
  }
];

// Main app initialization
class FlorenAppsHub {
  constructor() {
    this.isLoaded = false;
    this.init();
  }

  async init() {
    // Show loading state
    this.showLoading();

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.render());
    } else {
      this.render();
    }
  }

  showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = 'flex';
    }
  }

  hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
      }, 300);
    }
  }

  async render() {
    try {
      // Initialize component functions
      initAppCardFunctions();
      initFooterFunctions();
      
      // Render components
      this.renderHeader();
      this.renderMain();
      this.renderFooter();

      // Initialize animations and interactions
      setTimeout(() => {
        this.initAnimations();
        this.hideLoading();
        this.showContent();
      }, 500); // Small delay for smoother loading

      // Track page view
      this.trackPageView();

    } catch (error) {
      console.error('Error rendering app:', error);
      this.showError();
    }
  }

  renderHeader() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.innerHTML = createHeader();
    }
  }

  renderMain() {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.innerHTML = `
        <div class="container mx-auto px-4 pb-12">
          <!-- Featured Apps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            ${apps.map((app, index) => createAppCard(app, index)).join('')}
          </div>

          <!-- Coming Soon Section -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">More apps coming soon!</h3>
            <p class="text-gray-600 mb-8">
              Got an idea for a mini app? Let me know what boring task you'd like automated.
            </p>
            <a 
              href="https://github.com/floren/florenapps-hub/issues/new?template=app-request.md" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center focus-ring"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Suggest an App
            </a>
          </div>

          <!-- Stats Section -->
          <div class="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div class="animate-slide-up">
                <div class="text-3xl font-bold text-primary-600">${apps.length}</div>
                <div class="text-gray-600 font-medium">Mini Apps</div>
              </div>
              <div class="animate-slide-up stagger-delay-1">
                <div class="text-3xl font-bold text-primary-600">7.3k+</div>
                <div class="text-gray-600 font-medium">Total Views</div>
              </div>
              <div class="animate-slide-up stagger-delay-2">
                <div class="text-3xl font-bold text-primary-600">100%</div>
                <div class="text-gray-600 font-medium">Privacy Focused</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  renderFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.innerHTML = createFooter();
    }
  }

  showContent() {
    const elements = ['header', 'main', 'footer'];
    elements.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.classList.add('animate-slide-up');
        }, index * 100);
      }
    });
  }

  initAnimations() {
    // Initialize header animations
    initHeaderAnimations();

    // Add scroll animations
    this.initScrollAnimations();

    // Add keyboard navigation
    this.initKeyboardNavigation();

    // Add performance monitoring
    this.initPerformanceMonitoring();
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .stats-section').forEach(el => {
      observer.observe(el);
    });
  }

  initKeyboardNavigation() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt/Option + number keys to navigate to apps
      if (e.altKey && e.key >= '1' && e.key <= '3') {
        e.preventDefault();
        const appIndex = parseInt(e.key) - 1;
        if (apps[appIndex]) {
          window.open(apps[appIndex].route, '_blank');
        }
      }

      // Escape to close any modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[class*="fixed"][class*="inset-0"]');
        modals.forEach(modal => modal.remove());
      }
    });
  }

  initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (window.va && entry.entryType === 'navigation') {
            // Track load time
            window.va('track', 'Performance', { 
              loadTime: Math.round(entry.loadEventEnd - entry.loadEventStart),
              type: 'page-load'
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    }
  }

  trackPageView() {
    if (window.va) {
      window.va('track', 'Pageview', { path: '/' });
    }

    // Track app impressions
    apps.forEach(app => {
      if (window.va) {
        window.va('track', 'App Impression', { app: app.id });
      }
    });
  }

  showError() {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.innerHTML = `
        <div class="container mx-auto px-4 py-16 text-center">
          <div class="max-w-md mx-auto">
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <p class="text-gray-600 mb-6">
              We're having trouble loading the apps. Please try refreshing the page.
            </p>
            <button 
              onclick="window.location.reload()" 
              class="btn-primary focus-ring"
            >
              Refresh Page
            </button>
          </div>
        </div>
      `;
    }
    this.hideLoading();
  }
}

// Initialize the app
const app = new FlorenAppsHub();

// Export for global access if needed
window.FlorenAppsHub = app;

// Add some fun easter eggs
if (import.meta.env.DEV) {
  console.log(`
  ╔══════════════════════════════════════╗
  ║            florenApps Hub            ║
  ║                                      ║
  ║  🚀 Development mode active          ║
  ║  🎨 Made with Vite + Tailwind        ║
  ║  💜 Built by Floren                  ║
  ║                                      ║
  ║  Try: Alt+1, Alt+2, Alt+3 shortcuts  ║
  ╚══════════════════════════════════════╝
  `);
}
