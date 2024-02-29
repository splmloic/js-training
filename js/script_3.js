//Récupérer le nombre puis on initialise le tout
let Step = prompt("De quel nombre d'étage veux tu ta pyramide ?");
let Hashtag = "#";
let Space = " ";
// il faut une boucle avec un console log par étage 
for(let count = 1; count <= Step; count++){
    console.log(Space.repeat(Step-count) + Hashtag.repeat(count));
}
