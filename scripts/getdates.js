// year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// last modified year
const lastModified = document.getElementById("lastModified");
const modifiedDate = new Date(document.lastModified);
lastModified.textContent = `Last Updated: ${modifiedDate.toDateString()} at ${modifiedDate.toLocaleTimeString()}`;
