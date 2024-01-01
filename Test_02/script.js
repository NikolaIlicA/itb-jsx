
// zadatak 1

function tezina (tezina, visina) {
    let visina1 = (visina/100)**2;
    let BMI = tezina / visina1;

    if (BMI<=18.5){
        console.log(`Pothranjenost`);  
    }else  if (BMI>18.5 && BMI<24.9){
        console.log(`Normalna tezina`);
    }else if (BMI>=24.9 && BMI<=30){
        console.log(`Povisena tezina`);
    }else {
        console.log(`Gojaznost`);
    }
    return BMI;
    
}tezina(100,182);


//zadatak 2

function rezultat (tezina,zeljenaTezina) {
    let brojNed = 0;
    let smrsa = tezina*0.02;  //1.4kg
    let ugoji = tezina*0.01;
    let nedeljaSmrsa = (tezina-zeljenaTezina)/smrsa;
    let nedeljaUgoji = (zeljenaTezina - tezina)/ugoji;
    
    if (zeljenaTezina < tezina) {
        console.log(`potrebno je ${nedeljaSmrsa} nedelja da osoba smrsa`);
    }else if (zeljenaTezina > tezina){
        console.log(`potreno je ${nedeljaUgoji} nedelja da se osoba ugoji`);
    }else {
        console.log(`nije potrebna nikakva dijeta`);
    }

    

}rezultat(70,63);






//zadatak  3

let tezinaOsoba = [120, 118, 115, 116, 110,112,110,113];

let tezinaProsecna = niz =>{
    let suma = 0;
    let broj = 0;
    for (let i=0; i<niz.length;i++){
        suma += niz[i];
        broj++;
    }
    
    let min = niz[0];
    for (i=1; i<niz.length; i++){
        if (niz[i]<min){
            min = niz[i];
        }
    }
    let maks = niz [0];
    for (i=1; i<niz.length; i++){
        if (niz[i]>maks){
            maks =niz[i];
        }
    }
    let ArSr = (suma - maks - min)/ (broj-2);
    return ArSr;
}
console.log(tezinaProsecna(tezinaOsoba));


//zadatak 4


let tezinaKlijenata = [120, 118, 115, 116, 110,112,110,113];

let klijentiNutr = niz => {
    let suma = 0;
    let broj = 0;
    let suma2=0;
    let broj2=0;
    for (i=0; i<niz.length; i++){
        suma+=niz[i];
        broj++;
    }
    let s1 = suma/broj;
    for (i=0; i<niz.length;i++){
        if (i%2==0){
            suma2+=niz[i];
            broj2++;
        }
    }
    let s2 = suma2/broj2;
    if (s2 < (0.9*s1) && s2 > (0.9*s1)){
        console.log(`Nisu svi klijenti napredovali jednako`);
    }else {
        console.log(`Svi klijenti su napredovali jednako`);
    }
    
}
console.log(klijentiNutr(tezinaKlijenata));
/*914 114.25
455 113.75*/

//zadatak 5
/*
let telTez = [70,73,77, 82, 90, 97];

let tezina2 = niz => {
    let i=0;
    let suma = 0;
    
    for (i=0; i<niz.length; i++){
        suma+= niz[i];
    }
    let ArSr = suma/niz.length;
    let broj=0;
    console.log(`${ArSr}`);
    
    for (i=0; i<niz.length; i++){
        if (niz[i] != ArSr) {
        broj++;
        }
    }
    return broj;
    
   
}
console.log(tezina2(telTez));


*/