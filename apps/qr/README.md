# QR Code Generator 📱

A fast, privacy-friendly QR code generator that works entirely in your browser. Create custom QR codes for URLs, text, WiFi credentials, and more.

## 🌟 Features

- **Multiple QR Types**: URLs, plain text, WiFi, contact info, SMS
- **Customizable Design**: Colors, sizes, and error correction levels
- **Download Options**: PNG and SVG formats
- **Batch Generation**: Create multiple QR codes at once
- **Privacy First**: Everything runs locally in your browser
- **No Account Required**: Start generating immediately

## 🚀 Live Demo

**[→ Try it now at florenapps.com/qr](https://florenapps.com/qr)**

## 📖 How to Use

1. **Choose QR Type**: Select URL, text, WiFi, or other format
2. **Enter Content**: Paste your URL or type your text
3. **Customize**: Pick colors and size (optional)
4. **Generate**: Click "Generate QR Code"
5. **Download**: Save as PNG or SVG

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **QR Library**: qrcode.js
- **Styling**: Custom CSS with modern design
- **Deployment**: Vercel (via florenApps monorepo)

## 🎨 Supported QR Types

- **📱 URL**: Website links, social media profiles
- **📝 Text**: Plain text messages, notes
- **📶 WiFi**: Network credentials for easy sharing
- **📞 Contact**: vCard format contact information
- **💬 SMS**: Pre-filled text messages
- **📧 Email**: Mailto links with subject/body

## 🔧 Development

This app is part of the [florenApps monorepo](https://github.com/floren/florenapps-hub).

### Local Development
```bash
# From the monorepo root
cd florenapps-hub
npm run dev:qr
```

### Building
```bash
# Build QR app specifically
npm run build:qr

# Or build entire monorepo
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please see the main [Contributing Guide](../../CONTRIBUTING.md) for details.

### QR-Specific Issues
When reporting issues or suggesting features for the QR generator, please:
- Use the `app:qr` label
- Include browser and OS information
- Provide examples of the QR content that caused issues

## 📝 Changelog

### v2.1.0 - 2024-08-20
- ✨ Added batch QR generation
- 🎨 Improved mobile responsive design
- 🐛 Fixed SVG download on Safari

### v2.0.0 - 2024-08-15
- 🏗️ Migrated to florenApps monorepo
- ✨ Added WiFi QR code support
- 🎨 Redesigned with modern UI
- ⚡ Improved generation speed

### v1.2.0 - 2024-07-01
- ✨ Added custom color options
- 📱 Added vCard contact support
- 🐛 Fixed download filename issues

## 🔒 Privacy

- **No data collection**: QR codes are generated locally
- **No tracking**: No analytics or user monitoring
- **No uploads**: Your content never leaves your browser
- **No accounts**: Use instantly without signing up

## 📄 License

This project is part of florenApps and is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🌐 More Apps

Explore other privacy-friendly tools in the florenApps collection:
- 🏠 [**Hub**](https://florenapps.com) - Browse all apps
- 📊 [**Who to Unfollow**](https://florenapps.com/unfollow) - Instagram follower analysis
- 🍻 [**DrinkMaster**](https://florenapps.com/drinkmaster) - Party games and prompts

---

Built with ❤️ by [Floren](https://github.com/floren) • Privacy-first • No tracking • Open source friendly
