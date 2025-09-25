document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile Navigation =====
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";
  const header = document.querySelector("header");
  if (header) header.appendChild(menuToggle);

  const navMenu = document.querySelector("nav ul");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // ===== Highlight Active Page =====
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ===== Contact Form =====
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  if (contactForm && formResponse) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
        formResponse.style.color = "green";
        contactForm.reset();
      } else {
        formResponse.textContent = "Please fill in all fields.";
        formResponse.style.color = "red";
      }
    });
  }

  // ===== Dark Mode =====
  const darkModeBtn = document.createElement("button");
  darkModeBtn.textContent = "🌙 Dark Mode";
  Object.assign(darkModeBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    borderRadius: "8px",
    background: "#004080",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  });
  document.body.appendChild(darkModeBtn);

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  // ===== Interactive Boxes (Home Page) =====
  let activeBox = null;
  const boxes = ["subjects", "teachers", "results", "events"];
  boxes.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        } else {
          if (activeBox) activeBox.classList.remove("active");
          el.classList.add("active");
          activeBox = el;
        }
      });
    }
  });

  const heroBtn = document.getElementById("hero-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const subjects = document.getElementById("subjects");
      if (subjects) subjects.classList.add("active");
    });
  }
});
