function moveYes() {
  const yesBtn = document.getElementById("yesBtn");
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  yesBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function revealSurprise() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("surpriseBox").style.display = "block";
  document.getElementById("bgMusic").play();
  typewriter("I love you sooo much, booboo💖 I'm so grateful to have youuu✨");
  startFloating();
}

function typewriter(text) {
  const el = document.getElementById("typewriterText");
  let i = 0;
  const speed = 70;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

function startFloating() {
  const floatArea = document.getElementById("floatArea");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.innerText = "💖";
    floatArea.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 300);

  setInterval(() => {
    const img = document.createElement("div");
    img.classList.add("bf-pic");
    img.style.left = Math.random() * 100 + "vw";
    img.innerHTML = `<img src="img/boyfriend.jpg" alt="BF">`;
    floatArea.appendChild(img);
    setTimeout(() => img.remove(), 7000);
  }, 1000);
}
