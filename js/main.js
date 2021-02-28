//Ecran d'acceuil

alert("Bonjour et bienvenue");
var firstname = prompt( "entrer votre prénom");
var nameOfPlayer = ("name of player");

    if (firstname !== nameOfPlayer) {
        prompt("merci d'entrer un nom correct");
        
}
    else {
        alert("Bonjour" + " " + firstname + " " + "comment aller vous ?, pret à jouer ?" );
}
// choix du joueur

var choixUtilisateur = prompt('Choisissez-vous pierre, feuille, ou ciseaux ?');    
     
// choix de l'ordinateur

var choixDeLordinateur = Math.random();
 if (choixDeLordinateur < 0.34 ) {
    alert(choixDeLordinateur = ("Pierre"));  
}
 else if (choixDeLordinateur <= 0.67 ) {
    alert(choixDeLordinateur = ("Feuille"));
}

 else { choixDeLordinateur = "Ciseaux";

}
alert("Choix de l'ordinateur"+ " " + choixDeLordinateur);


// comparer les resultats

var resultat = comparer(choixUtilisateur, choixOrdi);

if (resultat === 'EgalitÃ© !') {
    console.log('=> EgalitÃ© !');
  } else if (resultat === choixUtilisateur) {
    console.log('=> Gagnant de la manche:', resultat, '(joueur)');
    scoreJoueur++;
  } else {
    console.log('=> Gagnant de la manche:', resultat, '(ordi)');
    scoreOrdi++;
  }



