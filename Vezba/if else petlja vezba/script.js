//zadatak 1

let a = 200;

if (a>=100) {
    document.write(`<p style="color:green">Pack up</p>`)
}else {
    document.write(`<p style="color:red">Throw away</p>`)
}

//zadatak 2

a =- 12;

if (a>=0) {
    document.write(`<p style="color:red">Temperatura u plusu</p>`)
} else {
    document.write(`<p style="color:blue">Temperatura u minusu</p>`)
}

//zadatak 3

let n = 2010;
let godina = new Date();
let god = godina.getFullYear ();
let brojGod = god - n;

if (brojGod >=18) {
    document.write(`<img src="Hurgada.jpg">`)
}else {
    document.write(`ostalo je ` + (18-brojGod)+ ` godina do punoletstva`)
}

//zadatak 4

let vreme = new Date();
let vrime = vreme.getHours();

if (vrime >=12) {
    document.write(`<br>`)
    document.write(`popodne`)
} else {
    document.write(`prepodne`)
}

//zadatak5

let muski= "m";

if (muski == "m") {
    document.write(`<br>`)
    document.write(`Korisnik je izabrao muski rod`)
}else {
    document.write(`<br>`)
    document.write(`Korisnik je izabrao zenski rod`)
}





// IF i ELSE IF zadaci

//Razlika je u tom esto ce kod if da ispituje uslov sve dok ima ifova, tj sve dok ima uslova koji odgovaraju. Kod else if, cim se ispuni prvi uslov, program ne ide dalje sa ispitivanjem

//zadatak 6

let d =new Date();
let dni = d.getDay(); // uzimaju se vrednosti od 0-6,gde je 0 nedelja a 6 subota

if (dni>1) {

}if (dni<6) {
    console.log(`Radni je dan`);
}else {
    console.log(`Vikend je`);
}

// 2. varijanta

if (dni <1) {

}if (dni >5) {
    console.log(`Vikend je`);
}else {
    console.log(`Radni je dan`);
}

//Zadatak 7

let sati=new Date ();
let stij = sati.getHours ();

if (stij<12) {
    console.log(`Prepodne je`);
}else if (stij <18) {
    console.log(`Popodne je`);
}else {
    console.log(`Vece je`);
}

//Zadatak 8

if (stij>=9) {
    
}if (stij<17) {
    console.log(`Radi firma`);
}else {
    console.log(`Firma trenutno ne radi`);
}

//Zadatak 9


//Zadatak 10

let u = 5;
let t = 6;

if (t>u) {
    console.log(++t + ` i ` + --u);
} else if (u>t) {
    console.log(--t + " i " + ++u);
}else {
    console.log(`Brojevi su jednaki`);
}

//Zadatak 11

k = 21;

if (k%2 == 0){
    
}if (k%3 == 0) {

}if (k%5 == 0) {
    
}if (k%7 == 0) {
    console.log(`Broj je ceo`);
}else {
    console.log(`broj nije ceo`);
}

//2. nacin 

a = 15.6;
if (a === Math.round(a)) {
    console.log("Ceo broj");
} else {
    console.log("Nije ceo broj")
} 

//Zadatak 9*************** uraditi



// NESTED IF  - UGNJEZDENO GRANANJE

//Zadatak 12

n = 61;
m = 72;

if (n>m) {
    if (n%2 == 0) {
        console.log(`broj n je veci broj i paran je`);
    }else{
        console.log(`broj n je veci broj i neparan je`);
    }if (m%3 == 0) {
        console.log(`broj m je manji broj i deljiv je sa 3`);
    }else {
        console.log(`broj m je manji broj i nije deljiv sa 3`);
    }
}else if (m>n) {
    if (m%2 == 0) {
        console.log(`broj m je veci i paran je`);
    } else {
        console.log(`broj m je veci i neparan je`);
    } if (n%3 == 0 ) {
        console.log(`broj n je manji broj i deljiv je sa 3`);
    }else {
        console.log(`broj n je manji broj i nije deljiv sa 3`);
    }
}else {
    console.log(`Brojevi su jednaki`);
}


// Zadatak 13

let time = new Date ();

let day1 = 11;
let month1 = 12;
let year1 = 2023;

let day2= 11;
let month2= 12;
let year2= 2023;

if (year1<year2) {
    console.log(`Raniji je datum ${day1}.${month1}.${year1}`);
}else if (year1>year2) {
    console.log(`Raniji je datum ${day2}.${month2}.${year2}`);
}else if (year1==year2) {
    if (month1<month2){
        console.log(`Raniji je datum ${day1}.${month1}.${year1}`);
    }else if (month1>month2){
        console.log(`Raniji je datum ${day2}.${month2}.${year2}`);
    }else if (month1==month2) {
        if (day1<day2){
            console.log(`Raniji je datum ${day1}.${month1}.${year1}`);
        }else if (day1>day2){
            console.log(`Raniji je datum ${day2}.${month2}.${year2}`);
        }else if (day1==day2){
            console.log(`Datumi su jednaki`);
        }
    }
}


//Zadatak 14

let pol = "muski";
let brGod=19;

if (pol == "muski") {
    if (brGod>=18) {
        console.log(`Korisnik je muskarac i punoletan je`);
    }else {
        console.log(`Korisnik je muskarac i maloletan je`);
    }
}else if (pol != "muski"){
    if (brGod < 18) {
        console.log(`Korisnik je zena i maloletna je`);
    }else {
        console.log(`Korisnik je zena i punoletna je`);
    }
}


// LOGICKI OPERATORI

//zadatak 15

let x = 22;

if (x<-15 || x>40) {
    console.log(`Ekstremna temperatura`);
}else {
    console.log(`Normalna temperatura`);
}

//zadatak 16

let goud = new Date ();
let prestupna = goud.getFullYear();

if ((prestupna%4==0 && prestupna%100 != 0) || prestupna%400==0){
    console.log(`Godina je prestupna`);
}else {
    console.log(`Godina nije prestupna`);
}

// zadatak 17

let dd = new Date ();
let f =dd.getDay ();
let g = dd.getHours();

if ((f<1 && f>5 && g>=10 && g<18) || (f>0 && f<6 && g>=9 && g<20)) {
    console.log(`butik je otvoren`);
}else {
    console.log(`butik je zatvoren`);
}

//zadatak 18

//a)

let b1 = 3;
let b2 = 4;
let b3 = 5;

/* ovo je netacno resenje
if (b1>b2) {

}if (b1>b3) {
    console.log(`b1 je najveci broj`);
}if (b2>b1) {

}if (b2>b3) {
    console.log(`b2 je najveci broj`);
}if (b3>b1){

}if (b3>b2) {
    console.log(`b3 je najveci broj`);
}
*/

// Jelena je uradila na sledeci nacin:
let maks = b1;
if (b2 > maks) {
    maks = b2;
}
if (b3>maks) {
    maks =b3;
}

console.log(`Najveci od brojeva je ${maks}`);


//b)

let maksimum = null;

if(b1>b2) {
    maksimum=b1;
}
else {
    maksimum=b2;
}

if (maksimum<b3) {
    maksimum = b3;
}

console.log(`Najveci broj je ${maksimum}`);



//c)

if (b1>b2) {
    if(b1>b3) {
        console.log(`Najveci je ${b1}`);
    }else {
        console.log(`Najveci je ${b3}`);
    }
}else if (b2>b3) {
    if (b2>b1) {
        console.log(`Najveci je ${b2}`);
    }else {
        console.log(`Najveci je ${b1}`);
    }
}




//d)

if (b1>b2 && b1>b3) {
    console.log(`najveci je b1`);
}else if (b2>b1 && b2>b3) {
    console.log(`najveci je b2`);
}else {
    console.log(`najveci je b3`);
}


//DOMACI PRVI 

//zadatak 1

n = 1000;
k = n/5;
let s = n/3;
let ostatak = n - (k+s);

console.log(`ostalo mu je ${ostatak} dinara`);

//zadatak 2

n = 20;
a = 5;
let drugi = a+2;
ostatak = n - (a+drugi);
console.log(`Ostalo mu je ${ostatak} poglavlja`);

//Zadatak 3

p = 3000;
m = 2600;
k = 600;
let cena = (p+m-k)/2;

let kusurPera = p-cena;
let kusurMika= m-cena;

console.log(`Pera treba da dobije kusur od ${kusurPera} dinara, a Mika kusur od ${kusurMika} dinara`);


//DOMACI DRUGI

//zadatak 1

c = 3;
let v = 90;
n = 45;

let granica = Math.floor(v/c);
let l = n - granica;

if (n>granica) {
    document.write(`<p style="color:red">NE</p>`)
    document.write(`<p style="color:red">Objekat treba da napusti ${l} osoba</p>`)
}else {
    document.write(`<p style="color:green">DA</p>`)
}

//zadatak 2









// DODATNI ZADACI - PETLJE

//zadatak 1

for (i=1; i<=30; i++){
    console.log(`Ja vezbam Python`);
}

//zadatak 2

let broj = 0;
for (i=0; i<=99; i++){
    console.log(`${broj++}`);
}

//zadatak 3

broj = 1;
for (i=1; i<=100; i++){
    console.log(`${broj++}`);
}

//zadatak 4

broj = 1;
for (i=0; i<=99; i+=5){
    console.log(`${i}`);
}

//zadatak 5

n = 50;

for (i=0; i<=n; i+=5){
    console.log(`${i}`);
}

//zadatak 6

m= 102;
n=200;
for(i=m; i<=n; i+=2){
    console.log(`${i}`);
}

//zadatak 7
m=201;
n=300;
for (i=m; i<=n; i+=2){
    console.log(`${i}`);
}

//zadatak 8

n= 567;

let prvi = n%10;
drugi = (Math.floor(n/10))%10;
let treci = (Math.floor(n/100))%10

console.log(`${prvi}`);
console.log(`${drugi}`);
console.log(`${treci}`);




//zadatak 10

broj = 0;
for (i=3; i<=400; i+=4){
    console.log(`${i}`);
    broj++;
}
console.log(`ima ${broj} brojeva`);

//zadatak 9

let v1=10; //  m/s  == koliko predje za minut
let v2=15;
let v3=20;
let v4=25;
let v5=30;

for (i=10; i<=30; i+=5) {
    console.log(`${i*60}`);

}

//
for(i=1; i<=10; i++){

	for(j=1; j <=8; j++)

		document.write("*")

	document.write("<br>");
}
