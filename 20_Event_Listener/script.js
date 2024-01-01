

////////////////////////////////////////////////////////
///////////EVENT LISTENERS///////////////////////////
//////////////////////////////////////////////////////

//osluskivaci dogadjaja, preko njih se nesto desava na stranici kada se klikne

//events = pojave koje se desavaju na stranici, mogu biti prouzrokovani od strane korisnika kada klikne na nesto, ili  mogu biti prouzrokovani browserom


//Event listeneri su oslusivaci dogadjaja na nekom HTML elementu. To podrazumeva osluskivanje dogadjaja za HTML element i definisanje posledice tog dogadjaja.
// nakon izvrsenog dogadjaja event listener poziva obradjivace dogadjaja (event hendlers) koji se aktiviraju kao posledica nekog dogadjaja 

// najcesci event je CLICK EVENT == klikom na dugme se ispisuje poruka u konzoli. Postupak je sledeci:
// 1.dohvati element na koji zelimo da se klikne  ==   let dugme = document.querySelector('button')
// 2.Dodaje se event listener elementu. Listener prima dva parametra-- (event, funkcija)
// dugme.addEventListener(event,funkcija)  === event se prosledjuje kao string // fja moze da bude npr da se oboji nesto u neku boju itd..event je ugradjena funkcija, npr click
/* 3. Funkcija koja se koristi je CALLBACK FJA ==  dugme.addEventListener('click',()=>{
    console.log('Clicked');     // znci kada se klikne, okinuce se ova funkcija, tj kada je event listener aktiviran, izvrsice se fja
})
*/

// skracenica btn za button, ne mora, ali cisto da asocira
// 1. dohvatiti element na koji zelimo da postavimo osluskivac

let btnHello = document.getElementById("hello");

// 2. postavljamo osluskivac na element koji smo dohvatili // callback fji jos necemo proslediti parametar

btnHello.addEventListener("click", ()=>{     // "click" je ugradjena rec, ne izmisljamo je mi
    console.log(`Hello!`);
});  
// izbacice mi button na ekranu, na koji kada kliknem, izbaci mi Hello u konzoli


btnHello.addEventListener("dblclick", () => {   // nad jednim elementom mozemo da imamo dva listenera
    console.log(`Hello Hello`);   // iz nekog razloga nece da ucita ovaj dvoklik == nije htelo zato sto mi je bilo ukljuceno sa desne strane toggle device, i ponasao mi se ekran kao da je mobilni telefon, pa tu nema dvoklika na mobilnom
});


//zadatak 1 i zadatak 2  == ovo je dobra funkcija za brojanje pregleda


let btnBroj = document.getElementById("broj");
let pIspisBroja=document.getElementById("ispisBroja");
let brojac = 1;
btnBroj.addEventListener("click",()=>{
    console.log(`Broj je ${brojac}`);

    pIspisBroja.innerHTML=`Broj je ${brojac}` // kada bih stavio += on bi nadodavao opet tekst i broj, ne bi samo menjao broj kao sada
    brojac++;
})

//zadatak 3 i 4

let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let br = 0;
btnPlus.addEventListener("click",()=>{
    br++;
    ukupno.innerHTML = br;  
});

btnMinus.addEventListener("click",()=>{
    br--;
    if(br<0){
        br=0;
    } 
    ukupno.innerHTML = br;  
   
})


//zadatak 5  // predji jos jednom

let btnIspisiTekst = document.getElementById("ispisiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");

btnIspisiTekst.addEventListener("click",()=>{
    let preuzmiTekst = inputTekst.value; // ovaj let mora da bude unutar event listenera
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`
});


//zadatak 6 == nastavak na 5i

let btnIspisiTekst2 = document.getElementById("ispisiTekst2");
let inputTekst2 = document.getElementById("tekst2");
let pIspisTeksta2 = document.getElementById("ispisTeksta2");

tekst2.style.border="1px solid gray";
tekst2.style.borderRadius="8%";

btnIspisiTekst2.style.backgroundColor="green";
btnIspisiTekst2.style.color="orange";
btnIspisiTekst2.style.borderRadius="10px 10px 10px 10px";

btnIspisiTekst2.addEventListener("click",()=>{
    let preuzmiTekst = inputTekst2.value;
    pIspisTeksta2.innerHTML = `Ispisali ste ${preuzmiTekst}`
})

let radioMuski = document.getElementById("muski");
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");

btnIspisiTekst2.addEventListener("dblclick",()=>{
    // 1. NACIN == da vidimo na koje je polje kliknuto (checked) == prvo cemo da ispisemo u konzoli sva tri, i videcemo koji je od njih po defaultu checked. to cemo da uradimo tako sto cemo u console log na naziv elementa dodati .checked, i u konzoli ce pisati true ili false u zavisnosti od toge koji je element stvarno checked
    //console.log(radioMuski.checked);
    if(radioMuski.checked){
        console.log(`Osoba je muskog pola`);
    }
    //console.log(radioZenski.checked);
    if(radioZenski.checked){
        console.log(`Osoba je zenskog pola`);
    }
    //console.log(radioNeopredeljen.checked);
    if(radioNeopredeljen.checked){
        console.log(`Osoba se nije opredelila`);
    }
    // mogao sam i da koristim if, else if i na kraju else umesto samo if, s tim sto bih za prvi radio koristio if, za drugi i treci else if, a za else bih ostavio opciju za slucaj da nista nije obelezeno od radio dugmica a izvrsen je event dvoklikom na dugme.. Else grana u ovom slucaju moze da se nikada ne ostvari, i to u situaciji ako smo pri kreiranju radio buttona za neki stavili da je po defaultu checked


    //2.NACIN
    // da idemo po name vrednosti, i da proverimo za koji name je polje cekirano. Koristimo query selector jer trazimo da nam vrati samo jednu vrednost, a znamo da ce nam vratiti samo jednu jer radio dugmad iskljucuju jedno drugo

    let checkedPol = document.querySelector("input[name='pol']:checked") // selektuj input polje, ciji atribut name ima vrednost 'pol', gde je polje cekirano
    //console.log(checkedPol.value, checkedPol.id); // moze i samo checkedPol.value
    console.log(`Osoba je ${checkedPol.value} pola`);

    
    //3.NACIN
    // selektovati sve radio buttone preko name atributa
    let polRadios = document.getElementsByName('pol'); 
    console.log(polRadios); // dobija se Node lista, kada u konzoli kliknemo na padajuci menu na neku od vrednosti, mogu da vidim u polju checked da li je true ili false. To dalje znaci da mogu da itetiram dalje kroz ova input polja i da vidim koji je taj koji je checked
    polRadios.forEach(radioButton=>{
        console.log(radioButton.checked); // ovo samo da ispisemo sta ce da bude u konzoli
        if (radioButton.checked){
            console.log(`Osoba je ${radioButton.value} pola`);
        }
    })

    // 4. NACIN 
    // preko querySelectorAll == selektuj sve radio button po name atributu 
    let polRadiosInput = document.querySelectorAll("input[name='pol']"); // mozemo i sa :checked ali cemo uraditi preko forEach
    polRadiosInput.forEach(rb=>{
        if(rb.checked){
        console.log(`Osoba je ${rb.value} pola`);
        }   
    })

})

//////////// umesto get.elementById moze da se koristi i querySelector, npr document.querySelector('#muski')///////////////////////

//value cemo u realnom zivotu retko kada ispisivati na stranici. Vise ce nam znaciti da znamo na sta se klikce da bismo dalje znali sta da radimo


//zadatak 7


//////// !!!!!!! koristio sam form tag, sto moze da bude problem jer se on pri kliktanju na dugme, tj na submit, refresuje se, pa mi izbrise dobijenu vrednost iz paragrafa. Da bih to izbegao koristim event.preventDefault()

let btnIzr1 = document.getElementById("izr1");
let btnIzr2 = document.getElementById("izr2");
let btnIzr3 = document.getElementById("izr3");
let inpInput1 = document.getElementById("input1");
let inpInput2 = document.getElementById("input2");
let inpInput3 = document.getElementById("input3");
let pIspis = document.getElementById("paragrafIspis");

btnIzr1.addEventListener("click",()=>{
    let inputIspis = inpInput1.value;
    pIspis.innerHTML += `${inputIspis**2}<br>`;
    event.preventDefault()
});

btnIzr2.addEventListener("click",()=>{
    let inputIspis2 = inpInput2.value;
    pIspis.innerHTML += `${inputIspis2 / 2}<br>`;
    event.preventDefault()
});

btnIzr3.addEventListener("click",()=>{
    let inputIspis3 = inpInput3.value;
    pIspis.innerHTML += `${inputIspis3**2*3.14}<br>`; // umesto 3.14 mogao sam Math.Pi
    event.preventDefault()
});