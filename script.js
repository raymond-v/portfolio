document.addEventListener("DOMContentLoaded", function () {

  // Trail Effect
  document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 500);
  });

  // Text Highlight (hover only)
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');

  textElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('text-highlight');
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove('text-highlight');
    });
  });

});

// Type animation
document.addEventListener("DOMContentLoaded", function() {
  const el = document.querySelector(".auto-type");
  if (!el) return;

  var typed = new Typed(".auto-type", {
    strings: ["Raymond Vuong"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
  });
});


// Message character counter
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("message");
  const charCount = document.getElementById("charcount");

  textarea.addEventListener("input", function () {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength} / 1000`;

    if (currentLength > 900) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = "white";
    }
  });
});

// Message sent redirection page
const form = document.getElementById("contactForm");
const charCount = document.getElementById("charCount");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default redirect

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    alert("Message sent! Thank you."); // or update a div in your UI
    form.reset();
    charCount.textContent = "0 / 1000";
  } else {
    alert("Oops! Something went wrong.");
  }
});