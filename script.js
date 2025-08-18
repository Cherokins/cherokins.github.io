// Detect Coil (Web Monetization API)
document.monetization?.addEventListener('monetizationstart', () => {
  document.querySelectorAll('[data-premium]').forEach(el => {
    el.classList.remove('locked');
  });
});

// Infinite scroll simulation
const entries = [
  {
    title: "Shadow Discipline",
    text: "True discipline is not seen in public. It’s what you choose when no eyes are watching."
  },
  {
    title: "The River Mind",
    text: "Thoughts are like rivers — don’t fight them, redirect them."
  },
  {
    title: "Atomic Resolve",
    text: "When resolve is broken into daily atoms, it becomes unbreakable."
  }
];

let index = 0;
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    if (index < entries.length) {
      const container = document.getElementById('stream');
      const article = document.createElement('article');
      article.className = 'card';
      article.innerHTML = `<h3>${entries[index].title}</h3><p class="muted">${entries[index].text}</p>`;
      container.appendChild(article);
      index++;
    }
  }
});
