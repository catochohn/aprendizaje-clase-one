// 🌙 Toggle Dark Mode
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// 🎉 Función de ejemplo para el botón "Empezar"
function saludar() {
  alert("¡Bienvenido! 🚀 Gracias por probar este sistema.");
}

// revisando el codigo del app.js
