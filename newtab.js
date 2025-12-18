const birth = Date.UTC(2004, 6, 5, 0, 0, 0, 0);
const YEAR_MS = 31556952000; // tropical year

function update() {
  const now = performance.timeOrigin + performance.now();
  const age = (now - birth) / YEAR_MS;

  const years = Math.floor(age);
  const fraction = (age - years).toFixed(9).slice(1);

  document.getElementById("years").textContent = years;
  document.getElementById("fraction").textContent = fraction;

  requestAnimationFrame(update);
}

update();
