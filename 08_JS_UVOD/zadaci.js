// Zadatak 1
let sati=19;
let minuti=39;

let odPonoci = sati*60 + minuti;
console.log("Minuta od ponoci:" + odPonoci);

// testiramo sada da li je dobar kod --> stavicemo npr 0 sati i 10 minuta i saltamo neke vrednosti da vidimo da li je dobro

console.log("Minuta od ponoci:" + (sati*60 + minuti))

// Koliko je minuta ostalo do ponoci

console.log("Minuta ostalo do ponoci: " + (24*60 - odPonoci))


//Zadatak 2



console.log("sati i min od ponoci:" + (Math.floor(odPonoci/60)) + " " + (odPonoci%60));


//Zadatak 3

let x = 500;
let y = 400;
let z = 1000;

console.log("Kusur je: " + (z - (x + y)));


// Zadatak 6
// Prva konverzija (eur -> din)

let ukupnoEur = 70;
let kursEur = 117.29;
let ukupnoDin = ukupnoEur*kursEur;

console.log(ukupnoDin);

//Druga konverzija (din -> eur)

let novacDin = 5000;
let novacEur = novacDin/kursEur;
console.log(novacEur);

//Zadatak 7

//Prva konverzija 

let brojEur = 100;
let kursDol = 106.79;

let brojDin = brojEur * kursEur;
let brojDol = brojDin / kursDol;

// mozemo i u jednoj formuli let brojDol = brojEur * kursEur / kursDol

console.log(brojDol);

//druga konverzija iz dolara u eur

console.log(brojDol*kursDol/kursEur)

//Zadatak 8

let Celzijus = 30;
let Farenhajt = Celzijus*1.8 + 32;

console.log(Farenhajt);

//Druga konverzija

let Farenhajt1 = 100;
let Celzijus1 = (Farenhajt1 - 32)/1.8;
console.log(Celzijus1);

//Zadatak 9 

// prva konverzija

let Celzijus2 = 30;
let Kelvin = Celzijus2 + 273.15;

console.log(Kelvin);

// druga konverzija

let Kelvin1 = 400;
let Celzijus3 = Kelvin1 - 273.15;

console.log(Celzijus3);


// Math.ceil funkcija zaokruzuje na gornju vrednost 


// ZADATAK 4 --> dohvatiti trenutno vreme

let datum = new Date (); // na ovaj nacin datum je promenljiva koja sadrzi informacije o trenutnom datumu i vremenu. KUCAM NA GOOGLEU GET TIME METODS W3SCHOOLS
let god = datum.getFullYear();
let mes = datum.getMonth();
let dat = datum.getDate();
console.log(god , mes + 1);
console.log(god, mes+1, dat);
