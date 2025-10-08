

const magicBtn = document.getElementById("magicBtn");
const messageBox = document.getElementById("message");
const effects = document.getElementById("effects");
const playPause = document.getElementById("playPause");
const shareBtn = document.getElementById("shareBtn");
const saveBtn = document.getElementById("saveBtn");
const bgMusic = document.getElementById("bgMusic");


const messages = [
  {"✨ "The only way to do great work 💻 is to love what you do ❤️." – Steve Jobs"},  
{"🐾 "It always seems impossible 🌟 until it’s done 🌍." – Nelson Mandela"},  
{"🌈 "Happiness depends 🍃 upon ourselves 💫." – Aristotle"},  
{"🍀 "Do what you can 💪, with what you have 🌻, where you are 🐦." – Theodore Roosevelt"},  
{"🔥 "Success is not final 🦁; failure is not fatal 💔: It is the courage 🌟 to continue that counts." – Winston Churchill"},  
{"🌸 "Believe you can 🐝 and you’re halfway 🎯 there." – Theodore Roosevelt"},  
{"🌞 "Keep your face 🌻 always toward the sunshine 🌈 — and shadows 🌑 will fall behind you." – Walt Whitman"},  
{"🪐 "In the middle 🌌 of every difficulty 🌀 lies opportunity 🔑." – Albert Einstein"},  
{"💖 "You miss 100% 🏒 of the shots 🥅 you don’t take ✨." – Wayne Gretzky"},  
{"📚 "An investment in knowledge 🍎 pays the best interest 🌟." – Benjamin Franklin"},  
{"🥊 "Don’t count the days 📆, make the days count 🌊." – Muhammad Ali"},  
{"🎭 "Be yourself 🦋; everyone else is already taken 🎀." – Oscar Wilde"},  
{"🌟 "Act as if what you do 🌱 makes a difference 💡. It does ✨." – William James"},  
{"🕊️ "Everything you’ve ever wanted 🚪 is on the other side of fear 🌌." – George Addair"},  
{"🚀 "Opportunities don’t happen 🌟, you create them 🔥." – Chris Grosser"},  
{"🍂 "Dream big 💭 and dare to fail 🐾." – Norman Vaughan"},  
{"💎 "Don’t wait ⏳. The time 🕰️ will never be just right 🌱." – Napoleon Hill"},  
{"🌺 "We become what we think about 🌸." – Earl Nightingale"},  
{"⚡ "Do one thing every day 🌞 that scares you 🐼." – Eleanor Roosevelt"},  
{"🌹 "Everything has beauty 🌸, but not everyone sees it 🍓." – Confucius"},  
{"🌻 "Success usually comes 🌞 to those who are too busy 🐝 to be looking for it 🌸." – Henry David Thoreau"},  
{"🎬 "If you can dream it 💭, you can do it 🦋." – Walt Disney"},  
{"🐧 "Hardships often prepare 🪨 ordinary people for an extraordinary destiny 🌌." – C.S. Lewis"},  
{"🖤 "Your time is limited ⏳, so don’t waste it living 🍏 someone else’s life 🌸." – Steve Jobs"},  
{"🛠️ "The best way to predict 🔮 the future is to invent it 🌴." – Alan Kay"},  
{"⏰ "Don’t watch the clock ⌛; do what it does — keep going 🍉." – Sam Levenson"},  
{"🌠 "Act 🌟 or accept 🪞." – Anonymous"},  
{"🌿 "Life is 10% what happens 🌊 to us and 90% how we react 💫." – Charles Swindoll"},  
{"🦋 "What lies behind us 🍂 and what lies before us 🌸 are tiny matters compared to what lies within us 🌼." – Ralph Waldo Emerson"},  
{"🌺 "Great minds discuss ideas 🌟; average minds discuss events 🎭; small minds discuss people 🐙." – Eleanor Roosevelt"},  
{"🎐 "Fall seven times 🌊 and stand up eight 🌼." – Japanese Proverb"},  
{"🎨 "Everything you can imagine 🎨 is real 🦊." – Pablo Picasso"},  
{"💕 "Turn your wounds 🩹 into wisdom 🌙." – Oprah Winfrey"},  
{"🌟 "Doubt kills more dreams 🌈 than failure ever will 🍀." – Suzy Kassem"},  
{"🦄 "A journey of a thousand miles 🚶 begins with a single step 🐾." – Lao Tzu"},  
{"🎾 "Start where you are 🌍. Use what you have 🛠️. Do what you can 🌊." – Arthur Ashe"},  
{"💖 "Don’t be pushed around by the fears 😨 in your mind 🌌. Be led by the dreams 💭 in your heart 🌻." – Roy T. Bennett"},  
{"🌈 "Try to be a rainbow 🌈 in someone’s cloud ☁️." – Maya Angelou"},  
{"🐰 "Stay hungry 🍴, stay foolish 🌸." – Steve Jobs"},  
{"🎶 "The best revenge 😏 is massive success 🌟." – Frank Sinatra"},  
{"🕊️ "Happiness is not something ready-made 🌸. It comes from your own actions 🌺." – Dalai Lama"},  
{"🌌 "You are never too old 🎂 to set another goal 🎯 or to dream a new dream 🌙." – C.S. Lewis"},  
{"🐉 "Opportunities multiply 🌟 as they are seized ⚔️." – Sun Tzu"},  
{"🔨 "Do not wait 🕰️ to strike till the iron is hot 🔥; but make it hot by striking 🐝." – William Butler Yeats"},  
{"🌟 "The future belongs to those who believe 🌸 in the beauty 🌺 of their dreams 🍭." – Eleanor Roosevelt"},  
{"🪐 "Quality is not an act 🎭, it is a habit 🌙." – Aristotle"},  
{"💎 "Don’t be afraid 😨 to give up the good 💖 to go for the great 🐬." – John D. Rockefeller"},  
{"🚀 "Difficulties in life don’t come 🌊 to destroy you 💔, but to help you realize 🌟 your hidden potential 🌹." – A.P.J. Abdul Kalam"},  
{"🪞 "If opportunity doesn’t knock 🚪, build a door 🌸." – Milton Berle"},  
{"🎭 "Be so good 🌟 they can’t ignore you 🐾." – Steve Martin"},  
{"📖 "The secret of getting ahead 🚀 is getting started 🌈." – Mark Twain"},  
{"🔥 "Arise 🌞, awake 🌄 and stop not till the goal 🎯 is reached 🌺." – Swami Vivekananda"},  
{"🕊️ "Our greatest glory 🌟 is not in never falling 🍂, but in rising every time we fall 🌻." – Confucius"},  
{"💖 "Do what you love ❤️ and the money 💸 will follow 🌟." – Marsha Sinetar"},  
{"🌸 "Limit your 'always' 🐝 and your 'nevers' 🐧." – Amy Poehler"},  
{"🌌 "Whatever you are 🌙, be a good one 🌟." – Abraham Lincoln"},  
{"🎶 "Work hard in silence 🤫, let your success 🌸 be the noise 🐝." – Frank Ocean"},  
{"🚴 "Great things 🌟 never come from comfort zones 🛋️." – Anonymous"},  
{"🌟 "Push yourself 💪, because no one else is going to do it 🐼 for you." – Anonymous"},  
{"🚀 "Success doesn’t just find you 🌸. You have to go out 🚶 and get it 🔥." – Anonymous"},  
{"🌈 "Dream it 💭. Wish it 🌠. Do it 🌸." – Anonymous"},  
{"🕰️ "Sometimes later ⏳ becomes never ❌. Do it now ⚡." – Anonymous"},  
{"🌺 "Little things 🌼 make big days 🌞." – Anonymous"},  
{"🏁 "Don’t stop when you’re tired 😴. Stop when you’re done ✅." – Anonymous"},  
{"🌙 "Wake up with determination 🌅. Go to bed 🛏️ with satisfaction 🌸." – Anonymous"},  
{"💫 "Do something today 📆 that your future self 🌱 will thank you 🌟 for." – Anonymous"},  
{"🍀 "Doubt kills more dreams 🌈 than failure ever will 🐰." – Suzy Kassem"},  
{"🌟 "Discipline is the bridge 🌉 between goals 🎯 and accomplishment 🌸." – Jim Rohn"},  
{"🔥 "Don’t limit your challenges 🌊. Challenge your limits ⚡." – Anonymous"},  
{"🌹 "The harder you work 💪 for something, the greater 🌟 you’ll feel when you achieve it 🐝." – Anonymous"},  
{"🪐 "Dream bigger 🌌. Do bigger 🌸." – Anonymous"},  
{"💡 "Don’t wish it were easier 😌. Wish you were better 🌟." – Jim Rohn"},  
{"🦁 "Success is going from failure 💔 to failure 🌊 without losing your enthusiasm 🌸." – Winston Churchill"},  
{"⚡ "Hard work beats talent 🏆 when talent doesn’t work hard 🐼." – Tim Notke"},  
{"🎾 "A champion 🏆 is defined not by their wins 🎉 but by how they can recover 💪 when they fall 🌈." – Serena Williams"},  
{"🌲 "Do not go where the path may lead 🌿. Go instead where there is no path 🌸 and leave a trail 🌻." – Ralph Waldo Emerson"},  
{"🌸 "What you get by achieving your goals 🎯 is not as important 💡 as what you become 🌟 by achieving them 🐧." – Zig Ziglar"},  
{"🏀 "Don’t be afraid 😨 to fail 💔. Be afraid not to try 🌟." – Michael Jordan"},  
{"🕊️ "It always seems impossible 🌌 until it’s done 🌸." – Nelson Mandela"},  
{"🌟 "Believe in yourself 💖 and all that you are 🌸." – Christian D. Larson"},  
{"🚀 "Failure will never overtake me ❌ if my determination 💪 to succeed 🌟 is strong enough 🌙." – Og Mandino"},  
{"🌸 "Don’t stop 🚦 until you’re proud 🌟." – Anonymous"},  
{"🌿 "Perseverance is not a long race 🏃‍♂️; it is many short races one after another 🌻." – Walter Elliot"},  
{"🌈 "Difficult roads 🛤️ often lead to beautiful destinations 🌸." – Anonymous"},  
{"✨ "Your limitation 😔 — it’s only your imagination 🌙." – Anonymous"},  
{"🌙 "Push harder 💪 than yesterday 🌸 if you want a different tomorrow 🌈." – Anonymous"},  
{"🎬 "The way to get started 🚀 is to quit talking 🗣️ and begin doing 🎭." – Walt Disney"},  
{"🌻 "Motivation is what gets you started 🌞. Habit is what keeps you going 🌸." – Jim Ryun"},  
{"🔥 "Opportunities don’t happen 🌟. You create them 🐝." – Chris Grosser"},  
{"🐦 "Do something wonderful 🌸, people may imitate it 🐾." – Albert Schweitzer"},  
{"🌼 "The best preparation for tomorrow 🌅 is doing your best today 🌸." – H. Jackson Brown Jr."},  
{"🏈 "It’s not whether you get knocked down ❌, it’s whether you get up ✅." – Vince Lombardi"},  
{"🌙 "Go the extra mile 🚶. It’s never crowded 🌸." – Wayne Dyer"},  
{"💫 "Once you choose hope 🌈, anything’s possible 🌌." – Christopher Reeve"},  
{"🌹 "Success is liking yourself 🌸, liking what you do ❤️, and liking how you do it 🌼." – Maya Angelou"},  
{"🐝 "Do small things 🌻 in a great way 🌸." – Napoleon Hill"},  
{"🏔️ "The man who moves a mountain ⛰️ begins by carrying away small stones 🌸." – Confucius"},  
{"🎶 "Don’t compromise yourself 🦋. You’re all you’ve got 🌟." – Janis Joplin"},  
{"🍷 "Courage is grace 🌸 under pressure 🌹." – Ernest Hemingway"}  
  
];

function randInt(n) {
  return Math.floor(Math.random() * n);
}


function typeMessage(msg, speed = 32) {
  messageBox.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    messageBox.textContent += msg[i] ?? "";
    i++;
    if (i >= msg.length) clearInterval(t);
  }, speed);
}


function animateMessagePop() {
  anime({
    targets: messageBox,
    scale: [0.9, 1.12, 1],
    rotate: [-4, 4, 0],
    duration: 700,
    easing: "easeOutElastic(1, .7)",
  });
}

function animateBackground() {
  const h1 = Math.random() * 360;
  const h2 = (h1 + 40 + Math.random() * 60) % 360;
  document.body.style.transition = "background 900ms ease";
  document.body.style.background = `linear-gradient(120deg, hsl(${h1},75%,90%), hsl(${h2},75%,90%))`;
}

function confettiBurst(x = 0.5, y = 0.3) {
  // burst from point
  confetti({
    particleCount: 60,
    spread: 80,
    origin: { x, y },
    scalar: 1.05,
  });
}

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

  typeMessage(msg, 30);
  animateBackground();
  createFloatingDots(16);
  flyingEmojis();
  sparkleEffect();
  confettiBurst(0.5, 0.25);
  animateMessagePop();
});

playPause.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playPause.textContent = "Pause Music ⏸";
  } else {
    bgMusic.pause();
    playPause.textContent = "Play Music ▶︎";
  }
});

shareBtn.addEventListener("click", async () => {
  const txt = messageBox.textContent || "A sweet message for you!";
  tryShare(txt);
});

saveBtn.addEventListener("click", saveAsImage);
