//Zadatak 1

let a = 16;
let b = 33;

let minuti = a*60 + b;
console.log(`Od ponoci je proslo ` + minuti + ` minuta`);

//Zadatak 2

let sati = Math.floor(minuti/60);
let min = minuti % 60;

console.log(`Od ponoci je proslo `+ sati + ` sati i ` + min + ` minuta`);

//Zadatak 3

let q = 1000;
let p = 1500;
let kusur = p - q;

console.log(`Kusur iznosi ` + kusur + ` dinara`);


//Zadatak 4 
 let vreme = new Date ();
 let satih = vreme.getHours();
 let mins = vreme.getMinutes ();
 let mijnuti = satih * 60;

 console.log(`Od ponoci je proslo `+ (mijnuti + mins) + ` minuta` );

 //Zadatak 6

 let x = 100;
 let y = 117;
 let din = x*y;

 console.log(din);

 //Zadatak 6
 let r = 100;
 let u = 117;
 let i = 109;

 let doldin = r*u/i
 let evrdol = doldin*i / u

 console.log(`imacemo ` + doldin + ` dolara`);
 console.log( `imacemo ` + evrdol + ` evra`);

//Zadatak 8 

let c = 30;
let f = c*1.8 +32;
console.log(`temperatura iznosi ` + f + ` stepeni`);

//Zadatak 9 
 let cel = 25;
let k = cel +273.15;

console.log(k);

//zadatak 5

let datum = new Date ();
let god = datum.getFullYear(); 
let mes = datum.getMonth();
let dat = datum.getDate();

console.log(god, mes+1, dat );
console.log(dat, mes+1, god);


