

// 1. Sélectionner et stocker les éléments du DOM
const inputTache = document.getElementById('saisieTache');
const boutonAjouter = document.getElementById('ajouterTache');
const listeTaches = document.getElementById('listeTaches');

// 2. Click sur le bouton pour créer une tâche
boutonAjouter.addEventListener('click', ajouterTache);

// 3. Ajouter une tâche avec le texte de l'input + boutons "supprimer" et "modifier"
function ajouterTache() {
    const texteTache = inputTache.value.trim();

    if (texteTache === '') {
        alert('Veuillez saisir une tâche');
        return;
    }

    const li = document.createElement('li');
    li.textContent = texteTache;

    // Créer le bouton Supprimer
    const btnSupprimer = document.createElement('button');
    btnSupprimer.textContent = 'Supprimer';
    btnSupprimer.style.marginLeft = '10px';
    btnSupprimer.addEventListener('click', () => {
        li.remove(); // 4. Supprimer une tâche
    });

    // Créer le bouton Modifier
    const btnModifier = document.createElement('button');
    btnModifier.textContent = 'Modifier';
    btnModifier.style.marginLeft = '5px';
    btnModifier.addEventListener('click', () => {
        const nouveauTexte = prompt('Modifier la tâche :', li.firstChild.textContent);
        if (nouveauTexte !== null && nouveauTexte.trim() !== '') {
            li.firstChild.textContent = nouveauTexte.trim(); // 5. Modifier une tâche
        }
    });

    li.appendChild(btnSupprimer);
    li.appendChild(btnModifier);
    listeTaches.appendChild(li);

    // Vider le champ après ajout
    inputTache.value = '';
}
