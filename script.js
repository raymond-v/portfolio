// Force scroll to top when everything is fully loaded
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {

  // Text highlight
  document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a')
    .forEach(el => {
      el.addEventListener('mouseenter', () => el.classList.add('text-highlight'));
      el.addEventListener('mouseleave', () => el.classList.remove('text-highlight'));
    });

  // Typed.js effect
  const el = document.querySelector(".auto-type");
  if (el) {
    new Typed(".auto-type", {
      strings: ["Raymond Vuong"],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true
    });
  }

  // Contact form character counter
  const textarea = document.getElementById("message");
  const charCount = document.getElementById("charcount");

  if (textarea && charCount) {
    textarea.addEventListener("input", () => {
      const len = textarea.value.length;
      charCount.textContent = `${len} / 1000`;
      charCount.style.color = len > 900 ? "red" : "white";
    });
  }

  // Contact form submission
  const form = document.getElementById("contactForm");

  if (form && textarea && charCount) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Message sent!");
        form.reset();
        charCount.textContent = "0 / 1000";
        charCount.style.color = "white";
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  }
});