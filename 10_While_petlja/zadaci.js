

//Zadatak 1

//b)

let i=1;

while(i<=20) 
{
    console.log(i++);
}

//Zadatak 1a

i=1;
let poruka = "";
while (i<=20)
{
    poruka = poruka + i + " "; //konkatenacija stringova valjda, sabiraju se string i broj
    i++;
}

console.log(poruka);

/*

#   |   i   |   poruka
---------------------------
0   |   1   |   ""
1   |   2   |   "1 "
2   |   3   |   "1 2 "
3   |   4   |   "1 2 3 "
....|.......|............
20  |   21  |   "1 2 ... 20 "

*/


//Zadatak 2

//1. nacin

i=20;
while (i>=1)

{
    console.log (i);
    i--;
}


//2. nacin ==> iskopiraj tabelu sa kodova sa predavanja

i=1;
while (i<=20)
{
    console.log(21 - i);
    i++;
}

//Zadatak 3 
//1. nacin

i=1;

while (i<=20)
{
    if (i % 2==0) 
    {
        console.log(i);
    }
    i++;  //da sam ovo i++ stavio u viticaste zagrade bila bi beskonacna petlja
}

//2. Nacin

i=2;
while (i<=20)
{
    console.log(i);
    i=i+2; // isto je sto i operator i += 2
}

//Zadatak 4

/* n=7;

i=1;

while (i<=n)
{
    if ( i % 3 ==1)
    {
        document.body.innerHTML += `<p class="crvena">Paragraf broj ${i}</p>`;
    }
    else if ( i % 3 ==2)
    {
        document.body.innerHTML += `<p class="zelena">Paragraf broj ${i}</p>`;
    }
    else
    {
        document.body.innerHTML += `<p class="plava">Paragrag broj ${i}</p>`;
    }
    document.body.innerHTML = document.body.innerHTML + `<p>Paragaraf broj ${i} </p>`; // ovako se pozivamo da cemo u body tagu da ispisujemo sadrzaj (ovo valjda moze za sve tagove)
    // ne zaboravi da moras da stavis ove navodnike ` ` da bi mogao dao koristis ${} fju za js
    // ova gornja promenljiva moze da se napise i kao   document.body.innerHTML += `<p>Paragaraf broj ${i} </p>`; 
    i++;
}


*/


n=7;

i=1;

let klasa; // let - vazi u bloku u kome je definisana. Kada je ovako van while onda ona vazi na celoj stranici

while (i<=n)
{
    if ( i % 3 ==1)
    {
        klasa='plava'
    }
    else if ( i % 3 ==2)
    {
        klasa = 'crvena'
    }
    else
    {
        klasa = 'zelena'
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragaraf broj ${i} </p>`; 
    
    // ovako se pozivamo da cemo u body tagu da ispisujemo sadrzaj (ovo valjda moze za sve tagove)
    // ne zaboravi da moras da stavis ove navodnike ` ` da bi mogao dao koristis ${} fju za js
    // ova gornja promenljiva moze da se napise i kao   document.body.innerHTML += `<p>Paragaraf broj ${i} </p>`; 
    i++;
}

//Zadatak 6

i = 1;
let suma = 0;

while (i <= 100)
{
   suma = suma + i;
   i++;
}

console.log (`Suma brojeva od 1 do 100 jednaka je: ${suma}`);




//Zadatak 7

i=1;
suma=0;
n= 50;

while (i<=n)

{
    suma += i;
    i++;
}

console.log(`Suma brojeva od 1 do n je jednaka ${suma}`);


//Zadatak 8





n= 5;
let m = 10;
i=n;
suma=0;

while (i<=m)

{
    suma += i;
    i++;
}

console.log(`Suma brojeva od m do n je jednaka ${suma}`);


//Zadatak 9 

n=3;
m=5;
i=n;
proizvod=1;  // ne moze nula jer ce mnozenjem biti nula rezultat

while (i<=m)
{
    proizvod *= i;
    i++;
}

console.log(`Proizvod brojeva od n do m je jednak ${proizvod}`);

//Zadatak 10

n=3;
m=5;
i=n;

let sumaKvadrataPar = 0;
let sumaKvadrataNepar = 0;

while (i<=m)
{
    if (i%2 == 0)
    {
        sumaKvadrataPar += (i** 2); 
    
    }

    else 
    {
        sumaKvadrataNepar += i * i * i ; // moze da se napise i kao (i**3)
        
    } 
    i++;
}

console.log(`Suma kvadrata parnih i kubova neparnih brojeva iznosi ` + (sumaKvadrataPar + sumaKvadrataNepar));


//Zadatak 11

let k = 20;
let broj = 0;
i=1;


while (i<=k)
{
    if (k % i == 0)
    
    {
        
        broj++;
        
    }
    i++;
}

console.log(`K je deljiv sa ${broj} brojeva`);



//Zadatak 12 -- VIDETI KOD SA PREDAVANJA NESTO NE RADI KAKO TREBA


i=1;
n=33;
brojDelioca=0;

while (i<=n)
{
    if (n%i == 0)
    {
        brojDelioca++;
    }
    i++;

    if (brojDelioca == 2)

    {
        console.log(`broj ${n} je prost`);
        
    }

    else  
    
    {
        console.log(`broj ${n} je slozen`);
    }
}


//Zadatak 13

/*Hint: Za izdvajanje cifara iz nekog broja koristite deljenje po modulu i celobrojno deljenje.
Kada imate neki broj
let broj = 1564;
Cifru 4 dobijate tako što tražite koji je ostatak pri deljenju sa 10
broj % 10
Onda u sledećem koaku vam je potrebno da sklinite tu poslednju cifru, da vam ostane 156. To ćete uraditi tako što broj podelite sa 10 i uzmete ceo deo.
Sada vam je ostalo 156 i iz tog broja opet uzimate poslednju cifru na isti način deljenjem po modulu sa 10 (ostatak pri deljenju sa 10)*/

