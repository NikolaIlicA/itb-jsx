
let pitanje1 ={
    tekst: "Koji uredjaj ima prikljucak za slusalice?",
    odgovori: ["Stampac","Skener","Zvucna kartica","Video kartica"],
    index: 2,
};

let pitanje2 ={
    tekst: "Sta znaci skracenica PC?",
    odgovori: ["Prenosni racunar","Kompjuter","Zvucnik","Video kartica"],
    index: 0,
};

let pitanje3 ={
    tekst: "Koliko bita sadrzi jedan bajt?",
    odgovori: ["1","8","16","32"],
    index: 1,
};

let pitanje4 ={
    tekst: "Na kom OSI sloju operise ruter?",
    odgovori: ["Sesijski sloj","Fizicki sloj","Data link sloju","Network"],
    index: 3,
};

let pitanje5 ={
    tekst: "Koja je uloga ARPa?",
    odgovori: ["Razresava MAC adrese u IP adrese","Razresava NetBIOS u IP adrese","Razresava IP adrese u MAC adrese","Pretvara hostname u IP adrese"],
    index: 0,
};

let pitanje6 ={
    tekst: "Za sta je skracenica DNS?",
    odgovori: ["Domain name service","Domain name server","Data name server","Domain name system"],
    index: 3,
};

let pitanje7 ={
    tekst: "Koja komanda moze da izbaci rezultat - Request timed out",
    odgovori: ["netstat","ipconfig","ping","tracert"],
    index: 2,
};

let pitanje8 ={
    tekst: "Sta od navedenog omogucava prenos struje preko Ethernet kabla?",
    odgovori: ["PPPoE","MaMM","PoE","EESR"],
    index: 2,
};

let pitanje9 ={
    tekst: "RAID je implementacija kog koncepta?",
    odgovori: ["Sprecavanje sajber napada","Tolerancija na otkaze/kvarove","Mrezna enkripcija","Kontrola korisnickih naloga"],
    index: 1,
};

let pitanje10 ={
    tekst: "Kada otkaze DHCP server,a potrebno je hitno uspostaviti internet konekciju na odredjenoj radnoj stanici, sta je najbolji korak?",
    odgovori: ["Podesiti IP adresu manuelno","Zameniti DHCP server","Reinstalirati DHCP server","Restartovati ruter"],
    index: 0,
};


let pitanja = [pitanje1,pitanje2,pitanje3,pitanje4,pitanje5,pitanje6,pitanje7,pitanje8,pitanje9,pitanje10];


function shuffleArray(pitanja) {
    for (let i = pitanja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pitanja[i], pitanja[j]] = [pitanja[j], pitanja[i]];
    }
    return pitanja;
}


let ispisPitanja = niz =>{
    
    let d1="<form><h2>Provera znanja</h2>";
    
    niz.forEach((el, index)=>{
        d1 += `<li type="none"><div class="pitanja">${el.tekst}<br><br>`
        el.odgovori.forEach((odgovor, i) => {
            let radioName = `odgovori${index}`;
            d1 += `<input type="radio" name="${radioName}" id="${odgovor}" value="${odgovor}"${i === 0 ? ' checked' : ''}>${odgovor}<br>`;
            //preko radioName ce da omoguci da se cekira samo jedan odgovor, a to sam omogucio preko indexa "i" druge petlje, gde sam ga izjednacio sa nultim ind
        });
    });   

    d1 += `</div><input type="submit" value="Posalji odgovore!" id="posaljiOdgovore"><input type="button" value="Nova pitanja" id="NovaPitanja"><div id="rezultat"></form>`;

    return d1;

}
 
 d1.innerHTML += ispisPitanja(pitanja);

let btnPosalji = document.getElementById("posaljiOdgovore");
let btnNovaPitanja = document.getElementById("NovaPitanja");


btnPosalji.addEventListener("click", () => {
    event.preventDefault(); 

    let rezultat = document.getElementById("rezultat");
    rezultat.innerHTML = ""; 

    let rezultatIspis = "";

    pitanja.forEach((el, index) => {
        
        let radioButtons = document.getElementsByName(`odgovori${index}`);

        let izabraniOdgovor=0;
        //utvrdjujemo koji je radioButton cekiran, znaci samo da znamo sta je cekirano
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                izabraniOdgovor = radioButtons[i];
                break;
            }
        }
    
        let izabraniOdgovorIndex=0;
        // utvrdjujemo index izabranog odgovora, da bih taj index mogao da uporedim sa indexom tacnog odgovora
        for (let i = 0; i < el.odgovori.length; i++) {
            if (el.odgovori[i] === izabraniOdgovor) {
                izabraniOdgovorIndex = i;
                break;  
            }
        }
        // utvrdjujemo da li je index izabranog odgovora jednak indexu koji sam postavio u objektu kao index tacnog odgovora (el.index)
            if (izabraniOdgovorIndex === el.index) { 
                rezultatIspis += `<p style="color:green">Tacno ste odgovorili na pitanje ${index + 1}. </p>`; // jer je index za prvo pitanje 0, pa zato +1
            } else {
                rezultatIspis += `<p style="color:red">Niste tacno odgovorili na pitanje  ${index + 1}. </p>`;
            }
       

        radioButtons.forEach(rb => {
            rb.disabled = true;
            rb.style.cursor="not-allowed"
        });
    });
    
    rezultat.innerHTML = rezultatIspis;
    btnPosalji.disabled = true;
    btnPosalji.style.cursor="not-allowed"
    
   
});


//funkcija za mesanje niza

btnNovaPitanja.addEventListener("click", () => {
    
    event.preventDefault(); 
    pitanja = shuffleArray(pitanja);
    d1.innerHTML = ispisPitanja(pitanja);
});
 
