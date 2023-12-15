// zadatak 2

// zbir elemenata celobrojnog niza

// ovo je logika programa na kasi, kada se otkucavaju proizvodi, pa se sabira njihova cena

// test primeri

let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi5 = [8,5,7,8,5]


let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++ ) {  // stavili smo let i zato sto nam i treba samo u ovoj for petlji
        suma = suma + niz[i];
    }
    return suma;

} 
console.log(sumaElem(brojevi1)); 
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));



// zadatak 3

let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i<niz.length; i++) {
        proizvod*=niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));



// zadatak 4

let srVrednost = niz => {
    let suma=0;
    for (let i =0; i< niz.length; i++) {
        suma+= niz[i];
    }
    let SrVr = suma/niz.length;
    return SrVr;
    return niz.length != 0 ? SrVr : 0;  //////////prekopiraj sa predavanja do kraja koda, ima ipod zagrade jos nesto
}


console.log(srVrednost(brojevi1));
console.log(srVrednost(brojevi2));
console.log(srVrednost(brojevi3));


// moze krace da se zapise ovako

let srVrednost2 = niz => {
    return sumaElem (niz)/ niz.length;
}
console.log(srVrednost2(brojevi3));


// ili jos krace da se zapise sa:

let srVrednost3 = niz => sumaElem(niz) / niz.length;
console.log(srVrednost3(brojevi3));


// zadatak 4 a) Odrediti sr vrednost parnih elemenata celobrojnog niza

let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for (let i =0; i < niz.length; i++) {
        if (niz[i]%2 ==0) {
            
            suma =suma + niz[i];
            br++;
        }
    } 
    return suma / br;
} 
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

let brojevi4 = [1,5,9,3] // napravili smo novi niz i nismo stavili nijedan paran broj // izbacice NaN kao resenje
console.log(srVrednostParnih(brojevi4));




// zadatak 5
/* I nacin:
1) Proglasiti prvi element niza za maksimalni
2) Proci kroz ostale elemente niza i utvrditi da li ima neki veci element od do sada nadjenog maximalnog
3)ako ima, azurirati ovu vrednost*/


let maxNiza = niz => {
    let maks = niz[0];  // korak 1

    for (i=1; i<niz.length; i++){
        if (niz[i]>maks){
            maks=niz[i];
        }
    }
    return maks;
}
console.log(maxNiza(brojevi1));
console.log(maxNiza(brojevi2));
console.log(maxNiza(brojevi3));
console.log(maxNiza(brojevi4));

/*
// zadatak 9 

let srVrednost6 = niz => {
    let suma=0;
    let broj=0;
    for (let i =0; i< niz.length; i++) {
        suma+= niz[i];
    }
    let SrVr = suma/niz.length;

    for (let i =0; i< niz.length; i++) {
    if (niz[i] > SrVr) {
        broj++;
        }
    }  
    return broj;  
}

console.log(srVrednost6(brojevi1));
console.log(srVrednost6(brojevi2));
console.log(srVrednost6(brojevi3));
console.log(srVrednost6(brojevi5));

*/



//Zadatak 6

let minVr = niz => {
    let min = niz[0];
    for (i=1;i<niz.length;i++) {
        if (niz[i]<min){
            min=niz[i];
            
        }
    }
    return min;
}

console.log(minVr(brojevi1));
console.log(minVr(brojevi2));
console.log(minVr(brojevi3));
console.log(minVr(brojevi4));



// zadatak 7 - odr index maksimalnog elementa celobrojnog niza

let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;

    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMaxNiza(brojevi1));
console.log(indMaxNiza(brojevi2));
console.log(indMaxNiza(brojevi3));
console.log(indMaxNiza(brojevi4));
console.log(indMaxNiza(brojevi5));



// zadatak 6

let minNiza = niz => {
    let min = niz[0];

    for (let i =1; i <niz.length; i++){
        if (niz[i]<min){
            min= niz[i];
        }
    }
    return min;
}
console.log(minNiza(brojevi1));
console.log(minNiza(brojevi2));
console.log(minNiza(brojevi3));
console.log(minNiza(brojevi4));
console.log(minNiza(brojevi5));

// zadatak 8 

let indexMinNiza = niz => {
    let index = 0;
    let min = niz[0];
    for (let i =1; i < niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
            index= i;
        }
    }
    return index;
}
console.log(indexMinNiza(brojevi1));
console.log(indexMinNiza(brojevi2));
console.log(indexMinNiza(brojevi3));
console.log(indexMinNiza(brojevi4));
console.log(indexMinNiza(brojevi5));


// zadatak 9 

let srVrednost5 = niz => {
    let suma=0;
    let broj=0;
    for (i=0; i < niz.length; i++){
        suma+=niz[i];
    }
    let SrVr = suma/niz.length;

    for (i=0; i<niz.length; i++){
        if (niz[i]>SrVr){
            broj++;
        }  // br += niz [i]> SrVr(niz) ? 1 : 0   moze i ovako da se zapise onim ternarnim
    }
    return broj;
}
console.log(srVrednost5(brojevi1));
console.log(srVrednost5(brojevi2));
console.log(srVrednost5(brojevi3));
console.log(srVrednost5(brojevi4));
console.log(srVrednost5(brojevi5));

//zadatak 10

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi5 = [8,5,7,8,5]
*/

let zbirPozEl = niz => {
    let suma = 0;
    for (i=0; i< niz.length; i++) {
        if (niz[i]>0) {
            suma+=niz[i];
        }  
    }
    return suma;
}
console.log(zbirPozEl(brojevi1));
console.log(zbirPozEl(brojevi2));
console.log(zbirPozEl(brojevi3));


// zadatak 11 

let brParEl = niz => {
    let broj =0;

    for (i=0; i< niz.length; i++){
        if (niz[i]%2==0){
            broj++;
        }
    }
    return broj;
}
console.log(brParEl(brojevi1));
console.log(brParEl(brojevi2));
console.log(brParEl(brojevi3));


/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi5 = [8,5,7,8,5]
*/

//zadatak 12

let brParEl2 = niz => {
    let broj =0;

    for (i=0; i< niz.length; i++){
        if (niz[i]%2==0 && i%2 != 0){
            broj++;
        }
    }
    return broj;
}
console.log(brParEl2(brojevi1));
console.log(brParEl2(brojevi2));
console.log(brParEl2(brojevi3));

//zadatak 13

let sumaElParInd = niz => {
    let suma=0;
    for (i=0; i<niz.length; i++){
        if (i%2 == 0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaElParInd(brojevi1));
console.log(sumaElParInd(brojevi2));
console.log(sumaElParInd(brojevi3));


//zadatak 14

let znak = niz => {
    for (i=0; i<niz.length; i++) {
        if (niz[i] > 0) {
            niz[i] = - niz[i]
        }else if (niz[i]<0) {
            niz [i] = - niz[i]
        }
    }
    return niz;
}
console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));


//zadatak 15

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [1,5,9,3];
let brojevi5 = [8,5,7,8,5];
*/

let znak2 = niz => {
    for (let i=0; i<niz.length; i++){
        if (i%2 ==0 && niz[i]%2 !=0){
          niz[i] = - niz[i];  
        }
    }
    return niz;
}

  ///// nece izbaciti prave vrednosti za prva 3 console log zbog prethodnog zadatka, kada se obrise prethodni onda izbacuje dobre////

console.log(znak2(brojevi4));
console.log(znak2(brojevi5));

//15zad drugi nacin 
















/*  Milkova resenja
// 12. Zadatak
// Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParnihSaNeparnimIndexom = (niz) => {
  let count = 0;
  for (let i = 1; i < niz.length; i += 2) {
    // if (niz[i] % 2 == 0) {
    //   count++
    // }
    count += niz[i] % 2 == 0 ? 1 : 0;
  }
  return count;
};
console.log(
  "brojParnihSaNeparnimIndexom",
  brojParnihSaNeparnimIndexom(brojevi4)
);
// 13. Zadatak
// Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemenataSaParnimIndexom = (niz) => {
  let sum = 0;
  for (let i = 0; i < niz.length; i += 2) {
    sum += niz[i];
  }
  return sum;
};
console.log(
  "sumaElemenataSaParnimIndexom",
  sumaElemenataSaParnimIndexom(brojevi1)
*/