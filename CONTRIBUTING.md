# Contributing to florenApps Hub 🤝

Thanks for your interest in contributing to florenApps! This document provides guidelines and information for contributors.

## 🎯 Types of Contributions

### 🔧 Code Contributions
- Bug fixes
- Performance improvements
- UI/UX enhancements
- New features for the hub itself

### 🎮 App Suggestions
- Use our [App Request Template](https://github.com/floren/florenapps-hub/issues/new?template=app-request.md)
- Focus on privacy-friendly, useful tools
- No accounts required philosophy

### 📚 Documentation
- Improve README
- Add code comments
- Update setup instructions

### 🐛 Bug Reports
- Use GitHub Issues
- Include reproduction steps
- Provide browser/device info

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Setup
```bash
# Clone the repo
git clone https://github.com/floren/florenapps-hub.git
cd florenapps-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Development Guidelines

### Code Style
- Use ES6+ features
- Follow existing code structure
- Add comments for complex logic
- Use meaningful variable names

### Component Structure
```javascript
// Keep components modular and reusable
export function createComponent(props) {
  return `
    <!-- HTML template -->
  `;
}

// Initialize functions separately
export function initComponent() {
  // Setup event listeners, etc.
}
```

### CSS Guidelines
- Use Tailwind classes when possible
- Custom CSS in `@layer components`
- Follow mobile-first approach
- Maintain accessibility (focus states, etc.)

### JavaScript Guidelines
- Vanilla JavaScript (no frameworks)
- ES modules for organization
- Handle errors gracefully
- Performance-conscious code

## 📋 Pull Request Process

### Before Submitting
1. **Test your changes**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check for issues**
   - No console errors
   - Mobile responsive
   - Accessibility friendly

3. **Follow commit conventions**
   ```
   feat: add new app card animation
   fix: resolve mobile navigation issue
   docs: update README with new setup steps
   style: improve button hover states
   refactor: reorganize component structure
   ```

### PR Requirements
- [ ] Code builds without errors
- [ ] Changes tested on desktop and mobile
- [ ] Follows existing code style
- [ ] Includes documentation updates if needed
- [ ] No breaking changes (or clearly documented)

### PR Template
```markdown
## 🎯 What does this PR do?
Brief description of changes

## 🧪 How to test
Steps to verify the changes work

## 📱 Screenshots (if UI changes)
Before/after screenshots

## ✅ Checklist
- [ ] Code builds successfully
- [ ] Tested on mobile and desktop
- [ ] No accessibility regressions
- [ ] Documentation updated
```

## 🎮 Adding New Apps

### App Criteria
- **Privacy-first**: Client-side processing preferred
- **No accounts**: Should work without sign-up
- **Useful**: Solves real problems
- **Fast**: Quick to load and use

### Integration Process
1. **Deploy your app** to Vercel/Netlify/etc.
2. **Add app data** in `src/main.js`
3. **Add rewrite rule** in `vercel.json`
4. **Test the integration**
5. **Submit PR** with app details

### App Data Format
```javascript
{
  id: 'unique-app-id',
  title: 'App Name',
  description: 'What it does in one sentence.',
  icon: '📱', // emoji icon
  bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  route: '/app-route',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  status: 'Active',
  statusColor: 'bg-green-100 text-green-800',
  statusDot: 'bg-green-500',
  views: '1.2k', // optional
  lastUpdated: '2d ago', // optional
  trending: false // optional
}
```

## 🔒 Security & Privacy

### Privacy Guidelines
- **No tracking** without explicit user consent
- **Minimal analytics** (page views only)
- **Local processing** when possible
- **Clear privacy policies** for each app

### Security Considerations
- Validate all inputs
- Sanitize user data
- Use HTTPS everywhere
- Follow CSP guidelines

## 🎨 Design System

### Colors
```css
/* Primary palette */
--primary-500: #0ea5e9;
--primary-600: #0284c7;

/* Status colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
```

### Components
- Use existing component patterns
- Maintain consistent spacing (4px grid)
- Follow accessibility guidelines
- Mobile-first responsive design

## 🚀 Release Process

### Version Strategy
- **Major**: Breaking changes, major new features
- **Minor**: New apps, significant improvements
- **Patch**: Bug fixes, minor tweaks

### Release Checklist
1. Update version in `package.json`
2. Update CHANGELOG.md
3. Test build and deployment
4. Create GitHub release
5. Deploy to production

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: Bug reports, feature requests
- **GitHub Discussions**: General questions, ideas
- **Email**: floren@example.com (for sensitive matters)

### Code Review
- All PRs reviewed by maintainers
- Feedback provided within 48 hours
- Collaborative improvement process

## 📄 License

By contributing to florenApps Hub, you agree that your contributions will be licensed under the MIT License.

---

## 🎉 Recognition

Contributors will be:
- Added to README contributors section
- Mentioned in release notes
- Given credit in app descriptions (if applicable)

Thanks for helping make florenApps better! 🚀
