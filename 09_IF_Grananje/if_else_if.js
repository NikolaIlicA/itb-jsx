//Zadatak 8

let datum= new Date ();
let sati = datum.getHours();

if (sati < 9 ) {
    console.log(`Firma trenutno ne radi`);
} else if (sati >= 17) {
    console.log(`Firma trenutno ne radi`);
}else {
    console.log(`Firma radi`);
}


// Zadatak 7

let datum2 = new Date ();
let vreme = datum2.getTime();

if (vreme < 12) {
    console.log(`Dobro jutro`);

}else if (vreme < 18){
    console.log(`Dobar dan`);
}else {
    console.log(`Dobro vece`);
}


// Zadatak 6

let datum3 = new Date ();
let dan = datum3.getDay();


if (dan == 0 ) {
    console.log(`Vikend`);

} else if (dan == 6 ) {
    console.log( `Vikend`);
} else {
    console.log(`Radni dan`);
}


// Zadatak 9 **smene su 00 - 16


//Zadatak 10

let x = 8;
let y =4;

if (x>y) {
    console.log(++x + " i " + --y)
    
} else if (y>x) {
    console.log(++y + " i " + --x)
    
} else {
    console.log(`brojevi su jednaki`)
}

//Zadatak 11
 let c = 12.1;
 if (c%1 !=0) {
    console.log(`Nije ceo broj`);
 } else {
    console.log(`Ceo broj`);
 }

 // Zadatak 11 moze i preko komande Math.round

 let a = 15.6;
if (a === Math.round(a)) {
    console.log("Ceo broj");
} else {
    console.log("Nije ceo broj")
} 

//Zadatak 9 


// NE k1<p2  ili k2<p1

let p1 = 14;
let k1 = 18;
let p2 = 19;
let k2 = 23;

if (k1<=p2) {
    console.log(`NE`);
} else if (k2<=p1) {
    console.log(`NE`);
}else {
    console.log(`Da`);
}

