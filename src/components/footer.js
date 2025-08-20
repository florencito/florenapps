export function createFooter() {
  return `
    <div class="border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Brand and Description -->
          <div class="text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-sm">F</span>
              </div>
              <span class="ml-2 text-lg font-semibold text-gray-800">florenApps</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Building privacy-friendly mini apps that solve boring tasks fast. 
              No tracking, no accounts, just useful tools.
            </p>
            <div class="flex items-center justify-center md:justify-start space-x-2 text-xs text-gray-500">
              <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>All apps run locally or with minimal telemetry</span>
            </div>
          </div>

          <!-- Privacy and Info -->
          <div class="text-center">
            <h4 class="font-semibold text-gray-800 mb-4">Privacy First</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center justify-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                No data collection
              </li>
              <li class="flex items-center justify-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path>
                </svg>
                Client-side processing
              </li>
              <li class="flex items-center justify-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Open source friendly
              </li>
            </ul>
          </div>

          <!-- Support and Links -->
          <div class="text-center md:text-right">
            <h4 class="font-semibold text-gray-800 mb-4">Support the Project</h4>
            <div class="space-y-3">
              <!-- Buy Me a Coffee -->
              <a 
                href="https://buymeacoffee.com/floren" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium rounded-lg transition-colors duration-200 focus-ring"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5a1 1 0 100 2h1a1 1 0 001-1V5a1 1 0 00-1-1H8zM6 7a1 1 0 100 2h1a1 1 0 001-1V7a1 1 0 00-1-1H6zM4 9a1 1 0 100 2h1a1 1 0 001-1V9a1 1 0 00-1-1H4z"></path>
                  <path fill-rule="evenodd" d="M2 3a1 1 0 011-1h14a1 1 0 011 1v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 2v8h12V5H4z" clip-rule="evenodd"></path>
                </svg>
                Buy me a coffee
              </a>
              
              <!-- Social Links -->
              <div class="flex justify-center md:justify-end space-x-4">
                <!-- Instagram -->
                <a 
                  href="https://instagram.com/floren.rp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors duration-200 text-sm focus-ring rounded px-2 py-1"
                  title="Follow on Instagram"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                
                <!-- TikTok -->
                <a 
                  href="https://tiktok.com/@floren.rey" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 text-sm focus-ring rounded px-2 py-1"
                  title="Follow on TikTok"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  TikTok
                </a>
                
                <!-- GitHub -->
                <a 
                  href="https://github.com/floren" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm focus-ring rounded px-2 py-1"
                  title="View on GitHub"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div class="flex items-center mb-4 md:mb-0">
            <span>© 2024 florenApps. Made with</span>
            <svg class="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
            <span>by Floren</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <span class="flex items-center">
              <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              All systems operational
            </span>
            <span>•</span>
            <a href="#" onclick="showPrivacyModal()" class="hover:text-gray-700 transition-colors focus-ring rounded px-1">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Privacy modal functionality
export function initFooterFunctions() {
  window.showPrivacyModal = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl p-6 max-w-2xl max-h-96 overflow-y-auto shadow-2xl">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Privacy Policy</h3>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-gray-500 hover:text-gray-700 focus-ring rounded p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="text-gray-600 space-y-4">
          <p><strong>Data Collection:</strong> We use minimal analytics to track page views only. No personal information is collected.</p>
          <p><strong>Cookies:</strong> Only essential cookies for functionality. No tracking cookies.</p>
          <p><strong>Third Party:</strong> Apps may use their own privacy-friendly analytics. Check individual app pages for details.</p>
          <p><strong>Storage:</strong> All app data is processed locally in your browser when possible.</p>
          <p><strong>Updates:</strong> This policy may be updated. Check this page for changes.</p>
          <p class="text-sm text-gray-500 pt-4 border-t">Last updated: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', escapeHandler);
      }
    });
  };
}
