// ===============================
// Typing Animation
// ===============================

const typingElement = document.querySelector(".typing");

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Java Developer",
  "Frontend Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ===============================
// Close Menu When Link Clicked
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});


// ===============================
// Reveal Animation on Scroll
// ===============================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

const hiddenElements = document.querySelectorAll(
  ".section, .project-card, .education-card"
);

hiddenElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll(
    "input, textarea"
  );

  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    alert("Please fill all fields.");
    return;
  }

  alert("Message sent successfully!");

  contactForm.reset();
});