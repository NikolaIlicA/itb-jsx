// proveri i dopune iz komentara pogotovo za pod p)

let polaznik1 = {
    ime: 'Uros',
    prezime: 'Zdravkovic',
    ocena: 100
};
let polaznik2 = {
    ime: 'Stefan',
    prezime: 'Gordic',
    ocena: 77
};
let polaznik3 = {
    ime: 'Milos',
    prezime: 'Slavenski',
    ocena: 100,
};
let polaznik4 = {
    ime: 'Milivoje',
    prezime: 'Jovanic',
    ocena: 52
};
let polaznik5 = {
    ime: 'Nevena',
    prezime: 'Zlatovic',
    ocena: 100,
};
let polaznik6 = {
    ime: 'Stefana',
    prezime: 'Simovic',
    ocena: 24
};
let polaznik7 = {
    ime: 'Jelena',
    prezime: 'Gordic',
    ocena: 83
};
let kurs1 = {
    naziv: 'Razvoj web stranica',
    grad: 'Nis',
    polaznici: [polaznik2, polaznik4, polaznik3]
};
let kurs2 = {
    naziv: 'PHP',
    grad: 'Beograd',
    polaznici: [polaznik1, polaznik5, polaznik3]
};
let kurs3 = {
    naziv: 'Osnove programiranja Java',
    grad: 'Kosovska Mitrovic',
    polaznici: [polaznik6, polaznik1, polaznik4, polaznik5]
};
let kurs4 = {
    naziv: 'QA - automation tester',
    grad: 'Novi Sad',
    polaznici: [polaznik7, polaznik6, polaznik3, polaznik2, polaznik4]
};
let kursevi = [kurs1, kurs2, kurs3, kurs4];
// l) Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
let brojKursevaUGradu = (niz, grad) => {
    let brojac = 0;
    niz.forEach(el => {
        if (el.grad.toLowerCase() == grad.toLowerCase()){
            brojac++;
        }
    });
    return brojac;
}
console.log(brojKursevaUGradu(kursevi, 'Beograd'));
//  m) Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
let naziv = (niz, string) => {
    let brojac = 0;
    niz.forEach(el => {
       if (el.naziv.includes(string)){
        brojac++;
       }
    });
    console.log(`Broj kurseva koji sadrze ovaj string je: ${brojac}`);
}
naziv(kursevi, 'QA');
/* n) Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs. */
let maksPolaznika = (niz) => {
    let maks = 0;
    let kurs = '';
    let grad = '';
    niz.forEach(el => {
        if(el.polaznici.length > maks){
            maks = el.polaznici.length;
            kurs = el.naziv;
            grad = el.grad;
        }
    });
    console.log(maks, kurs, grad);
}
maksPolaznika(kursevi)
/* o) Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar. */
let ispisiSve = (niz, prezime) => {
    niz.forEach(el => {
        el.polaznici.forEach(polaznik => {
            if(polaznik.prezime == prezime){
                console.log(`Ime i prezime: ${polaznik.ime} ${polaznik.prezime} Naziv: ${el.naziv} Grad: ${el.grad} `);
            }
        });
    });
}
ispisiSve(kursevi, 'Zlatovic')
/* p)Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji. */
let najboljaProsecna = (niz) => {
    let maks = 0;
    let grad ='';
    let naziv = '';
    for (i = 0; i < niz.length; i++){
        let suma = 0;
        for(j = 0; j < niz[i].polaznici.length; j++){
            suma += niz[i].polaznici[j].ocena;
            let prosecna = suma / niz[i].polaznici.length;
            if (prosecna > maks){
                maks = prosecna;
                grad = niz[i].grad;
                naziv = niz[i].naziv;
            }
        }
    }
    console.log(`Grad gde se nalazi kurs: ${grad}, naziv kursa je: ${naziv}`);
}
najboljaProsecna(kursevi);
/* q) Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva. */
let uspesanKurs = (niz) => {
    let brojac2 = 0;
    niz.forEach(kurs => {
        let brojac = 0;
        kurs.polaznici.forEach(polaznik => {
            if(polaznik.ocena > 65){
                brojac++;
            }
        });
        if (brojac == kurs.polaznici.length){
            brojac2++;
        }
    });
    return brojac2;
}
console.log(uspesanKurs(kursevi));
/* Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
*/
let kida = (niz,grad) => {
    let uspesan = true;
    niz.forEach(k => {
        if (k.grad == grad) {
            k.polaznici.forEach(p => {
                if (p.ocena <= 65) {
                    uspesan = false;
                }
            });
        }
    });
    return uspesan;
}
/* Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false). */
let pokidali = (niz,grad) => {
    let uspesan = true;
    niz.forEach(k => {
        if (k.grad == grad) {
            k.polaznici.forEach(p => {
                if (p.ocena < 80) {
                    uspesan = false;
                }
            });
        }
    });
    return uspesan;
}



/////////////////////////////////////
/////////////ZADATAK4////////////////
/////////////////////////////////////


let let1 = {
    destinacija: 'Barselona',
    drzava: 'Spanija',
    vremePoletenja: '09:25',
    vremeSletanja: '12:45',
};
let let2 = {
    destinacija: 'Minhen',
    drzava: 'Nemacka',
    vremePoletenja: '11:15',
    vremeSletanja: '14:45',
};
let let3 = {
    destinacija: 'Tokio',
    drzava: 'Japan',
    vremePoletenja: '06:25',
    vremeSletanja: '19:45',
};
let let4 = {
    destinacija: 'New York',
    drzava: 'Amerika',
    vremePoletenja: '12:40',
    vremeSletanja: '22:45',
};
let let5 = {
    destinacija: 'Denver',
    drzava: 'Amerika',
    vremePoletenja: '09:40',
    vremeSletanja: '21:45',
}
let letovi = [let1, let2, let3, let4, let5];
// a)Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.
function brojLetovaZaZemlju (niz, zemlja) {
    let brojacLetova = 0;
    niz.forEach(el => {
        if(el.drzava == zemlja){
            brojacLetova++;
        }
    });
    return brojacLetova;
}
console.log(brojLetovaZaZemlju(letovi, 'Amerika'));
/* b) Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false. */
function visePrePodne (niz) {
    let prePodne = 0;
    niz.forEach(el => {
        let sati =Number(el.vremePoletenja.split(':')[0])
        if(sati < 12){
            prePodne++;
        }
    });
    return prePodne > niz.length - prePodne;
}
console.log(visePrePodne(letovi));
//c) Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).
let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
function ispisLetovaDoSada (niz, zemlja){
    niz.forEach(el => {
        let satiLeta = Number(el.vremePoletenja.split(':')[0]);
        let minutiLeta = Number(el.vremePoletenja.split(':')[1]);
        if(el.drzava == zemlja){
            if(satiLeta < sati){
                console.log(el);
            } else if (satiLeta == sati && minutiLeta < minuti){
                console.log(el);
            }
        }
    });
}
ispisLetovaDoSada(letovi, 'Amerika')
//d) /* Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.*/
let zemlje = ['Amerika', 'Spanija'];
function rizicniLetovi (niz, niz2) {
    let p = document.createElement('p');
    niz.forEach(el => {
        niz2.forEach(el2 => {
            if (el.drzava == el2){
                p.innerHTML += `${el.destinacija} ${el.vremePoletenja} <br>`;
                p.style.color = 'red';
            }
        });
    });
    document.body.appendChild(p);
}
rizicniLetovi(letovi, zemlje)
/*e) Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje). */
let trazeneDestinacije = niz => {
        for(let i=0; i<niz.length; i++) {
            let br = 0;
            let zemlja = niz[i];
            for(let j=0; j<niz.length; j++) {
                if (zemlja.drzava == niz[j].drzava) {
                    br++;
                }
            }
            if (br > 1) {
                console.log(zemlja);
            }
        }
    }
 trazeneDestinacije(letovi);
/*f) Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu. */
let prosecanBrojLetovaZaZemlju = niz => {
    for(let i=0; i<niz.length; i++) {
        let br = 0;
        let zemlja = niz[i];
        for(let j=0; j<niz.length; j++) {
            if (zemlja.drzava == niz[j].drzava) {
                br++;
            }
        }
            console.log(`Prosecan broj letova za ${zemlja.drzava} je ${br/niz.length}`);
    }
}
prosecanBrojLetovaZaZemlju(letovi);
