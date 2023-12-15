// zad 1
let n = 20;

for (i=1; i<=n; i++)
{   
    console.log(`Na redu je broj ${i}`);
}


//Zad 2 

n=20;
for (n=20; n>=1; n--) 
{
    console.log(`Na redu je broj ${n}`);
}

//zad 3

for (n=2; n<=20; n+=2)
{
    console.log(`Paran broj ${n}`);
}

//zad 4

i =5;
for (i=5; i<=15; i++)
{
    console.log(`dvostruka vrednost iznosi ${i*2}`);
}

//zad 5

n=20;
let suma = 0;

for(i=1; i<=n; i++)
{
    suma+=i;
}
console.log(`suma brojeva je jednaka ${suma}`);

//zad 6

n=5;
let m = 7;
suma=0;

for (i=n; i<=m; i++)
{
    suma+=i;
}
console.log(`suma brojeva od ${n} do ${m} je jednaka ${suma}`);

//zad 7
n=2;
m=4;
let proizvod = 1;
for (i=n; i<=m; i++)
{
    proizvod*=i;
}
console.log(`proizvod brojeva od ${n} do ${m} je jednak ${proizvod}`);

//zad 8

n=2;
m=5;
let SumaKvadrata = 0;

for (i=2; i<=m; i++ )
{
    SumaKvadrata+=i**2;
}
console.log(`suma kvadrata brojeva od ${n} do ${m} je ${SumaKvadrata}`);

//zad 9

for (i=1; i<=3; i++)
{
    document.write (`<img src="${i}.jpg">`)
}

//zadatak 10
 
proizvod=1;

for( i=20; i<=100; i++)
{   
    if (i%11 == 0)
    {
    proizvod*=i;
    }
}
console.log(`proizvod brojeva od 20 do 100 je jednak ${proizvod}`);

//zadatak 11 

let broj = 0;

for (i=5; i<=150; i++)
{
    if (i%13 == 0)
    {
        broj++;
    }
}
console.log(`ukuno ima ${broj} brojeva od 5 do 150 deljivih sa 13`);

//zadatak 12 

n=3;
m=6;
let ArSr = 0;
broj=0;
suma=0;

for (i=n; i<=m; i++)
{
    broj++;
    suma+=i;
}
ArSr=suma/broj
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je  ${ArSr}`);

//zadatak 13

n=-3;
m=12;
let brojPoz=0;
let brojneg=0;

for (i=n; i<=m; i++) {

    if (i<0)
    {
        brojneg++;
    }

    if (i>0) 
    {
        brojPoz++;    
    }
}
console.log(`broj pozitivnih brojeva je ${brojPoz} dok je broj negativnih brojeva ${brojneg}`);

//zadatak 14

broj=0;

for (i=5; i<=50; i++)
{
    if (i%3 == 0 || i%5 ==0)
    {
        broj++;
    }
}
console.log(`ima ukupno ${broj} brojeva koji su deljivi sa 3 ili sa 5`);

//zadatak 15
 n=1;
 m=100;
 broj=0;
 suma=0;

 for (i=n; i<=m; i++)
 {
    if (i%10 == 4)
    {
        broj++;
        suma+=i;
    }
 }

 console.log(`izmedju ${n} i ${m} ima ukupno ${broj} brojeva kojima je poslenjda cifra 4 i njihova suma je ${suma}`);

 //zadatak 16

 n=1;
 m=20;
 let a=3;
 suma=0;

 for (i=n; i<=m; i++)
 {
    if (i%a !=0)
    {
        suma+=i;
    }
 }
 console.log(`suma brojeva koji nisu deljivi brojem ${a} je ${suma}`);

 //zadatak 17

 n=1;
 m=20;
 a=4;
proizvod=1;

for (i=n; i<=m; i++)
{
    if (i%a == 0)
    {
        proizvod*=i;
    }
}
console.log(`proizvod brojeva deljivih sa ${a} je jednak ${proizvod}`);

// zadatak 18

let k = 100;
broj = 0;
for (i=1; i<=k; i++)
{
    if (k%i == 0)
    {
        broj++;
    }
}
console.log(`Broj ${k} je deljiv sa ${broj} brojeva` );

//zadatak 19

//URADITI 19 OBAVEZNO



//JS prvi zadaci

//zad 1
let sati = 14;
let minuti = 22;

let min = sati*60 + minuti;
console.log(`Proslo je ${min} od ponoci`);


// zad 2 
min = 862;

sati = Math.floor(min/60);
minuti = min % 60;

console.log(`Proslo je ${sati} sati i ${minuti} minuta od ponoci`);

//zad 3

let cena = 500;
let novac = 1000;
let kusur = novac - cena;
console.log(`Kusur je ${kusur}`);

//zad 4

let trenutno = new Date ();
let hrs = trenutno.getHours();
let mins= trenutno.getMinutes();
let proslo = hrs*60 + mins;

console.log(`Proslo je ${proslo} minuta od ponoci`);

//zad 5
trenutno= new Date();
let dan = trenutno.getDate();
let mesec = trenutno.getMonth(1-12);
let godina = trenutno.getFullYear();

console.log(` Datum je ${dan}.${mesec+1}.${godina}`);
console.log(`Datum je ${godina}.${mesec+1}.${dan}`);


// zad 6
let evri = 100;
let kurs = 117;
let din = evri*kurs;
console.log(`Imacemo ${din} dinara`);

//zad 7 

evri = 200;
let kursEur = 117;
let kursDol = 109;
din = evri*kursEur/kursDol
console.log(`Imacemo ${din} dinara`);

//zad 8
let celzijus = 25;
let Farenhajt = celzijus * 1.8 + 32;
console.log(`Temperatura je ${Farenhajt} F`);

//zad 9
celzijus = 20;
let Kelvin = celzijus + 273.15;
console.log(`${Kelvin}`);
celzijus = Kelvin - 273.15
console.log(`${celzijus}`);


//WHILE ZADACI FOR PETLJOM


// zadatak 4


n=7;

for (i=1; i<=n; i++) {
    if (i%3 == 1)
    {
        document.write(`<p style="color:red">WHILE ZADACI FOR PETLJOM</p>`)
    }
    else if (i%3 ==2){
        document.write(`<p style="color:green">WHILE ZADACI FOR PETLJOM</p>`)
    }
    else {
        document.write(`<p style="color:blue">WHILE ZADACI FOR PETLJOM</p>`)
    }
}

//zadatak 10

n=1;
m=4;
let sumakv = 0;
let sumaku = 0;

for (i=n; i<=m; i++) {
    if (i%2 == 0) {
        sumakv+=i**2;
    }else {
        sumaku+=i**3;
    }
}
console.log(`Suma kv ${sumakv} i suma kubova ${sumaku}`);


//zadatak 11 

k=42;
broj=0;

for (i=1; i<=k; i++){
    if (k%i ==0) {
        broj++;
    }
}
console.log(`broj ${k} je deljiv sa ${broj} brojeva`);