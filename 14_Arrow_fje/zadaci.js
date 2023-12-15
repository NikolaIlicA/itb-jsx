// zadatak 3
// Varijanta 1 - preko klasicnih fja

function neparan(n) {
    let x; //x vazi u bloku u kojem je definisano // deklaracija promenljive je uvodjenje promenljive u program

    if (n%2 == 1) {
        x = true;
    }else {
        x == false;
    }

    return x;
}


function neparan2(n) {
    if (n%2==1) {
        var x = true;   // dostupna unutar fje u kojoj je deklarisana, znaci vazice i u sledecem bloku 
    }else {
        var x  = false;
    }
    var x; // tacno ali besmisleno
    return x;
}

let p = 5;
console.log(neparan(p));

var m = 9;


// zadatak 3 ==> preko arrow funkcije

let neparan3 = (n) => {
    let x = false;      // me moramo da stavljamo else granu jer smo dali pretpostavku odma da je x = false
    if (n%2 ==1) {
        x = true;
    }
    return x;
}

/*
let neparan4 = (n) => {
    if (n%2 == 1) {
        return true;
    }else {
        return false;
    }
}
*/

// moze da se zapise i ovako

let neparan4 = (n) => {
    return (n % 2==1) ? true : false;  // ?: ovo je ternarni operator, njegovo znacenje je da se ispituje uslov pre znaka pitanja, pa ako je uslov tacan, dobice prvu vrednost (true) a ako nije tacan dobija vrednost false. Ovaj operator moze da se koristi u bilo kojoj fji
}
console.log(neparan4(6));



let neparan5 = (n) => {
    return (n%2 ==1);       //
}
console.log(neparan5(6));

// ovaj izraz gore preko arrwo fje moze jos dalje da se skrati

let neparan6 = (n) => (n%2 == 1)  // ovako kad stavimo on sam prepozna da treba da vrati boolean tj true ili false
console.log(neparan6(6));

let uvecajZaDva = (n) => (n+=2);  // ovde je prepoznao da treba da uveca za dva
console.log(uvecajZaDva(5));



// izraz gore moze jos da se skrati - da pisemo bez zagrada parametre

let neparan7 = n => (n%2==1)
console.log(neparan7(6));



/*
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.
Napisati funkciju koja vraća sliku za prosledjenu adresu slike.
*/

//zadatak 1
let maks2 =(n,m) => {
    if (n>m) {
        return n;
    }else {
        return m;
    }
}
console.log(maks2(2,4));

// 2. nacin 
let makss2 = (a,b) => {
    return (a>b) ? a:b;
}


//3. nacin
let maksss2 = (a,b) => a>b ? a : b;
console.log(maksss2(6.9, 3.09));


// kada imamo 4 promenljive


//drugi nacin
let maks4 = (n,m,p,q) => {
    return maks2(maks2(n,m), maks2(p,q))
}
console.log(maks2(maks2(2,4),maks2(3,5)));

// drugi nacin ova sa 4
let maks5 = (n,m,p,q) => maks2(maks2(n,m), maks2(p,q))
console.log(maks2(maks2(2,4),maks2(3,5)));

// zadatak 2
/*
let fjaSlika = putanja => {
    
    return document.write(`<div id="tag" style="background-color: blue;">Neki tekst<br><img src="${putanja}" style="width:300px; height: 300px"></div`)
    
}
fjaSlika("1.jpg")
*/

// drugi nacin

let prikaziSliku = putanja => `<img src="${putanja}" style=" width: 300px; height: 300px;">`

let d1 = document.getElementById ("d1");
d1.innerHTML += prikaziSliku("1.jpg");


