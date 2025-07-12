# Tab Form Application

A React application featuring a multi-tab form interface with different sections for user input.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open the provided local URL in your browser
```

## ✨ Features

- **Multi-Tab Interface**: Organized form sections with tab navigation
- **React Components**: Modular component structure
- **Modern UI**: Clean and responsive design
- **Form Handling**: User input management across different sections
- **Vite Build System**: Fast development and build process

## 📁 File Structure

```
tab-form/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Details.jsx      # Details form component
│   │   ├── Interests.jsx    # Interests form component
│   │   └── Settings.jsx     # Settings form component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎯 Components

### App.jsx

Main application component that manages tab state and renders the appropriate form component.

### Form Components

- **Details.jsx**: Personal information form
- **Interests.jsx**: User interests and preferences
- **Settings.jsx**: Application settings and configuration

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Dependencies

- **React 19**: Latest React version
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting and formatting

## 🎨 Customization

You can easily customize:

- Tab styling in `App.css`
- Form components in the `components/` directory
- Add new tabs by creating new components
- Modify the tab navigation logic in `App.jsx`

## 📝 Learning Points

This project demonstrates:

- React component composition
- State management with React hooks
- Conditional rendering
- Form handling in React
- Modern React development with Vite
- Component-based architecture

## 🔧 Troubleshooting

- Ensure Node.js version 18+ is installed
- Clear `node_modules` and reinstall if dependency issues occur
- Check browser console for any React errors
- Verify all imports are correct in component files
