// Array of Codex entries
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
  // ... (seed with 30+ total for depth)
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
