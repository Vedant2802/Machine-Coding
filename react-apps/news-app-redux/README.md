# News App with Redux Thunk

A React application demonstrating Redux state management with Thunk middleware for handling asynchronous actions. The app fetches and displays news articles from an external API.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open the provided local URL in your browser
```

## ✨ Features

- **Redux State Management**: Centralized state management with Redux
- **Async Actions**: Redux Thunk for handling API calls
- **News API Integration**: Fetches real news data
- **Loading States**: User feedback during data fetching
- **Error Handling**: Graceful error management
- **Modern React**: Built with React 19 and Vite

## 📁 File Structure

```
news-app-redux/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── News.jsx          # News list component
│   ├── redux/
│   │   ├── newsAction.js     # Async action creators
│   │   ├── newsReducer.js    # Redux reducer
│   │   └── store.js          # Redux store configuration
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎯 Redux Architecture

### Store Configuration (`store.js`)

- Configures Redux store with Thunk middleware
- Combines reducers for state management

### Actions (`newsAction.js`)

- **fetchNews()**: Async action to fetch news data
- **setLoading()**: Action to manage loading state
- **setError()**: Action to handle error states

### Reducer (`newsReducer.js`)

- Manages news data, loading, and error states
- Handles different action types

### Component (`News.jsx`)

- Dispatches actions to fetch data
- Displays news articles with loading/error states
- Connects to Redux store

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
- **Redux 5.0**: State management
- **React-Redux**: React bindings for Redux
- **Redux-Thunk**: Middleware for async actions
- **Vite**: Build tool and dev server
- **ESLint**: Code linting

## 🔧 API Integration

The app integrates with a news API to fetch articles. The API call is handled in the `fetchNews` action creator using Redux Thunk.

### API Features

- Async data fetching
- Loading state management
- Error handling
- Data transformation

## 📝 Learning Points

This project demonstrates:

- Redux store setup and configuration
- Action creators and reducers
- Redux Thunk for async operations
- React-Redux hooks (`useSelector`, `useDispatch`)
- State management patterns
- API integration with Redux
- Error handling in Redux applications

## 🎨 Customization

You can easily customize:

- API endpoints in `newsAction.js`
- UI styling in `App.css` and `News.jsx`
- Redux state structure in `newsReducer.js`
- Add new actions and reducers for additional features

## 🔧 Troubleshooting

- Ensure Node.js version 18+ is installed
- Check API endpoint availability and CORS settings
- Verify Redux DevTools for debugging state changes
- Clear `node_modules` and reinstall if dependency issues occur
- Check browser console for any Redux or API errors

## 🚀 Production Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.
