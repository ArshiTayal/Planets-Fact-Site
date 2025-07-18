const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6,
      "random": true
    },
    "size": {
      "value": 2,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": false }, "onclick": { "enable": false } }
  },
  "retina_detect": true
});
