//Ecran d'acceuil

alert("Bonjour et bienvenue");
var firstname = prompt( "entrer votre prénom");
    
if (firstname === ("name")) {
        prompt("merci d'entrer un nom correct");
}
    else {
        alert("Bonjour" + " " + firstname + " " + "comment aller vous ?, pret à jouer ?" );
} 

// choix du joueur


var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

//choixDeLordinateur


var scoreOrdi = 0;
var scoreJoueur = 0;

for (var manche = 0; manche < 3; manche++) {     

var choixDeLordinateur = Math.random();
 if (choixDeLordinateur < 0.34 ) {
    console.log(choixDeLordinateur = ("Pierre"));  
}
  else if (choixDeLordinateur <= 0.67 ) {
    console.log(choixDeLordinateur = ("Feuille"));
}

  else { 
     
    choixDeLordinateur = "Ciseaux";
 }
} 

alert("Choix de l'ordinateur"+ " " + choixDeLordinateur);

// fonction comparer les choix

function compare(choix1, choix2) {
    if (choix1 === choix2) {
      return ("Egalité !");
    } 
    else if (choix1 === "pierre") {
    }   
      if (choix2 === "ciseaux") {
        return ("pierre");
      } 
      else if (choix2 === "feuille") {
        return ("feuille");
      }
     else if (choix1 === "feuille") {
     }   
      if (choix2 === "pierre") {
        return ("feuille");
      } 
      else if (choix2 === "ciseaux") {
        return ("ciseaux");
      }
     else if (choix1 === "ciseaux") {
      }
       
       if (choix2 === "pierre") {
        return ("pierre");
      }
       else if (choix2 === "feuille") {
        return ("ciseaux");
      } 
    }
    

// comparer les resultats

var resultat = comparer(choixUtilisateur, choixOrdi);

if (resultat === ("Egalité!")) {
    console.log("=> Egalité !");
} 
  
  else if (resultat === choixUtilisateur) {
    console.log("=> Gagnant de la manche:", resultat, "(joueur)");
    scoreJoueur++;
  } else {
    console.log("=> Gagnant de la manche:", resultat, "(ordi)");
    scoreOrdi++;
  }

// afficher les résultats du jeu

var message;
if (scoreOrdi === scoreJoueur) {
  message = ("égalité !");
} 
else if (scoreOrdi > scoreJoueur) {
  message = ("Perdu !");
}
 else {
  message = ("Gagné !");
}

alert(message + " Votre score: " + scoreJoueur + ", ordi: " + scoreOrdi);

