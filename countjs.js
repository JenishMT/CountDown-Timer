var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#Seconds");

function update1() {
  const currendyear = new Date().getFullYear();

  const newYear = new Date(`january 1 ${currendyear + 1} 00:00:00`);

  const currendDate = new Date();

  const diff = newYear - currendDate;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  const h = Math.floor((diff / 1000 / 60 / 60) % 24);

  const m = Math.floor((diff / 1000 / 60) % 60);

  const s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d < 10 ? "0" + d : d;

  hours.innerHTML = h < 10 ? "0" + h : h;

  minutes.innerHTML = m < 10 ? "0" + m : m;

  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(update1, 1000);
