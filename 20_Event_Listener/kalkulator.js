// DOM == sta ce biti potrebno

let inputNumber1 = document.getElementById("br1");
let inputNumber2 = document.getElementById("br2");
let btnRacunaj = document.getElementById("racunaj");
let btnResetuj = document.getElementById("resetuj");
let pRezultat = document.getElementById("rezultat");

btnRacunaj.addEventListener("click",()=>{
    event.preventDefault(); // jos jednom, ovo sluzi samo da spreci reloadovanje browsera, moze e. a moze i event.
    let br1 =Number(inputNumber1.value); // iz input polja on sve belezi kao string, cak i brojeve
    let br2 =Number(inputNumber2.value); // dodajemo ovaj Number() da bi pisao broj umesto string
    //console.log(Number(br1),br2); 
    let inputOperacija = document.querySelector("input[name='operacija']:checked");
    //console.log(operacija.value);
    
    let rez = 0;
    let operacija = inputOperacija.value; // ovo mogu da stavim da ne bih svaki put pisao inputOperacija.value u if else granama, moze i bez toga
    let o = ""; // ovo smo uveli na kraju, kada nam je trebala jedna promenljiva koja ce da bude string i da u nju stavimo znak operacije koji ce da se ispise na stranici (+, -, *, /)
    // druga varijanta, da ne bismo unosili ovu pomocnu promenljivu, je da u htmlu u radio input u value vrednost, umesto sto pisemo sabiranje, deljenje.. da stavljmamo znakove +-*/

    if(operacija == "sabiranje"){
        rez = br1 + br2;
        o = "+";
    }else if(operacija == "oduzimanje"){
        rez = br1 - br2;
        o = "-";
    }else if (operacija== "mnozenje"){
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
    //console.log(rez);

    pRezultat.innerHTML = `${br1} ${o} ${br2} = ${rez}`
   
});

btnResetuj.addEventListener("click",()=>{
    pRezultat.innerHTML = ""; // ovim praznim stringom brisemo sa ekrana 
})


// problem je kod deljenja sa nulom, gde deljenje nulom daje beskonacno na stranici, a deljenje nulom nije dozvoljeno. To mozemo da resimo time sto cemo u else grani gde mi je deljenje da dodam 