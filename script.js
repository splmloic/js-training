function UnPointUn(){
    console.log("bonjour monde");
};

function UnPointDeux(){
    let user_name = prompt("Salut, comment tu t'appelle ?");
    //bonjour si l'user a dit quelque chose
    if (user_name){
        console.log("Bonjour " + user_name + " !");
    }
    else {
        console.log("Ohhhh fait pas le timide, recharge la page et recommence ")
    }
}

function Deux(){
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
}

function Trois(){
    //Récupérer le nombre puis on initialise le tout
    let Step = prompt("De quel nombre d'étage veux tu ta pyramide ?");
    let Hashtag = "#";
    let Space = " ";
    // il faut une boucle avec un console log par étage 
    for(let count = 1; count <= Step; count++){
        console.log(Space.repeat(Step-count) + Hashtag.repeat(count));
    }
}
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

function QuatrePointUn(){
    for(let index in entrepreneurs){
        if(entrepreneurs[index].year < 1980 && entrepreneurs[index].year >= 1970){
            console.log(entrepreneurs[index]);
        }
    };
}

function QuatrePointDeux(){
    EntrepreneursName = []
    for(let index in entrepreneurs){
        EntrepreneursName.push(`${entrepreneurs[index].first} ${entrepreneurs[index].last}`);
    }
    console.log(EntrepreneursName);
}
function QuatrePointTrois(){
    entrepreneurs.forEach(entrepreneur => {
        let age = 2024 - entrepreneur.year;
        console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} en 2024`);
    });
}
function QuatrePointQuatre(){
    let entrepreneursTries = entrepreneurs.slice();
    entrepreneursTries.sort((a, b) => {
        let nomA = a.last;
        let nomB = b.last;

    // Compare les noms de famille et retourne -1, 1 ou 0 en fonction de l'ordre alphabétique
        if (nomA < nomB) {
            return -1;
        } else if (nomA > nomB) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(entrepreneursTries);
}

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function CinqPointUn(){
    let Onetime = 0
    books.forEach( book => {
        if(book.rented !== 0){
            Onetime += 1;
        }
    });
    if (books.length === Onetime){
        console.log("Tous les livres ont été emprunté une fois");
    }
    else{
        console.log("Tous les livres n'ont pas été emprunté une fois");
    }
}

function CinqPointDeux(){
    let BestSeller = books[0];// initialisation

    for(let i = 1; i < books.length; i++){
        if(books[i].rented > BestSeller.rented){
            BestSeller = books[i];
        }
    };
    console.log(`Le Livre le plus emprunté est ${BestSeller.title} avec ${BestSeller.rented} emprunts`);
}
function CinqPointTrois(){
    let WorstSeller = books[0];// initialisation
    for(let i = 1; i < books.length; i++){
        if(books[i].rented < WorstSeller.rented){
            WorstSeller = books[i];
        }
    };
    console.log(`Le Livre le moins emprunté est ${WorstSeller.title} avec ${WorstSeller.rented} emprunts`);
}

function CinqPointQuatre(){
    let Found = books.find((book) => book.id === 873495);
    console.log(`le livre avec l'id 873495 est ${Found.title}`);
}

function CinqPointCinq(){
    let WrongBook = books.find((book) => book.id === 133712);
    console.log(`le livre a supprimer est ${WrongBook.title}`);

    let BooksWithoutWrongBook = books.filter(livre => livre.id !== 133712);
    console.log(BooksWithoutWrongBook);
}

function CinqPointSix(){
    let BooksWithNoWrongBook = books.filter(livre => livre.id !== 133712); // J'aurai pu rappeler le let précédent mais pour avoir une idée de fonction j'ai pas touché

    BooksWithNoWrongBook.sort((a, b) =>{
        if (a.title < b.title) {
        return -1;
        }
        if (a.title > b.title) {
        return 1;
        }
        return 0;
    });
    console.log(BooksWithNoWrongBook);
}

function Six(){
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
}

function Sept(){
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
}
