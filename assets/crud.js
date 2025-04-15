// ! Objectif: faire une todolist a partir des elements presents sur la page crud.html
// ! 1. selectionner et stocker les elements du DOM
// ! 2. click sur le bouton cree une tache pour creer une tache
// ! 3.ajouter une tache avec le text de l'input et deux boutons `supprimer` et ``modifier``
// ! 4. supprimer une tache en cliquant sur le bouton `supprimer`
// ! 5. modifier une tache en cliquant sur le bouton `modifier` avec un prompt

// todo 1 -> selectionner et stocker l'enemble des elements du DOM pour les Manipuler par la suite
    // je selectionne et je stocke l'input text
    // je selectionne et je stocke le bouton



    
  
    // 1. Sélectionner et stocker les éléments du DOM
    const inputTache = document.getElementById('saisieTache');
    const boutonAjouter = document.getElementById('ajouterTache');
    const listeTaches = document.getElementById('listeTaches');
  
    // 2. Écouter le clic sur le bouton "Ajouter"
    boutonAjouter.addEventListener('click', () => {
      const texteTache = inputTache.value.trim();
  
      if (texteTache !== '') {
        ajouterTache(texteTache);
        inputTache.value = ''; // vider le champ après ajout
      }
    });
  
    // 3. Fonction pour ajouter une tâche
    function ajouterTache(texte) {
      const li = document.createElement('li');
  
      const span = document.createElement('span');
      span.textContent = texte;
  
      const boutonSupprimer = document.createElement('button');
      boutonSupprimer.textContent = 'Supprimer';
      boutonSupprimer.addEventListener('click', () => {
        li.remove(); // 4. Supprimer la tâche
      });
  
      const boutonModifier = document.createElement('button');
      boutonModifier.textContent = 'Modifier';
      boutonModifier.addEventListener('click', () => {
        const nouveauTexte = prompt('Modifier la tâche:', span.textContent);
        if (nouveauTexte !== null && nouveauTexte.trim() !== '') {
          span.textContent = nouveauTexte; // 5. Modifier la tâche
        }
      });
  
      li.appendChild(span);
      li.appendChild(boutonModifier);
      li.appendChild(boutonSupprimer);
  
      listeTaches.appendChild(li);
    }
 
  