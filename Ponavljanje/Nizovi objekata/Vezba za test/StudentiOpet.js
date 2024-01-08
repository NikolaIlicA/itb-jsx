
let student1 = {
    ime: "Nikola",
    prezime: "Ilic",
    godinaStudija: 3,
    ocene: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,],
};

let student2 = {
    ime: "Ivana",
    prezime: "Colic",
    godinaStudija: 2,
    ocene: [8,8,9,8,7,8,6,10,10,10,10],
};

let student3 = {
    ime: "Stefan",
    prezime: "Milicevic",
    godinaStudija: 3,
    ocene: [10,10,9,9],
};

let student4 = {
    ime: "Kosta",
    prezime: "Janjuz",
    godinaStudija: 4,
    ocene: [7,7,7],
};

let stjut = [student1,student2,student3,student4];
//zadatak a

let prezimeSlovo = (niz,slovo)=>{
    niz.forEach (el=>{
        if(el.prezime.startsWith(slovo)){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
}
prezimeSlovo(stjut,"C");


//zadatak b 

let imePrezime = (niz,slovo1,slovo2) =>{
    niz.forEach(el=>{
        if(el.ime.startsWith(slovo1)  && el.prezime.startsWith(slovo2)){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
}
imePrezime(stjut,"N","I");

//zadatak c

let godinaStudija = (niz, broj) =>{
    niz.forEach(el=>{
        if(el.godinaStudija == broj){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
}
godinaStudija(stjut,4)

//zadatak f

let prosecanSt = niz => {
    niz.forEach(el=>{
        let prosecan = true;
            el.ocene.forEach(t=>{
                if(t == 7 || t ==8 || t==9){

                }else {
                    prosecan = false;
                } 
            });
        if(prosecan){
            console.log(`Student ${el.ime} ${el.prezime} je prosecan`);
        }
    })
}
prosecanSt(stjut);

//zadatak g

let ekstraSt = niz =>{
    niz.forEach(el=>{
        let broj9 = 0;
        let broj10 = 0;
        let ekstra = true;
        el.ocene.forEach(t=>{
            if(t==9){
                broj9++;
            }else if(t==10){
                broj10++;
            }else{
                ekstra = false;
            }
        });
        if(ekstra && broj10>=2*broj9){
            console.log(`Student ${el.ime} ${el.prezime} je ekstra`);
        }
    })
}
ekstraSt(stjut);

//zadatak h

let kidaSt = niz => {
    niz.forEach(el=>{
        let broj9=0;
        let kida = true;
            el.ocene.forEach(t=>{
                if(t==9){
                    broj9++;
                }else if(t==10){

                }else {
                    kida= false;
                }
            });
        if(kida && broj9<el.godinaStudija){
            console.log(`Student ${el.ime} ${el.prezime} je kida`);
        }
    })
}
kidaSt(stjut);

//zadatak i

let razbijaSt = niz =>{
    niz.forEach(el=>{
        let razbija = true;
        let broj10=0;
            el.ocene.forEach(t=>{
                if(t==10){
                    broj10++;
                }else{
                    razbija=false;
                }
            });
        if(razbija && broj10>5*(el.godinaStudija-1)){
            console.log(`Student ${el.ime} ${el.prezime} je razbija`);
        }
    })
}
razbijaSt(stjut);

//zadatak j

let aljkavSt = niz => {
    niz.forEach(el=>{
        let aljkav = true;
            el.ocene.forEach(t=>{
                if(t<=7){

                }else{
                    aljkav=false
                }
            });
        if(aljkav){
            console.log(`Student ${el.ime} ${el.prezime} je aljkav`);
        }
    })
}
aljkavSt(stjut)

//zadatak k

let brukaSt= niz=>{
    niz.forEach(el=>{
        let bruka=true;
            el.ocene.forEach(t=>{
                if(t<=7){

                }else {
                    bruka = false;
                }
            })
        if(bruka && el.godinaStudija>1 && el.ocene.length<3*(el.godinaStudija-1)){
            console.log(`Student ${el.ime} ${el.prezime} je bruka`);
        }
    })
}
brukaSt(stjut);




//////////////////////////////////////
//////////////////////zadatak 3
////////////////////////////////////////



let fly1 = {
    destinacija: "Jordan",
    putnici: 180,
    mesta: 200
}

let fly2 = {
    destinacija: "Hurgada",
    putnici: 220,
    mesta: 230
}

let fly3 = {
    destinacija: "Zanzibar",
    putnici: 100,
    mesta: 200
}

let fly4 = {
    destinacija: "Alanja",
    putnici: 220,
    mesta: 250
}

let flights = [fly1,fly2,fly3,fly4];

//zadatak 1   == tacno resenje

let maxBrPutnika = niz =>{
    let max = niz[0].putnici;
    niz.forEach(el=>{
        
        if(el.putnici>max){
            max=el.putnici;
        }
        
    })
    return max;
}
console.log(`Maksimalan broj putnika bio je ${maxBrPutnika(flights)}`);

//zadatak 2  == tacno je ovako
let brojMax = niz=>{
    let max = niz[0].putnici;
        niz.forEach(el=>{
            if(el.putnici>max){
                max=el.putnici;
            }
        })
    console.log(max);
    let broj = 0;
    niz.forEach(el=>{
        if(el.putnici == max){
            broj++;
            
        }  
    })
    return broj;
}
console.log(`Na ${brojMax(flights)} leta je letelo najvise ljudi`);

//zadatak 3

let prosek = niz => {
        let suma = 0;
        let broj = 0;
    niz.forEach(el=>{
        suma+=el.putnici;
        broj++;
    })
        let prosek = suma / broj;
        console.log(prosek); 
}
prosek(flights)

//zadatak 4

let isplativDan = niz => {
    let broj = 0;
    niz.forEach(el=>{
        if(el.putnici > el.mesta/2){
            broj++;
            
        }
        
        
    })
    if(broj>niz.length/2){
        console.log(niz.length/2);
        console.log(`dan je isplativ`);
    }
}
isplativDan(flights)

//zadatak 5

let IznadGranice = (niz,granica) =>{
    let broj = 0;
    niz.forEach(el=>{
        
        if(el.putnici > granica){
            broj++;
        }
        
    })
    console.log(broj);
    if(broj > niz.length/2){
        console.log(`Dan je bio isplativ`);
        return true;
    }
   
}
console.log(IznadGranice(flights,150));

//zadatak 6

let dobreDestinacije = niz =>{
    
    let suma = 0;
    let broj = 0;
    niz.forEach(el=>{
        suma+=el.putnici;
        broj++;
    });
    let prosecan = suma/broj;
    niz.forEach(el=>{
        if(el.putnici>prosecan){
            console.log(`let sa natprosecnim br putnika je za destinacij ${el.destinacija}`);
        }
          
        });
       
}
dobreDestinacije(flights);

//zadatak 7

let ukupanBrojPutDest = (niz,naziv) =>{
    niz.forEach(el=>{
        if(el.destinacija.includes(naziv)){
            console.log(`Broj putnika za ${el.destinacija} je bio ${el.putnici}`);
        }
    });
}
ukupanBrojPutDest(flights,"Alanja");

//zadatak 8 dobro je izgleda ali treba prostudirati

let slabaProdaja = niz=>{
        
        let najvecaRazlika = 0;
        let letSaNajvecomRazlikom;
    niz.forEach(el=>{
        let razlika = 0;

        if(el.mesta>el.putnici){
        razlika = el.mesta - el.putnici;
        
        }
        if(razlika>najvecaRazlika){
            najvecaRazlika = razlika;
            letSaNajvecomRazlikom = el.destinacija;
                   
        }
        
    })
    console.log(`Let koji je imao najvecu razliku izmedju broja putnika na letu i broja mesta je let za ${letSaNajvecomRazlikom}`);
    
}
slabaProdaja(flights)

