// On attend que la page soit TOUT À FAIT chargée pour être sûr que l'audio existe
window.addEventListener('DOMContentLoaded', function() {
    console.log("Le DOM est entièrement chargé !");
});

const sonMagique = document.getElementById('son-magique');
const container = document.querySelector('.container');
console.log("Vérification du son :", sonMagique);
const monFormulaire = document.getElementById('invocation');
const maZoneResultat = document.getElementById('resultat');
const champPrenom = document.getElementById('prenom');
const selectCreature = document.getElementById('creature');
const texteMessage = document.getElementById('message');
const boutonRecommencer = document.getElementById('recommencer');
const avatarCreature = document.getElementById('avatar-creature');

monFormulaire.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // On lance le son et le flou
    if (sonMagique) sonMagique.play();
    container.classList.add('flou-magique');

    setTimeout(function() {
        const prenomUtilisateur = champPrenom.value;
        const creatureChoisie = selectCreature.value; // Récupère "chat", "dragon", etc.
        
        // On change l'image directement grâce à la valeur textuelle brute
        avatarCreature.src = `${creatureChoisie}.png`; 

        // On crée la phrase pour l'affichage (on peut remettre du joli texte ici)
        let nomAffichage = "";
        if (creatureChoisie === "chat") nomAffichage = "le Chat-Octo";
        if (creatureChoisie === "dragon") nomAffichage = "le Dragon-Debug";
        if (creatureChoisie === "licorne") nomAffichage = "la Licorne-CSS";
        if (creatureChoisie === "renard") nomAffichage = "le Renard-Refacto";

        texteMessage.textContent = `${prenomUtilisateur}, ${nomAffichage} a entendu ton appel !`;

        // Switch des vues
        monFormulaire.classList.add('cache');
        maZoneResultat.classList.remove('cache');
        container.classList.remove('flou-magique');
    }, 400); 
});

boutonRecommencer.addEventListener('click',function(){
    maZoneResultat.classList.add('cache');
    monFormulaire.classList.remove('cache');
    monFormulaire.reset();
});
