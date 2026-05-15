// ─── 1. Créer une div et un paragraphe ───────────────────────────────────────
const maDiv = document.createElement('div');
maDiv.id = 'ma-div';

const monParagraphe = document.createElement('p');
monParagraphe.textContent = 'Ceci est un paragraphe';

maDiv.appendChild(monParagraphe);
document.body.appendChild(maDiv);

// ─── 2. Modifier le texte du paragraphe ──────────────────────────────────────
monParagraphe.textContent = 'Le texte a été modifié';

// ─── 3. Modifier le style CSS du paragraphe ──────────────────────────────────
monParagraphe.style.backgroundColor = 'lightblue';
monParagraphe.style.textAlign = 'center';

// ─── 4. Ajouter un événement click sur la div ─────────────────────────────────
maDiv.addEventListener('click', function () {
  monParagraphe.textContent = 'Un clic a été détecté';
});
