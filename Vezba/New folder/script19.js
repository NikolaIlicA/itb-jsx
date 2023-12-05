// Zadatak 

let a = 3;
let b = "3";

if (a=b) {
    console.log(`Jednake su vrednosti`);
} else {
    console.log(`Razlicite vrednosti`);
}

if (a==b) {
    console.log(`jednake`);
}else {
    console.log(`razlicite`);
}

//Zadatak 1

let q = 150;
let r = 100;

if (q>=r) {
    document.write(`<p style="color:green">Pack up</p>`)
} else { 
    document.write (`<p style="color:red">Throw away </p>`)
}

//Zadatak 3

let godina = new Date ();
let god = godina.getFullYear();
let x = 2008;

let punoletan = god - x;

if (punoletan >= 18) {
    document.write(`Punoletan je`);
}else {
    document.write(`Ostalo je `+ (18 - punoletan) + ` godina do punoletstva`);
}

//Zadatak 4

let vreme = new Date ();
let sati = vreme.getHours ()

if (sati >= 12) {
    document.write(`Popodne je`)
}else {
    document.write(`Prepodne`)
}

//Zadatak 5

let rod = "m";

if (rod=="m") {
    console.log(`Muski rod`);
}else {
    console.log(`Zenski rod`);
}

//Zadatak 2

let t = -15;
if(t >= 0) {
    let paragraf = document.getElementById(`temperatura`); // Preuzmem paragraf iz HTML-a po njegov id-u
    paragraf.innerHTML = `Temperatura je u <b>plusu</b>`; // Upišem u paragraf preko .innerHTML
    paragraf.style.color = `red`;
} else {
    let paragraf = document.getElementById(`temperatura`);
    paragraf.innerHTML = `Temperatura je u <b>minusu</b>`;
    paragraf.style.color = `blue`;
}

