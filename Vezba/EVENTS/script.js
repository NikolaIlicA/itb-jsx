

//zadatak 1 

let btnBroj = document.getElementById("dugme");

let brojac = 0;

btnBroj.addEventListener("click",()=>{
    brojac++;
    console.log(`Broj je ${brojac}`);
});


//zadatak 2 

let btnBroj2 = document.getElementById("dugme2");

let brojac2 = 0;
 btnBroj2.addEventListener("click",()=>{
    brojac2++;
    paragraf.innerHTML += `Broj je ${brojac2}<br>`
 })

 //zadatak proizvoljni

 let btnBut = document.getElementById("but"); 
 but.style.color="orange";
 but.style.fontWeight="bold"
 but.style.fontSize="20px"
 but.style.padding="10px"
 but.style.backgroundColor="green";
 but.style.borderRadius="8%";

 par.style.color="bisque";
 par.style.backgroundColor="purple";
 par.style.borderRadius="8%";
 par.style.fontWeight="";
 par.style.fontSize="15px";
 par.style.heigth="30px"

 btnBut.addEventListener("dblclick",()=>{
    par.innerHTML += `Hello world double<br>`;
 });

 //zadatak 3 i 4

 let btnPlus = document.getElementById("plus");
 let btnMinus = document.getElementById("minus");
 let btnBrojj = document.getElementById("brojj");

 plus.style.color="yellow";
 plus.style.backgroundColor="green";
 plus.style.borderRadius ="8%";
 plus.style.padding="px";

 minus.style.color="yellow";
 minus.style.backgroundColor="red";
 minus.style.padding="px";
 minus.style.borderRadius="8%";

 let brojjac = 0;
 btnPlus.addEventListener("click",()=>{
    brojjac++;
    brojj.innerHTML=brojjac;
 });
btnMinus.addEventListener("click",()=>{
    
    brojjac--;
    if(brojjac<0){
        brojjac=0;
    }
    brojj.innerHTML = brojjac;
})


//zadatak 5

let btnDug = document.getElementById("dug");
let inputTekst = document.getElementById("tekst");
let pIspisTeksta = document.getElementById("ispisTeksta");

dug.style.backgroundColor="orange";
dug.style.color="blue";
dug.style.borderRadius="8%";

tekst.style.color="brown";
tekst.style.fontWeight="bold";
tekst.style.borderRadius="5%";
s
btnDug.addEventListener("click",()=>{
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Ime ${preuzmiTekst}`;
});
