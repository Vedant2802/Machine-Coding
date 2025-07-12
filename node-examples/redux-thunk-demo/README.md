# Redux Thunk Demo

Vanilla JavaScript examples demonstrating Redux and Redux Thunk usage, including both synchronous and asynchronous actions in a Node.js environment.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run basic Redux example
node index.js

# Run async Redux Thunk example
node asyncAction.js
```

## ✨ Features

- **Pure Redux Implementation**: No React dependencies
- **Synchronous Actions**: Basic counter functionality
- **Asynchronous Actions**: API calls with Redux Thunk
- **HTTP Integration**: Uses Axios for API requests
- **State Logging**: Console output for state changes

## 📁 File Structure

```
redux-thunk-demo/
├── index.js           # Basic Redux counter example
├── asyncAction.js     # Async Redux Thunk example
├── package.json       # Dependencies
└── README.md          # This file
```

## 🎯 Examples

### Basic Redux Counter (`index.js`)

Demonstrates fundamental Redux concepts:

- Store creation
- Action creators
- Reducers
- State management
- Dispatch actions

**Features:**

- Increment/decrement counter
- Console logging of state changes
- Pure Redux implementation

### Async Redux Thunk (`asyncAction.js`)

Shows advanced Redux patterns with async operations:

- Redux Thunk middleware
- Async action creators
- API integration with Axios
- Loading and error states

**Features:**

- Fetch data from external API
- Handle loading states
- Error handling
- Async state management

## 🛠️ Dependencies

- **Redux 5.0**: State management library
- **Redux-Thunk**: Middleware for async actions
- **Axios**: HTTP client for API calls

## 📝 Learning Points

This project demonstrates:

- Redux store setup and configuration
- Action creators and reducers
- Redux Thunk middleware usage
- Async action patterns
- API integration with Redux
- State management without React
- Console-based Redux debugging

## 🔧 How to Run

### Basic Example

```bash
node index.js
```

This will run the counter example with increment/decrement actions.

### Async Example

```bash
node asyncAction.js
```

This will demonstrate async data fetching with Redux Thunk.

## 🎨 Customization

You can easily modify:

- API endpoints in `asyncAction.js`
- Action types and payloads
- Reducer logic
- Add new async actions
- Customize state structure

## 🔍 Understanding the Code

### Store Setup

```javascript
const store = createStore(reducer, applyMiddleware(thunk));
```

### Action Creators

```javascript
// Sync action
const increment = () => ({ type: "INCREMENT" });

// Async action with Thunk
const fetchData = () => async (dispatch) => {
  // Async logic here
};
```

### Reducers

```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    // ... other cases
  }
};
```

## 🐛 Troubleshooting

- Ensure Node.js version 18+ is installed
- Check internet connection for API calls
- Verify all dependencies are installed
- Check console output for errors
- Ensure API endpoints are accessible

## 📚 Next Steps

After understanding these examples, you can:

- Integrate with React applications
- Add more complex state management
- Implement additional async patterns
- Build full-stack applications with Redux
