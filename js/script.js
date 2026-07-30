const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  section.classList.add("hidden");

  observer.observe(section);
});

/*theme toggle*/
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// Toggle theme
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "light");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "dark");
  }
});

//text switch animation
const roles = [
    "a Final-Year IT",
    "Student"
];

const typingElement = document.getElementById("typing");

let current = 0;

typingElement.textContent = roles[current];

setInterval(() => {

    typingElement.classList.add("switching");

    setTimeout(() => {

        current = (current + 1) % roles.length;

        typingElement.textContent = roles[current];

        typingElement.classList.remove("switching");

    }, 250);

}, 2500);

//timeline animation
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

timelineItems.forEach((item) => {

    timelineObserver.observe(item);

});