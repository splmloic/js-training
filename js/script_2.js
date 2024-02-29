//Récupérer le nombre
let BaseNum = prompt("De quel nombre veux tu connaitre la factorielle ?");
//si négatif alors pas possible, si == 0 ça donne 1
if (BaseNum < 0) {
    console.log("Erreur ! Les factorielle de nombre negatif n'existe pas.");
}
else if (BaseNum == 0) {
    console.log(`La factorielle de ${BaseNum} est 1.`);
}
//Sinon on fait le calcul de factorielle
else {
    let answer = 1;
    for ( let i = 1; i<= BaseNum; i++){
        answer *= i;
    }
    let msg = `La factorielle de ${BaseNum} est ${answer}`;
    console.log(msg);
}