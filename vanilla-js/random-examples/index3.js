const routes = {
  "/": "<h2>Home</h2><p>Welcome to the homepage.</p>",
  "/about": "<h2>About Page</h2><p>This is the about page.</p>",
  // "/myname": "<h2>My Name</h2><p>Hello, Akshat!</p>",
};

// console.log(location.pathname);

function handleNavigation(path) {
  history.pushState({ path }, "", path);
  renderContent(path);
  console.log(history.state);
}

function renderContent(path) {
  const content = routes[path] || "<h2>404</h2><p>Page not found.</p>";
  document.getElementById("section").innerHTML = content;
}

renderContent(location.pathname);

window.addEventListener("popstate", (event) => {
  renderContent(location.pathname);
});

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    handleNavigation(path);
  }
});

window.addEventListener("keydown", function (e) {
  const key = e.key;
  console.log(key);
  switch (key) {
    case "Backspace":
      history.back();
      break;

    case "ArrowRight":
      if (history.length > 0) {
        history.forward();
      }
      break;
  }
});
