// nizovi su tip podatsaka koji omogucavaju smestanje vise elemenata unutar jedne promenljive. 
//Elementi niza mogu da budu brojevi, stringovi, logicki tipovi..

// Indeksiranje elemenata u nizu == svki od elemenata ima svoj index koji cemo koristiti za pristup tacno odredjeno elementu


//zadaci ==== resavamo ih sada sa for petljom



//zadatak 2
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 =  [1,2,3,4,5,6];

let sumaElem = niz =>{
    let suma = 0;
    for(i=0; i<niz.length; i++){
        suma += niz[i];
    }
    return suma;
}
console.log(sumaElem(brojevi1));

//zadatak 3

let proizvodElem = niz =>{
    let proizvod = 1;
    for(i=0;i<niz.length;i++){
        proizvod*=niz[i];   // stavljamo vrednost niz[i], jer je i index a niz[i] je element sa tim indexom, nesto slicno sto smo kasnije u forEach nizovima stavljali (el,i)
    }
    return proizvod;
}

console.log(proizvodElem(brojevi1)); // 
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3)); // ovako zapisano znaci da hocemo da ispisemo u konzoli vrednost funkcije proizvodElem, koja zapravo predstavlja prozivod brojeva iz niza brojeva - brojevi3

//zadatak 4 i 9

let SrVr = niz =>{
    let suma =0;
    for(i=0;i<niz.length;i++){
        suma+=niz[i];
    }
    let ArVr = suma / niz.length;
    let broj = 0;
    for (i=0;i<niz.length;i++){
        if(niz[i]>ArVr){
            broj++;
        }
    }
    return broj;
}
console.log(SrVr(brojevi1));
console.log(SrVr(brojevi2));
console.log(SrVr(brojevi3)); // niz moze da se kreira i ovde "na licu mesta" == znaci ne moram da ga gore proglasim sa npr let brojevi4 = [] vec samo u console.log(srVr(1,2,5,7))


/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 =  [1,2,3,4,5,6];
*/

//zadatak 5 i 7

let nizMax = niz =>{
    let max = niz[0];
    let indexMax =0;
    for(i=1; i<niz.length;i++){
        if(niz[i]>max){
            max = niz[i];
            indexMax = i;
        }
    }
    return max; // return indexMax;
}

console.log(nizMax(brojevi1));
console.log(nizMax(brojevi2));
console.log(nizMax(brojevi3));

//zadatak 6

let nizMin = niz =>{
    let min = niz[0];
    let indexMin=0;
    for(i=0;i<niz.length;i++){
        if(niz[i]<min){
            min = niz[i];
            indexMin = i;
        }
    }
    return min; // return indexMin;
}
console.log(nizMin(brojevi1));
console.log(nizMin(brojevi2));
console.log(nizMin(brojevi3));

//zadatak 10

let nizPoz = niz =>{
    let suma=0;
    for(i=0;i<niz.length;i++){
        if(niz[i]>0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(nizPoz(brojevi1));
console.log(nizPoz(brojevi2));
console.log(nizPoz(brojevi3));
/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 =  [1,2,3,4,5,6];
*/

//zadatak 11

let nizPar = niz =>{
    let broj = 0;
    for(i=0; i<niz.length; i++){
        if(i%2==0){
            broj++;
        }
    }
    return broj;
}
console.log(nizPar(brojevi1));
console.log(nizPar(brojevi2));
console.log(nizPar(brojevi3));

//zadatak 12 

let nizParElNeparInd = niz => {
    let broj = 0;
    for(i=0;i<niz.length; i++){
        if(niz[i]%2 == 0 && i%2!=0){
            broj++;
        }
    }
    return broj;
}
console.log(nizParElNeparInd(brojevi1));
console.log(nizParElNeparInd(brojevi2));
console.log(nizParElNeparInd(brojevi3));

//zadatak 13

let sumaPar = niz => {
    let suma =0;
    for(i=0;i<niz.length;i++){
        if(i%2==0){
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaPar(brojevi1));
console.log(sumaPar(brojevi2));
console.log(sumaPar(brojevi3));

/*
let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 =  [1,2,3,4,5,6];
*/

//zadatak 15

let znak = niz =>{
    for(i=0;i<niz.length;i++){
        if(i%2==0 && niz[i]%2!=0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));

//zadatak 16

let stavke = ["jaja","mleko","brasno","emdze"];

let nizStavki = niz=> {
    let d1 = "<ul>Lista stavki:";
    for(i=0;i<niz.length;i++){
        d1 += `<li>${niz[i]}</li>`
    }
    d1 += "</ul>"
    return d1;
}

d1.innerHTML += nizStavki(stavke);

//zadatak 17

let timovi = ["partizan","olimpijakos","panata","barselona"];

let nizTimovi = niz => {
    let d2 = `<table>`;
    for(i=0;i<niz.length;i++){
        d2 += `<tr><td style="border:1px solid black">${niz[i]}<td><tr>`
    }
    d2 += `</table>`
    return d2;
}
d2.innerHTML = nizTimovi(timovi);


//zadatak 19 

let duzinaNiza = niz => {
    let duzina = 0;
    for(i=0;i<niz.length;i++){
        duzina = niz[i].length;
        console.log(duzina);
    }
    return duzina;
}
console.log(duzinaNiza(timovi));

//zadatak 20

let maxLength = niz => {
    let max = niz[0].length;
    for(i=1;i<niz.length;i++){
        if (niz[i].length > max){
            max = niz[i].length;
        }
    }
    return max;
}
console.log(maxLength(timovi));


//let timovi = ["partizan","olimpijakos","panata","barselona","efes"];

//zadatak 21

let nizVecaOdProsek = niz =>{
    let broj = 0;
    let suma = 0;
    let index =0;
    for(i=0; i<niz.length; i++){
        suma += niz[i].length;
    }
    let SrVr = suma / niz.length;
    for (i=0; i<niz.length;i++){
        if(niz[i].length>SrVr){
            broj++;   
                    
        }
    }
    return broj;
}
console.log(nizVecaOdProsek(timovi));

//zadatak 22

let timovi2 = ["partizan","olimpijakos","panata","barselona","efes","Armani","alba berlin"];

let nizContains = niz =>{
    let sadrzi=0;
    for(i=0;i<niz.length;i++){
        if(niz[i].includes("a")){
            sadrzi++;
        }
    }
    return sadrzi;
}
console.log(nizContains(timovi2));

//zadatak 23 

let nizStarts = niz => {
    
    let broj = 0;
    for (i=0;i<niz.length;i++){
        if(niz[i].startsWith("a") || niz[i].startsWith("A")){
            broj++;
        }
    }
    return broj;
}
console.log(nizStarts(timovi2));
