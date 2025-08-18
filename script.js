// === Codex of Hidden Knowledge ===
// script.js

// Entries: half free, half locked
const entries = [
  { text: "The one who fears silence will never hear the truth.", type: "free" },
  { text: "Beneath the ash of forgotten wars, the ember of knowledge still glows.", type: "locked" },
  { text: "Time is not a river — it is a labyrinth with mirrors.", type: "free" },
  { text: "Three questions guard every gate: Who are you? Why are you here? What will you leave?", type: "locked" },
  { text: "The stars are older than memory, yet younger than the mind that gazes at them.", type: "free" },
  { text: "When the third dawn breaks without shadow, the hidden archive awakens.", type: "locked" },
  { text: "Every name forgotten becomes a seed of power.", type: "free" },
  { text: "The Codex writes itself when eyes are unafraid to see.", type: "locked" },
  { text: "One truth can shatter kingdoms; one lie can crown emperors.", type: "free" },
  { text: "Drink from the chalice of silence — but beware, it drinks from you too.", type: "locked" },
  { text: "The serpent devours its tail not to end, but to begin again.", type: "free" },
  { text: "Beneath seven locks lies the word that even gods feared to speak.", type: "locked" },
  { text: "Those who read without seeking will see only dust.", type: "free" },
  { text: "He who carries the seventh key never knows he holds it.", type: "locked" },
  { text: "All mirrors lie — except the broken ones.", type: "free" },
  { text: "When two shadows become one, the third light appears.", type: "locked" },
  { text: "Ink fades, but whispers travel across centuries.", type: "free" },
  { text: "The Archive does not remember — it waits.", type: "locked" },
  { text: "Every lock was made by hands; so was every key.", type: "free" },
  { text: "The map of the world is written on no parchment, but in scars.", type: "locked" },
  { text: "Truth is a blade; wisdom is learning which edge to grasp.", type: "free" },
  { text: "Seven times broken, seven times bound — the circle holds.", type: "locked" },
  { text: "The loudest voice in the room is often the weakest flame.", type: "free" },
  { text: "Three seals, nine veils, one silence.", type: "locked" },
  { text: "The first Codex was written in fire, not ink.", type: "free" },
  { text: "Those who guard the gates do not know what they guard.", type: "locked" },
  { text: "Your footsteps echo in halls that were built before stone.", type: "free" },
  { text: "When the last question is asked, the Archive will close itself.", type: "locked" },
  { text: "Shadows fall where light refuses to kneel.", type: "free" },
  { text: "The Eleventh Word cannot be spoken, only remembered.", type: "locked" }
];

let loadedCount = 0;
const loadBatch = 5; // how many to load at once
const container = document.getElementById("entries");

// Function to render entries
function renderEntries() {
  const nextEntries = entries.slice(loadedCount, loadedCount + loadBatch);

  nextEntries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry fade-in";

    if (entry.type === "free") {
      div.textContent = entry.text;
    } else {
      div.innerHTML = `<span class="locked">🔒 ${entry.text}</span>`;
    }

    container.appendChild(div);

    // force reflow to trigger animation
    void div.offsetWidth;
    div.classList.add("visible");
  });

  loadedCount += loadBatch;
}

// Infinite scroll listener
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    renderEntries();
  }
});

// Initial load
renderEntries();

