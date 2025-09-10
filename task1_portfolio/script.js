// Typing Effect
const words = ["Digvijay Kumar Singh", "Full Stack Developer", "Problem Solver"];
let i = 0, j = 0, isDeleting = false;
const typed = document.getElementById("typed");

function typeEffect() {
  const currentWord = words[i];
  if (isDeleting) {
    typed.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    typed.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 800);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();

// Contact Form Demo
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form-status").textContent = "Message sent successfully (demo).";
  e.target.reset();
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
