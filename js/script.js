// ===========================
// Helpers
// ===========================
function $(id) {
  return document.getElementById(id);
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===========================
// Theme Toggle 
// ===========================
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const initialTheme = saved ? saved : "dark";
  document.documentElement.setAttribute("data-theme", initialTheme);

  const icon = $("themeIcon");
  icon.textContent = initialTheme === "dark" ? "Dark" : "Light";
})();

$("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  $("themeIcon").textContent = next === "dark" ? "Dark" : "Light";
  showToast(`Switched to ${next} mode`);
});

// ===========================
// Greeting message by time
// ===========================
(function setGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour >= 5 && hour < 12) greeting = "Good morning ";
  else if (hour >= 12 && hour < 17) greeting = "Good afternoon ";
  else if (hour >= 17 && hour < 23) greeting = "Good evening ";
  else greeting = "Hello, its Midnight! ";

  $("greetingPill").textContent = greeting;
})();

// ===========================
// Mobile nav toggle
// ===========================
const navToggle = $("navToggle");
const navMenu = $("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after clicking a link (mobile UX)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// ===========================
// Form validation 
// ===========================
function setError(id, msg) {
  const el = $(id);
  el.textContent = msg;
}

function isValidEmail(email) {
  // Simple email validation for front-end use
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

$("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("name").value.trim();
  const email = $("email").value.trim();
  const message = $("message").value.trim();

  let ok = true;

  setError("nameError", "");
  setError("emailError", "");
  setError("messageError", "");

  if (name.length < 2) {
    setError("nameError", "Please enter your name (at least 2 characters).");
    ok = false;
  }
  if (!isValidEmail(email)) {
    setError("emailError", "Please enter a valid email address.");
    ok = false;
  }
  if (message.length < 10) {
    setError("messageError", "Message should be at least 10 characters.");
    ok = false;
  }

  if (!ok) {
    showToast("Please fix the form errors.");
    return;
  }

  // No backend: simulate success
  e.target.reset();
  showToast("Message ready. In a real site, this would be sent!");
});

// ===========================
// Footer year
// ===========================
$("year").textContent = String(new Date().getFullYear());
