let imena = ["stefan", "jelena", "milos", "bratislav", "Ana"];
console.log(imena);

//zadatak 2 

let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];

let zbir = niz => {
    let suma= 0;
    for (i=0;i<niz.length; i++){
        suma += niz[i];
    }
    return suma;
}

console.log(zbir(brojevi1));
console.log(zbir(brojevi2));
console.log(zbir(brojevi3));
console.log(zbir(brojevi4));


//zadatak 3 

let proizvodEl = niz => {
    let proizvod = 1;
    for (i=0; i<niz.length; i++){
        proizvod*=niz[i];
    }
    return proizvod;
}
console.log(proizvodEl(brojevi1));
console.log(proizvodEl(brojevi2));
console.log(proizvodEl(brojevi3));
console.log(proizvodEl(brojevi4));

//zadatak 4 

let srednja = niz => {
    let suma = 0;
    for (i =0; i<niz.length; i++){
        suma+=niz[i];
    }
    let SrVr = suma/niz.length;
    return SrVr;
}
console.log(srednja(brojevi1));
console.log(srednja(brojevi2));
console.log(srednja(brojevi3));
console.log(srednja(brojevi4));

//zadatak 5

let MaxVrednost = niz => {
    let max = niz[0];
    for (i=1; i<niz.length; i++){
        if (niz[i]> max){
            max = niz[i];
        }
    }
    return max;
}
console.log(MaxVrednost(brojevi1));
console.log(MaxVrednost(brojevi2));
console.log(MaxVrednost(brojevi3));
console.log(MaxVrednost(brojevi4));


/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];
*/

//zadatak 6 

let minVrednost = niz => {
    let min = niz[0];
    for (i=1; i<niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minVrednost(brojevi1));
console.log(minVrednost(brojevi2));
console.log(minVrednost(brojevi3));
console.log(minVrednost(brojevi4));

//zadatak 7 

let indexMax = niz => {
    let max = niz[0];
    let index = 0;
    for (i=1; i<niz.length;i++){
        if (niz[i]>max){
            max= niz[i];
            index = i;
        }
    }
    return index;

}
console.log(indexMax(brojevi1));
console.log(indexMax(brojevi2));
console.log(indexMax(brojevi3));
console.log(indexMax(brojevi4));

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];
*/


//zadatak 8

let minIndex = niz => {
    let min = niz [0];
    let index = 0;
    for (i = 1; i<niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(minIndex(brojevi1));
console.log(minIndex(brojevi2));
console.log(minIndex(brojevi3));
console.log(minIndex(brojevi4));


//zadatak 9

let brojEl = niz => {
    let broj=0;
    let suma = 0;
    for (i=0; i<niz.length; i++){
        suma+=niz[i];
    }
    let ArSr = suma/niz.length;
    for (i=0; i<niz.length;i++){
        if(niz[i]>ArSr){
            broj++;
        }
    }
    return broj;
}
console.log(brojEl(brojevi1));
console.log(brojEl(brojevi2));
console.log(brojEl(brojevi3));
console.log(brojEl(brojevi4));

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];
*/

//zadatak 10

let zbirPozEl = niz => {
    let suma = 0;
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(zbirPozEl(brojevi1));
console.log(zbirPozEl(brojevi2));
console.log(zbirPozEl(brojevi3));
console.log(zbirPozEl(brojevi4));

//zadatak 11

let zbirPar = niz => {
    let suma=0;
    for (i=0; i<niz.length; i++){
        if (niz[i]%2==0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(zbirPar(brojevi1));
console.log(zbirPar(brojevi2));
console.log(zbirPar(brojevi3));
console.log(zbirPar(brojevi4));

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];
*/

//zadatak 12

let BrParsaNepar = niz => {
    let broj=0;
    for (i=0; i<niz.length; i++){
        if (niz[i]%2==0 && i%2!=0){
            broj++;
        }
    }
    return broj;
}
console.log(BrParsaNepar(brojevi1));
console.log(BrParsaNepar(brojevi2));
console.log(BrParsaNepar(brojevi3));
console.log(BrParsaNepar(brojevi4));

//zadatak 13

let sumaElPar = niz => {
    let suma=0;
    for (i=0; i<niz.length; i++){
        if (i%2==0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaElPar(brojevi1));
console.log(sumaElPar(brojevi2));
console.log(sumaElPar(brojevi3));
console.log(sumaElPar(brojevi4));


//zadatak 14
/*
let znak = niz => {
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            niz[i]=-niz[i];
        }else if (niz[i]< 0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));
console.log(znak(brojevi4));
*/
/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [8,5,7,8,5];
*/

//zadatak 15

let znak2 = niz => {
    for (i=0; i<niz.length;i++){
        if (niz[i]%2!=0 && i%2==0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak2(brojevi1));
console.log(znak2(brojevi2));
console.log(znak2(brojevi3));
console.log(znak2(brojevi4));

//zadatak 16

let stavke = ["jedan", "dva", "tri","cetiri", "pet"];

let neurLista = niz =>{
    d1 = "<ul>";
    for (i = 0; i<niz.length; i++){
        d1+= `<li>${niz[i]}</li>`
    }
    d1 += `</ul>`
    return d1;
}
d1.innerHTML += neurLista(stavke);

//zadatak 17

let stavke2 = ["jedan1", "dva2", "tri3","cetiri4", "pet5"];

let tabela = niz => {
    d2 ="<table>";
    for (i=0; i<niz.length; i++){
        d2+= `<tr><td style="border:1px solid black">${niz[i]}</td></tr>`;
    }
    d2+= `</table>`
    return d2;
}
d2.innerHTML += tabela(stavke2);

//zadatak 18

let slike = ["slike/Aquaba.jpg", "slike/Egipat.jpg", "slike/Jordan.jpg"];

let galerija = niz => {
    d3="";
    for (i=0; i<niz.length; i++){
        d3+=`<img src="${niz[i]}" style="width:200px; height:200px">`
    }
    return d3;
}

d3.innerHTML += galerija(slike);

//zadatak 19

let imena2 = ["stefan", "jelena", "milos", "bratislav", "Ana"];
let duzinaEl = niz => {
    let str = 0;
        for (i=0; i<niz.length; i++){
            str = niz[i].length;
            console.log(str);
        }
        return str;
}


//zadatak 20

let najvecaDuzina= niz => {
    let najveca = niz[0].length;
    for (i=1; i<niz.length; i++){
        if (niz[i].length>najveca){
            najveca = niz[i].length;
        }
    }
    return najveca;
}
console.log(najvecaDuzina(imena2));

//zadatak 21 
// let imena2 = ["stefan", "jelena", "milos", "bratislav", "Ana"];

let duzinaVecaOdProsek = niz => {
    let broj = 0;
    let suma = 0;
    for (i=0; i<niz.length; i++){
        suma+=niz[i].length;
    }
    let SrVr = suma / niz.length;
    for (i=0; i<niz.length; i++){
        if (niz[i].length>SrVr){
            broj++;
        }
    }
    return broj;
}

console.log(duzinaVecaOdProsek(imena2));

//zadatak 22

let brElA = niz =>{
    let broj = 0;
    for (i=0; i<niz.length; i++){
        for (let j=0; j<niz[i].length; j++){
            if (niz[i][j]=="a"){
                broj++;
                break;
            }
        }
    }
    return broj;
}
console.log(brElA(imena2));

// drugi nacin


//zadatak 23 

let imena3 = ["stefan", "jelena", "milos", "bratislav", "Ana","Aleksa", "advokat"];

let brElemenataAa = niz => {
    let broj = 0;
    for(i=0;i<niz.length;i++){
        if(niz[i].startsWith("a") || niz[i].startsWith("A")){
            broj++;
        }
    }
    return broj;
}
console.log(brElemenataAa(imena3));



////////////////////////////////////////////////////
////////////////NIZOVI FOR EACH ////////////////////
////////////////////////////////////////////////////

//zadatak 2 
// Odrediti zbir elemenata celobrojnog niza


let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];


let zbEl = niz => {
    let suma=0;
    niz.forEach(el=>{
        suma+=el;
    });
    return suma;
}
console.log(zbEl(jbro));
console.log(zbEl(jbro2));


//zadatak 3 

let prEl = niz => {
    let proizvod = 1;
    niz.forEach(el=>{
        proizvod*=el;
    });
    return proizvod;
}
console.log(prEl(jbro));
console.log(prEl(jbro2));

//zadatak 4 
//Odrediti srednju vrednost elemenata celobrojnog niza

let sredljaVrednost = niz => {
    let suma=0; 
    niz.forEach(el=>{
        suma+=el;
    });
    let SrVr = suma / niz.length;
    return SrVr;
}
console.log(sredljaVrednost(jbro));
console.log(sredljaVrednost(jbro2));

//zadatak 5
// Odrediti max vrednost u celobrojnom nizu

let maxCel = niz => {
    let max = niz[0];
    niz.forEach(el=> {
        if (el>max){
            max = el;
        }
    });
    return max;
}
console.log(maxCel(jbro));
console.log(maxCel(jbro2));

/*

let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];
*/

//zadatak 6

let minCel = niz =>{
    let min = niz[0];
    niz.forEach(el=>{
        if(el<min){
            min=el;
        }
    });
    return min;
}
console.log(minCel(jbro));
console.log(minCel(jbro2));

//zadatak 7 

let indMaxCel = niz => {
    let max = niz[0];
    index=0;
    niz.forEach((el,i)=>{
        if(el>max){
            max=el;
            index=i;
        }
    });
    return index;
}
console.log(indMaxCel(jbro));
console.log(indMaxCel(jbro2));

//zadatak 8
 let indMinCel = niz => {
    let min = niz[0];
    let index =0;
    niz.forEach((el,i)=>{
        if(el<min){
            min=el;
            index = i;
        }
    });
    return index;
 }
 console.log(indMinCel(jbro));
console.log(indMinCel(jbro2));

/*
let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];
*/

//zadatak 9 

let brElCel = niz => {
    let suma=0;
    let broj=0;
    niz.forEach(el=>{
        suma+=el;
    });
    let SrVr = suma/niz.length;
    niz.forEach(el=>{
        if(el>SrVr){
            broj++;
        }
    });
    return broj;
}
console.log(brElCel(jbro));
console.log(brElCel(jbro2));


//Zadatak 10

let brPozCel = niz =>{
    let suma=0;
    niz.forEach(el=>{
        if(el>0){
            suma+=el;
        }
    });
    return suma;
}

console.log(brPozCel(jbro));
console.log(brPozCel(jbro2));

//Zadatak 11
let brParCel = niz => {
    let broj=0;
    niz.forEach(el=>{
        if(el%2==0){
            broj++;
        }
    });
    return broj;
}

console.log(brParCel(jbro));
console.log(brParCel(jbro2));

/*
let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];
*/


//Zadatak 12

let brParNepar = niz => {
    let broj=0;
    niz.forEach((el,i)=>{
        if(el%2==0 && i%2!=0){
            broj++;
        }
    });
    return broj;
}


console.log(brParNepar(jbro));
console.log(brParNepar(jbro2));

//Zadatak 13
let sumaElParInd = niz =>{
    let suma=0;
    niz.forEach((el,i)=>{
        if(i%2==0){
            suma+=el;
        }
    });
    return suma;
}
console.log(sumaElParInd(jbro));
console.log(sumaElParInd(jbro2));

//Zadatak 14
let znakCelo = niz => {
    let suma=0;
    niz.forEach(el=>{
        if( el >0){
            el+=el*(-1);
        }
        
    });
    return niz;
}
console.log(znakCelo(jbro));
console.log(znakCelo(jbro2));
/*
let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];
*/


//zadatak 16

let tekst = ["hleb","mleko","jogurt","voda"];

let listNeur = niz =>{
    let d4 ="<ul>";
    niz.forEach(el=>{
        d4+= `<li>${el}</li>`
    });
    d4+= `</ul>`
    return d4;
}
d4.innerHTML += listNeur(tekst);


//Zadatak 19


let tekst2 = ["hleb","mleko","jogurt","vodavoda"];


let nizDuzina = niz => {
    let duzina = 0;
    niz.forEach(el=>{
        
        duzina= el.length;
        console.log(duzina);
    });
    return duzina;
}
console.log(nizDuzina(tekst));

// zadatak 20

let elNajvDuz = niz =>{
    let maks = niz[0].length;
    let najveca="";
    niz.forEach (el=>{
        if(el.length>maks){
            maks = el.length;
            najveca = el;
        }
    });
    return najveca;
}
console.log(elNajvDuz(tekst2));

//zadatak 21

let nizProsek = niz =>{
    let broj=0;
    let suma=0;
    niz.forEach(el=>{
        suma+=el.length;
    });
    let SrVr = suma/niz.length;
    niz.forEach(el=>{
        if(el.length>SrVr){
            broj++;
        }
    });
    return broj;
}
console.log(nizProsek(tekst2));

/*
let tekst2 = ["hleb","mleko","jogurt","vodavoda"];
*/

