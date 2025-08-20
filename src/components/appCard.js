export function createAppCard(app, index = 0) {
  const delayClass = `stagger-delay-${Math.min(index + 1, 4)}`;
  
  return `
    <div class="card card-hover p-6 group animate-slide-up ${delayClass}" data-app="${app.id}">
      <!-- App Icon and Status -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 ${app.bgColor} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
            ${app.icon}
          </div>
          <div class="flex flex-col">
            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${app.statusColor} mb-1">
              <span class="w-2 h-2 ${app.statusDot} rounded-full mr-1"></span>
              ${app.status}
            </span>
          </div>
        </div>
        
        <!-- Trending indicator -->
        ${app.trending ? `
          <div class="flex items-center text-orange-500 animate-bounce">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
            </svg>
          </div>
        ` : ''}
      </div>

      <!-- App Title and Description -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          ${app.title}
        </h3>
        <p class="text-gray-600 leading-relaxed">
          ${app.description}
        </p>
      </div>

      <!-- Features List -->
      <div class="mb-6">
        <ul class="space-y-2">
          ${app.features.map(feature => `
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              ${feature}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Stats -->
      <div class="flex justify-between text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
        <span class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
          </svg>
          ${app.views || '1.2k'} views
        </span>
        <span class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
          </svg>
          ${app.lastUpdated || '2d ago'}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <button 
          onclick="window.open('${app.route}', '_blank')"
          class="btn-primary flex-1 focus-ring"
          aria-label="Open ${app.title} app"
        >
          <svg class="w-4 h-4 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          Open App
        </button>
        
        <button 
          onclick="copyAppLink('${app.route}')"
          class="btn-secondary px-3 focus-ring"
          title="Copy link to ${app.title}"
          aria-label="Copy link to ${app.title}"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Utility function to copy app link
export function initAppCardFunctions() {
  window.copyAppLink = async (route) => {
    const url = `${window.location.origin}${route}`;
    
    try {
      await navigator.clipboard.writeText(url);
      
      // Show toast notification
      showToast('Link copied to clipboard! 📋', 'success');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      showToast('Link copied to clipboard! 📋', 'success');
    }
  };

  // Track app interactions
  window.trackAppClick = (appId) => {
    if (window.va) {
      window.va('track', 'App Click', { app: appId });
    }
  };
}

// Toast notification system
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-x-full ${
    type === 'success' ? 'bg-green-500 text-white' : 
    type === 'error' ? 'bg-red-500 text-white' : 
    'bg-gray-800 text-white'
  }`;
  
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-x-full');
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    toast.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}
