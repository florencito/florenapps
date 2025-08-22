#!/usr/bin/env node

import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔄 Syncing apps from original repos...\n');

const appsConfig = [
  {
    name: 'qr',
    repo: 'https://github.com/florencito/qr-code-generator-devops',
    targetDir: 'apps/qr',
    sourceSubdir: '' // root of repo
  },
  {
    name: 'unfollow',
    repo: 'https://github.com/florencito/who_to_unfollow', 
    targetDir: 'apps/unfollow',
    sourceSubdir: ''
  },
  {
    name: 'drinkmaster',
    repo: 'https://github.com/florencito/drinkmaster-webapp',
    targetDir: 'apps/drinkmaster', 
    sourceSubdir: ''
  }
];

// Create temp directory for downloads
const tempDir = join(rootDir, '.temp_sync');
await fs.mkdir(tempDir, { recursive: true });

try {
  for (const app of appsConfig) {
    console.log(`📱 Syncing ${app.name}...`);
    
    // Download latest ZIP
    const zipFile = join(tempDir, `${app.name}.zip`);
    const extractDir = join(tempDir, `${app.name}-main`);
    
    console.log(`  📥 Downloading ${app.name}...`);
    execSync(`curl -L ${app.repo}/archive/main.zip -o ${zipFile}`, { 
      cwd: tempDir, 
      stdio: 'inherit' 
    });
    
    console.log(`  📦 Extracting ${app.name}...`);
    execSync(`unzip -q ${zipFile}`, { cwd: tempDir });
    
    // Backup current version
    const targetPath = join(rootDir, app.targetDir);
    const backupPath = join(rootDir, `${app.targetDir}_backup_${Date.now()}`);
    
    try {
      await fs.access(targetPath);
      console.log(`  💾 Backing up current ${app.name}...`);
      execSync(`mv "${targetPath}" "${backupPath}"`);
    } catch {
      // No existing version to backup
    }
    
    // Copy new version
    console.log(`  📋 Copying new ${app.name}...`);
    const sourcePath = join(extractDir, app.sourceSubdir);
    execSync(`cp -r "${sourcePath}" "${targetPath}"`);
    
    console.log(`✅ ${app.name} synced successfully\n`);
  }
  
  console.log('🎉 All apps synced! Remember to:');
  console.log('1. Review changes: git status');
  console.log('2. Test builds: npm run build');
  console.log('3. Commit changes: git add -A && git commit');
  
} finally {
  // Cleanup temp directory
  console.log('🧹 Cleaning up temp files...');
  await fs.rmdir(tempDir, { recursive: true }).catch(() => {});
}
