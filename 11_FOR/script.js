//Zadatak 1
// ispisati brojeve od 1 do 20 -- prvo cemo da napisemo while petljom

let i=1;
while (i<=20)
{
    console.log(`Broj${i}`);
    i++; //. i+=1 // i = i+1
}

//Zadatak 3

for (let k = 2; k<=20; k+=2)
{
    console.log(`parni brojevi ${k}`);
}

//Pomocu FOR petlje

for (let j=1; j<=20; j++)  // moglo je i da pise i j+=1, da sam hteo za 2 da povecavam mogao sam da stavim j+=2

{
    console.log(`Ovo je broj${j}`);
}

// isto ovo samo za svaki drugi paran ili neparan broj

for (let j=1; j<=20; j+=2)  // ovako da ispise sve neparne brojeve

{
    console.log(`Neparni brojevi su ${j}`);
}


// Zadatak 2

for (let k = 20; k>=1; k--)
{
    console.log(`Broj unazad je ${k}`);
}



//Zadatak 4 



//Zadatak 5

let suma = 0;
let n = 5;

for (let p=1; p<=n; p++)
{
    suma += p; // sume = suma + p
}

console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Zadatak 3

for (let k =2; k<=20; k+=2)
{
    console.log(`Paran broj je ${k}`)
}


//Zadatak 4

let suma1 = 0;

for (let p=5; p<=15; p++ )
{
    suma1+=2*p;
}

console.log(`suma brojeva je ${suma1}`);


// Zadatak 6

suma=0;
let r= 10;
let q = 20;

for(let p=r; p<=q; p++ )
{
    suma+=p;   
}
console.log(`suma brojeva je ${suma}`);

//Zadatak 7

let proizvod = 1;
r=3;
q=5;

for (p=r; p<=q; p++)
    {
        proizvod*=p;
    }

console.log(`proizvod brojeva je ${proizvod}`);

//Zadatak 8

n=3;
m=5;

let SumaKvadrata=0;

for (let p = n; p<=m; p++)
{
    SumaKvadrata+=p*p;
}

console.log(`Suma kvadrata je ${SumaKvadrata}`);

//Zadaci 6,7.8 treba sa jednom promenljivom manje
// i*i se pise i i**2 //i*i*i se pise i**3


//Zadatak 9


for ( i=1; i<=3; i++ )
{
    document.write(`<img src="${i}.jpg">`)
}
// <img src="slike/${i}.jpg"> mze i ovako ako su slike u folderu slike 

//Zadatak 10
/*
n=20;
q=100;
proizvod=1;

for (i=n; i<=q; i++){

    if (i % 11 == 0) 
    {
    proizvod*=i;
    }
    
    else 
    { 
    
    }
}
console.log(`proizvod je ${proizvod}`)

*/

/*

//Zadatak 11

n=5;
m=150;
br

for (i=n; i<=m; i++) {
    if (i % 13 == 0) 
    {

    }

}

*/


//Zadatak 12

n = 3;
m = 6;
suma=0;
let br = 0;


for (i=n; i<=m; i++)
{
    suma+=i;
    br++;  // ovako prikazujemo broj brojeva // moze da se zapise i kao br+=1 ili kao br=br+1
} 
let ArSr = suma/br;

console.log(`Aritmeticka sredina je ${ArSr}`);



//Zadatak 10

n=10;
m=100;
proizvod=1;

for (i=n; i<=m; i++) {
    if (i % 11 ==0)
    {
        proizvod*=i;
    }
    else{}
}
console.log(`Proizvod brojeva deljivih sa 11 je ${proizvod}`);

//Zadatak 11 

n=5;
m=150;
br=0;

for ( i=n; i<=m; i++) {
    if (i % 13 ==0) 
    {
        br++;
    }
    else {}
}
console.log(`ima ukupno ${br} brojeva deljivih sa 13`);


//Zadatak 16

n=5;
m=15;
suma=0;
let a = 4;

for (i=n; i<=m; i++) {
    if (i%a !=0)
    {
        suma+=i;
    }
    
}
console.log(`suma brojeva koji nisu deljivi brojem ${a} je ${suma}`);


//Zadatak 13 

n= -5;
m=5;
brneg=0;
brpoz=0;

for (i=n; i<=m; i++) {
    if (i<0)
    {
        brneg++;
    }
    if (i>0)
    {
        brpoz++;
    }
}

console.log(`ima ukupno ${brneg} negativnih i ${brpoz} pozitivnih brojeva`);

//Zadatak 17

n=5;
m=20;
a=3;
proizvod=1;

for (i=n; i<=m; i++) {
    if(i%a ==0)
    {
        proizvod*=i;
    }
}

console.log(`proizvod brojeva deljivih sa ${a} je ${proizvod}`);

//Zadatak 15

n=1;
m=100;
br=0;
suma=0;

for (i=n; i<=m; i++) {
    if (i%10 ==4)
    {
        br++;
        suma+=i;
    }
}

console.log(`Ima ukupno ${br} brojeva kojima je zadnja cifra 4 njihova suma je ${suma}`);

//Zadatak 14 

n=5;
m=50;
br=0;

for (i=n; i<=m; i++) {
    if(i%3 == 0 || i%5 ==0)
    {
        br++;
    }
}

console.log(`ima ukupno ${br} brojeva deljivih sa 3 ili sa 5`);

//Zadatak 18

k=20;
br=0;

for(i=1; i<=k; i++) {
    if (k%i==0)
    {
        br++;
    }
}
console.log(`Ima ukupno ${br} brojeva sa kojima je deljiv broj ${k}`);

//drugi nacin za resavanje zadataka

k=3;
let brBrojevaDeljiv=0;

if (k==1) {
    brBrojevaDeljiv = 1;
} else {
    brBrojevaDeljiv =2;
    for (i=2; i<=k/2; i++) {
        if (k%1 == 0) {
            brBrojevaDeljiv++;
        }
    }
}
console.log(` broj ${k} je deljiv sa ${brBrojevaDeljiv} brojeva`);

//Zadatak 19

k=6;
br = 0;

for (let i=1; i<=k; i++) {
    if (k%i == 0) {
        br++;
    }
}
console.log(br);

if (br>2) {
    console.log(` broj ${k} je slozen broj`);
}else {
    console.log(`Broj ${k} je prost broj`);
}

//2.NACIN

let prost = true;
let k =13;

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

// 3.  nacin je nesto preko Math.sqrt(k) ili k/2 za uslov


//Zadatak 20

let divTabela = document.getElementById (`tabela`);
let tabela = `<table>`;

for (i=1; i<=6; i++) {
    let obojen = "belo";
    if(i%2 == 0) {
        obojen ="roze";
    } 
    tabela+=
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </td>`
}
tabela += `</table>`;
divTabela.innerHTML = tabela;

