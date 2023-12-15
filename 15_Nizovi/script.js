let cars = [ "Toyota","BMW","Volvo"];
console.log(cars);

let razno = [15,-3.5, "hello", false, [1,2,3]] // vrednosti elemenata niza
console.log(razno);
console.log(razno[0]); // ovom komandom sam zapravo trazio prvi element u nizu
console.log(razno[2]); // dobili smo 3.element u nizu

// pozicija elemenata u nizu se naziva index, i on pocinje od 0 u konzoli = sto znaci da ce n-ti element u nizu imati poziciju n-1

let niz = []
niz [1] = "Pera";
niz [3] = "Mika"
console.log(niz);
console.log(niz[3]);
console.log(niz[4]);

//niz [] = "Lena" === ispaljuje gresku jer ne moraju redom da se dodeljuju indeksi, ali indeks mora biti dodeljen

niz[1]="Zika"
console.log(niz);



////////PROLAZAK KROZ SVE ELEMENTE NIZA //////////////

let auta = ["volvo","bmw","audi","honda"];

for (let i = 0; i< auta.length; i++){  // stavljamo da je strogo manje od duzine niza i da i krece od nule, zbog pravila pozicioniranja (da za n elemenata  ima n-1 pozicija)
    console.log(auta[i]);
}

for (let i=0; i< razno.length; i++) {
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4]; // u gornjem nizu razno jurimo ovaj unutrasnji niz da pozovemo
for (let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

//drugi nacin za pisanje
for(let i=0; i<razno[4].length; i++){
    console.log(razno[4][i]);
}


let brojevi = [4,3.5,8,10];

// Uvecati vrednosti svih elemenata niza za 10%

/*

for (let i = 0; i <brojevi.length; i++){
    brojevi[i]*=1.1;
}
console.log(brojevi[]);
*/


/*
for (i=0; i<brojevi.length; i++) {
    console.log(brojevi[i]);
}
*/