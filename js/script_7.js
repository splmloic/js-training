//Récupérer Le message a transmettre a l'ado 
let talk = prompt("Tu veux quoi WEsheeee (a lire avec voix cassé)");
let talkArray = talk.split(" ");

if(talkArray[talkArray.length-1] === "?"){
    console.log("Ouais Ouais...");
} else if( talk !== "" && talk.toUpperCase() === talk){
    console.log("Pwa, calme-toi...");
} else if(talkArray.includes("Fortnite")){
    console.log("on s' fait une partie soum-soum ?");
} else if(talk === ""){
    console.log("t'es en PLS ?");
} else {
    console.log("balek.");
}



/* Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ; */