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

let index = 0;
const batchSize = 6; // load per scroll

// Function to render entries
function loadEntries() {
  for (let i = 0; i < batchSize; i++) {
    const entry = entries[index % entries.length]; // loop endlessly
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
