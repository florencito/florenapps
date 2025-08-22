#!/bin/bash

echo "🔄 Setting up git subtrees for apps..."

# Remove existing apps directories
rm -rf apps/qr apps/unfollow apps/drinkmaster

# Add each app as a git subtree
echo "📱 Adding QR generator as subtree..."
git subtree add --prefix=apps/qr https://github.com/florencito/qr-code-generator-devops.git main --squash

echo "📱 Adding Who to Unfollow as subtree..."
git subtree add --prefix=apps/unfollow https://github.com/florencito/who_to_unfollow.git main --squash

echo "📱 Adding DrinkMaster as subtree..."
git subtree add --prefix=apps/drinkmaster https://github.com/florencito/drinkmaster-webapp.git main --squash

echo "✅ Subtrees configured! 

Now you can:

# Pull updates from individual repos:
git subtree pull --prefix=apps/qr https://github.com/florencito/qr-code-generator-devops.git main --squash

# Push changes back to individual repos:
git subtree push --prefix=apps/qr https://github.com/florencito/qr-code-generator-devops.git main

# Or use the helper scripts below..."

echo "📝 Creating helper scripts..."
