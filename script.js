// === Codex of Hidden Knowledge (Endless + Coil Unlock) ===

// Word pools
const adjectives = ["silent", "burning", "hidden", "eternal", "forgotten", "shattered", "ancient", "veiled", "iron", "crimson", "hollow", "obsidian", "sacred"];
const creatures = ["serpent", "raven", "shadow", "wanderer", "oracle", "twin flame", "wolf", "phantom", "scribe", "guardian", "mirror"];
const verbs = ["guards", "awakens", "consumes", "shatters", "seeks", "binds", "betrays", "remembers", "conceals", "reveals"];
const objects = ["seal", "gate", "memory", "circle", "crown", "labyrinth", "sword", "mask", "flame", "void", "temple", "oath"];
const mysteries = ["prophecy", "truth", "dream", "path", "destiny", "curse", "key", "hourglass", "sigil"];

// State to track monetization
let monetized = false;

// Random selector
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate a cryptic entry
function generateEntry() {
  const templates = [
    `When the ${random(adjectives)} ${random(creatures)} ${random(verbs)} the ${random(objects)}, the ${random(mysteries)} awakens.`,
    `Only the ${random(creatures)} of ${random(objects)} knows the ${random(mysteries)}.`,
    `The ${random(adjectives)} path is guarded by the ${random(creatures)}.`,
    `To break the ${random(objects)}, sacrifice the ${random(mysteries)}.`,
    `In the echo of ${random(objects)}, the ${random(creatures)} waits.`,
    `The ${random(mysteries)} belongs to the ${random(adjectives)} ${random(creatures)}.`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Create entry element
function createEntryElement(text, type = "free") {
  const div = document.createElement("div");
  div.className = `entry ${type}`;

  if (type === "locked" && !monetized) {
    div.innerHTML = `🔒 A secret lies hidden here...`;
  } else {
    div.innerHTML = text;
  }

  setTimeout(() => div.classList.add("visible"), 100);
  return div;
}

// Insert entries
function insertEntries(count = 10) {
  const container = document.getElementById("entries");
  for (let i = 0; i < count; i++) {
    const text = generateEntry();
    const type = Math.random() > 0.7 ? "locked" : "free"; // ~30% locked
    container.appendChild(createEntryElement(text, type));
  }
}

// Unlock previously locked entries if monetization starts
function unlockEntries() {
  document.querySelectorAll(".entry.locked").forEach(el => {
    el.innerHTML = generateEntry(); // reveal with new text
  });
}

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    insertEntries(10);
  }
});

// Web Monetization API listener
if (document.monetization) {
  document.monetization.addEventListener("monetizationstart", () => {
    monetized = true;
    unlockEntries();
  });
}

// Initial load
window.onload = () => {
  insertEntries(20);
};
