// === Codex of Hidden Knowledge (Endless Version) ===

// Word pools to generate phrases
const adjectives = ["silent", "burning", "hidden", "eternal", "forgotten", "shattered", "ancient", "veiled", "iron", "crimson", "hollow", "obsidian", "sacred"];
const creatures = ["serpent", "raven", "shadow", "wanderer", "oracle", "twin flame", "wolf", "phantom", "scribe", "guardian", "mirror"];
const verbs = ["guards", "awakens", "consumes", "shatters", "seeks", "binds", "betrays", "remembers", "conceals", "reveals"];
const objects = ["seal", "gate", "memory", "circle", "crown", "labyrinth", "sword", "mask", "flame", "void", "temple", "oath"];
const mysteries = ["prophecy", "truth", "dream", "path", "destiny", "curse", "key", "hourglass", "sigil"];

// Function to randomly pick from arrays
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

// Create and insert an entry element
function createEntryElement(text, type = "free") {
  const div = document.createElement("div");
  div.className = `entry ${type}`;
  div.innerHTML = type === "locked" ? `🔒 ${text}` : text;

  // trigger fade-in
  setTimeout(() => div.classList.add("visible"), 100);

  return div;
}

// Insert batch


