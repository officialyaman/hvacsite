const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("menu");

if (burgerBtn && menu) {
  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Countdown (7 days from first load)
const promoEnd = new Date();
promoEnd.setDate(promoEnd.getDate() + 7);

function tick() {
  const now = new Date();
  const diff = promoEnd - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  if (dd) dd.textContent = pad(days);
  if (hh) hh.textContent = pad(hours);
  if (mm) mm.textContent = pad(mins);
  if (ss) ss.textContent = pad(secs);
}

tick();
setInterval(tick, 1000);