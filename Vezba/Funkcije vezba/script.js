// Zadatak 1

function pozdrav (ime,prezime) {
    console.log(ime,prezime);
}
pozdrav ("Nikola","Ilic");

//zadatak 2 
function zbir (a,b) {
    let suma = a + b; 
    console.log(`Suma brojeva je ${suma}`);   
}
zbir (2,11);

//zadatak 3
/*
function neparan (n) {
    if (n%2 !=0) {
        return console.log(`broj je neparan`);;
    }else {
        return console.log(`Broj je paran`);
    }
}
neparan(5);
*/
// drugi nacin - preko arrow fje  == ispisivace rezultat u boolean zapisu

let neparan1 = n => (n%2 != 0)
console.log(neparan1(7));

// zadatak 4

function maks2 (a,b) {
    if (a>b) {
        return a;
    }else {
        return b;
    }
}
console.log(maks2(4,5));

// drugi nacin == preko arrow

let makss2 = (a,b) => (a>b) ? a:b;
console.log(makss2(5,6));

let maks4 = (a,b,c,d) => maks2(maks2(a,b),maks2(c,d))
console.log(makss2(makss2(2,5), makss2(1,9)));

//zadatak 5

function prosledjuje (adresa) {
    document.write (`<img src="${adresa}" style="width:300px; height:300px">`)
}prosledjuje("Hurgada.jpg")

//zadatak 5 drugi nacin preko arrow fje + dodato da div bude plava pozadina i ima teks i da se slika ubacuje preko innerHTML

let prosl = adresa => `<img src="${adresa}" style="width:300px; height:300px">`
let d1 = document.getElementById("d1");
d1.innerHTML += prosl(`Hurgada.jpg`);


//zadatak 6

function boja (color) {
    document.write(`<p style="color:${color}"> Paragraf </p>`)
}boja("red")

// preko arrow i inner html

let bojaa = color => `<p style="color:${color}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, maxime!</p>`
let d2 = document.getElementById(`d2`);
d2.innerHTML = bojaa("green");

// zadatak 7

function sedmiDan (n) {
    if (n%7==0) {
        console.log(`Ponedeljak`);
    }
}sedmiDan(0)

//zadatak 8

function deljivSaTri (n,m) {
    let broj=0;
    for (i=n; i<=m; i++) {
        if (i%3 == 0){
            broj++;
        }
    }console.log(`ima ${broj} brojeva deljivih sa 3, u intervalu od ${n} do ${m}`);

}deljivSaTri(3,20);

// Zadatak 9 
function sumiraj (n,m) {
    let suma = 0;
    for (i=n; i<=m; i++) {
        suma+=i;
    }
    console.log(`suma brojeva je ${suma}`);
}sumiraj(5,7);

//zadatak 10
function mnozi (n,m) {
    let proizvod=1;
    for (i=n; i<=m; i++) {
        proizvod*=i;
    }
    console.log(`proizvod brojeva je ${proizvod}`);
}mnozi(2,4)

// zadatak 11

function aritmeticka (n,m) {
    
    let suma=0;
    let broj=0;
    for (i=n; i<=m; i++){
        suma+=i;
        broj++;
    }
    let ArSr = suma/broj;
    console.log(`Aritmeticka sredina je ${ArSr}`);
}aritmeticka (3,6)

// zadatak 12
function aritmetickaTri (n,m) {
    let suma = 0;
    let broj = 0;
    for (i=n; i<=m; i++) {
        if (i%10 ==3) {
            suma+=i;
            broj++;
        }
    }
    let ArSr3 = suma/broj;
    console.log(`Ar sredina je ${ArSr3}`);
}aritmetickaTri (2,13)

// zadatak 13

function velicinaFonta (h){
    document.write(`<h${h}> tekst </h${h}>`)
}velicinaFonta(1)

// drugi nacin preko innerhtml i arrow

let velFont = h => `<h${h}>Tekst</h${h}>`
d3 = document.getElementById(`d3`);
d3.innerHTML += velFont(1);

// zadatak 14

function recenica5 (font) {
    for (i=1; i<=5; i++){
        font++;
        document.write(`<p style="font-size:${font*5}px">Paragraf neki</p>`)
    }
}recenica5 (1)

//Zadatak 15

function poslPlata (n,a,d) {
    let poslednja = a + d*(n-1);
    console.log(`Poslednja plata je ${poslednja} eur`);
}poslPlata(5,700,50)

//b)

function UkupnaPlata (n,a,d) {
    let UkPl =0;
    for (i=0; i<n; i++) {  // kada sam stavio 0 umesto 1 za i=0, dobicu to da se u prvoj iteraciji (tj prvom mesecu) povecanje mnozi sa nulom, jer nema povecanje u prvom mesecu
        UkPl += a + d*i;
    }
    console.log(`Ukupna plata je ${UkPl}`);
}UkupnaPlata (5,700,50);



// zadatak domaci 1 

let fu = (broj, string) => document.write(`<p style="font-size:${broj}px">${string}</p>`)
fu (40, "neki tekst");

// zadatak domaci 2

function funkc (n,str1,str2,str3) {
    for (i=1; i<=n; i++) {
        if (i%2 ==0){
        document.write(`<img src="${str3}" style="border:32px solid ${str1}; height:200px; width:200px"><br>`)
        }else {
            document.write(`<img src="${str3}" style="border:32px solid ${str2}; height:200px; width:200px"><br>`)

        }
    }
} funkc (6, "blue", "green", "Hurgada.jpg")


/// dodatni zadaci za vezbu

// zadatak 1 

function sumaa (n,m) {
    let suma = 0;
    for (i=n; i<=m; i++) {
        suma+=i**3;
    }
    return suma;
}console.log(sumaa(1,2));

//zadtak2 

function godine (godRodjenja) {
    let god = new Date ();
    let godina = god.getFullYear();
    let ukGod = godina - godRodjenja;
    console.log(ukGod);
}godine(1991);

//zadatak 3

function deljiv (n,m,k) {
    let broj=0;
    for (i=n; i<=m; i++){
        if (i%k == 0){
            broj++;
        }
    }
    console.log(`Ima ukupno ${broj} brojeva deljivih sa ${k} izmedju ${n} i ${m} `);
}deljiv (1, 100, 4)

// zadatak 4

function pilot (a1,b1,a2,b2) {
    let vremeSati = a2-a1;
    let vremeMinuti = b2 - b1;
    if (a1,a2 >0 && a1,a2 <=23 && b1,b2 > 0 && b1,b2 <=59 ) {
        console.log(`Let je trajao ${vremeSati} sati i ${vremeMinuti} minuta`);
    }
}pilot (8,22,15,27)

// zadatak 5
// 100 jabuka 90 banana == 80 jabuka i 90 bananaa == 30 porcija (ostaje 20 jabuka)

function jaban (jabuke,banane) {
    let kolicinaJab = Math.floor(jabuke*0.8);
    let kolicinaBan = banane;
    let BrPorcijaJab = Math.floor(kolicinaJab/2)  // BrPorcijaJab = Math.floor(jabuke*0.8/2)
    let BrporcijaBan = Math.floor(kolicinaBan/3) // BrPorcijaBan = Math.floor(banane*/3)
    let BrPorcija=0;
    
    
    console.log(`imamo ${BrPorcijaJab} porcija jabuka i ${BrporcijaBan} porcija banana`);

    if (BrPorcijaJab>BrporcijaBan) {
        BrPorcija = BrporcijaBan; 
    }else {
        BrPorcija = PorcijaJab;
    }

    console.log(`Moze da se dobije ukupno ${BrPorcija} porcija jabana`);
 
}jaban (100,100)