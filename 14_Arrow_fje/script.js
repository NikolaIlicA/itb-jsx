

// Klasicne (imenovane) funkcije
function sum (a,b) {
    return a+b;
}

let rez = sum(1,2); // poziv fje (po imenu, iza koga se navode argumenti)
console.log(rez);


//Anonimne funkcije (funkcije bez imena)

let suma = function(a,b) 
{
    console.log(this);
    return a + b;
}

console.log(suma(1,2));  // poziv anonimne funkcije


//  => fat arrow simbol 
/*ARROW FJE === anonimne fje koje imaju dva specificna svojstva koja ih razdvajaju od obicnih fja:

1. Imaju skracen zapis

2. Znacenje kljucne reci this

*/

let suma2 = ( a,b ) => {
    console.log(this);
    return a+b;
}
console.log(suma2(1,2));  // poziv arrow fje = poziv anonimne fje


let hello = () => {
    console.log(`Hello world!`);
}

hello();
hello();
hello();
hello();


let echo = (s1,s2) => {
    let result = s1 + "," + s2;
    console.log(result);
}

echo("Nikola", "Ilic")
echo("Ivana", "Colic")

