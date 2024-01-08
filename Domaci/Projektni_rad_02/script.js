
let pitanje1 ={
    tekst: "Koji protokol od navedenih je transportni?",
    odgovori: ["IP","THC","TCP","SNT"],
    index: 2,
};

let pitanje2 ={
    tekst: "Na kom sloju OSI modela je switch operativan?",
    odgovori: ["Sloj 2","Sloj 4","Sloj 5","Sloj 6"],
    index: 0,
};

let pitanje3 ={
    tekst: "Koji protokol moze automatski da azurira IP adresu i subnet masku?",
    odgovori: ["TCP","DHCP","IP","DNS"],
    index: 1,
};

let pitanje4 ={
    tekst: "Na kom OSI sloju operise ruter?",
    odgovori: ["Sesijski sloj","Fizicki sloj","Data link sloju","Network sloju"],
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
    tekst: "Koja komanda moze da izbaci rezultat - Request timed out?",
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
    tekst: "Kada otkaze DHCP server, a potrebno je hitno uspostaviti internet konekciju na odredjenoj radnoj stanici, sta je najbolji korak?",
    odgovori: ["Zameniti DHCP server","Podesiti IP adresu manuelno","Reinstalirati DHCP server","Restartovati ruter"],
    index: 1,
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
        });
    });   
        
        d1 += `</div><input type="submit" value="Posalji odgovore!" id="posaljiOdgovore"><input type="button" value="Nova pitanja" id="NovaPitanja"><div id="rezultat"></form>`;
    
        return d1;
}
 d1.innerHTML += ispisPitanja(pitanja);


let btnPosalji = document.getElementById("posaljiOdgovore");

btnPosalji.addEventListener("click", () => {
    event.preventDefault(); 

    let rezultat = document.getElementById("rezultat");
    rezultat.innerHTML = ""; 

    let rezultatIspis = "";

    pitanja.forEach((el, index) => {
        
        let radioButtons = document.getElementsByName(`odgovori${index}`);

        let izabraniOdgovor=0;

        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                izabraniOdgovor = radioButtons[i];
                break;
            }
        }
    
        let izabraniOdgovorIndex=0;

        for (let i = 0; i < el.odgovori.length; i++) {
            if (el.odgovori[i] === izabraniOdgovor.value) {
                izabraniOdgovorIndex = i;
                break;  
                 }
            }if (izabraniOdgovorIndex === el.index) {
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

let btnNovaPitanja = document.getElementById("NovaPitanja");
btnNovaPitanja.addEventListener("click", () => {
    event.preventDefault(); 
    pitanja = shuffleArray(pitanja);
    d1.innerHTML = ispisPitanja(pitanja);
});
 
