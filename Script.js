// ========== Mobile Navigation ==========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰"; // hamburger icon

  const header = document.querySelector("header");
  if (header) {
    header.appendChild(menuToggle);
  }

  const navMenu = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

// ========== Form Validation ==========
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Thank you for contacting us, " + name + "!");
    contactForm.reset();
  });
}

// ========== Dark Mode Toggle ==========
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px";
darkModeBtn.style.borderRadius = "8px";
darkModeBtn.style.background = "#004080";
darkModeBtn.style.color = "white";
darkModeBtn.style.border = "none";
darkModeBtn.style.cursor = "pointer";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ----------------------------
// Variables and Scope Example
// ----------------------------

// Global variable
let activeBox = null;

// ----------------------------
// Function: Toggle Box Animation
// Parameters: boxId (string)
// Returns: message (string)
// ----------------------------
function toggleBoxAnimation(boxId) {
    const box = document.getElementById(boxId);

    // Local variable
    let message = "";

    if (box.classList.contains('active')) {
        box.classList.remove('active');
        message = `${boxId} animation stopped.`;
    } else {
        // Remove previous active if exists
        if (activeBox) activeBox.classList.remove('active');

        box.classList.add('active');
        activeBox = box;
        message = `${boxId} animation triggered!`;
    }

    console.log(message);
    return message;
}

// ----------------------------
// Event Listeners for Boxes
// ----------------------------
document.getElementById('subjects').addEventListener('click', () => {
    toggleBoxAnimation('subjects');
});

document.getElementById('teachers').addEventListener('click', () => {
    toggleBoxAnimation('teachers');
});

document.getElementById('results').addEventListener('click', () => {
    toggleBoxAnimation('results');
});

document.getElementById('events').addEventListener('click', () => {
    toggleBoxAnimation('events');
});

// ----------------------------
// Hero Button Animation Trigger
// ----------------------------
document.getElementById('hero-btn').addEventListener('click', () => {
    toggleBoxAnimation('subjects');
});
