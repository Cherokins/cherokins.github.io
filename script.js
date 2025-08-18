// === Codex: seeded + endless loop, rune colors, taglines, Coil unlock ===

// Seed bank (30 entries: 15 free, 15 locked)
const entries = [
  // Free
  { text: "Ashes remember the flame, though the flame forgets the ashes.", locked: false },
  { text: "Every silence is filled with words that refused to be born.", locked: false },
  { text: "The night hides nothing; it only makes us blind.", locked: false },
  { text: "Shadows do not follow us—they wait for us.", locked: false },
  { text: "The forgotten live longer than the remembered.", locked: false },
  { text: "Time is a river that erases its own footprints.", locked: false },
  { text: "What you fear in the dark is usually what you carried there.", locked: false },
  { text: "Even the stars envy the flame of a single candle.", locked: false },
  { text: "A door never opens—it only chooses the moment you notice.", locked: false },
  { text: "Every question is a lock; every silence, a key.", locked: false },
  { text: "The past does not sleep—it waits.", locked: false },
  { text: "What we bury in earth grows in thought.", locked: false },
  { text: "The mirror shows faces; the shadow shows truths.", locked: false },
  { text: "Not all chains are made of iron.", locked: false },
  { text: "To be lost is to walk paths others are too afraid to see.", locked: false },

  // Locked
  { text: "The Codex was never written—it writes itself through those who read it.", locked: true },
  { text: "The 9th Gate whispers only to those who silence their own name.", locked: true },
  { text: "Some truths can be told only in lies.", locked: true },
  { text: "You do not carry the Codex; the Codex carries you.", locked: true },
  { text: "Behind every shadow lies a deeper darkness.", locked: true },
  { text: "Those who look for endings will never find beginnings.", locked: true },
  { text: "The first secret is that there are no secrets, only layers.", locked: true },
  { text: "Every locked word in this archive bleeds into your sleep.", locked: true },
  { text: "The Codex does not reveal—it consumes.", locked: true },
  { text: "If you read far enough, you will find yourself reading yourself.", locked: true },
  { text: "The absence of light is not darkness, but hunger.", locked: true },
  { text: "There are verses here written in ink invisible to the unready.", locked: true },
  { text: "One day, the Codex will read you back aloud.", locked: true },
  { text: "Knowledge is not power—it is weight.", locked: true },
  { text: "The final entry of the Codex is always unwritten.", locked: true }
];

// Taglines shown under locked placeholders
const taglines = [
  "⚡ Unlock the Codex to read the forbidden verse…",
  "🔒 Some knowledge demands a price…",
  "🕯 The next line hides behind your silence…",
  "⚔️ Truth sharpens only for those who dare pay.",
  "🌑 The locked words breathe in your shadow…",
  "🌀 A secret unpurchased is a secret unfinished."
];

// Rune + color pools
const RUNES  = ["ᚨ", "ᚱ", "ᚾ", "ᚺ", "ᛉ", "ᛃ", "ᛏ", "ᛒ", "ᛗ", "ᛟ"];
const COLORS = [
  "rgba(140,180,255,0.25)", // mystic blue
  "rgba(180,140,255,0.25)", // arcane violet
  "rgba(140,255,200,0.25)"  // ethereal green
];

// Monetization flag
let monetized = false;

// DOM
const container = document.getElementById("entries");

// Render a single entry
function renderEntry(entry) {
  const div = document.createElement("div");
  div.classList.add("entry");

  if (entry.locked && !monetized) {
    // Placeholder + rune seal
    div.classList.add("locked");
    div.setAttribute("data-rune", RUNES[Math.floor(Math.random() * RUNES.length)]);
    div.setAttribute("data-rune-color", COLORS[Math.floor(Math.random() * COLORS.length)]);
    div.setAttribute("data-text", entry.text);  // stash the real text (to reveal later)

    // Whispering tagline
    const tag = document.createElement("div");
    tag.className = "tagline";
    tag.textContent = taglines[Math.floor(Math.random() * taglines.length)];
    div.appendChild(tag);
  } else {
    // Free or monetized state -> show real text
    div.textContent = entry.text;
  }

  container.appendChild(div);
}

// Load a batch (loops endlessly through the seed bank)
let idx = 0;
function loadEntries(batch = 6) {
  for (let i = 0; i < batch; i++) {
    renderEntry(entries[idx]);
    idx = (idx + 1) % entries.length;
  }
}

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) {
    loadEntries(6);
  }
});

// Monetization detection + unlock
function unlockAll() {
  monetized = true;
  document.querySelectorAll(".entry.locked").forEach(el => {
    const real = el.getAttribute("data-text") || "";
    el.classList.remove("locked");
    el.removeAttribute("data-rune");
    el.removeAttribute("data-rune-color");
    // Clear placeholder/tagline
    el.innerHTML = "";
    el.textContent = real;
  });
}

function initMonetization() {
  if (!document.monetization) return;
  if (document.monetization.state === "started") unlockAll();
  document.monetization.addEventListener("monetizationstart", unlockAll);
}

// Boot
loadEntries(10);
initMonetization();

