# Machine Coding Projects

This repository contains multiple JavaScript and React projects focused on machine coding, state management, and UI functionality. Each folder is a self-contained project demonstrating a specific concept or technology.

---

## Projects

### 1. Countdown Timer (`Countdown_timer/`)

A simple, interactive countdown timer built with vanilla JavaScript, HTML, and CSS.

- **Features:**
  - Set hours, minutes, and seconds.
  - Start, pause, and reset the timer.
  - Responsive and visually clear UI.
- **How to run:**
  - Open `index.html` in your browser.
- **Files:**
  - `index.html` – Main HTML structure.
  - `index.js` – Timer logic and DOM manipulation.
  - `index.css` – Styling for the timer.

---

### 2. React Redux Thunk News App (`react-redux-thunk/`)

A React application demonstrating Redux state management with Thunk middleware for async actions. The app fetches and displays news articles.

- **Features:**
  - Uses React, Redux, and Redux Thunk.
  - Fetches news from an external API.
  - Displays loading state and handles errors.
- **How to run:**
  1. `cd react-redux-thunk`
  2. Install dependencies: `npm install`
  3. Start the dev server: `npm run dev`
  4. Open the provided local URL in your browser.
- **Key files:**
  - `src/App.jsx` – Main app component.
  - `src/components/News.jsx` – News list UI and data fetching.
  - `src/redux/newsAction.js` – Async action creators using Thunk.
  - `src/redux/newsReducer.js` – Reducer for news state.
  - `src/redux/store.js` – Store setup with middleware.
- **Dependencies:** React, Redux, React-Redux, Redux-Thunk, Vite.

---

### 3. Redux Thunk Examples (`redux-thunk/`)

Vanilla JavaScript examples demonstrating Redux and Redux Thunk usage, including both synchronous and asynchronous actions.

- **Features:**
  - `index.js`: Simple Redux counter with increment/decrement actions.
  - `asyncAction.js`: Demonstrates async data fetching with Redux Thunk and Axios.
- **How to run:**
  - These are Node.js scripts. Run with `node index.js` or `node asyncAction.js` after installing dependencies.
  - Install dependencies: `npm install`
- **Dependencies:** Redux, Redux-Thunk, Axios.

---

## General Notes

- Each project is self-contained and can be run independently.
- For React projects, ensure you have Node.js and npm installed.
- For vanilla JS projects, simply open the HTML file in your browser.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

## License

This repository is for educational purposes. Add a license if you plan to use it for production or open-source distribution.
