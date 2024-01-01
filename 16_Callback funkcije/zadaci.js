// ZADACI IZ NIZOVA


// TEST PRIMERI
let a = [6,8,9,3,1];



//zadatak 2 
let sumaElem = niz => {
    let suma = 0;
    niz.forEach (el => {  // prenose se elementi, jer forEach petlja radi sa vrednostima
        suma+=el;
    });
    return suma;
}

console.log(sumaElem(a));

// zadatak 5

let maxVr = niz => {
    let max = niz[0];
    niz.forEach (elem => {   // for.Each petljom ne mozemo da preskocimo prvi element
        if (elem > max){    // mogao sam da nazovem umesto elem i el kao u prethodnom, ne bi pravilo problem
            max = elem;
        }
    })
    return max;
}
console.log(maxVr(a));



//zadatak 3

let proizvodEl = niz => {
    let proizvod = 1;
        niz.forEach (el => {
            proizvod*=el;
       });
        return proizvod;
}
console.log(proizvodEl(a));

//zadatak 4

let SrVrednost =  niz => {
    let suma = 0;
    let broj = 0; // moze i niz.length umesto da se stavlja brojac
        niz.forEach (el=>{
            suma+=el;
            broj++;
        });
    let SrVr = suma/broj;
    return SrVr;
}
console.log(SrVrednost(a));

//let a = [6,8,9,3,1];

//zadatak 6

let minVrednost = niz => {
    let min = niz[0];
        niz.forEach (el => {
            if (el < min){
                min = el;
            }
        });
    return min;
}
console.log(minVrednost(a));


//zadatak 7

let indexMax = niz => {
    let max = niz[0];
    let index = 0;
    niz.forEach ((elem,i) => {   // ovo je callback fja koja se pise kao arrow fja, i parameteri moraju u zagradi da se pisu posto ih ima vise od jednog
        if (elem > max){    
            max = elem;
            index = i ;
        }
    })
    return index;
}
console.log(indexMax(a));

//zadatak 8 

let indexMin = niz => {
    let min = niz[0];
    let index =0;
    niz.forEach ((el,i)=> {  // kada stavim el,i onda el uzima vrednost parametra, a i je index, kako god da smo ih nazvali
        if (el < min){
            min = el;
            index = i;
        }
    });
    return index;
}
console.log(indexMin(a));

//let a = [6,8,9,3,1];

let brElveciOdSrVr =  niz => {
    let suma = 0;
    let broj = 0;
    let broj2 = 0;
        niz.forEach (ele=>{
            suma+=ele;
            broj++;
        });
    let SrVr = suma/broj;
    niz.forEach (ele=>{
        if ( ele > SrVr){
            broj2++;
        }
    });
   
    return broj2;
}
console.log(brElveciOdSrVr(a));



// zadatak ** Vratiti sve indexe pojavljivanja maksimalne vrednosti
/*
let b = [9,5,6,9,9,7,9];

let sviIndexMaxVr = niz => {
    let maxVr = niz[0];
    let sviIndexi = [];
    niz.forEach ((elem,i) => {
        if (elem >= maxVr) {
            max = elem;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
console.log(sviIndexMaxVr(b));

let c = [3,5,2,1,6,2,6];
console.log(sviIndexMaxVr(c));
*/

// zadatak 19 

let duzinaSvihStringova = niz => {
    niz.forEach (el=>{      // ovo je duzina stringa
        console.log(el.length);  // da bismo ispisali duzinu ovog stringa
    });
    
}

let imena = ["Stefan", "Vladislav", "Nikola", "Milan", "Nevena", "Maja"];
duzinaSvihStringova(imena);

// zadatak 20 

let stringMaxDuzina = niz => {
    let maxVr = niz [0];
    let duzina = niz[0].length;
    niz.forEach (el => {
        if (el.length > duzina){
            maxVr = el;
            duzina= el.length;
        }
    });
    return maxVr;
}
console.log(stringMaxDuzina(imena));
// maxVr = "Stefan", duzina = 6
// callback ("Stefan")
// callback ("Vladislav")
//.....
// callback ("Maja")






//zadatak 24 

let zad24 = (a,b) => {
    let c = [];
    a.forEach((el,i)=>{
        // moze da se zapise ovako c.push(a[i], b[i]);
        c.push (el, b[i]);
    });
    return c;
}

let n1 = [1,2,3,4];
let n2 = [5,6,7,8];
console.log(zad24(n1,n2));

//zadatak 25

let zad25For = (a,b) => {
    let n = a.length; // mogli smo i n = b.length
    let c = [];

    for (let i=0; i<n; i++){
        c[i] = a[i] * b[i]; // c.push(a[i] * b[i])
    }
    return c;
}

console.log(zad25For(n1,n2));

//zadatak 25 sa for.Each

let zad25ForEach = (a,b) => {
    let c = [];
    a.forEach((elem, i)=>{
        c.push(elem * b[i]) // moze da se zapise i kao a[i]*b[i]
    });
    return c;
}

console.log(zad25ForEach(n1,n2));




//zadatak 26 

// a = [a[0], a[1]..... a[2n-1]] // niz ima 2n elemenata (znaci ima paran broj elemenata)
// n = 3 => a ima 6 elemenata [a[0], a[1], ... a[5]]
// treba formirati b niz  b = [b[0], b[1]...b[n-1]]
// n = 3 => b ima 3 elemenata [b[0], b[1], b[2]]
// b[0] = (a[0] + a[5]) / 2
// b[1] = (a[1] + a[4]) / 2
// b[2] = (a[2] + a[3]) / 2

let zad26For = a => {
    let k = a.length;
    let n = k/2;
    let b = [];
    for (let i = 0; i<n; i++) {
        b[i] = (a[i] + a[2*n -1-i])/2;
    }
    return b;
}

console.log(zad26For(n1));


// for.each 
let zad26ForEach = a => {
    let b =[];
    
    a.forEach ((el,i) => {  
        if (i<=a.length/2){
            b[i] = a[i];
        }
        else {
            b[i] = a.length / 2
        }
    });
} 

// preuzmi resenja sa predavanja ispisana su lose