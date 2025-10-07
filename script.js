/* ====== For Kulla — Full app script ====== */
/* Requires anime.js and canvas-confetti loaded by index.html */

const magicBtn = document.getElementById("magicBtn");
const messageBox = document.getElementById("message");
const effects = document.getElementById("effects");
const playPause = document.getElementById("playPause");
const shareBtn = document.getElementById("shareBtn");
const saveBtn = document.getElementById("saveBtn");
const bgMusic = document.getElementById("bgMusic");

// Messages mix: cute, funny, motivational, memories
const messages = [
  "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "It always seems impossible until it's done. — Nelson Mandela",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "Whether you think you can or you think you can't, you're right. — Henry Ford",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. — William James",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. — John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. — Thomas Jefferson",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character. — Unknown",
  "It is never too late to be what you might have been. — George Eliot",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. — Ralph Waldo Emerson",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "Get busy living or get busy dying. — Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. — Brian Tracy",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The best way to predict the future is to create it. — Abraham Lincoln",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "You must be the change you wish to see in the world. — Mahatma Gandhi",
  "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "The mind is everything. What you think you become. — Buddha",
  "To live a creative life, we must lose our fear of being wrong. — Joseph Chilton Pearce",
  "If you can dream it, you can do it. — Walt Disney",
  "The best revenge is massive success. — Frank Sinatra",
  "Life is either a daring adventure or nothing at all. — Helen Keller",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
  "Success is not in what you have, but who you are. — Bo Bennett",
  "The only way to achieve the impossible is to believe it is possible. — Charles Kingsleigh",
  "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
  "Go confidently in the direction of your dreams. Live the life you have imagined. — Henry David Thoreau",
  "Life is really simple, but we insist on making it complicated. — Confucius",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "The best way to get started is to quit talking and begin doing. — Walt Disney",
  "Don't let the noise of others' opinions drown out your own inner voice. — Steve Jobs",
  "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
  "If you want to live a happy life, tie it to a goal, not to people or things. — Albert Einstein",
  "The only impossible journey is the one you never begin. — Tony Robbins",
  "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "It is not length of life, but depth of life. — Ralph Waldo Emerson",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "The purpose of life is to believe, to hope, and to strive. — Indira Gandhi",
  "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. — Maya Angelou",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away. — Unknown",
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "Life is not about waiting for the storm to pass, but about learning how to dance in the rain. — Unknown",
  "The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
  "Life is too important to be taken seriously. — Oscar Wilde",
  "Life is a flower of which love is the honey. — Victor Hugo",
  "Life is a journey that must be traveled no matter how bad the roads and accommodations. — Oliver Goldsmith",
  "Life is what we make it, always has been, always will be. — Grandma Moses",
  "You have to live a life you’re proud of. If you find that you’re not, I hope you have the strength to start over. — F. Scott Fitzgerald",
  "Life is not about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "You are stronger than you think. — Unknown",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "Believe in yourself and all that you are. — Christian D. Larson",
  "Never bend your head. Always hold it high. Look the world straight in the eye. — Helen Keller",
  "Dream big and dare to fail. — Norman Vaughan",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "The harder the conflict, the greater the triumph. — George Washington",
  "The best way out is always through. — Robert Frost",
  "Keep going. Be all in. — Bryan Hutchinson",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. — Earl Nightingale",
  "A year from now you may wish you had started today. — Karen Lamb",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
  "Don’t let small minds convince you that your dreams are too big. — Unknown",
  "The secret of getting ahead is getting started. — Mark Twain",
  "With the new day comes new strength and new thoughts. — Eleanor Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. — William Butler Yeats",
  "Everything you can imagine is real. — Pablo Picasso",
  "Quality is not an act, it is a habit. — Aristotle",
  "Try not to become a man of success, but rather try to become a man of value. — Albert Einstein",
  "Do what you love, and the money will follow. — Marsha Sinetar",
];

// small helper: random integer
function randInt(n) {
  return Math.floor(Math.random() * n);
}

// typing effect: show one character at a time
function typeMessage(msg, speed = 32) {
  messageBox.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    messageBox.textContent += msg[i] ?? "";
    i++;
    if (i >= msg.length) clearInterval(t);
  }, speed);
}

// animated pop for message using anime.js
function animateMessagePop() {
  anime({
    targets: messageBox,
    scale: [0.9, 1.12, 1],
    rotate: [-4, 4, 0],
    duration: 700,
    easing: "easeOutElastic(1, .7)",
  });
}

// background gradient change
function animateBackground() {
  const h1 = Math.random() * 360;
  const h2 = (h1 + 40 + Math.random() * 60) % 360;
  document.body.style.transition = "background 900ms ease";
  document.body.style.background = `linear-gradient(120deg, hsl(${h1},75%,90%), hsl(${h2},75%,90%))`;
}

// confetti burst (canvas-confetti)
function confettiBurst(x = 0.5, y = 0.3) {
  // burst from point
  confetti({
    particleCount: 60,
    spread: 80,
    origin: { x, y },
    scalar: 1.05,
  });
}

// create colorful floating dots (hearts/rounds) using anime.js
function createFloatingDots(count = 14) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "effect-node";
    // choose heart or emoji
    const choices = ["💖", "✨", "🌈", "😍", "🎉", "🌟"];
    el.textContent = choices[randInt(choices.length)];
    // start pos
    el.style.left = 10 + Math.random() * 80 + "%";
    el.style.top = 60 + Math.random() * 30 + "%";
    el.style.fontSize = `${10 + Math.random() * 26}px`;
    effects.appendChild(el);

    // animate upward + horizontal drift + fade
    anime({
      targets: el,
      translateY: -(180 + Math.random() * 180),
      translateX: (Math.random() - 0.5) * 200,
      opacity: [1, 0],
      scale: [0.6, 1.2, 1],
      duration: 1800 + Math.random() * 1400,
      easing: "easeOutCubic",
      complete: () => el.remove(),
    });
  }
}

// flying emojis from bottom of screen
function flyingEmojis() {
  const emojis = ["💖", "✨", "🌈", "😍", "🎉", "🌟", "🍪", "☀️"];
  for (let i = 0; i < 12; i++) {
    const node = document.createElement("div");
    node.className = "effect-node";
    node.textContent = emojis[randInt(emojis.length)];
    const startLeft = 5 + Math.random() * 90;
    node.style.left = startLeft + "vw";
    node.style.top = 92 + Math.random() * 6 + "vh";
    node.style.fontSize = `${12 + Math.random() * 28}px`;
    document.body.appendChild(node);

    anime({
      targets: node,
      translateY: -(300 + Math.random() * 250),
      translateX: (Math.random() - 0.5) * 160,
      opacity: [1, 0],
      duration: 2200 + Math.random() * 1200,
      easing: "easeOutCubic",
      complete: () => node.remove(),
    });
  }
}

// sparkles tiny circles
function sparkleEffect() {
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("div");
    s.className = "effect-node";
    s.style.width = s.style.height = `${4 + Math.random() * 8}px`;
    s.style.borderRadius = "50%";
    s.style.background = "#ffffff";
    s.style.left = 10 + Math.random() * 80 + "%";
    s.style.top = 20 + Math.random() * 60 + "%";
    effects.appendChild(s);

    anime({
      targets: s,
      translateY: -(20 + Math.random() * 90),
      translateX: (Math.random() - 0.5) * 40,
      opacity: [0.9, 0],
      scale: [0, 1, 0],
      duration: 900 + Math.random() * 900,
      easing: "easeOutCubic",
      complete: () => s.remove(),
    });
  }
}

// Save as image simple (screenshot of container)
function saveAsImage() {
  // use html2canvas if available; fallback to simple message
  if (typeof html2canvas === "function") {
    html2canvas(document.querySelector(".card")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "for-kulla.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  } else {
    alert(
      "Save image needs html2canvas library. (Optional) — I can add it if you want."
    );
  }
}

// Share (navigator.share if supported)
async function tryShare(message) {
  const url = location.href;
  const text = message ? message : "A special message for Kulla";
  if (navigator.share) {
    try {
      await navigator.share({ title: "For Kulla", text, url });
    } catch (e) {}
  } else {
    // fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(`${text}\n\nOpen this page: ${url}`);
      alert("Message copied! Share it with Kulla ❤️");
    } catch (e) {
      alert("Sharing not supported on this device.");
    }
  }
}

/* ===== main click handler ===== */
let firstClick = true;
magicBtn.addEventListener("click", () => {
  if (firstClick) {
    bgMusic.play().catch(() => {
      /* autoplay blocked - ok */
    });
    firstClick = false;
    playPause.textContent = "Pause Music ⏸";
  }

  const msg = messages[randInt(messages.length)];

  // sequence of UX
  typeMessage(msg, 30);
  animateBackground();
  createFloatingDots(16);
  flyingEmojis();
  sparkleEffect();
  confettiBurst(0.5, 0.25);
  animateMessagePop();
});

// play/pause music
playPause.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playPause.textContent = "Pause Music ⏸";
  } else {
    bgMusic.pause();
    playPause.textContent = "Play Music ▶︎";
  }
});

// share
shareBtn.addEventListener("click", async () => {
  const txt = messageBox.textContent || "A sweet message for you!";
  tryShare(txt);
});

// save
saveBtn.addEventListener("click", saveAsImage);
