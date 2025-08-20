#!/usr/bin/env node

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('📦 Copying apps to dist...\n');

// Helper function to copy directories
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
    console.warn(`Warning: Could not copy ${src}:`, error.message);
  }
}

// Copy pre-built or static apps
const appsConfig = [
  {
    name: 'qr',
    source: 'apps/qr/frontend',
    dest: 'dist/apps/qr'
  },
  {
    name: 'unfollow', 
    source: 'apps/unfollow/dist',
    fallback: 'apps/unfollow',
    dest: 'dist/apps/unfollow'
  },
  {
    name: 'drinkmaster',
    source: 'apps/drinkmaster/dist', 
    fallback: 'apps/drinkmaster',
    dest: 'dist/apps/drinkmaster'
  }
];

for (const app of appsConfig) {
  console.log(`📱 Copying ${app.name}...`);
  
  const sourcePath = join(rootDir, app.source);
  const destPath = join(rootDir, app.dest);
  
  try {
    // Try primary source first
    await copyDirectory(sourcePath, destPath);
    console.log(`✅ ${app.name} copied from ${app.source}`);
  } catch (error) {
    // Try fallback if available
    if (app.fallback) {
      console.log(`  🔄 Trying fallback for ${app.name}...`);
      try {
        const fallbackPath = join(rootDir, app.fallback);
        
        // Copy main files
        const mainFiles = ['index.html', 'style.css', 'script.js', 'main.js'];
        let copied = 0;
        
        for (const file of mainFiles) {
          try {
            const srcFile = join(fallbackPath, file);
            const destFile = join(destPath, file);
            await fs.mkdir(destPath, { recursive: true });
            await fs.copyFile(srcFile, destFile);
            console.log(`    ✅ Copied ${file}`);
            copied++;
          } catch {}
        }
        
        if (copied > 0) {
          console.log(`✅ ${app.name} fallback successful (${copied} files)`);
        } else {
          console.log(`⚠️  No files found for ${app.name}`);
        }
      } catch (fallbackError) {
        console.log(`❌ ${app.name} fallback failed:`, fallbackError.message);
      }
    } else {
      console.log(`❌ ${app.name} copy failed:`, error.message);
    }
  }
}

console.log('\n🎉 Apps copy completed!');
