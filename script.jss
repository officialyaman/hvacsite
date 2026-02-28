// script.js
const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("menu");

function setMenu(open) {
  if (open) {
    menu.classList.add("open");
    burgerBtn.setAttribute("aria-expanded", "true");
  } else {
    menu.classList.remove("open");
    burgerBtn.setAttribute("aria-expanded", "false");
  }
}

burgerBtn.addEventListener("click", () => {
  const isOpen = menu.classList.contains("open");
  setMenu(!isOpen);
});

// Close menu when a link is clicked
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => setMenu(false));
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Countdown (set your promo end time)
const promoEnd = new Date();
promoEnd.setDate(promoEnd.getDate() + 7); // 7 days from now

function tick() {
  const now = new Date();
  const diff = promoEnd - now;

  const clamp = (n) => Math.max(0, n);

  const totalSeconds = clamp(Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("dd").textContent = pad(days);
  document.getElementById("hh").textContent = pad(hours);
  document.getElementById("mm").textContent = pad(mins);
  document.getElementById("ss").textContent = pad(secs);
}
tick();
setInterval(tick, 1000);
