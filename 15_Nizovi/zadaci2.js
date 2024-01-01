//zadatak 19


let imena = ["stefan", "jelena", "milos", "bratislav", "Ana"];
let duzinaSvakogElementa = niz => {
    for (i=0; i<niz.length; i++){
        //niz[i] je string
        let s = niz[i];
        console.log(s.length);
    }
}

duzinaSvakogElementa(imena);

//zadatak 20

let najduziEl = niz => {
    let maks = niz[0];
    for (i=0; i<niz.length; i++){
        if (niz[i].length > maks.length){
            maks = niz [i];
        }
    }
    return maks;
}
console.log(najduziEl(imena));

// prepisi drugi nacin sa predavanja

let stringMaxDuzina = niz => {
    let maksString = niz[0];
    let maxDuzina = maksString.length;
    for (let i =1; i<niz.length;i++){
        let s = niz[i];
        if (s.length>maksDuzina){
            maksString = s;
            maxDuzina = s.length;
        }
    }
    return maksString;
}
console.log(najduziEl(imena));

// zadatak 21

let prosecnaDuzinaEl = niz => {
   let zbirDuzina = 0;
   for (let i =0; i<niz.length; i++){
        let s = niz[i];
        zbirDuzina+=s.length;
   }
   return zbirDuzina / niz.length;
}
console.log(prosecnaDuzinaEl(imena));

let brojNatprosecnoDugih = niz => {
    let pd = prosecnaDuzinaEl (niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s.length > pd){
            broj++;
        }
    }
    return broj;
}
console.log(brojNatprosecnoDugih(imena));


//zadatak 22

// metoda includes

let sadrzi = niz => {

    let rezultat = niz.includes("a");
    for (i=0; i <niz.length; i++){
        rezultat++;
    }
    return rezultat;
}
console.log(sadrzi(imena));


//zadatak 23 

//Iskopiraj kod//

/*
let imena = ["stefan", "jelena", "milos", "bratislav", "Ana"];
*/



//zadatak 24


let zad24a = (a,b) => {

    let n = a.length; // n=b.length
    let c = [];
    for (let i = 0; i<n; i++){
        c.push(a[i], b[i]);
    }
    // 0. c=[]
    // 1. c=[a[0], b[0]]
    // 2. c=[a[0], b[0], a[1], b[1]]
    // ....
    // n-1 c=[a[0], b[0], a[1], b[1], ..... a[n-1], b[n-1]]
}

let zad24b = (a,b) => {
    let n =a.length;
    let c = [];
    for (let i = 0, i<n; i++){
        c[2*i] = a[i];
        c[2*i+1]= b[i];
    }
    return c;
}

// c = [a[0], b[0], a[1], dopuni jos sa zadataka

