

// studenti zadatak 1

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

let studenti = [student1,student2,student3,student4];

// zadatak a

let Prezime = (niz,slovo)=>{
    niz.forEach(el=>{
        if(el.prezime.startsWith(slovo)){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
    
}
Prezime(studenti,"C");

//zadatak b

let imePrezime = (niz, slovo1, slovo2)=>{
    niz.forEach(el=>{
        if(el.ime.startsWith(slovo1) && el.prezime.startsWith(slovo2)){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
}
imePrezime(studenti,"N","I");

//zadatak c

let godinaStudija = (niz, broj)=>{
    niz.forEach(el=>{
        if(el.godinaStudija == broj){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });

}
godinaStudija(studenti,3)


//zadatak d   ======= ne znam da resim
/*
let maxProsek = niz =>{
    niz.forEach(el=>{
        let max = el.ocene[0];
        let suma =0;
        let broj=0
            el.ocene.forEach(p=>{
                suma+=p;
                broj++;
            });
        let prosek = suma / broj;
        console.log(prosek);
        
        
    })
    let nizProseka = [];
    nizProseka.push(prosek);
    console.log(nizProseka);
}
maxProsek(studenti);
*/


//zadatak e isti kurac samo jos dodatno nesto

//zadatak f

let prosecanSt = niz =>{
    niz.forEach(el=>{
        let prosecan = true;
            el.ocene.forEach(t=>{
                if(t==7){
                    
                }else if(t==8){

                }else if(t==9){
                }else {
                    prosecan = false}
            });
        if (prosecan == true){
            console.log(`Student ${el.ime} ${el.prezime} je prosecan student`);
        }
    });
}
prosecanSt(studenti);

//zadatak g

let ekstraSt = niz => {
    niz.forEach(el=>{
        let ekstra =  true;
        let broj9 = 0;
        let broj10 = 0;
            el.ocene.forEach(t=>{
                if(t==9){
                    broj9++;
                }else if(t==10){
                    broj10++;
                }else {
                    ekstra = false;
                }
            });
        if(ekstra==true && broj10>=2*broj9){
            console.log(`Student ${el.ime} ${el.prezime} je ekstra student`);
        }
    });
}
ekstraSt(studenti);

//zadatak h

let kidaSt = niz =>{
    niz.forEach(el=>{
        let kida = true;
        let broj9 = 0;
            el.ocene.forEach(t=>{
                if(t==9){
                    broj9++;
                }else if(t==10){

                }else {
                    kida = false
                }
            });
        if(kida == true && broj9<el.godinaStudija){
            console.log(`Ime studenta je ${el.ime} ${el.prezime}`);
        }
    });
}
kidaSt(studenti);

//zadatak i 

let razbijaSt = niz =>{
    niz.forEach(el=>{
        let razbija = true;
        let broj10 = 0;
            el.ocene.forEach(t=>{
                if(t==10){
                    broj10++;
                }else{
                    razbija = false;
                }
            });
        if (razbija == true && broj10 >= 5*(el.godinaStudija-1)){
            console.log(`Student koji razbija je ${el.ime} ${el.prezime}`);
        }
    });
}
razbijaSt(studenti);

//zadatak j

let aljkavSt = niz =>{
    niz.forEach(el=>{
        let aljkav =true;
            el.ocene.forEach(t=>{
                if(t<=7){

                }else{
                    aljkav = false;
                }
            });
        if(aljkav==true){
            console.log(`Student ${el.ime} ${el.prezime} je aljkav`);
        }
    });
}
aljkavSt(studenti);

//zadatak k

let brukaSt = niz =>{
    niz.forEach(el=>{
        bruka=true;
            el.ocene.forEach(t=>{
                if(t<=7){

                }else{
                    bruka = false;
                }
            });
        if(bruka == true && el.ocene.length<3*(el.godinaStudija-1) && el.godinaStudija>1){
            console.log(`Student ${el.ime} ${el.prezime} se bruka`);
        }
    
});
}

brukaSt(studenti);