// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.push("Ralph");
console.log(cats);

cats.unshift ("Bob");
console.log(cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats);

cats.pop();
console.log (cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

cats.shift();
console.log (cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

const newCats = [...cats, "Broom"];
console.log (newCats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

const allCats = ["Arnold", ...cats];
console.log (allCats);

const newerCats = cats.slice(0,2);
console.log (newerCats);

const copyOfNewerCats = cats.slice(1);
console.log (copyOfNewerCats);