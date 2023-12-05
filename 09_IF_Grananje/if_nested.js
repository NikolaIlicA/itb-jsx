// Zadatak 12
// Ucitati dva razlicita cela broja i videti da li je veci od njih paran a manji od njih deljiv sa 3

let br1 = 5;
let br2 = 6;

if (br1 > br2) {
    console.log(`Veci broj je ${br1},a manji broj je ${br2}`);

    // ispitujemo da li je veci broj deljiv sa 2
    if (br1%2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log(`Veci broj nije paran`);
    }

    // ispitujemo da li je manji broj deljiv sa 3
    if (br2%3 ==0) {
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
}else {
    console.log(`Veci broj je ${br2}`);

     // ispitujemo da li je veci broj deljiv sa 2
     if (br2%2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log(`Veci broj nije paran`);
    }

    // ispitujemo da li je manji broj deljiv sa 3
    if (br1%3 ==0) {
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
}


//Zadatak 13

let god1 = 2020;
let mes1 = 6;
let dan1 = 11;
let god2 = 2020;
let mes2 = 6;
let dan2 = 11;

if (god1< god2) {

console.log(`Raniji datum je ${god1} ${mes1} ${dan1}`);

} else if  (god2<god1) {

    console.log(`Raniji datum je ${god2} ${mes2} ${dan2}` );
} else if (god1 == god2) {
    if (mes1 < mes2) {
        console.log(`Raniji datum je ${god1} ${mes1} ${dan1}`);
    } else if (mes2<mes1) {
        console.log(`Raniji datum je ${god2} ${mes2} ${dan2}` );
    }else if (mes1==mes2) {
        if (dan1<dan2) {
            console.log(`Raniji datum je ${god1} ${mes1} ${dan1}`);
        } else if (dan2<dan1) {
            console.log(`Raniji datum je ${god2} ${mes2} ${dan2}`);
        }else {
            console.log(`Datumi su isti`);
        }
    }
}


//Zadatak 14

let pol = "muskarac";

let g = 21;

if (pol == "muskarac") {
    
  if (g>=18) {
    console.log(`Korisnik je punoletan ${pol}`);
} else if (g<18) {
    console.log(`Korisnik je maloletan ${pol}`);
}

}else if (pol != "muskarac") {
    
    if (g>=18) {
        console.log(`Korisnik je punoletna zena`);
    } else if (g<18) {
        console.log(`Korisnik je maloletna zena`);
    }
}


//Zadatak 12 ==> drugi nacin za resavanje

let p = 15;
let q = 19;

let veci = p;

if(q>veci) {
    veci = q;
}

let manji = p + q - veci;
if (veci % 2 ==0) {
    console.log(`Veci broj je deljiv sa dva`)
}else {
    console.log(`Veci broj nije deljiv sa dva`);
}

if (manji % 3 ==0) {
    console.log(`Manji broj je deljiv sa tri`);
}else {
    console.log(`Manji broj nije deljiv sa tri`);
}



