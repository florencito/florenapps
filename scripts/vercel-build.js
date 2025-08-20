#!/usr/bin/env node

import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 Vercel build starting...\n');

try {
  // Step 1: Build the main hub first
  console.log('📦 Building hub...');
  execSync('npm run build:hub', { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ Hub build completed\n');

  // Step 2: Install and build each app
  const apps = [
    { name: 'unfollow', hasPackageJson: true },
    { name: 'drinkmaster', hasPackageJson: true },
    { name: 'qr', hasPackageJson: false, staticDir: 'frontend' }
  ];

  for (const app of apps) {
    console.log(`📱 Processing ${app.name}...`);
    const appDir = join(rootDir, 'apps', app.name);
    const targetDir = join(rootDir, 'dist', 'apps', app.name);
    
    // Create target directory
    await fs.mkdir(targetDir, { recursive: true });

    if (app.hasPackageJson) {
      // Vite app with dependencies
      try {
        console.log(`  📥 Installing ${app.name} dependencies...`);
        execSync('npm install', { cwd: appDir, stdio: 'inherit' });
        
        console.log(`  🔨 Building ${app.name}...`);
        execSync('npm run build', { cwd: appDir, stdio: 'inherit' });
        
        // Copy dist folder
        const distDir = join(appDir, 'dist');
        await copyDirectory(distDir, targetDir);
        
        console.log(`✅ ${app.name} completed\n`);
      } catch (error) {
        console.error(`❌ ${app.name} failed:`, error.message);
        console.log(`  🔄 Trying fallback for ${app.name}...`);
        
        // Fallback: copy source files directly
        const mainFiles = ['index.html'];
        for (const file of mainFiles) {
          try {
            const srcFile = join(appDir, file);
            const destFile = join(targetDir, file);
            await fs.copyFile(srcFile, destFile);
            console.log(`    ✅ Copied ${file}`);
          } catch {}
        }
      }
    } else {
      // Static app
      console.log(`  📄 Copying static files for ${app.name}...`);
      const sourceDir = join(appDir, app.staticDir);
      await copyDirectory(sourceDir, targetDir);
      console.log(`✅ ${app.name} static files copied\n`);
    }
  }

  console.log('🎉 Vercel build completed successfully!');

} catch (error) {
  console.error('❌ Vercel build failed:', error.message);
  process.exit(1);
}

// Helper function to copy directories recursively
async function copyDirectory(src, dest) {
  try {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);
      
      if (entry.isDirectory()) {
        await copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not copy ${src} to ${dest}:`, error.message);
  }
}
