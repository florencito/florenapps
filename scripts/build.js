#!/usr/bin/env node

import { execSync } from 'child_process';

const rootDir = process.cwd();

console.log('🚀 Building florenApps Hub...\n');

// Build the hub using Vite
console.log('📦 Building hub with Vite...');
try {
  execSync('npm run build:hub', { cwd: rootDir, stdio: 'inherit' });
  console.log('\n✅ Hub build completed successfully!');
  console.log('\n📁 Build structure:');
  console.log('└── dist/   (florenApps Hub)');
  console.log('\n🌐 Apps are hosted on subdomains:');
  console.log('├── https://qr.florenapps.online');
  console.log('├── https://unfollow.florenapps.online');
  console.log('└── https://drinkmaster.florenapps.online');
} catch (error) {
  console.error('❌ Hub build failed:', error.message);
  process.exit(1);
}
