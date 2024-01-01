//DOM je programska reprezentacija za HTML
//Predstavlja stranicu na nacin koji omogucuje programu da promeni strukturi, stil i sadrzaj HTML stranice (posto JS ne vidi HTML tagove kao takve, potrebno je da ima ovakav model)
//DOM znaci predstavlja HTML dokument preko objekata povezanih u strukturi koja se zove stablo



//SELEKTOVANJE ELEMENATA
// document.getElementById('id') == Vraca objekat tj HTML element sa datim id-jem
//document.getElementByClassName('class') == Vraca HTML kolekciju svih elemenata sa datom klasom
//document.getElementByTagName('tag') == Vraca HTML kolekciju svih zadatih tagova
//document.getElementByName('name') == Vraca Node Listu svih elemenata koji imaju zadatu vrednost atributa name

// Kolekcija (HTML collection)== njenim clanovima ne mozemo da pristupimo forEach petljom, vec mozemo preko for petlje.  Mozemo i kolekciju da konvertujemo u niz pa onda da joj pristupimo sa forEach petljom.

/*Konvertovanje u niz:
let k = document.getElementsByClassName('klasa');
let k1 = Array.from(k);
k1.forEach(j=> {
    console.log(j);
});
*/

//SELEKTOVANJE ELEMENATA == dodatne 2 metode
//document.querySelector('selector') == kao parametar prima bilo koji validan CSS SELEKTOR. Kao rezultat vraca objekat-prvi HTML element koji zadovoljava dati selektor
//document.querySelectorAll('selector') == kao parametar prima bilo koji validan CSS selektor. Kao rezultat vraca Node listu svih HTML elemenata koji zadovoljavaju dati selektor

//NODE LISTA === node lista je niz cijim elementima mozemo pristupiti forEach petljom kao i for petljom!!!!

let t1 = document.querySelector("#p2");
console.log(t1); // izbacice p sa id p2

let t2 = document.querySelector(".par")
console.log(t2);  // selektovace samo prvi objekat 

let t3 = document.querySelectorAll(".par");
console.log(t3);  // izbacuje node listu, poredja sve .par kao elemente niza

t3.forEach(el=>{
    console.log(el);
})

let t4 = document.querySelectorAll("div p.par"); // ako bismo dodali i a tag u ovaj node list izgledalo bi kao ispod za t5
console.log(t4);

let t5 = document.querySelectorAll("div p.par, div a.par");
console.log(t5);


//Zadatak 1

let z1 = document.querySelector("p");
console.log(z1);

//zadatak 2 
let z2 = document.querySelector("div.error");
console.log(z2);

let zz2 = document.querySelectorAll("div.error"); // svi tagovi sa klasom error
console.log(zz2);

//zadatak 3
let z3 =document.querySelector("tr:nth-child(3)");
console.log(z3);

//zadatak 4
let z4 = document.querySelectorAll("a");
console.log(z4);

//zadatak 5:
let z5 = document.querySelectorAll("img");
console.log(z5);


// MENJANJE SADRZAJA ELEMENATA 
//Svojstvo
//element.innerHTML='html sadrzaj' == Menja sadrzaj nekog elementa


//element.attribute = 'nova vrednost' == Postavlja vrednost atributa nekog elementa
// npr ako smo dohvatili link, mozemo da stavimo href atribut, target atribut
// za img mozemo da stavimo atribut src

//element.style.propety = 'nova vrednost' == Postavlja stil datom elementu
// stavljamo kada hocemo css svojstva da promenimo


//Metoda
//element.setAttribute('attribute','nova vrednost') == Postavlja vrednost atributa nekog elementa

//kod stilova paziti na stilove cije ime se sastoji od vise reci 
// div.style.color="black";
//div.style.backgroungColor ="yellow"

//kod svih svojstava, moze se koristiti += umesto =, da bi se izmenilo postojece svojstvo

// Zadatak 6

let z6 = document.querySelectorAll("p")
    z6.forEach(el=>{
        el.innerHTML += " Vazno!!!"

    });

//primer sa casa 
 let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight:bold'>Novi tekst</span> prvog linka"
// kada sam stavio samo link.innerHTML = onda je promenio tekst, a kada sam stavio link.innerHTML += onda je dodao ovaj novi tekst na stari
//menjanje atributa 
/*
link.href = "https://www.google.com";
link.target = "_blank";
console.log(link);
*/

//menjanje preko metode


link.setAttribute("href","https://www.google.com");
link.setAttribute("target","blank");
link.id="pera"; // kada odemo na inspect element i nadjemo ovaj link, videcemo da mu je dodao id pera


link.style.color = "red";
link.style.fontSize = "18px";


// zadatak 7 

let z7 = document.querySelectorAll("div.error");
z7.forEach(el=>{
    el.innerHTML += `<h1>Greska!</h1>`
})

/*
//zadatak 8  == URADITI OPET!!!!!!!!!!!
let z8 = document.querySelector("p");
z8.forEach((el,j)=>{
    el.innerHTML+=`el**el`;
})
*/


//zadatak 9 
let z9 = document.querySelectorAll("img");
z9.forEach(el=>{
    el.setAttribute("alt","slika");
})


//zadatak 10 

let z10 = document.querySelectorAll("p");
z10.forEach(el=>{
    el.style.color="purple";
    el.style.fontSize="20px"
})

//zadatak 11
let z11 =  document.querySelectorAll("p");
z11.forEach((el,j)=>{
    if(j%2==0){
        el.style.backgroundColor="green";
    }else{
        el.style.backgroundColor="red";
    }
})


//zadatak 12

let z12 = document.querySelectorAll("a");
z12.forEach((el,j)=>{
    el.style.padding="5px";
    el.style.fontSize="18px";
    el.style.textDecoration="none"
    // ove tri izmene sam mogao da napisem i preko setAtribute na sledeci nacin:
    // el.setAttribute("style", "padding:5px; font-size:18px;text-decoration:none" )
    if(j%2==0){
        el.style.backgroundColor="green";
    }else{
        el.style.backgroundColor="red"
    }
})


// zadatak 13 URADITI== nije tezak ide preko ono nesto if ends with .png formule
//zadatak 14

let z14 = document.querySelectorAll("a");
z14.forEach(el=>{
    if(el.target == "blank"){
        el.setAttribute("target","top");
    }else {
        el.setAttribute("target","blank");
    }
})

/*
//zadatak 15
let imena = ["pera", "mika", "laza"];

let z15 = document.querySelectorAll("a")

z15.forEach((el,j)=>{
    if(j%2==0){

    }
});

*/









/*
// document je glavni cvor
//**body tag je predak npr script tagu 
// body tag je potomak HTML taga



console.log(document);
console.log(document.body);
console.log(document.head);

let e1 = document.getElementById("p2");
console.log(e1);  // (jedinstven)objekat iz DOM stabla

let e2 = document.getElementsByClassName("par");
console.log(e2);  // otvara HTML kolekciju iz DOM stabla (u ovom slucaju ima 4 elementa, i indeksirani su od 0 do 3)

for (i=0; i<e2.length; i++){
    console.log(e2[i]);
}

//HTML kolekcije ne poseduju forEach petlju, ali mozemo da se dovijamo na sledeci nacin: HTML kolekciju mozemo da konvertujemo u niz i onda da se koristi forEach petlja

let niz = Array.from(e2);
niz.forEach(el=>{
    console.log(el);
})

// nije neophodno da se radi konverzija u niz, moze umesto toga da se koristi for petlja samo 

let e3 = document.getElementsByTagName("p");
console.log(e3);  // opet smo dobili HTML kolekciju od 4 elemenata

let e4 = document.getElementsByName("p");
console.log(e4);
e4.forEach(el=>{
    console.log(el);
});


// NODE LIST - niz cijim clanovima mozemo pristupiti forEach petljom kao i for petljom

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2);

let t3 = document.querySelectorAll(".par")
    console.log(t3);

    t3.forEach(el=>{
        console.log(el);
    });
*/


////////////VEZBAAAAA////////////////////////////

//zadatak 1

let r1 = document.querySelector("p");
console.log(r1);

//zadatak 2

let r2 = document.querySelector("div.error");
console.log(r2);

//zadatak 3
let r3 = document.querySelector("tr:nth-child(2)");
console.log(r3);

//zadatak 4
let r4 = document.querySelectorAll("a");
console.log(r4);

//zadatak 5
let r5 = document.querySelectorAll("img");
console.log(r5);

//zadatak 6
let r6 = document.querySelectorAll("p");
r6.forEach(el=>{
    el.innerHTML += `VAZNO!!!`
});

//zadatak 7
let r7=document.querySelectorAll("div.error");
r7.forEach(el=>{
    el.innerHTML += `<h1>NOVA GRESKA</h1>` //. kada stavim + ispred = on samo doda tekst, kada stavim samo jednako onda on pregazi stari tekst novim
})

//zadatak 8
let r8 = document.querySelectorAll("p");

r8.forEach((el,j)=>{
    let kv = j**2;
    el.innerHTML += `${kv}`; 
})

// MENJANJE SADRZAJA ELEMENATA 
//Svojstvo
//element.innerHTML='html sadrzaj' == Menja sadrzaj nekog elementa


//element.attribute = 'nova vrednost' == Postavlja vrednost atributa nekog elementa
// npr ako smo dohvatili link, mozemo da stavimo href atribut, target atribut
// za img mozemo da stavimo atribut src

//element.style.propety = 'nova vrednost' == Postavlja stil datom elementu
// stavljamo kada hocemo css svojstva da promenimo


//Metoda
//element.setAttribute('attribute','nova vrednost') == Postavlja vrednost atributa nekog elementa

//kod stilova paziti na stilove cije ime se sastoji od vise reci 
// div.style.color="black";
//div.style.backgroungColor ="yellow"

//kod svih svojstava, moze se koristiti += umesto =, da bi se izmenilo postojece svojstvo



//zadatak 9 
let r9 = document.querySelectorAll("img");
r9.forEach(el=>{
    el.setAttribute("alt","slikenzi")
});


// zadatak 10 

let r10 = document.querySelectorAll("p");
r10.forEach(el=>{
    el.style.color="yellow";
})

//zadatak 11

let r11 = document.querySelectorAll("p");

r11.forEach((el,j)=>{
    if(j%2==0){
        el.style.backgroundColor="orange";
    }else {
        el.style.backgroundColor="green";
    }
});

//zadatak 12

let r12 = document.querySelectorAll("a");
r12.forEach(el=>{
    el.style.padding="10px";
    el.style.fontSize="30px";
    el.style.textDecoration="none";
    el.style.backgroundColor="yellow";
});

//zadatak 13 
//odraditi sa onim ends with 

//zadatak 14

let r14 = document.querySelectorAll("a");
r14.forEach(el=>{
    if(el.style.target == "blank"){
        el.setAttribute("target","top");
    }else{
        el.setAttribute("target","blank");
    }
})

//zadatak 15

let ime = ["sima", "mika", "laza"];

