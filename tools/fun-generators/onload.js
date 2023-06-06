/* Getting DOM Elements for Theme Switching and setting theme based on localStorage */
const html = document.querySelector("html");
savedTheme = localStorage.getItem("data-theme");
html.setAttribute("data-theme", savedTheme);
