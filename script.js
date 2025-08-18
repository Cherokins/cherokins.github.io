const entries = [
  { text: "In the beginning, the Codex whispered secrets only shadows knew.", type: "free" },
  { text: "🔮 The moon speaks not in light, but in memory.", type: "free" },
  { text: "Here lies a hidden law: power bends not to time, but to silence.", type: "locked" },
  { text: "The rivers remember every name ever spoken upon their shores.", type: "free" },
  { text: "Beneath the 7th veil lies the first truth. Few dare lift it.", type: "locked" }
];

let index = 0;
const container = document.getElementById("entries");

// Render one entry
function renderEntry(entry) {
  const div = document.createElement("div");
  div.className = "entry";

  if (entry.type === "locked") {
    div.setAttribute("data-text", entry.text);
    div.textContent = "🔒 Hidden Knowledge (Unlock with Coil)";
    div.classList.add("locked");
  } else {
    div.textContent = entry.text;
  }

  container.appendChild(div);
}

// Load more entries (loop endlessly)
function loadMore() {
  for (let i = 0; i < 3; i++) {
    renderEntry(entries[index % entries.length]);
    index++;
  }
}

// Infinite scroll via IntersectionObserver
const sentinel = document.getElementById("sentinel");
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMore();
  }
});
observer.observe(sentinel);

// Coil Monetization Unlock
function checkMonetization() {
  if (document.monetization && document.monetization.state === "started") {
    document.querySelectorAll(".entry.locked").forEach(e => {
      e.classList.remove("locked");
      e.textContent = e.getAttribute("data-text");
    });
  }
}

if (document.monetization) {
  document.monetization.addEventListener("monetizationstart", checkMonetization);
}

// Initial load
loadMore();
