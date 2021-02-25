alert("Bonjour et bienvenue");
var firstname = prompt( "entrer votre prénom");

if (firstname == null || firstname == "" ) {
    alert( "l'utilisateur n'a pas entrer de prenom");
}
else {
    alert("Bonjour" + " " + firstname + " " + "comment aller vous ?, pret à jouer ?" );
}
var choiceplayer = ["Pierre", "Feuille", "Ciseaux"];
    console.log(choiceplayer[0]);
    console.log(choiceplayer[1]);
    console.log(choiceplayer[2]);