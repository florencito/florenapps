var d=(t,e,r)=>new Promise((s,a)=>{var i=o=>{try{c(r.next(o))}catch(p){a(p)}},n=o=>{try{c(r.throw(o))}catch(p){a(p)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(i,n);c((r=r.apply(t,e)).next())});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function m(){return`
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
  `}function g(){const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},e=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("animate-slide-up")})},t);document.querySelectorAll(".animate-on-scroll").forEach(r=>{e.observe(r)})}function v(t,e=0){return`
    <div class="card card-hover p-6 group animate-slide-up ${`stagger-delay-${Math.min(e+1,4)}`}" data-app="${t.id}">
      <!-- App Icon and Status -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 ${t.bgColor} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
            ${t.icon}
          </div>
          <div class="flex flex-col">
            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${t.statusColor} mb-1">
              <span class="w-2 h-2 ${t.statusDot} rounded-full mr-1"></span>
              ${t.status}
            </span>
          </div>
        </div>
        
        <!-- Trending indicator -->
        ${t.trending?`
          <div class="flex items-center text-orange-500 animate-bounce">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
            </svg>
          </div>
        `:""}
      </div>

      <!-- App Title and Description -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          ${t.title}
        </h3>
        <p class="text-gray-600 leading-relaxed">
          ${t.description}
        </p>
      </div>

      <!-- Features List -->
      <div class="mb-6">
        <ul class="space-y-2">
          ${t.features.map(s=>`
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              ${s}
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Stats -->
      <div class="flex justify-between text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
        <span class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
          </svg>
          ${t.views||"1.2k"} views
        </span>
        <span class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
          </svg>
          ${t.lastUpdated||"2d ago"}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <button 
          onclick="window.open('${t.route}', '_blank')"
          class="btn-primary flex-1 focus-ring"
          aria-label="Open ${t.title} app"
        >
          <svg class="w-4 h-4 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          Open App
        </button>
        
        <button 
          onclick="copyAppLink('${t.route}')"
          class="btn-secondary px-3 focus-ring"
          title="Copy link to ${t.title}"
          aria-label="Copy link to ${t.title}"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  `}function f(){window.copyAppLink=t=>d(this,null,function*(){const e=`${window.location.origin}${t}`;try{yield navigator.clipboard.writeText(e),u("Link copied to clipboard! 📋","success")}catch(r){const s=document.createElement("textarea");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),u("Link copied to clipboard! 📋","success")}}),window.trackAppClick=t=>{window.va&&window.va("track","App Click",{app:t})}}function u(t,e="info"){const r=document.createElement("div");r.className=`fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-x-full ${e==="success"?"bg-green-500 text-white":e==="error"?"bg-red-500 text-white":"bg-gray-800 text-white"}`,r.textContent=t,document.body.appendChild(r),setTimeout(()=>{r.classList.remove("translate-x-full")},100),setTimeout(()=>{r.classList.add("translate-x-full"),setTimeout(()=>{document.body.removeChild(r)},300)},3e3)}function x(){return`
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
  `}function h(){window.showPrivacyModal=()=>{const t=document.createElement("div");t.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",t.innerHTML=`
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
    `,document.body.appendChild(t),t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.addEventListener("keydown",function e(r){r.key==="Escape"&&(t.remove(),document.removeEventListener("keydown",e))})}}const l=[{id:"qr-generator",title:"QR Code Generator",description:"Create custom QR codes in seconds. Support for URLs, text, WiFi, contacts and more. Download as PNG or SVG.",icon:"📱",bgColor:"bg-gradient-to-br from-blue-500 to-indigo-600",route:"/qr",features:["Multiple QR code types (URL, Text, WiFi)","Customizable colors and sizes","Download as PNG or SVG","Batch generation support"],status:"Active",statusColor:"bg-green-100 text-green-800",statusDot:"bg-green-500",views:"2.4k",lastUpdated:"1d ago",trending:!0},{id:"instagram-unfollow",title:"Who to Unfollow",description:"See who you follow that doesn't follow back using your Instagram export. Completely private - analysis happens in your browser.",icon:"📊",bgColor:"bg-gradient-to-br from-pink-500 to-purple-600",route:"/unfollow",features:["Upload Instagram data export","100% client-side processing","Find non-mutual followers","Export results as CSV"],status:"Active",statusColor:"bg-green-100 text-green-800",statusDot:"bg-green-500",views:"3.1k",lastUpdated:"3d ago",trending:!1},{id:"drinkmaster",title:"DrinkMaster",description:"Party prompts and mini games for your next hangout. Interactive drinking games, fun challenges, and social activities.",icon:"🍻",bgColor:"bg-gradient-to-br from-orange-500 to-red-600",route:"/drinkmaster",features:["Interactive party games","Customizable player names","Various game modes","Mobile-friendly design"],status:"Active",statusColor:"bg-green-100 text-green-800",statusDot:"bg-green-500",views:"1.8k",lastUpdated:"5d ago",trending:!1}];class y{constructor(){this.isLoaded=!1,this.init()}init(){return d(this,null,function*(){this.showLoading(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.render()):this.render()})}showLoading(){const e=document.getElementById("loading");e&&(e.style.display="flex")}hideLoading(){const e=document.getElementById("loading");e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none"},300))}render(){return d(this,null,function*(){try{f(),h(),this.renderHeader(),this.renderMain(),this.renderFooter(),setTimeout(()=>{this.initAnimations(),this.hideLoading(),this.showContent()},500),this.trackPageView()}catch(e){console.error("Error rendering app:",e),this.showError()}})}renderHeader(){const e=document.getElementById("header");e&&(e.innerHTML=m())}renderMain(){const e=document.getElementById("main");e&&(e.innerHTML=`
        <div class="container mx-auto px-4 pb-12">
          <!-- Featured Apps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            ${l.map((r,s)=>v(r,s)).join("")}
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
                <div class="text-3xl font-bold text-primary-600">${l.length}</div>
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
      `)}renderFooter(){const e=document.getElementById("footer");e&&(e.innerHTML=x())}showContent(){["header","main","footer"].forEach((r,s)=>{const a=document.getElementById(r);a&&setTimeout(()=>{a.style.opacity="1",a.classList.add("animate-slide-up")},s*100)})}initAnimations(){g(),this.initScrollAnimations(),this.initKeyboardNavigation(),this.initPerformanceMonitoring()}initScrollAnimations(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},r=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("animate-slide-up"),r.unobserve(a.target))})},e);document.querySelectorAll(".card, .stats-section").forEach(s=>{r.observe(s)})}initKeyboardNavigation(){document.addEventListener("keydown",e=>{if(e.altKey&&e.key>="1"&&e.key<="3"){e.preventDefault();const r=parseInt(e.key)-1;l[r]&&window.open(l[r].route,"_blank")}e.key==="Escape"&&document.querySelectorAll('[class*="fixed"][class*="inset-0"]').forEach(s=>s.remove())})}initPerformanceMonitoring(){"PerformanceObserver"in window&&new PerformanceObserver(r=>{r.getEntries().forEach(s=>{window.va&&s.entryType==="navigation"&&window.va("track","Performance",{loadTime:Math.round(s.loadEventEnd-s.loadEventStart),type:"page-load"})})}).observe({entryTypes:["navigation"]})}trackPageView(){window.va&&window.va("track","Pageview",{path:"/"}),l.forEach(e=>{window.va&&window.va("track","App Impression",{app:e.id})})}showError(){const e=document.getElementById("main");e&&(e.innerHTML=`
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
      `),this.hideLoading()}}const b=new y;window.FlorenAppsHub=b;
//# sourceMappingURL=index-nAn10Ie_.js.map
