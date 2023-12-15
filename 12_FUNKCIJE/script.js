console.log(`Funkcije`);


////////////////////////////////
// Funkcija za ispis u konzoli//
////////////////////////////////

function zdravo ()  // zdravo je name funkcije // u viticastim zagradama se stavlja fja
{      
    console.log(`Hello world!`);
}

zdravo ();  //POZIV FUNKCIJE// ovime pozivamo funkciju, da nismo stavili, nista ne bi bilo u konzoli 
zdravo (); // koliko god puta da pozovem fju toliko puta ce se ispisati u konzoli




///////////////////////////////////////////////////
//Funkcija za ispis prosledjenog teksta u konzoli//
///////////////////////////////////////////////////


function ispisiTekst (tekst) {    //u obicnim zagradama se nalazi promenljiva koju cu  prosledjivati funkciji -- ZOVE SE PARAMETAR FUNKCIJE
    
    console.log(tekst);
}

ispisiTekst("Ovo je neki tekst");  // promenljivoj (tekst) dodaje se pozivom ovaj string  ("Ovo je neki tekst") -- OVO SU ARGUMENTI

ispisiTekst(`Ovo je neki drugi tekst`);

let t = "Moj tekst";
ispisiTekst (t);




///////////////////////////////////////////////////
//Funkcija kojoj se prosledjuju dva parametra /////
///////////////////////////////////////////////////

function imePrezime (ime,prezime, godine) {
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} godina`);
}
imePrezime ("Nikola","Ilic", 32)  // odvajam varijable zarezom kao sto sam ih gore i definisao sa zarezom izmedju

let imeOsobe = "Ivana";
let prezimeOsobe= "Colic";
let godineOsobe = 30;
imePrezime(imeOsobe,prezimeOsobe, godineOsobe);





///////////////////////////////////////////////////
//Funkcija koja vrsi sabiranje dva broja //////////
///////////////////////////////////////////////////

function zbir (br1, br2) {
    let rezultat = br1+br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir (16,21);
let b1 = -10;
let b2 = 20;
zbir(b1,b2);
zbir ("Java","Script")



///////////////////////////////////////////////////
//Funkcija koja vraca vrednost/////////////////////
///////////////////////////////////////////////////
 
function razlika (umanjenik,umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60,45)}`);
let r = razlika(100,4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6,3);  // upisace 3 u r1  r1=3
let r2 = razlika(17,7); // upisace 10 u r2  r2 = 10
let r3 = razlika(r1,r2); // r3 = -7
console.log(`Promenljiva r3 iznosi ${r3}`);

let r4 = razlika(razlika(40,60),razlika(10,4)); // dobice se prvo razlika(-20,6) pa je to onda -26
console.log(`broj r4 je jednak ${r4}`);


///////////////////////////////////////////////////
//Funkcija sa vise returnova///////////////////////
///////////////////////////////////////////////////
 
// prvi nacin 

function temperaturaVode(temp) {
    if (temp <=0 ){
        return "Voda se ledi";
    }else if (temp >=100) {
        return "Voda isparava"
    }else {
        return "Voda je u tecnom agregatnom stanju"
    }
}
temperaturaVode(-4);
console.log(temperaturaVode(-4));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

//drugi nacin

function temperaturaVode1(temp) {
    let tekstZaIspis = "";  // ovo je isto kao da smo napisali let tekstZaIspis; samo sto ovaj nacin koji smo ostavili smanjuje mogucnost da se nekad desi neka greska
    if (temp <=0 ){
        tekstZaIspis ="Voda se ledi";
    }else if (temp >=100) {
        tekstZaIspis ="Voda isparava"
    }else {
        tekstZaIspis = "Voda je u tecnom agregatnom stanju"
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));

//treci nacin
/* pogledatiopet kod
function temperaturaVode2(temp) {
    let tekstZaIspis = "Voda je u tecnom agregatnom stanju";  
    if (temp <=0 ){
        tekstZaIspis ="Voda se ledi";
    }else if (temp >=100) {
        tekstZaIspis ="Voda isparava"}
    
        return tekstZaIspis;
}
console.log(temperaturaVode1(50));
*/

//zadatak 3

function neparan (broj) {
    if (broj%2 == 0) {
        return "Broj je paran"
    }else {
        return "broj je neparan"
    }
}
neparan(22);
console.log(neparan(22));

//zadatak 4

function maks2 (a1, a2) {
    
    if (a1 > a2) {
        return a1
    }else {
        return a2
    }
}
maks2 (5,6);
console.log(maks2(5,6));



function maks4 (a1, a2, a3, a4) {
    if (a1>a2 && a1>a3 && a1 > a4) {
        return a1
    }else if (a2>a1 && a2>a3 && a2 > a4) {
        return a2
    }else if (a3>a1 && a3>a2 && a3 > a4) {
        return a3 
    }else {
        return a4
    }
}

maks4(1,2,3,4);
console.log(maks4(1,2,3,4));



//DRUGI NACIN za 4.zadatak
// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
const maks2Function = (broj1, broj2) => {
    if (broj1 > broj2) {
        return broj1;
    } else {
        return broj2;
    }
}
const maks4Function = (a, b, c, d) => {
    let veciPrvaDva = maks2Function(a, b);
    let veciDrugaDva = maks2Function(c, d);
    return maks2Function(veciPrvaDva, veciDrugaDva);
}
console.log(maks4Function(5, 7, 10, 15));


//za 4 vrednosti treci nacin
const maks4Function2 = (a, b, c, d) => {
    return maks2Function(maks2Function(a, b), maks2Function(c, d));
}
console.log(maks4Function2(20, 11, 16, 18));


//Zadatak 5

/*function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`)
}
prikaziSliku("https://commons.wikimedia.org/wiki/Main_Page#/media/File:Azadi_Tower_at_night_in_low_angle.jpg");

prikaziSliku ("Hurgada.jpg")

*/
/*
// Prikazati fju koja prikazuje sliku za prosledjenu adresu lsike i prosledjen id elementa u kome ta slika 

function prikaziSlikuUElementu(putanja,id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("Hurgada.jpg","slika1");
*/

//zadatak 6

function boja(color) {
    document.write(`<p style="color:${color}">Paragraf Paragraf</p>`)
}
boja(`red`);


//zadatak 7

function sedmiDan(n) {
    if (n%7 == 0) {
        console.log(`Nedelja`);
    }else if ( n%7== 1) {
        console.log(`Ponedeljak`);
    }else if ( n%7 == 2) {
        console.log(`Utorak`);
    }else if ( n %7== 3) {
        console.log(`Sreda`);
    }else if ( n%7 == 4) {
        console.log(`Cetvrtak`);
    }else if ( n%7 == 5) {
        console.log(`Petak`);
    }else if ( n%7 == 6) {
        console.log(`Subota`);
    }
    

}
sedmiDan(3);

function mesecUGodini(m) {
    if (m%12 == 0) {
        console.log(`Januar`);
    }else if (m%12 == 1) {
        console.log(`Februar`);
    }else if (m%12 == 2) {
        console.log(`Mart`);
    }else if (m%12 == 3) {
        console.log(`April`);
    }else if (m%12 == 4) {
        console.log(`Maj`);
    }else if (m%12 == 5) {
        console.log(`Jun`);
    }else if (m%12 == 6) {
        console.log(`Jul`);
    }else if (m%12 == 7) {
        console.log(`Avgust`);
    }else if (m%12 == 8) {
        console.log(`Septembar`);
    }else if (m%12 == 9) {
        console.log(`Oktobar`);
    }else if (m%12 == 10) {
        console.log(`Novembar`);
    }else if (m%12 == 11) {
        console.log(`Decembar`);
    }
}
mesecUGodini(36)

//Zadatak 8 

function deljivSaTri (n,m) {
    broj=0;
    for (i=n; i<=m; i++) {
        if (i%3 == 0) {
            console.log(`broj ${i} je deljiv sa 3`);
            broj++;
        }
    }
}
deljivSaTri(3,12)
console.log(`ima ukupno ${broj} brojeva deljivih sa 3` );

//zadatak 9

function sumiraj(n,m) {
    suma=0;
    for (i=n; i<=m; i++) {
        suma+=i;
    }
}
sumiraj(2,5);




//zadatak 10 


 function mnozi (n,m) {
    proizvod = 1;
    for (i=n; i<=m; i++) {
        proizvod*=i;
    }
 }
 mnozi(1,5)
console.log(`Proizvod je jednak ${proizvod}`);


//Zadatak 11
/*
function aritmetickaSredina(n,m) {
    suma=0;
    broj=0;
    let ArSr ="";
    for (i=n; n<=m; i++) {
        suma+=i;
        broj++;
        ArSr =suma/broj;
        
    }
    
}


aritmetickaSredina(4,6);
console.log(`Aritmeticka sredina je ${ArSr}`);

*/

 // Zadatak 14

 function recenica(h) {
    for (i=1; i<=5; i++) {
        document.write(`<h${h}> Recenica</h${h}>`)
    } 
 }
 recenica(1);


 
//////////////13.12.2023////////////

 

//zadatak 8

function delivoSaTri(n,m) {
    for (i=n; i<=m; i++) {
        if (i%3 == 0) {
            console.log(i);
        }
    }
}
delivoSaTri (10,30);
