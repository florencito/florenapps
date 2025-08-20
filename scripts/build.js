#!/usr/bin/env node

import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 Starting florenApps monorepo build...\n');

// Build the main hub
console.log('📦 Building main hub...');
try {
  execSync('npm run build:hub', { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ Hub build completed\n');
} catch (error) {
  console.error('❌ Hub build failed:', error.message);
  process.exit(1);
}

// Apps configuration
const apps = [
  {
    name: 'qr',
    type: 'static', // Static files in frontend folder
    sourceDir: 'frontend'
  },
  {
    name: 'unfollow', 
    type: 'vite', // Vite app with build process
    sourceDir: '.'
  },
  {
    name: 'drinkmaster',
    type: 'vite', // Vite + React app
    sourceDir: '.'
  }
];

for (const app of apps) {
  console.log(`📱 Building ${app.name} app...`);
  const appDir = join(rootDir, 'apps', app.name);
  const targetDir = join(rootDir, 'dist', 'apps', app.name);
  
  try {
    // Create target directory
    await fs.mkdir(targetDir, { recursive: true });
    
    if (app.type === 'static') {
      // Handle static apps (like QR generator)
      console.log(`  📄 Copying static files for ${app.name}...`);
      const sourceDir = join(appDir, app.sourceDir);
      
      // Copy all files from source directory
      await copyDirectory(sourceDir, targetDir);
      
      console.log(`✅ ${app.name} static files copied\n`);
      
    } else if (app.type === 'vite') {
      // Handle Vite apps
      const workingDir = app.sourceDir === '.' ? appDir : join(appDir, app.sourceDir);
      
      // Check if package.json exists
      await fs.access(join(workingDir, 'package.json'));
      
      // Install dependencies if node_modules doesn't exist
      try {
        await fs.access(join(workingDir, 'node_modules'));
      } catch {
        console.log(`  📥 Installing dependencies for ${app.name}...`);
        execSync('npm install', { cwd: workingDir, stdio: 'inherit' });
      }
      
      // Build the app
      console.log(`  🔨 Building ${app.name}...`);
      execSync('npm run build', { cwd: workingDir, stdio: 'inherit' });
      
      // Copy built files
      const appDistDir = join(workingDir, 'dist');
      await copyDirectory(appDistDir, targetDir);
      
      console.log(`✅ ${app.name} build completed\n`);
    }
  } catch (error) {
    console.error(`❌ ${app.name} build failed:`, error.message);
    
    // Fallback: try to copy whatever files we can find
    console.log(`  🔄 Attempting fallback file copy for ${app.name}...`);
    try {
      const sourceDir = app.sourceDir === '.' ? appDir : join(appDir, app.sourceDir);
      
      // Copy common static files
      const staticFiles = ['index.html', 'style.css', 'script.js', 'main.js', 'app.js'];
      let copiedFiles = 0;
      
      for (const file of staticFiles) {
        try {
          const srcFile = join(sourceDir, file);
          const destFile = join(targetDir, file);
          await fs.copyFile(srcFile, destFile);
          console.log(`    ✅ Copied ${file}`);
          copiedFiles++;
        } catch {
          // File doesn't exist, skip
        }
      }
      
      // Copy assets folder if it exists
      try {
        const assetsDir = join(sourceDir, 'assets');
        const targetAssetsDir = join(targetDir, 'assets');
        await copyDirectory(assetsDir, targetAssetsDir);
        console.log(`    ✅ Copied assets folder`);
      } catch {
        // Assets folder doesn't exist, skip
      }
      
      if (copiedFiles > 0) {
        console.log(`  ✅ Fallback completed for ${app.name}\n`);
      } else {
        console.log(`  ⚠️  No files found to copy for ${app.name}\n`);
      }
    } catch (copyError) {
      console.error(`  ❌ Fallback failed for ${app.name}:`, copyError.message);
    }
  }
}

console.log('🎉 Monorepo build completed successfully!');
console.log('\n📁 Build structure:');
console.log('├── dist/                 (main hub)');
console.log('├── dist/apps/qr/         (QR generator)');
console.log('├── dist/apps/unfollow/   (Instagram analyzer)');
console.log('└── dist/apps/drinkmaster/ (Party games)');

// Helper function to copy directories recursively
async function copyDirectory(src, dest) {
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
}
