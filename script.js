const entriesContainer = document.getElementById("entries");

// Example Codex entries
const entries = [
  { text: "Fragment 001: A whisper carried by cosmic winds.", locked: false },
  { text: "Fragment 002: Coordinates etched in starlight.", locked: true },
  { text: "Fragment 003: The seal of the forgotten order.", locked: false },
  { text: "Fragment 004: Pathways between realms.", locked: true },
  { text: "Fragment 005: Time bends in the hands of scribes.", locked: false },
];

// Function to render one entry
function renderEntry(entry) {
  const div = document.createElement("div");
  div.classList.add("entry");
  if (entry.locked) div.classList.add("locked");
  div.textContent = entry.text;
  entriesContainer.appendChild(div);
}

// Load first few
let index = 0;
function loadMoreEntries(count = 2) {
  for (let i = 0; i < count && index < entries.length; i++) {
    renderEntry(entries[index]);
    index++;
  }
}
loadMoreEntries();

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadMoreEntries();
  }
});
