// funkcije su izdvojeni delovi koda koje pisemo izmedju viticastih zagrada. Svaka fja prihvata parametre, ima svoje telo, tj kod koji treba da se izvrsi i fja se poziva
// u momentu poziva izvrsava se kod koji se nalazi izmedju viticastih zagrada

//CALLBACK funkcije - Posto funkcije mozemo dodeliti promenljivama, to znaci da se funckija moze proslediti drugoj funkciji kao promenljiva. Funkcija koja se prosledjuje kao parametar se naziva CALLBACK funkcija zato sto ce biti pozvana kasnije, unutar druge funkcije

// functionTwo (functionOne); ==> drugoj funkciji se prva prosledjuje kao parametar



/*Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
U konzoli,
U nekom div elementu na stranici.
*/


// TEST primeri 

let a = [-6,8,11,6,0];
let b = ["pera", "mika","laza"];

// BEZ CALLBACK FUNKCIJE

function ispisNizaKonzola(niz) {
    let s = "";
    for (let i = 0; i<niz.length; i++){
        s += niz[i] + " "; // znaci ispisujemo u jednom redu u konzoli, a dodavanjem + " " smo zapravo dodali samo razmak izmedju dve vrednosti niza prilikom ispisa
    }
    console.log(s);
}
function ispisNizaStranica(niz) {
    let s = "";
    for (let i = 0; i<niz.length; i++){
        s += niz[i] + " ";
    }
    s+=`<br>`
    let div = document.getElementById("container");
    div.innerHTML += s;
    
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

// Funkicja 1: za niz=> {for petljom prodjemo kroz sve elemente niza i generisani string ispisemo u konzoli}
//Funkicja 1: za niz=> {for petljom prodjemo kroz sve elemente niza i generisani string ispisemo u div tagu}

//umesto ova dva odvojena mozemo i ovako ==> Funkcija: (niz,nacin) => {for petljom prodjemo kroz sve elemente niza, i generisani string ispise na zadati nacin }


//SA CALLBACK funkcijama

function ispisKonzola (p){
    console.log(p);
}

function ispisStranica(p){
    let div=document.getElementById(`container`);
    div.innerHTML += p;
}

function ispisNiza (niz, cb) {
    let s = "";
    for (let i = 0; i<niz.length; i++){
        s += niz[i] + " ";
    }
    
    cb(s);
}

ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisStranica);
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b,ispisStranica);


//ANONIMNA FUNKCIJA KAO CALLBACK FUNKCIJA
ispisNiza([1,2,3,4,5], function(p){
    console.log(p);          // ovde smo stavili da nam callback fja bude anonimna fja      function sa parametrom (p)
});

ispisNiza([2,3,4,6,7,8], function (p){
    console.log(p);
});

//ARROW FUNKCIJA KAO CALLBACK FUNKCIJA
ispisNiza([9,8,7,6], p=>{
    console.log(p);
});
//znaci u anonimnoj i arrow funkciji mi smo samo ispisali celu funkciju umesto sto smo uneli naziv te fje


//CALLBACK FJA CE BITI DODELJENA KAO PARAMETAR NEKOJ DRUGOJ FUNKCIJI I BICE PROZVANA OD TE DRUGE FUNKCIJE



// Za sada, za nas nivo znanja, rezultat callback funkcije je isti kao da smo na kraju svake funkcije uradili ispis, bilo na stranici bilo u konzoli. Sustinu callback fje cemo raditi posle nove godine.

/* Kratak rezima Callback fje == imamo dva niza, niz a i niz b, jedan je bio brojni drugi je bio string. kada smo za ba niza hteli da ih pisemo u konzoli, pravili smo funkciju koja generise kod koji ispisuje niz u konzoli i fju smo nazvali ispisNizaKonzola. Isto smo uradili sa funkcijom koja ispisuje sadrzaj na stranicu u div tag, i nazvali tu funkciju izpisNizaStranica. 
Koriscenjem Callback funkcija, mi zapravo tretiramo druge funkcije kao parametre. Npr, napravili smo fju za ispis sadrzaja u konzolu, i nazvali je function ispisKonzola sa parametrom p (zasto bas p, i da li je on tu samo fiktivno, a svakako cemo dodeliti parametar kasnije kroz callback fju). Napravili smo i drugu funkciju kojom ispisujemo sadrzaj na stranicu, function ispisNiStranica. 
Nakon toga kreirali smo funkciju ispisNiza, sa parametrima (niz, cb) ==> nizovi su nam niz a i niz b, a cb je callback funkcija koju cemo prozvati.
***preko ove funkcije mi primenjujemo druge funkcije na postojece nizove**** */





//////////////////////////////////////////////////////////////////////
////////////////////ForEach PETLJA/////////////////////////////////
///////////////////////////////////////////////////////////////////


//koristi se kada zelimo da iteriramo kroz sve clanove niza.
//for petlju smo koristili da iteriramo kroz indexe niza, znaci mogli smo da biramo da li cemo da iteriramo kroz ceo niz ili necemo
// u forEach petlji, ona kao parametar prihvata callback funkciju

// za iteraciju kroz sve clanove nekg niza

/*
let a = [-6,8,11,6,0];
let b = ["pera", "mika","laza"];
*/

a.forEach(elem=>{
    console.log(`Element ${elem}`);
});

b.forEach(el=>{
    console.log(`Element je ${el}`);
})

//forEach petlja sa callback fjom

a.forEach(ispisKonzola);
b.forEach(ispisKonzola);
b.forEach(ispisStranica);

// forEach petlja - prolazi kroz sve elemente niza i za svaki element niza poziva callback fju i prosledjuje vrednost elementa kao argument
//  a = [-6,8,11,6,0]; ispisivace se na sledeci nacin:
//ispisKonzola(-6);
//ispisKonzola(8);
//ispisKonzola(11);
//ispisKonzola(6);
//ispisKonzola(0);


// uglavnom cemo na predavanjima u forEach stavljati anonimne funkcije, jer necemo imati toliko istih fja koje cemo koristiti, pa da pozivamo po imenu tu jednu te istu funkciju
// retko cemo koristiti imenovane fje u forEach

a.forEach(function(e) {
    console.log(e);
});

a.forEach(e=>{
    let div = document.getElementById("container");
    div.innerHTML += e + " "; // dodajemo razmak sa ovim " "
});

//forEach funkcija prihvata dva parametra = prvi je vrednost elementa, drugi je index

a.forEach((e,i)=>{
    console.log(`Element ${e} u nizu ima index ${i}`);
});

//forEach ne mozemo kasnije da pozivamo ako nam treba






//zadaci iz nizova ali preko forEach

//zadatak 2

//Test primeri
let c = [6,8,9,3,1];

let sumaEl = niz=>{
    let suma=0;
    niz.forEach(el=>{  // ovo ovde je zapravo callback fja koju sprovodimo nad nizom koji cemo definisati(ovde je to niz a)
        suma+=el;
    });
    return suma;
}
console.log(sumaEl(c));


//zadatak 5

let maxVr = niz =>{
    let max = niz[0];
    niz.forEach(el=>{
        if(el>max){
            max = el;
        }
    });
    return max;
}
console.log(maxVr(c));

// zadatak 7

let indexMax = niz=>{
    let index =0;
    let max = niz[0];
    niz.forEach((el,i)=>{  // ovo je callback arrow fja unutar forEach
        if(el>max){
            max=el;
            index=i;
        }
    });
    return index;
}
console.log(indexMax(c));

/*
let c = [6,8,9,3,1];
*/

//Zadatak 7 korigovan = vratiti sve indexe pojavljivanja maximalne vrednosti

let d = [9,5,6,9,8,9,9];

let sviIndexiMaxVr = niz =>{
    let maxVr = niz[0];
    let sviIndexi = [];
    niz.forEach((el,i)=>{
        if(el>=maxVr){
            maxVr = el;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
console.log(sviIndexiMaxVr(d));

let e = [3,5,2,1,6,2,6];
console.log(sviIndexiMaxVr(e));


//Zadatak 19


let imena = ["Stefan", "Vladislav","Nikola","Milan","Nevena","Maja","Ana"];

let duzinaEl = niz =>{
    niz.forEach(el=>{
        console.log(el.length);
    });
    
}
duzinaEl(imena);

//zadatak 20


let najvecaDuzina = niz =>{
    let maksDuzina = niz[0].length;
    niz.forEach(el=>{
        if(el.length>maksDuzina){
            maksDuzina=el.length;
        }
    });
    return maksDuzina;
}
console.log(najvecaDuzina(imena));

//zadatak 21

let prosecnaDuzina = niz =>{
    let suma=0;
    let broj=0;
    niz.forEach(el=>{
        suma+=el.length;
    });
    let SrDuz = suma / niz.length;
    niz.forEach (el=>{
        if(el.length>SrDuz){
            broj++;
        }
    });
    return broj;
}
console.log(prosecnaDuzina(imena));

//zadatak 22
