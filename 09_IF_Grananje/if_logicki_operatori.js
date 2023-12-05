//Zadatak 15

t = -25;

if (t<-15 || t>40) {   // tacno  ili netacno daju tacno
    console.log(`Ekstremna temperatura`);
}

else {
    console.log(`Nije ekstremna temperatura`)
}

//2. nacin

if (t>=-15 && t<=40) {
    console.log(`Nije ekstremna temperatura`);
}
else {
    console.log(`Ekstremna temperatura`);
}

// Zadatak 16

let godina = new Date ();
let god = godina.getFullYear();

if ((god%4 == 0 && god%100 != 0) || god%400==0) {
    console.log(`Godina je prestupna`);
}else {
    console.log(`Godina nije prestupna`);
}


//Zadatak 17

let d = new Date ();
let dan = d.getDay();

let v = new Date ();
let vreme = v.getHours();

if ((dan>0 && dan<6 && vreme>=9 && vreme<20) || (dan<1 && dan>5 && vreme>=10 && vreme<18)) {
    console.log(`Otvoreno`);
}else {
    console.log(`Zatvoreno`);
}

//Zadatak 18



let b1 = 13;
let b2 = 22;
let b3 = 12;

// a)

let maks = b1;
if (b2 > maks) {
    maks = b2;
}
if (b3>maks) {
    maks =b3;
}

console.log(`Najveci od brojeva je ${maks}`);

// b)

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


// c)

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

