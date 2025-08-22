#!/usr/bin/env node

import { execSync } from 'child_process';

const apps = [
  { name: 'qr', repo: 'https://github.com/florencito/qr-code-generator-devops.git', prefix: 'apps/qr' },
  { name: 'unfollow', repo: 'https://github.com/florencito/who_to_unfollow.git', prefix: 'apps/unfollow' },
  { name: 'drinkmaster', repo: 'https://github.com/florencito/drinkmaster-webapp.git', prefix: 'apps/drinkmaster' }
];

const command = process.argv[2];
const appName = process.argv[3];

if (!command || !['pull', 'push', 'pull-all', 'push-all'].includes(command)) {
  console.log(`
🔄 Git Subtree Helper

Usage:
  node scripts/subtree-helpers.js pull <app-name>     # Pull updates from individual repo
  node scripts/subtree-helpers.js push <app-name>     # Push changes to individual repo  
  node scripts/subtree-helpers.js pull-all           # Pull all apps
  node scripts/subtree-helpers.js push-all           # Push all apps

Apps: qr, unfollow, drinkmaster
`);
  process.exit(1);
}

function runSubtreeCommand(app, action) {
  const cmd = `git subtree ${action} --prefix=${app.prefix} ${app.repo} main --squash`;
  console.log(`📱 ${action.charAt(0).toUpperCase() + action.slice(1)}ing ${app.name}...`);
  console.log(`   ${cmd}`);
  
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ ${app.name} ${action} completed\n`);
  } catch (error) {
    console.error(`❌ ${app.name} ${action} failed:`, error.message);
  }
}

if (command === 'pull-all' || command === 'push-all') {
  const action = command.split('-')[0];
  apps.forEach(app => runSubtreeCommand(app, action));
} else {
  if (!appName) {
    console.error('❌ App name required for single app operations');
    process.exit(1);
  }
  
  const app = apps.find(a => a.name === appName);
  if (!app) {
    console.error(`❌ Unknown app: ${appName}`);
    console.log('Available apps:', apps.map(a => a.name).join(', '));
    process.exit(1);
  }
  
  runSubtreeCommand(app, command);
}
