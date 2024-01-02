
// kada pozivamo fju i ako ona nema parametre, svakako stavljamo prazne zagrade onda

// posto funkcije mozemo dodeliti promenljivama, to znaci da se funkcije moze proslediti drugoj funkciji kao promenljiva
// funkcija koja se prosledjuje kao parametar naziva se callback fja, jer ce biti pozvana kasnije, unutar druge funkcije

//zadatak - primer:Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama tj treba da ima dve fje:
//prva ispisuje U konzoli,
//druga ispisuje U nekom div elementu na stranici.

//prvo cemo uraditi bez callback funkcije

let a = [-6,8,11,6,0];
let b = ["pera", "mika", "laza"];

function ispisNizaKonzola(niz) {
    let s = "";
    for(let i=0; i<niz.length;i++){
        s += niz[i] + " "; // sa " " sam samo dodao razmak izmedju elemenata pri ispisu
    }
    console.log(s);
}

function ispisNizaStranica(niz){
    let s = " ";
    for(i=0;i<niz.length;i++){
        s += niz[i] + " ";
    }
    let div = document.getElementById("container");
    div.innerHTML += s; // ovde da sam stavio = umesto += on bi nizom b samo pregazio niz a i niz a se ne bi ni video
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

/*
Logika funkcije ispisa je ista – potrebna je petlja kojom se prolazi kroz sve elemente niza, samo je ispis elemenata drugačiji.
Moguća ideja – napisati posebnu funkciju za željeni ispis (bilo na stranici ili u konzoli), a tu funkciju proslediti kao parametar funkciji koja iterira kroz sve elemente niza.
*/

// mozemo da ispisemo na sledeci nacin
// funkcija 1: niz => for petljom prodjemo kroz sve elemente niza i generisani string ispisemo  u konzoli
//funkcija 2: niz => for petljom prodjemo kroz sve elemente niza i generisani string ispisemo u div tagu

// !!!!!!!!!!!!!!a moze i ovako, i ovo je zapravo upotrebom callback fje ==  funkcija: (niz,nacin) => for petljom prodjemo kroz sve elemente niza i generisani string ispise se na zadatai nacin. Ovde je nacin zapravo callback funkcija!!!!!!!!!!!!!!!!!!!

// callback moze da bude bilo koja fja, anonimna, imenovana...

// callback fja se koristi kada hocemo da kontrolisemo redosled izvrsavanja funkcija, tp mu je izgleda glavna uloga. druga uloga je da ne moramo da ponavljamo neki kod vise puta, vec mozemo da pozovemo callback funkcijiu




// zadatak == sa callback funkcijom resavamo

/*
let a = [-6,8,11,6,0];
let b = ["pera", "mika", "laza"];
*/
function ispisKonzola(p){
    console.log(p);
}

function ispisStranica(p){
    let div = document.getElementById('container');
    div.innerHTML += p;
}

function ispisNiza (niz, cb){
    let s = " ";
    for(i=0;i<niz.length;i++){
        s += niz[i] + " ";
    }
    cb(s);   
}
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);

//znaci ovde sam uradio sledece, napravio sam skroz obicnu funkciju ispisNiza, sa parametrom niz, i unutar funkcije sam kreirao parametar s. Dodao sam u zagradu i parametar cb, sto je zapravo callback funkcija, i umesto return sam stavio cb(s), tj dajem mu mogucnost da se druge funkcije izvrsavaju nad parametrom s koji sam definisao u funkciji ispisNiza. Dakle, dalje sam nad parametrom s izvrsio dva ispisa ispisNiza(a, ispisKonzola); i ispisNiza(a, ispisStranica);  isto tako i za niz b


// ZA CALLBACK FUNKCIJE DOLAZE DO IZRAZAJA ANONIMNE I ARROW FUNKCIJE


//ANONIMNA FUNKCIJA KAO CALLBACK FUNKCIJA

ispisNiza([1,2,3,4,5], function(p){
    console.log(p);
});
// ovde smo umesto niza koji smo ranije definisali sa npr let c = [1,2,3,4,5] umesto toga smo odmah na licu mesta definisali niz, i za njega jednu anonimnu funkciju function(p), i dalje vidimo da se izvrsava kao callback funkcija. znaci vidimo da se prvo kreirao parametar s koji je poredjao sve elemente iz niza [1,2,3,4,5] i kada smo pozvali console.log(p), on je te elemente niza samo ispisao u konzoli

//ARROW FUNKCIJE KAO CALLBACK FUNKCIJA

ispisNiza([9,8,7,6], p=>{
    console.log(p);
});



        ///////////////////////////////////
////////////// forEach FUNKCIJA///////////////////
        ///////////////////////////////////



// ZA RAZLIKU OD FOR PETLJI, gde mozemo da biramo od kog clana niza cemo da iteriramo u nekoj funkciji, u forEach petlji mi to ne mozemo da radimo. U forEach petlji mi iteriramo kroz sve elemente jednog niza, i kroz sve indekse tog niza.

//!!!!BITNO SVOJSTVO JE STO forEach petlja kao parametar moze da primi i callback funkciju!!!!!

/* 
let a = [-6,8,11,6,0];
let b = ["pera", "mika", "laza"];
*/


a.forEach(ispisKonzola);
// forEach petlja = prolazi kroz sve elemente niza i za svaki element niza poziva callback fju i prosledjuje vrednost elementa kao argument
// znaci ako imam niz a, for each petalja ce da ide kroz sve elemente niza i da poziva sledece:
//ispisKonzola(-6);
//ispisKonzola(8);
//ispisKonzola(11);
//ispisKonzola(6);
//ispisKonzola(0);

b.forEach(ispisKonzola);
a.forEach(ispisStranica);
b.forEach(ispisStranica);

// anonimne funkcije su pravi izbor za forEach ako ce se izvrsiti samo jednom

a.forEach(function(e){
    console.log(e);
})

a.forEach(e =>{
    let div = document.getElementById("container");
    div.innerHTML += e + " ";
    
});

a.forEach((el,i)=>{
    console.log(`Element ${el} u nizu ima index ${i}`);
})




//zadacci iz Nizova, oni sto smo radili sa for petljom

/* 
let a = [-6,8,11,6,0];
let b = ["pera", "mika", "laza"];
*/



let c = [6,8,9,3,1];


//zadatak 2

let sumaElem = niz =>{
    let suma=0;
    niz.forEach(el=>{
        suma+=el;
    });
    return suma;
}
console.log(sumaElem(c));

//zadatak 3

let proizvElem = niz =>{
    let proizvod = 1;
    niz.forEach(el=>{
        proizvod*=el;
    });
    return proizvod;
}
console.log(proizvElem(c));

//zadatak 4 i 9 

let SrVr = niz =>{
    let suma = 0;
    let broj=0;
    niz.forEach(el=>{
        suma+=el;
    });
    let ArSr = suma / niz.length;
    
    niz.forEach(el=>{ // dodatak za 9 zadatak
        if(el>ArSr){
            broj++;
        }
    });
    return broj;
}
console.log(SrVr(c));

//zadatak 5 i 7
c = [9,5,6,9,8,9,9];
let d = [3,5,2,1,6,2,6];


let maxVr = niz =>{
    let max = niz[0];
    let index = 0;
    niz.forEach((el,i)=>{
        if(el > max){
            max = el;
            index = i;
        }
    });
    return max; //return index;
}
console.log(maxVr(c));

//zadatak 7 modifikovan == vratiti sve indekse pojavljivanja maksimalne vrednosti

/*
c = [9,5,6,9,8,9,9];
let b = ["pera", "mika", "laza"];
d = [3,5,2,1,6,2,6];
*/



let sviIndexiMaxVr = niz =>{
    let maxVrd = maxVr(niz);
    let sviIndexi = [];
    niz.forEach((elem,i)=>{
        if(elem==maxVrd){
            maxVrd = elem;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(d));

/// !!!!!!!! znaci u ovom zadatku sam za maksimalnu vrednost elementa samo preuzeo funkciju iz petog zadatka gde sam vec racunao MaxVr (da ne bih piskarao opet). nakon toga sam usao u drugu forEach petlju gde sam u ifu ispitivao koji od elemenata je == maxVrd, i te elemente sam pushovao u novi niz, tako da sam u tom nizu zapravo dobio index brojeva koji imaju najvecu vrednost. ****napomena, da nisam iskoristio funkciju iz petog zadatka, vec da sam isao peske, prvo bih znaci kreirao prvu forEach petlju preko koje bih trazio koji je element sa najvecom vrednoscu, pa bih kreirao drugu forEach petlju gde bih poredio ostale elemente sa najvecom vrednoscu i pushovao ih u novi 'niz' sviIndexi.


//zadatak 6 i 8

let minVr = niz =>{
    let min = niz[0];
    let indexMin = 0;
    niz.forEach((el,i)=>{
        if(el<min){
            min=el;
            indexMin=i;
        }
    });
    return indexMin; //return min;
}
console.log(minVr(c));

/*
let c = [6,8,9,3,1];
*/

//zadatak 10

let zbirPoz = niz =>{
    let suma=0;
    niz.forEach(el=>{
        if(el>0){
            suma+=el;
        }
    });
    return suma;
}
console.log(zbirPoz(c));

//zadatak 11

let brPar = niz =>{
    let broj =0;
    niz.forEach(el=>{
        if(el%2==0){
            broj++;
        }
    });
    return broj;
}
console.log(brPar(c));


//zadatak 12

let brParSaNepar = niz =>{
    let broj =0;

    niz.forEach((el,i)=>{
        if (el%2==0 && i%2!=0){
            broj++;
        }
    });
    return broj;
}
console.log(brParSaNepar(c));

/*
let c = [6,8,9,3,1];
*/

//zadatak 13

let sumaParInd = niz =>{
    let suma=0;
    niz.forEach((el,i)=>{  // ovo je znaci arrow funkcija koja ce se koristiti kao callback fja
        if(i%2==0){
            suma+=el;
        }
    });
    return suma;
}
console.log(sumaParInd(c));

//zadatak 14
/*
let znak = niz =>{
    niz.forEach(el=>{
        if(el>0){
            el = - el;
        }else if (el<0){
            el<-el;
        }
    });
    return niz;
}
console.log(znak(c));
*/



/*
c = [9,5,6,9,8,9,9];
let b = ["perica", "mika", "lazar"];
d = [3,5,2,1,6,2,6];
*/

//zadatak 19 

b = ["perica", "mika", "lazar"];

let duzinaSvihStringova = niz =>{
    let duzina=0;
    niz.forEach(el=>{
        duzina=el.length;
        console.log(duzina);
    });
    return duzina;
}
duzinaSvihStringova(b);

//zadatak 20

let elNajvecaDuz = niz =>{
    let max = niz[0].length;
    let ime =niz[0];
    niz.forEach(el=>{
        if(el.length > max){
            ime = el;
            max = el.length;
        }
    });
    return ime;
}
console.log(elNajvecaDuz(b));

//zadatak 21
