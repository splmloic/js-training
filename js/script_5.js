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

//Est-ce que tous les livres ont été au moins empruntés une fois ?

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

//Quel est livre le plus emprunté ?

let BestSeller = books[0];// initialisation

for(let i = 1; i < books.length; i++){
    if(books[i].rented > BestSeller.rented){
        BestSeller = books[i];
    }
};
console.log(`Le Livre le plus emprunté est ${BestSeller.title} avec ${BestSeller.rented} emprunts`);

//Quel est le livre le moins emprunté ?

let WorstSeller = books[0];// initialisation
for(let i = 1; i < books.length; i++){
    if(books[i].rented < WorstSeller.rented){
        WorstSeller = books[i];
    }
};
console.log(`Le Livre le moins emprunté est ${WorstSeller.title} avec ${WorstSeller.rented} emprunts`);

//Trouve le livre avec l'ID: 873495

let Found = books.find((book) => book.id === 873495);
console.log(`le livre avec l'id 873495 est ${Found.title}`);

//Supprime le livre avec l'ID: 133712

let WrongBook = books.find((book) => book.id === 133712);
console.log(`le livre a supprimer est ${WrongBook.title}`);

let BooksWithoutWrongBook = books.filter(livre => livre.id !== 133712);
console.log(BooksWithoutWrongBook);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

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