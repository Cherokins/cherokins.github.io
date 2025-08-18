// Full Codex Arcana Entries
const entries = [
  { text: "In forgotten temples, shadows remember what men choose to forget.", locked: false },
  { text: "The river speaks to those who kneel long enough to listen.", locked: true },
  { text: "Every star is a seed, waiting for the soil of another world.", locked: false },
  { text: "The serpent coils not around prey, but around truth.", locked: true },
  { text: "When the bell tolls thrice, doors between worlds shudder.", locked: false },
  { text: "The moon hides more scars than the sun dares reveal.", locked: true },
  { text: "Ashes whisper louder than fire to those who can hear.", locked: false },
  { text: "He who names a shadow gives it strength.", locked: true },
  { text: "The lost codex of mirrors reflects not faces, but intentions.", locked: false },
  { text: "Between each heartbeat, a doorway opens.", locked: true },
  { text: "No map shows the roads walked only in dreams.", locked: false },
  { text: "Bones buried in silence sing when storms arrive.", locked: true },
  { text: "Ink binds memory firmer than chains bind flesh.", locked: false },
  { text: "A candle lit in solitude summons more than light.", locked: true },
  { text: "Beneath each stone lies another story untold.", locked: false },
  { text: "Wind carries the names of kings who never reigned.", locked: true },
  { text: "The oldest libraries are written in the veins of mountains.", locked: false },
  { text: "Blood spilled willingly stains beyond time.", locked: true },
  { text: "The sea remembers every oath broken on its shore.", locked: false },
  { text: "Silence is the language of the ancients.", locked: true },
  { text: "Roots dig deeper than truth, and both are hard to uproot.", locked: false },
  { text: "The mask you wear will one day wear you.", locked: true },
  { text: "Stars fall only when someone dares to look away.", locked: false },
  { text: "Crows gather not for carrion, but for secrets.", locked: true },
  { text: "The mountain speaks once, but echoes forever.", locked: false },
  { text: "Whispers on parchment outlast thunder in the sky.", locked: true },
  { text: "Fire forgets, but smoke remembers.", locked: false },
  { text: "A key forged in lies will open only false doors.", locked: true },
  { text: "Those who listen to the rain hear yesterday's grief.", locked: false },
  { text: "The end of the road is where the true path begins.", locked: true }
];

// DOM references
const entriesContainer = document.getElementById('entries');
const loader = document.getElementById('loader');
const footer = document.getElementById('footer');
const title = document.getElementById('title');
const whisperBox = document.getElementById('whisper');

let index = 0;
const batchSize = 6;

// Function to render entries
function loadEntries() {
  for (let i = 0; i < batchSize; i++) {
    const entry = entries[index % entries.length];
    const div = document.createElement('div');
    div.className = 'entry' + (entry.locked ? ' locked' : '');
    div.innerHTML = `<p>${entry.text}</p>`;
    entriesContainer.appendChild(div);
    index++;
  }
}

// Infinite scroll handler
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadEntries();
  }
});

// Initial load
loadEntries();

/* ============ Easter Eggs ============ */

// 1. Konami Code unlock all
const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let pos = 0;
window.addEventListener("keydown", (e) => {
  if (e.key === konami[pos]) {
    pos++;
    if (pos === konami.length) {
      document.querySelectorAll('.entry.locked').forEach(el => el.classList.remove('locked'));
      alert("🔓 The Codex unlocks its secrets!");
      pos = 0;
    }
  } else {
    pos = 0;
  }
});

// 2. Footer click secret
let footerClicks = 0;
footer.addEventListener("click", () => {
  footerClicks++;
  if (footerClicks === 7) {
    const div = document.createElement('div');
    div.className = 'entry';
    div.style.background = "#220022";
    div.style.color = "#ff66ff";
    div.innerHTML = `<p>✨ The Codex sees you.</p>`;
    entriesContainer.prepend(div);
    footerClicks = 0;
  }
});

// 3. Title hover pulse
title.addEventListener("mouseenter", () => title.classList.add("pulse"));
title.addEventListener("mouseleave", () => title.classList.remove("pulse"));

// 4. Random whispers
const whispers = [
  "Do you hear it too?",
  "The Codex breathes.",
  "Not all pages are written in ink.",
  "The eyes in the dark are not always hostile.",
  "Listen between the lines."
];

function showWhisper() {
  const text = whispers[Math.floor(Math.random() * whispers.length)];
  whisperBox.textContent = text;
  whisperBox.style.opacity = 1;
  setTimeout(() => whisperBox.style.opacity = 0, 8000);
}
setInterval(showWhisper, 45000); // every 45s
