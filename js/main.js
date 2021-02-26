//Ecran d'acceuil

alert("Bonjour et bienvenue");
var firstname = prompt( "entrer votre prénom");

if (firstname == null || firstname == "" ) {
    alert( "l'utilisateur n'a pas entrer de prenom");
}
else {
    alert("Bonjour" + " " + firstname + " " + "comment aller vous ?, pret à jouer ?" );
}

// erreur dans la mise en place de tolowercase : reparer avant de continuer!!!!!!!!!! 

var choixDuJoueur = prompt("faite votre choix : Pierre, Feuille, Ciseaux ?"); 


    var choice = ("Pierre", "Feuille" , "Ciseaux") ;
    var res = choice.toLowerCase();
    
    
    // choix du joueur : 

    if(choixDuJoueur !== "Pierre" || choixDuJoueur !== "Feuille" || choixDuJoueur!== "Ciseaux" ) {

        alert("choix inconnu" + " "+ firstname + " " + "!! Veuillez choisir parmi les choix proposé !!");
        
        var choixDuJoueur = prompt("faite votre choix : Pierre, Feuille, Ciseaux ?");
     
        var word = ("pierre, feuille, ciseaux");
            }
                else {
                 alert(choixDuJoueur);
            }


// choix de l'ordinateur

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

