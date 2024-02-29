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

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
for(let index in entrepreneurs){
    if(entrepreneurs[index].year < 1980 && entrepreneurs[index].year >= 1970){
        console.log(entrepreneurs[index]);
    }
};

//Sors une array qui contient le prénom et le nom des entrepreneur
EntrepreneursName = []
for(let index in entrepreneurs){
    EntrepreneursName.push(`${entrepreneurs[index].first} ${entrepreneurs[index].last}`);
}
console.log(EntrepreneursName);

//Quel âge aurait chaque inventeur aujourd'hui
entrepreneurs.forEach(entrepreneur => {
    let age = 2024 - entrepreneur.year;
    console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} en 2024`);
});

//Trie les entrepreneurs par ordre alphabétique du nom de famille
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