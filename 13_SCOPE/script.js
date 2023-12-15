let a = 10;
var b = 20;
const c =30;

console.log(a,b);

// ne mogu sada da napisem opet let a = 15; ali mogu da promenim var i kazem var b = 22;

a = 15;
var b = 25;
console.log(a,b);

// konstanti takodje ne moze da se menja vrednost

if (true) {
    let a = 50;  // ovo a je samo za scope u if naredbi
    var b = 70;     // ovo je globalno
    console.log(a,b);
}  // ovde sam mogao da promenim let a zato sto to nije isti scope,tj ista oblast



