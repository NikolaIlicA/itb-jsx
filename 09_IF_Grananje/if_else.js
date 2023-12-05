let a = 3;
let b = 5;

if(a>b) {
    console.log("a je vece od b");
}

else {
    console.log("a nije vece od b");
}



// Zadatak 1

let zapremina = 70;
let x = 100;

if (zapremina<=x) {
    document.write("<p style='color:green'>Pack up</p>")  // tekst mi je u dvostrukim navodnicima, pa zato style koristim jednostruke navodnike
    
} else {
    document.write("<p style='color:red'>Throw away</p>")
    
}


//Zadatak 3

let datum = new Date ();
let godina = datum.getFullYear();
let god_rodj = 2007;
let ima_godina = godina - god_rodj;

if (ima_godina>=18) {
    document.write("<img src='torta.jpg'>")
    console.log("Osoba je punoletna");
    
} else {
    
    console.log("Osoba je maloletna");
    let ostalo_do_punoletstva = 18 - ima_godina
    document.write(`<p>Ostalo je ${ostalo_do_punoletstva} godina do punoletstva</p>`)
}



//Zadatak 2 

let t = 15 ;

if (t>=0) {

    console.log(`Temperatura je u plusu`);
    let paragraf = document.getElementById (`temperatura`); // Preuzmem paragraf iz HTML po njegovom id
    paragraf.innerHTML = `Temperatura je u <b>plusu</b>`; // Upisem u paragraf preko innerHTML
    paragraf.style.color = "red"

} else {
    
    console.log(`Temperatura je u minusu`);
    let paragraf = document.getElementById (`temperatura`);
    paragraf.innerHTML = `Temperatura je u minusu`;
    paragraf.style.color = `blue`
}


//Zadatak 5

let r = "m";


if (r == "m") {
    document.write("<img src='muski.jpg'>")
    
} else { document.write("<img src='zenski.jpg'>")
    
}



//Zadatak 4



let vreme = new Date ();
let sati = vreme.getHours();

if (sati>=12) {
    document.write("<p>Popodne</p>")

}else {
    document.write("<p>Prepodne</p>")
}


