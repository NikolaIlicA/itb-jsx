

//zadatak 1 i 2


let btnDugme = document.getElementById('dugme');
let pIspis = document.getElementById('par');
let brojac = 0;

btnDugme.addEventListener('click', ()=>{
    brojac++;
    console.log(`broj je ${brojac}`);
    par.innerHTML += `broj je ${brojac}<br>`; // kada je += onda dodaje, kada je samo = onda gazi staru vrednost novom
});

// zadatak 3 i 4

let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let spanIspisiBroj = document.getElementById('broj');
brojac = 0;

btnPlus.style.backgroundColor="green";
btnPlus.style.color="orange";
btnPlus.style.borderRadius="5px";

btnMinus.style.backgroundColor="red";
btnMinus.style.color="white";
btnMinus.style.borderRadius="5px";

btnPlus.addEventListener('click',()=>{
    brojac++;
    spanIspisiBroj.innerHTML=`${brojac}`;
});

btnMinus.addEventListener('click',()=>{
    brojac--;
    if(brojac<0){
        brojac=0
    }
    spanIspisiBroj.innerHTML = brojac;
});

//zadatak 5 i 6

let btnDugme2 = document.getElementById('dugme2');
let inputUnos = document.getElementById('poljeZaUnos');
let pIspisi = document.getElementById('paragraf');


btnDugme2.addEventListener('click',()=>{
    let ispisi = inputUnos.value;
    pIspisi.innerHTML = `Zdravo ${ispisi}`;
});

let radioMuski = document.getElementById('radio1');
let radioZenski = document.getElementById('radio2');
let radioNeodredjen = document.getElementById('radio3');

btnDugme2.addEventListener('dblclick',()=>{
    if(radioMuski.checked){
        console.log(`Osoba je muskog pola`);
    }if (radioZenski.checked){
        console.log(`Osoba je zenskog pola`);

    }if (radioNeodredjen.checked){
        console.log(`Osoba je u kurcu`);
    }
});

//zadatak 7

let btnKv = document.getElementById('IzrKvd');
let btnPola = document.getElementById('izrPola');
let btnPovrs = document.getElementById('izrPovr');

let inputKv = document.getElementById('kvadrat');
let inputPola = document.getElementById('prepolovi');
let inputPovrs = document.getElementById('poluprecnik');

let pRezultat = document.getElementById('parag');

btnKv.addEventListener('click',()=>{
    let Unesibr = inputKv.value;
    pRezultat.innerHTML= Unesibr**2;
    event.preventDefault();
});

btnPola.addEventListener('click',()=>{
    let UnesiBr= inputPola.value;
    pRezultat.innerHTML = UnesiBr/2;
    event.preventDefault();
});

btnPovrs.addEventListener('click',()=>{
    let UnesiBr = inputPovrs.value;
    pRezultat.innerHTML = UnesiBr**2*3.14;
    event.preventDefault();
});

//zadatak 8

let inputPrvaVrd = document.getElementById('prvaVrednst');
let inputDrugaVrd = document.getElementById('drugaVrednost');

let radioPlus = document.getElementById('pllus');
let radioMinus =document.getElementById('minus');
let radioPuta = document.getElementById('puta');
let radioPodeljeno = document.getElementById('podeljeno');

let btnIzracunaj = document.getElementById('rez');

let pRezul = document.getElementById('ispisRez');

btnIzracunaj.addEventListener('click',()=>{
    let br1 = Number(inputPrvaVrd.value);
    let br2 = Number(inputDrugaVrd.value);
    let rez = 0;

    let inputOperacija = document.querySelector("input[name='operacija']:checked");
    let operacija = inputOperacija.value;
    let o = "";

    if (operacija == "plus"){
        rez= br1 + br2;
        o = "+";
        
    }else if(operacija == "minus"){
        rez = br1 - br2;
        o = "-";
    }else if (operacija== "puta"){
        rez = br1 * br2;
        o = "*";
    }else {
        if(br2 == 0){
            alert(`Nije dozvoljeno deljenje nulom`)
        }else{
        rez = br1 / br2;
        o = "/";
        }
    }

    pRezul.innerHTML = `${br1} ${o} ${br2} = ${rez}`
});