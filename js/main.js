alert("Bonjour et bienvenue");
var firstname = prompt( "entrer votre prénom");

if (firstname == null || firstname == "" ) {
    alert( "l'utilisateur n'a pas entrer de prenom");
}
else {
    alert("Bonjour" + " " + firstname + " " + "comment aller vous ?, pret à jouer ?" );
}
var choixDuJoueur = prompt("faite votre choix : Pierre, Feuille, Ciseaux ?"); 

var choixDeLordinateur = Math.random();
 if (choixDeLordinateur < 0.34 ) {
    var choixDeLordinateur = ("Pierre");  
}
 else if (choixDeLordinateur <= 0.67 ) {
    var choixDeLordinateur = ("Feuille");
}

 else { choixDeLordinateur = "Ciseaux";

}
alert("Choix de l'ordinateur"+ " " + choixDeLordinateur);

