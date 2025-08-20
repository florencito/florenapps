export function createHeader() {
  return `
    <div class="container mx-auto px-4 py-8 lg:py-12">
      <div class="text-center">
        <!-- Logo and Brand -->
        <div class="flex justify-center items-center mb-6 animate-slide-up">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 animate-glow">
              <span class="text-white font-bold text-xl md:text-2xl">F</span>
            </div>
            <div class="text-left">
              <h1 class="heading-primary animate-fade-in">florenApps</h1>
              <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full animate-slide-up stagger-delay-1"></div>
            </div>
          </div>
        </div>

        <!-- Tagline -->
        <div class="max-w-3xl mx-auto mb-8 animate-slide-up stagger-delay-2">
          <h2 class="heading-secondary mb-4">
            Mini apps that solve boring tasks fast
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            100% client-side or privacy-friendly. Built by Floren. No accounts required.
          </p>
        </div>

        <!-- Feature Pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up stagger-delay-3">
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            Privacy-Friendly
          </span>
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
            </svg>
            Lightning Fast
          </span>
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            No Sign-Up
          </span>
        </div>

        <!-- CTA Section -->
        <div class="animate-slide-up stagger-delay-4">
          <p class="text-gray-500 mb-6">Choose an app to get started</p>
          <div class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  `;
}

// Add animation utilities
export function initHeaderAnimations() {
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, observerOptions);

  // Observe elements that should animate
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
