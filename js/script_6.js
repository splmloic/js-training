//Récupérer l'arn CCGUCGUUGCGCUACAGC
let ArnChar = prompt("De quel ARN veux tu connaitre les acides aminées ?");

// Crée une array séparé par groupe de 3

let ArnArray = [];
for (let i = 0; i < ArnChar.length; i += 3){
    ArnArray.push(ArnChar.slice(i, i + 3))
};
//console.log(ArnArray);

// Comparer chaque index de l'array pour savoir qui est quoi 
let ResultArray = [];
ArnArray.forEach(Arn => {
    if(Arn === "UCU"||Arn === "UCC"||Arn === "UCA"||Arn === "UCG"||Arn === "AGC"){
        ResultArray.push("Sérine");
    }
    else if(Arn === "CCU"||Arn === "CCC"||Arn ==="CCA"||Arn ==="CCG"){
        ResultArray.push("Proline");
    }
    else if(Arn === "UUA"||Arn === "UUG"){
        ResultArray.push("Leucine");
    }
    else if(Arn === "UUU"||Arn === "UUC"){
        ResultArray.push("Phénylalanine");
    }
    else if(Arn === "CGU"||Arn === "CGC"||Arn === "CGA"||Arn === "CGG"||Arn === "AGA"||Arn === "AGG"){
        ResultArray.push("Arginine");
    }
    else if(Arn === "UAU"||Arn === "UAC"){
        ResultArray.push("Tyrosine");
    }
});
//console.log(ResultArray);

//Maintenant on va mettre la résult array en string
let ResultString = ResultArray.join("-");
console.log(ResultString);

/* UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine

CCU ou CCC ou CCA ou CCG => Proline

UUA ou UUG => Leucine

UUU ou UUC => Phénylalanine

CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine

UAU ou UAC => Tyrosine */