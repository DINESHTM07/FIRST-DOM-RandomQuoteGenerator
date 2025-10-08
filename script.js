

const magicBtn = document.getElementById("magicBtn");
const messageBox = document.getElementById("message");
const effects = document.getElementById("effects");
const playPause = document.getElementById("playPause");
const shareBtn = document.getElementById("shareBtn");
const saveBtn = document.getElementById("saveBtn");
const bgMusic = document.getElementById("bgMusic");


const messages = [
 
  "✨ The only way to do great work 💻 is to love what you do ❤️. — Steve Jobs",
  "🐾 It always seems impossible 🌟 until its done 🌍. — Nelson Mandela",
  "🌈 Happiness depends 🍃 upon ourselves 💫. — Aristotle",
  "🍀 Do what you can 💪, with what you have 🌻, where you are 🐦. — Theodore Roosevelt",
  "🔥 Success is not final 🦁; failure is not fatal 💔: It is the courage to continue 🌟 that counts. — Winston Churchill",
  "🌸 Believe you can 🐝 and you are halfway there 🎯. — Theodore Roosevelt",
  "🌞 Keep your face 🌻 always toward the sunshine 🌈—and shadows 🌑 will fall behind you. — Walt Whitman",
  "🪐 In the middle 🌌 of every difficulty 🌀 lies opportunity 🔑. — Albert Einstein",
  "💖 You miss 100% 🏒 of the shots 🥅 you dont take 💫. — Wayne Gretzky",
  "📚 An investment in knowledge 🍎 pays the best interest 🌟. — Benjamin Franklin",
  "🌟 What lies behind us 🪞 and what lies before us 🛤 are tiny matters compared to what lies within us 💎. — Ralph Waldo Emerson",
  "🌻 Do not go where the path may lead 🚪, go instead where there is no path and leave a trail 🐾. — Ralph Waldo Emerson",
  "🌙 The future belongs to those who believe 💫 in the beauty of their dreams 🌸. — Eleanor Roosevelt",
  "🎯 Our greatest glory is not in never falling 🌊, but in rising every time we fall 🦅. — Confucius",
  "🌹 The best way to predict your future 🔮 is to create it ✨. — Abraham Lincoln",
  "💡 I have not failed 😌. I've just found 10,000 ways that wont work ⚡. — Thomas Edison",
  "🌊 Twenty years from now you will be more disappointed by the things you did not do 🌍 than by the ones you did do ✈️. — Mark Twain",
  "🌼 The secret of getting ahead 🌟 is getting started 🚀. — Mark Twain",
  "🦋 You must be the change 🌸 you wish to see in the world 🌍. — Mahatma Gandhi",
  "💪 Hardships often prepare ordinary people 🌻 for an extraordinary destiny 🌟. — C.S. Lewis",
  "🕊 Peace begins with a smile 😊. — Mother Teresa",
  "🌟 Keep going 💫. Everything you need will come to you at the perfect time ⏳. — Unknown",
  "🌺 Nothing is impossible 💡, the word itself says 'I'm possible' 🌈. — Audrey Hepburn",
  "🔥 It is never too late ⏰ to be what you might have been 🌸. — George Eliot",
  "🌙 Shoot for the moon 🌌. Even if you miss, you'll land among the stars ✨. — Norman Vincent Peale",
  "🌊 Believe in yourself 🌟 and all that you are 🌸. Know that there is something inside you 💎 that is greater than any obstacle. — Christian D. Larson",
  "🌻 The best revenge 🦋 is massive success 💫. — Frank Sinatra",
  "🌈 Turn your wounds into wisdom 🌸. — Oprah Winfrey",
  "💪 What we achieve inwardly will change 🌎 outer reality 🌟. — Plutarch",
  "🍂 Courage does not always roar 🦁. Sometimes courage is the quiet voice 🕊 at the end of the day saying, I will try again tomorrow 🌞. — Mary Anne Radmacher",
  "🌞 Keep your eyes on the stars ✨ and your feet on the ground 🌍. — Theodore Roosevelt",
  "📖 The man who does not read 🕮 has no advantage over the man who cannot read 📚. — Mark Twain",
  "🌸 Act as if what you do makes a difference 🌈. It does 💫. — William James",
  "🔥 Opportunities do not happen 🌟, you create them 🌱. — Chris Grosser",
  "💎 Do not be pushed around by the fears in your mind 🌀. Be led by the dreams in your heart ❤️. — Roy T. Bennett",
  "🌊 The best way out is always through 🌟. — Robert Frost",
  "🍀 The only limit to our realization of tomorrow 🌸 will be our doubts of today 🌙. — Franklin D. Roosevelt",
  "🌞 Do not count the days 🌟, make the days count 💫. — Muhammad Ali",
  "💡 Everything you can imagine 🌈 is real 🎨. — Pablo Picasso",
  "🎯 Dreams do not work unless you do 💪. — John C. Maxwell",
  "🦋 What you get by achieving your goals 🎉 is not as important as what you become 🌱 by achieving your goals. — Zig Ziglar",
  "🌸 Little by little, one travels far 🚶‍♂️✨. — J.R.R. Tolkien",
  "🔥 Happiness is not something ready-made 🌻. It comes from your own actions 💪. — Dalai Lama",
  "💎 Success usually comes to those who are too busy 🚀 to be looking for it 👀. — Henry David Thoreau",
  "🌈 Do not limit your challenges 🌟, challenge your limits 💫. — Jerry Dunn",
  "🌹 If you want to lift yourself up ✨, lift up someone else 🌼. — Booker T. Washington",
  "🌞 A journey of a thousand miles 🚶‍♂️ begins with a single step 🦶. — Lao Tzu",
  "🌸 Fall seven times 💫 and stand up eight ✊. — Japanese Proverb",
  "💡 Do what you love 💻 and the money will follow 💰. — Marsha Sinetar",
  "🔥 The harder you work 💪 for something, the greater you will feel 🌈 when you achieve it 🎉. — Unknown",
  "🌺 The purpose of our lives 🌸 is to be happy 🌞. — Dalai Lama",
  "🌊 Do not let yesterday 💭 take up too much of today 🌈. — Will Rogers",
  "🌟 I would rather die of passion 🔥 than of boredom 😴. — Vincent van Gogh",
  "🌸 It always seems impossible 🌈 until it is done 💫. — Nelson Mandela",
  "🌹 Do not cry because it is over 😢, smile because it happened 🌸. — Dr. Seuss",
  "💡 Do not wait to strike 🔨 till the iron is hot 🔥; but make it hot by striking. — William Butler Yeats",
  "🌙 Limit your -always- and your -nevers- 🌟. — Amy Poehler",
  "🌊 I never dreamed about success 🌈. I worked for it 💪. — Estee Lauder",
  "💎 If you want to achieve greatness 🌟 stop asking for permission 🚀. — Anonymous",
  "🌞 Great minds discuss ideas 💡; average minds discuss events 📅; small minds discuss people 🗣. — Eleanor Roosevelt",
  "🔥 Do not be afraid to give up the good 👍 to go for the great 🌟. — John D. Rockefeller",
  "🌻 In order to be irreplaceable 🌸, one must always be different 🌈. — Coco Chanel",
  "🌈 I can and I will 🌟. Watch me 💪. — Unknown",
  "🌊 Success is walking from failure to failure 😌 with no loss of enthusiasm ✨. — Winston Churchill",
  "🌸 Do what you feel in your heart ❤️ to be right 🌟—for you will be criticized anyway 💬. — Eleanor Roosevelt",
  "💡 Do not wait. The time ⏰ will never be just right 🌈. — Napoleon Hill",
  "🌙 If opportunity does not knock 🚪, build a door 🛠. — Milton Berle",
  "🔥 Work hard in silence 🤐, let success make the noise 🎉. — Frank Ocean",
  "🌻 Believe in yourself 🌟 and you will be unstoppable 🚀. — Unknown",
  "💎 A person who never made a mistake 🙅‍♂️ never tried anything new 🌱. — Albert Einstein",
  "🌸 Stay hungry 🍽, stay foolish 🎯. — Steve Jobs",
  "🌈 Action is the foundational key 🔑 to all success 💫. — Pablo Picasso",
  "💡 It does not matter how slowly you go 🐢 as long as you do not stop 🚶‍♂️. — Confucius",
  "🌞 If you want to fly 🕊, give up everything that weighs you down 🪨. — Buddha",
  "🌊 Strength grows 🌱 in the moments when you think you can not 💭 but you keep going ✨. — Unknown",
  "🔥 Do not quit 💪. Suffer now and live 🌈 the rest of your life as a champion 🏆. — Muhammad Ali",
  "🌸 If you want to go fast 🏃‍♂️, go alone 🚶‍♂️. If you want to go far 🚀, go together 🤝. — African Proverb",
  "🌟 We become what we think about 💭. — Earl Nightingale",
  "🌻 The way to get started 🚀 is to quit talking 🗣 and begin doing 💪. — Walt Disney",
  "🌊 The mind is everything 💡. What you think 💭 you become 🌱. — Buddha",
  "🌈 Do not stop when you are tired 😴. Stop when you are done 🎯. — Unknown",
  "💎 There are no limits 🌟 to what you can accomplish ✨, except the limits you place on your own thinking 💭. — Brian Tracy",
  "🔥 A winner is a dreamer 🌙 who never gives up 💪. — Nelson Mandela",
  "🌸 What you get by achieving your goals 🎯 is not as important as what you become 🌱. — Henry David Thoreau",
  "🌞 The road to success 🚗 and the road to failure 💭 are almost exactly the same 🔄. — Colin R. Davis",
  "🌊 When something is important enough 🌟, you do it even if the odds are not in your favor 🎲. — Elon Musk",
  "🌻 Motivation gets you started 🚀. Habit keeps you going 🔁. — Jim Ryun",
  "🌈 You only live once 🌞, but if you do it right ✅, once is enough ✨. — Mae West",
  "🔥 Push yourself 💪, because no one else is going to do it for you 🌸. — Unknown",
  "🌙 Be yourself 🌟; everyone else is already taken 🎭. — Oscar Wilde",
  "🌻 The journey of a thousand miles 🌍 begins with one step 🦶. — Lao Tzu",
  "🌞 The harder the battle 💪, the sweeter the victory 🏆. — Les Brown",
  "💡 Success is not how high you have climbed 🌄, but how you make a positive difference 🌈 to the world 🌍. — Roy T. Bennett",
  "🌊 Dreams are illustrations 🎨 from the book 📖 your soul is writing 🖊 about you. — Marsha Norman",
  "🌸 Aim for the moon 🌙. If you miss, you may hit a star ✨. — W. Clement Stone",
  "🌹 Life is what we make it 🌻, always has been 💫, always will be 🌈. — Grandma Moses",
  "🌟 Courage is resistance to fear 🦁, mastery of fear 💎, not absence of fear 🌀. — Mark Twain",
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
