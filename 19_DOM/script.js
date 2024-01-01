console.log(document); //document je objekat, s tim sto vec ima napravljena polja i metode (on je koren DOM stabla == tj on je predak svim cvorovima DOM stabla)

console.log(document.body);  // body svojstvo document objekta je objekat

let e1 = document.getElementById("p2")
console.log(e1); // objekat iz dom stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije

for (let i = 0; i<el2.length; i++){
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju

/*
el2.forEach(el=>{
    console.log(el);
});
*/  // znaci ovo ne moze da se pise preko forEach petlje

let niz = Array.from(el2);
niz.forEach(el=>{
    console.log(el);
}); // moze da se koristi forEach izgleda kada je unutar necega

let el3 = document.getElementsByTagName("p"); // Vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName("p"); // Vraca NodeList
console.log(el4);

el4.forEach(el=>{
    console.log(el);
});

//svi objekti tipa niz nasledjuju klasu Array, tj spadaju klasi array. Array je tip podataka, ugradjeni tip podataka

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par"); // Vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par"); //Vraca Node List
console.log(t3);

t3.forEach(el=>{
    console.log(el);
});

let t4 = document.querySelectorAll("div p.par, div a.par");
console.log(t4);


//zadatak 1 

let prviPar = document.querySelector("p");
console.log(prviPar);

//zadatak 2 

let divError = document.getElementsByClassName("div.error");
console.log(divError);

//zadatak 3

let poslednjiRed = document.querySelector("table tr:last-child"); // napravi tabelu u htmlu
console.log(poslednjiRed);

//zadatak 4

let z4 = document.getElementsByTagName("a"); 
console.log(z4);

//zadatak 5
let z5 = document.getElementsByTagName("img"); 
console.log(z5);


let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight:bold'>Novi tekst</span> prvog linka";


link.href = "https://www.google.com";

link.setAttribute("href","https://www.google.com");

// link.target = "blank";
link.setAttribute("target", "_blank");  



//7.
//Selektovati sve paragrafe i u svakom od njih pridodati tekst VAZNO!
let sviparagrafi = document.querySelectorAll("p");
sviparagrafi.forEach( par => {
    par.innerHTML += `VAZNO!!!`;
});
//8.
/*Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine
sa tekstom GRESKA */
let divE = document.querySelectorAll("div.error"); //Nodlista i moze preko forEach petlje
divE.forEach(div => {
  div.innerHTML += `<h1>GRESKA!</h1>`;
  div.style.color = "red";
});
// 9.
/* Neka je n broj paragrafa u datm dokumentu. U svakom i-tom paragrafu dodati broj i
na kvadrat, za svako i = 1, 2, ...n. */
let paragrafN = document.querySelectorAll('p');
    paragrafN.forEach((e, index) => {
        let kv = (index + 1 ) * (index + 1)
        e.innerHTML += `${index+1}<sup>2</sup> = ${kv}`
});
//10.
/*Svim slikama dodati alternativni tekst*/
let sveSlike = document.querySelectorAll("img");
sveSlike.forEach( sl => {
   //sl.setAttribute("alt" , "TEKST")
   sl.alt = "Neki TEKST"
});
//11.
/* Svim paragrafima posaviti atribut style tako da bude obojen ljubicastom bojom*/
let ljubicasti = document.querySelectorAll("p");
ljubicasti.forEach(p => {
    p.style.color = "purple";
});



//Poslednji zadatak sa slajda 8

for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 2 === 1) {
    sviParagrafi[i].style.backgroundColor = "green";
  } else {
    sviParagrafi[i].style.backgroundColor = "red";
  }
}



// SEDMA VEZBA
document.querySelectorAll(`a`).forEach(a => {
    a.style.padding = `5px`;
    a.style.fontSize = `18px`;
    a.style.textDecoration = `none`;
}) ;
document.querySelectorAll(`a:nth-child(even)`).forEach(a => {
    a.style.backgroundColor = `green`;
    a.style.color = `red`;
});
document.querySelectorAll(`a:nth-child(odd)`).forEach(a => {
    a.style.backgroundColor = `blue`;
    a.style.color = `white`;
});
// OSMA VEZBA
document.querySelectorAll(`img`).forEach(img => {
    if(img.src.endsWith(`.jpg`)) {
        img.style.border = `2px solid blue`;
    }
});
// OSMA drugi nacin
document.querySelectorAll(`img[src$=".jpg"]`).forEach(img => {
        img.style.border = `22px solid green`;
});
// DEVETA VEZBA
document.querySelectorAll(`a`).forEach(a => {
    if(a.target == `_blank`) {
        a.target = `_top`;
    }
    else {
        a.target = `_blank`;
    }
});

