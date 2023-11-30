document.getElementById("d1").innerHTML = "Ja se zovem Nikola Ilic";

console.log("Zdravo");

console.log("Pera"); console.log("Mika");

// Literali - Fiksne vrednosti

console.log(5);
console.log(-5.9);
console.log(3+4);
console.log("3"+"4"); // Konkatenacija - spajanje stringova - to je ovaj + izmedju 2 stringa
console.log("3+4");
console.log("3+4=", 3+4);
console.log("3+4=" + 3+4);
console.log("3+4=" + (3+4));
console.log(true);
console.log(false);

//Promenljive - Varijabilne vrednosti 

let x; // 1) kada ostavimo samo ovako ovo je Deklaracija promenljive, tj uvodjenje promenljive u program.

console.log(x); // ako stavimo ovo pre nego sto smo uveli x, ispalice u konzoli undefined - ovo je odsustvo vrednosti

x=5;
console.log(x); // jedanput deklarisem promenljivu, nema potrebe da je posle ponovo deklarisem. 

x = "Laza";  //mozemo da promenimo vrednost promenljive, pa smo ovde stavili string umesto number
console.log(x);

let y=true; // 2) definicija promenljive (deklaracija + dodela vrednosti)

console.log(y);

const z = -7.6; 
console.log(z);

let age;
console.log(age, age+3); // u konzoli ispali undefined i NaN (Not a number) - sto znaci da pokusavam numericku operaciju sa necime sto nije broj

age=null;
console.log(age, age+3); // ispali null 3  --> znaci on pokusava da konvertuje null u broj, i zato izbaci 3

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3+4)*2; // 14
console.log(broj);


//broj += 6; //20
//console.log(broj);

broj = broj + 6; // ovo je isto sto i broj+=6 // u izrazu broj = broj + 6 --> ovde je znak jednakosti zapravo dodela vrednosti, tj stara vrednost promenljive +6 // dobicemo rezultat 20 u konzoli
console.log(broj);

broj *= 5;
console.log(broj); // broj = broj * 5 i dobijamo 100

x=6;
x++; // uvecava vrednost promenljive za 1 --> dobice se 7
console.log(x);

++x;
console.log(x); // isto uvecava vrednost promenljive za 1 --> dobice se 8

// razlika izmedju prethodne dve varijante je u izrazima

x=6;
console.log(x++); // [post-increment] (1.iskoristi se stara vrednost promenljive x pa se onda uveca) --> prikazace 6 u konzoli
console.log(x); // treba da prikaze 7
console.log(++x); // treba da bude 8, jer je ovo [pre-increment] - prvo se uveca vrednost promenljive x pa se onda koristi


//Kolicnik
console.log(Math.floor(28/12)); //math.floor --> zaokruzice na donji ceo broj --> u ovom primeru rezultat ce biti 2

//Ostatak
console.log(28%12); // rezultat 4 // 28 = 2 * 12 + 4


x = 5;
y = 3;
console.log(x**y); // rezultat je 125 jer je 5 na treci




