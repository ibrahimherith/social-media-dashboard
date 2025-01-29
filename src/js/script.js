const toggleCheckbox = document.getElementById("toggle-button");
const htmlElement = document.documentElement;

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
  toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
