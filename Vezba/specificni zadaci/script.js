// Напиши програм који исписује све цифре броја здесна на лево, сваку у посебном реду.

let n = 357;

let p = n%10;
let q = Math.floor(n/10)%10;
let r = Math.floor(n/100);
console.log(p);
console.log(q);
console.log(r);

// Дат је правилан низ бројева 3, 7, 11, 15, … Напиши програм који исписује првих 100 елемената тог низа.

let broj = 0;
for (i=3; i<=600; i+=4){
    console.log(i);
    broj++;
if (broj==100){
    break;
}}
    
console.log(broj);



//SAHOVSKA TABLA ZADATAK

let divSah = document.getElementById(`sah`);
let sah = `<table>`;
broj=1;

for (i=1; i<=8; i++){
    for (j=1; j<=8; j++){

        if(i%2==0 && j%2==0){
            sah+=`<span class="beloP"><p>${broj++}</p></span>`  
        }
        else if (i%2==0 && j%2!=0){
            sah+=`<span class="crnoP"><p>${broj++}</p></span>`
        }
        else if (i%2!=0 && j%2==0){
            sah+=`<span class="crnoP"><p>${broj++}</p></span>`
        }else if (i%2!=0 && j%2!=0) {
            sah+=`<span class="beloP"><p>${broj++}</p></span>`
        }
    }
    sah+= `<br>`
}
sah += `</table>`
divSah.innerHTML = sah;



//zadatak sa FOR petljom i ul li elementima

let divPetlja = document.getElementById (`petlja`);
let petlja = `<ul type="disc">`
broj=1;

for (i=1; i<=10; i++){
    if (i%3==0){
        petlja += `<ul type="circle" style="color:purple"><li>Element${broj++}</li></ul>`
    }else {
        petlja += `<li>Element${broj++}</li>`
    }
}
petlja += `</ul>`
divPetlja.innerHTML = petlja;


// Jelenin zadatak svaki drugi red druge boje
let divTabela = document.getElementById(`tabela`);
tabela = `<table>`;

for (i=1; i<=6; i++){
    if (i%2==0){
        tabela+= `<tr class="roze"><td>Tekst</td><td>Tekst</td></tr>`;
    }else if (i%2!=0)
     {tabela+= `<tr class="belo"><td>Tekst</td><td>Tekst</td></tr>`;}

}
tabela += `</table>`;
divTabela.innerHTML = tabela;


//ODREDITI DA LI JE DATI BROJ K PROST BROJ ====== 2 NACINA
// PRVI NACIN
let k=13;

for (i=2; i<k; i++){
    if (k%i==0) {
        console.log(`broj je slozen`);
        break; // mozda i ne treba ova komanda
    }else {
        console.log(`broj je prost`);
    }
}



// DRUGI NACIN
let prost = true;

k =13;

for (i=2; i<=Math.sqrt(k); i++) {
    if (k%i ==0) 
    {
        prost=false;
        break; // kada stavimo ovde break, onda to znaci da ce on cim nadje neki da je ostatak razlicit od 0 da zaustavi iteraciju 
    }
}
if (prost == true) {
    console.log(`Broj ${k} je prost`);
} else {
    console.log(`broj ${k} je slozen`);
}



//Napisati program kojim se izračunava i štampa srednja vrednost sledećeg niza od deset brojeva:1, 4, 9, ..., 81, 100 .



//zadatak 4 

for (i=1; i<=10; i++){
    if (i%2==0){
        console.log(`${i} je paran broj`);
    }else {console.log(`${i} je neparan broj`);}
}



/* Napisati program kojim se štampa sledeći trougao:
*
**
***
****
*****
******
*******
********
*********
**********
*/

for (i = 1; i<=10; i++){
    for (j=1; j<=i; j++){
        document.write(`*`)
    }
    document.write(`<br>`)
}


// Napisati program kojim se štampaju prvih 20 pozitivnih celih brojeva i njihovi faktorijeli. (Faktorijel broja 1 je 1, faktorijel broja 2 je 1 * 2 = 2, faktorijel broja 3 je 1 * 2 * 3 = 6, faktorijel broja 4 je 1 * 2 * 3 * 4 = 24, itd.) 

let faktorijel = 1;
for (i=1; i<=20; i++){
    faktorijel*=i;
    console.log(`broj ${i} i njegov faktorijel ${faktorijel}`);
}



/////////////////////////////////////////////////////////
////////////////// IF NAREDBA GRANANJA///////////////////
/////////////////////////////////////////////////////////


//zadatak 1 

n = 120;
if (n>=100){
    document.write(`<p style="color:red">Throw away</p>`)
} else {
    document.write(`<p style="color:green">Pack up</p>`)
}

//zadatak 3

let godina = 1991;
let vreme = new Date();
let god = vreme.getFullYear();
let godRodnjenja = god - godina;
if (godRodnjenja>=18){
    console.log(`Osoba je punoletna`);
}else {
    console.log(`Osoba je  maloletna`);
}

//zadatak 4

vreme = new Date();
let sati = vreme.getHours();

if (sati>12){
    console.log(`popodne je`);
}else {
    console.log(`prepodne je`);
}

//zadatak 5
let pol = "muski";
if (pol == "muski") {
    console.log(`Korisnik je musko`);
}else {
    console.log(`korisnik je zelsko`);
}

/*Moguće je i više puta ispitivati neku vrednost i u zavisnosti od toga se granati.


Ukoliko je jedan od uslova ispunjen ne granamo se dalje.


Else se izvršava ukoliko ni jedan od uslova nije ispunjen.
*/


//zadatak 6

let dani = vreme.getDay();

if (dani == 0 || dani == 6 ){
    console.log(`Vikend je`);
}else {
    console.log(`Radni dan je`);
}


// drugi nacin 
dani = vreme.getDay();

if (dani ==0){
     console.log(`vikend je`);
    }
    else if(dani == 6)
    {
    console.log(`vikend je`);
    }
    else {console.log(`radni dan je`);
}

//zadatak 7

sati = vreme.getHours();
if(sati < 12) {
    console.log(`jutro je`);
}else if (sati <20) {
    console.log(`dan je`);
}else {console.log(`vece je`);}

//zadatak 10

 p = 41
 q = 6;

if (p>4) {
    console.log(++p +`i` + --q);
}else console.log(++q + `i` + --p);

//zadatak 11

let c = 12.1;
if (c%1 !=0) {
   console.log(`Nije ceo broj`);
} else {
   console.log(`Ceo broj`);
}

//zadatak 15

let temp = 224;
 if (temp < -15 || temp > 40){
    console.log(`ekstremna temp`);
 }

 //zadatak 16

 let godi = vreme.getFullYear();
 
 if (godi%4==0 && godi%100!=0 || godi%400==0){
    console.log(`godina je prestupna`);
 }else {console.log(`kara banana`);}

 //zadatak 17

 let days = new Date ();
 let dni = days.getDay();
 let hrs = days.getHours();

 if ((dni <1 && dni >5 && hrs <18 && hrs>10) || (dni>0 && dni <6 && hrs >= 8 && hrs < 20)) {
    console.log(`Otvoreno`);
 }else {
    console.log(`zatvoreno`);
 }

 
 
 //zadatak 12
/*
 let x = 3;
 let y = 6;
 
 if (x>y) {
    if (x%2==0){
        console.log(`Veci je paran`);
        else {
        console.log(`veci je neparan`);
        }
    }if (y%3 == 0){
        console.log(`Manji je deljiv sa tri`);
    }else {
        console.log(`Manji nije deljiv sa tri`);
    }
 }else {
    if (y%2 ==0){
        console.log(`Veci je paran`);
    }else {
        console.log(`Veci je neparan`);
    }if (x%3==0){
        console.log(`Manji je deljiv sa tri`);
    }else {
        console.log(`Manji nije deljiv sa tri`);
    }
 }
}*/



/////////////////////////////////////////////////////////////////////
/////////////////NIZOVI VEZBA////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// zadatak 8

function deljivSaTri (n,m) {
    let broj = 0;
    for (i=n; i<=m; i++){
        if (i%3 ==0){
        broj++;
    }
}
    return (broj);
}console.log(deljivSaTri(1,7));

//zadatak 11

function aritmeticka (n,m) {
    let suma=0;
    let broj=0;
    for (i=n; i<=m; i++){
        suma+=i;
        broj++;
    }
    let ArSr = suma / broj;
    return ArSr;
}console.log(aritmeticka(2,6));

// zadatak 12

function aritmeticka3 (n,m){
    let suma = 0;
    let broj= 0;
    for (i=n; i<=m; i++){
        if (i%10==3){
            suma+=i;
            broj++;
        }
    }
    let ArSr3 = suma/broj;
    return ArSr3;
}console.log(aritmeticka3(1,13));

//zadatak 14
function recenica5 (){
    for (i=1; i<=5; i++){
        document.write(`<p style="font-size:${i*5}px">Neki paragraf</p>`)
    }
}recenica5();


////////////////////////////////////////////////////////////
//////////////NIZOVI////////////////////////////////////
////////////////////////////////////////////////////////


// zadatak 1

let auta = ["bmw","honda","Yugo","Fica","peglica"]
console.log(auta);

//zadatak 3


let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];

let sumaEl = niz =>{
    let suma = 0;
    for (let i=0; i < niz.length; i++){
        suma= suma + niz[i];
    }
    return suma;
}
console.log(sumaEl(brojevi1));
console.log(sumaEl(brojevi2));
console.log(sumaEl(brojevi3));

//zadatak 4

let SrVr = niz => {
    let suma=0;
    for (i=0;i<niz.length;i++){
        suma+=niz[i];
    }
    let srednja = suma / niz.length;
    return srednja;
}
console.log(SrVr(brojevi1));
console.log(SrVr(brojevi2));
console.log(SrVr(brojevi3));


//zadatak 5

let maksVr = niz => {
    let maks = niz[0];
    for (i = 1; i<niz.length; i++){
        if (niz[i]>maks){
            maks = niz[i];
        }
    }
    return maks;
}
console.log(maksVr(brojevi1));
console.log(maksVr(brojevi2));
console.log(maksVr(brojevi3));


/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 6

let minVr = niz => {
    let min = niz[0];

    for (i=1; i<niz.length; i++){
        if (niz[i]<min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minVr(brojevi1));
console.log(minVr(brojevi2));
console.log(minVr(brojevi3));

//zadatak 7 

let indMax = niz => {
    let maks = niz[0];
    let index = 0;

    for (i=1; i<niz.length; i++){
        if (niz[i]>maks){
            maks=niz[i];
            index = i;
        }
        
    }
    return index;
}
console.log(indMax(brojevi1));
console.log(indMax(brojevi2));
console.log(indMax(brojevi3));

//zadatak 8

let indMin = niz => {
    let min = niz[0];
    let index = 0;
    for (i=1; i<niz.length; i++){
        if (niz[i]<min){
            min=niz[i];
            index=i;
        }
    }
    return index;
}
console.log(indMin(brojevi1));
console.log(indMin(brojevi2));
console.log(indMin(brojevi3));

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 9 

let brElSrVr = niz => {
    let suma = 0;
    let broj = 0;
    for (i=0; i<niz.length; i++){
        suma+=i;      
    }
    let SrVr = suma/ niz.length;
    for (i=0; i<niz.length; i++){
       if (niz[i]>SrVr){
        broj++;
       }      
    }
    return broj;
}
console.log(brElSrVr(brojevi1));
console.log(brElSrVr(brojevi2));
console.log(brElSrVr(brojevi3));


//zadatak 10

let sumaPoz = niz => {
    let sumaPoz = 0;
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            sumaPoz+=niz[i];
        }
    }
    return sumaPoz;
}
console.log(sumaPoz(brojevi1));
console.log(sumaPoz(brojevi2));
console.log(sumaPoz(brojevi3));

//zadatak 11

let brPar = niz => {
    let broj =0;
    for (i=0; i<niz.length; i++){
        if (niz[i]%2==0){
            broj++;
        }
    }
    return broj;
}

console.log(brPar(brojevi1));
console.log(brPar(brojevi2));
console.log(brPar(brojevi3));
/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 12

let brParNep = niz => {
    let broj =0;
    let brNep=0;
    for (i=0; i<niz.length; i++){
        if (niz[i]%2==0 && i%2!=0){
            brNep++;
        }
    }
    return brNep;
}

console.log(brParNep(brojevi1));
console.log(brParNep(brojevi2));
console.log(brParNep(brojevi3));

//zadatak 13

let sumaElPar = niz => {
    let suma = 0;
    for (i=0; i<niz.length; i++){
        if (i%2==0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaElPar(brojevi1));
console.log(sumaElPar(brojevi2));
console.log(sumaElPar(brojevi3));

//zadatak 14
/*
let znak = niz => {
    for (i=0; i<niz.length;i++){
        if (niz[i]>0){
            niz[i]=-niz[i];
        }else if (niz[i]<0){
            niz[i] = -niz[i]
        }
        }
        return niz;
    }

    console.log(znak(brojevi1));
    console.log(znak(brojevi2));
    console.log(znak(brojevi3));

    /*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 15

let znak2 = niz => {
    for (i=0; i<niz.length;i++){
        if (niz[i]%2!=0 && i%2==0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak2(brojevi1));
console.log(znak2(brojevi2));
console.log(znak2(brojevi3));

//zadatak 16

let stavke = ["hleb", "mleko", "jogurt", "voda", "jabuke", "limun"];

let kupovina = niz => {
    let d1 = "<ul>";
    for (i=0; i<niz.length;i++){
        d1 += `<li>${niz[i]}</li>`
    }
    return d1;
}
d1.innerHTML += kupovina(stavke);

//zadatak 17

let timovi = ["Partizan","Panatinaikos","Real Madrid","Barselona","Makabi"];

let tabela2 = niz => {
    let d2 = "<table>";
    for (i=0; i<niz.length; i++){
        d2+= `<tr><td style="border:1px solid black">${niz[i]}</td></tr>`
    }
    return d2;
}
d2.innerHTML += tabela2(timovi);

//zadatak 3

let slike = ["slike/Aquaba.jpg","slike/Egipat.jpg","slike/Hurgada.jpg","slike/MarsaAlam.jpg","slike/OrangeBay.jpg"];

let galerija = niz => {
    let d3="";
    for (i=0;i<niz.length; i++){
        d3+= `<img src="${niz[i]}" style="width:300px; height:300px">`
    }
    return d3;
}
d3.innerHTML += galerija(slike);