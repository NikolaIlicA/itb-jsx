

//zadatak 16

let stavke = ["jab", "ban", "krus", "slji", "tres"];

let kupovina = niz => {
    let d1 = "<ul>";

    for (i=0; i < niz.length; i++){
        d1+= `<li>${niz[i]}</li>`;
    }
    return d1;
}
d1.innerHTML += kupovina(stavke);


//zadatak 17

let imena = ["partizan", "real", "Barsa", "Panata", "fener"];

let tabela = niz => {
    let d2 = "";
    for (i=0; i<niz.length; i++) {
        d2+= `<table><tr><td style ="border:1px solid black">${niz[i]}</td></tr></table>`
    }
    return d2;
}
d2.innerHTML += tabela(imena);

//Zadatak 18

let slike = ["Aquaba.jpg","Egipat.jpg","Grcka.jpg","MarsaAlam.jpg","RedSea.jpg"];

let putanja = niz => {
    let d3 = "";
    for (i=0; i<niz.length; i++) {
        d3+= `<img src="slike/${niz[i]}" style="height:300px; width:300px">`
    }
    return d3;
}
d3.innerHTML += putanja(slike);


//Zadatak 1 nizovi

let arkj = ["ab","ba","abs","bssa"];

let njiz = niz => {
    let d4 = "";
    for (i=0; i<niz.length; i++) {
        d4+= `<p style="display:inline-block; padding-left:15px;">${niz[i]}</p>`
    }
    return d4;
}
d4.innerHTML += njiz (arkj);

// zadatak 2

let brojevi1 = [4, 8, 0, -1, -3];
let brojevi2 = [-6,3,0,2,0,-2];
let brojevi3 = [1,2,3,4,5,6];

let sumaEl = niz => {
    let suma=0;
    for (i=0; i<niz.length; i++){
        suma+=niz[i];
    }
    return suma;
}
console.log(sumaEl(brojevi1));
console.log(sumaEl(brojevi2));
console.log(sumaEl(brojevi3));

//zadatak 3

let prEl = niz => {
    let proizvod=1;
    for (i=0; i<niz.length; i++){
        proizvod*=niz[i];
    }
    return proizvod;
}
console.log(prEl(brojevi1));
console.log(prEl(brojevi2));
console.log(prEl(brojevi3));

//zadatak 4

let SrVr = niz => {
    let suma=0;
    for (i=0;i<niz.length; i++){
        suma+=niz[i];
    }
    let srednja=suma/niz.length;
    return srednja;
}
console.log(SrVr(brojevi1));
console.log(SrVr(brojevi2));
console.log(SrVr(brojevi3));

// zadatak 5

/*
let brojevi1 = [4, 8, 0, -1. -3];
let brojevi2 = [-6,3,0,2,0,-2];
let brojevi3 = [1,2,3,4,5,6];
*/

let maksVr = niz => {
    let maks = niz[0];
    for (i=1; i<niz.length; i++){
        if(niz[i]>maks){
        maks = niz[i] ;
        }
    }
    return maks ;
}

console.log(maksVr(brojevi1));
console.log(maksVr(brojevi2));
console.log(maksVr(brojevi3));

//zadatak 6

 brojevi1 = [4, 8, 0, -1, -3];
 brojevi2 = [-6,3,0,2,0,-2];
 brojevi3 = [1,2,3,4,5,6];


let minVr = niz => {
    let min = niz[0];
    for (i=1; i <niz.length; i++){
        if (niz[i]<min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minVr(brojevi1));
console.log(minVr(brojevi2));
console.log(minVr(brojevi3));

// zadatak 7 

let indMax = niz => {
    let maks = niz[0];
    let index = 0;

    for (i = 0; i<niz.length; i++) {
        if(niz[i]>maks){
        maks = niz[i];
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
    for (i =1; i<niz.length; i++) {
        if(niz[i] < min){
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMin(brojevi1));
console.log(indMin(brojevi2));
console.log(indMin(brojevi3));

//zadatak 9 

let ElSrVR = niz => {
    let suma=0;
    let broj =0;
    for (i=0; i<niz.length; i++){
        suma+=niz[i];
    }
    let ArSr= suma/niz.length;
    for (i=0; i<niz.length; i++){
     if (niz[i]>ArSr) {
        broj++;
     }

    }return broj;
}
console.log(ElSrVR(brojevi1));
console.log(ElSrVR(brojevi2));
console.log(ElSrVR(brojevi3));


//zadatak 10

let zbirPoz = niz => {
    let suma = 0;
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(zbirPoz(brojevi1));
console.log(zbirPoz(brojevi2));
console.log(zbirPoz(brojevi3));

/*
let brojevi1 = [4, 8, 0, -1. -3];
let brojevi2 = [-6,3,0,2,0,-2];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 11

let brPar = niz => {
    let broj=0;
    for(i=0; i<niz.length;i++){
        if (niz[i]%2==0){
            broj++;
        }
    }
    return broj;
}
console.log(brPar(brojevi1));
console.log(brPar(brojevi2));
console.log(brPar(brojevi3));

//zadatak 12

let brParN = niz =>{
    let broj=0;
    for (i=0; i<niz.length; i++){
        if(niz[i]%2==0 && i%2!=0){
            broj++;
        }
    }
    return broj;
}
console.log(brParN(brojevi1));
console.log(brParN(brojevi2));
console.log(brParN(brojevi3));

// zadatak 13

let sumaElP = niz => {
    let suma=0;
    for (i=0; i<niz.length; i++){
        if(i%2==0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaElP(brojevi1));
console.log(sumaElP(brojevi2));
console.log(sumaElP(brojevi3));

//zadatak 14
/*
let znak = niz => {
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            niz[i]=-niz[i];
        }else if (niz[i]<0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));

let brojevi1 = [4, 8, 0, -1. -3];
let brojevi2 = [-6,3,0,2,0,-2];
let brojevi3 = [1,2,3,4,5,6];
*/

//zadatak 15 
let znak2 = niz => {
    for(i=0;i<niz.length; i++){
        if(niz[i]%2!=0 && i%2==0){
            niz[i]= -niz[i];
        }
    }
    return niz;
}
console.log(znak2(brojevi1));
console.log(znak2(brojevi2));
console.log(znak2(brojevi3));


///////////funkcije zadaci/////////////////////////

function pozdrav (ime,prezime) {
console.log(`ima ${ime} prezime ${prezime}`);
}
pozdrav("Nikola","Ilic");

//zadatak 2

function zbir (n,m) {
    let suma = n + m;
    return suma;
}console.log(zbir(4,5));

//zadatak 3

function neparan (n) {
    if (n%2!=0){
        console.log(`broj je neparan`);
    }else {console.log(`Broj je paran`);}
    
}neparan(5)

//zadatak 4

function maks2 (n,m) {
    if (n>m) {
        return n;
    }else {
        return m;
    }
}console.log(maks2(2,5));

//zadatak 5

function slika (adresa) {
    document.write(`<img src="${adresa}">`)
}slika("Hurgada.jpg")

//zadatak 6

function boja (color) {
    document.write (`<p style="color:${color}">Paragraf </p>`)
}boja ("red");

//zadaatk 12 

function aritmeticka3 (n,m) {
    let suma = 0;
    let broj=0;
    for (i=n; i<=m; i++){
        if(i%10 ==3){
        suma+=i;
        broj++}
    }
    let ArSr = suma/broj;
    return ArSr;
}console.log(aritmeticka3(1,23));

//zadatak 14

function recenica5 () {
    for (i=1; i<=5; i++){
        document.write(`<p style="font-size:${i*5}px">Paragraf</p>`)
    }

}recenica5();

//zadatak 15

function poslednjaPlata (n,a,d) {
    let bonus =0;
    for (i=1; i<n; i++){
            bonus+=d;
    }
    let plata = a + bonus;
    return plata;

}
console.log(poslednjaPlata(3,700,50));

function ukupnaPlata (n,a,d) {
    let plata=0;
    let povecanje=0;
    for (i=1; i<=n; i++){
        plata += a + d*(i-1);     
    }

   
    let ukPl = plata + povecanje;
    return ukPl;
}console.log(ukupnaPlata(4,700,50));

// zadatak 1 dodatni

function suma (n,m) {
    suma=0;
    for (i=n; i<=m; i++){
        suma+=i**3;
    }
    return suma;
}console.log(suma(1,3));

// zadatak 2 

function godine (godRodnjenja) {
    let vreme = new Date();
    let god = vreme.getFullYear();
    let ukGod = god - godRodnjenja;
    return ukGod;   
}console.log(godine(1991));

//zadatak 3

function deljiv (n,m,k) {
    let broj=0;
    for (i=n; i<=m; i++){
        if (i%k==0){
            broj++;
        }
    }
    return broj;
} console.log(deljiv(1,20,3));

//zadatak 4

function pilot (a1,b1,a2,b2) {
    let trajanjeLetaSati = a2 - a1;
    let trajanjeLetaMinuti = b2 - b1; 

    if (a1,a2 > 0 && a1,a2 < 23 && b1,b2 >0 && b1,b2 < 59 && a1<=a2 && b1<=b2){
        console.log(`Let ukupno traje ${trajanjeLetaSati} sati i ${trajanjeLetaMinuti} minuta`);
    }else
    
    return trajanjeLetaMinuti;
    return trajanjeLetaSati;

}pilot(9,11,15,26);


//zadatak 5 

//2 jabuke i 3 banane = 1 porcija
// 20% ostecenih jabuka

function jaban (jabuke, banane) {
    let jabukePorcija = Math.floor(0.8*jabuke / 2);
    let bananePorcija = Math.floor(banane/3);
    let porcijaUkupno = 0;
    if (jabukePorcija > bananePorcija){
        porcijaUkupno = bananePorcija;
    }else {
        porcijaUkupno = jabukePorcija;
    }
    console.log(`Moguce je da se napravi ukupno ${porcijaUkupno} porcija jabana`);

}jaban(100,100);

//zadatak 7

function masina (a,b,c) {
    let d =0;
    if (a==b+2 && b==c+2 ){
         d =c-2;
    }
    console.log(`duzina cetvrte nogare je ${d}`);
}masina (8,6,4);



// domaci zadaci 
//zadatak 1 

function paragraf (broj, string) {
    let d5 ="";
    d5 += `<p style="font-size: ${broj}px">${string}</p>`
    return d5;
}
d5.innerHTML += paragraf (30, "Neki tekst");

//zadatak 2 

function slike2 (n, str1, str2, str3) {
    for (i=1; i<=n; i++){
        if (i%2==0){
        document.write(`<img src="${str3}" style="border: 5px solid ${str1}; width:300px; height:300px">`)
        }
       else {
        document.write(`<img src="${str3}" style="border: 5px solid ${str2}; width:300px; height:300px">`)    }
    } 
} slike2 (8, "red", "green", "Hurgada.jpg" )


// zadaci FOR PETLJA

// zadatak 1 

for (i=1; i<=20; i++){
    console.log(`broj ${i}`);
}

//zadatak 2 

for (i=20; i>=1; i--){
    console.log(`broj ${i}`);
}

//zadatak 3
for  (i=1; i<=20; i++){
    if (i%2==0){
    console.log(`${i}`);
    }}


// zadatak 4
 
for (i=5; i<=15; i++){
    console.log(`dostruka vrednost brojeva je ${i*2}`);
}

//zadatak 5
n=10;
suma=0;
for (i=1; i<=n; i++){
    suma+=i;    

}console.log(`suma brojeva je jednaka ${suma}`);

//zadatk 6
n=5; 
m=6;
suma=0;
for (i=n; i<=m; i++){
    suma+=i;
}console.log(`suma brojeva je jednaka ${suma}`);

//zadatak 7
proizvod=1;
for (i=n; i<=m;i++){
    proizvod*=i;
}console.log(`proizvod brojeva je jednak ${proizvod}`);

//zadatak 8
let suKv = 0;
for (i=n; i<=m; i++){
    suKv+=i**2;
} console.log(`suma kv je jednaka ${suKv}`);

//zadatak 9

//zadatak 10

for (i=20; i<=100; i++){
    if (i%11==0){
        proizvod*=i;
    }
}console.log(`Proizvod je jednak ${proizvod}`);

//zadatak 12


suma=0;
let broj=0;
n=3;
m=4;
for (i=n; i<=m; i++){
    suma+=i;
    broj++;
    
}
let ArSr = suma/broj;
console.log(`ar sr je ${ArSr}`);

//zadatak 13

n= -10;
m= 20;
let brojPoz=0;
let brojNeg=0;
for (i=n; i<=m; i++){
    if (i<0) {
        brojNeg++;

    }else if (i>0){
        brojPoz++;
    }
}console.log(`ima ukupno ${brojPoz} pozitivnih brojeva i ${brojNeg} negativnih brojeva`);

//zadatak 14
n = 5; 
m = 50;
broj=0;

for (i=n; i<=m; i++){
    if (i%3==0 || i%5 ==0){
        broj++;
    }
}console.log(`Ima ukupnp ${broj} brojeva deljivih sa 3 ili 5`);

//zadatak 15

n=1; m=100; suma=0; broj=0;
for (i=n; i<=m; i++){
    if (i%10 == 4) {
        suma+=i;
        broj++;
    }
}console.log(`suma je ${suma} a ima ih ukupno ${broj}`);

// zadatak 16

n=1; m=12; let a = 2;suma=0;
for (i=n; i<=m; i++){
    if (i%a!=0) {
        suma+=i;
    }
}console.log(`suma je ${suma}`);

//zadatak 17
n=1; m=10; proizvod=1; a = 5;
for (i=n; i<=m; i++){
    if (i%a==0){
        proizvod*=i;
    }
}console.log(`Proizvod je ${proizvod}`);

//zadataak 18
let k = 40;
broj=0;
for (i=1; i<=k; i++){
    if (k%i==0){
        broj++;
    }
}console.log(`Uneti broj ${k} je deljiv sa ${broj} brojeva`);

// zadatak 19

k=13;

for (i=2; i<k; i++){
    if (k%i==0) {
        console.log(`broj je slozen`);
        break;
    }else {
        console.log(`broj je prost`);
    }
}

//
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

//zadatak 20
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

//zadatak 21

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

//zadatak 23

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


// dodatni zadaci petlje

// zadatak 1 

for (i=1; i <=30; i++){
    console.log(`Ja vezbam`);
}

//zadatak 3

for (i = 1; i <=100; i++){
    console.log(i);
}

//zadatak 4

for (i=5; i<=100; i+=5){
    console.log(i);
}

//zadatak 5 

for (i=102; i<=200; i+=2){
    console.log(i);
}

//zadatak 7
for (i=201; i<=300; i+=2){
    console.log(i);
}

//zadatak  8

n = 357;

let p = n%10;
let q = Math.floor(n/10)%10;
let r = Math.floor(n/100);
console.log(p);
console.log(q);
console.log(r);

//zadatak 9

p = 10;
q = 15;
r = 20;
//metara u sekundi

let pMin = p * 60;
console.log(pMin);

//zadatak 10
broj = 0;
for (i=3; i<=600; i+=4){
    console.log(i);
    broj++;
if (broj==100){
    break;
}}
    
console.log(broj);