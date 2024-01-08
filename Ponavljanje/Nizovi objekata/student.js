

let student1 = {
    ime: "Nikola",
    prezime: "Ilic",
    godinaStudija: 3,
    ocene: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
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
    ocene: [6,6,6,7,7,7,7],
};

let studenti = [student1,student2,student3,student4];

//a

let zadatoSlovo = (niz,slovo) =>{

    niz.forEach(el =>{
        if(el.prezime.startsWith(slovo)){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    })

}
zadatoSlovo(studenti,"M");

//b

let nizDvaStringa = (niz)=>{
    niz.forEach(el=>{
        if(el.ime.startsWith("I") && el.prezime.startsWith("C")){
            console.log(`Student je ${el.ime} ${el.prezime}`);
        }
    });
}
nizDvaStringa(studenti,"I","C");

//c 
// vodi racuna ovde sam pravio gresku sto sam stavio i u parametar naziv broj, i sto sam umesto brojac stavio broj. Broj se odnosi na godinu studija, a brojac broji koliko ima studenata koji su na toj godini studija

let godinaSt = (niz,broj)=>{
    let brojac = 0;
    niz.forEach(el=>{
        if(el.godinaStudija === broj){
            brojac++;
        }
        
    });
    return brojac;   
}
console.log(godinaSt(studenti,3));


//d
// DOVRSITI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let maxProsek = niz => {
    
    niz.forEach(el=>{
        let suma = 0;
        let broj = 0;
        el.ocene.forEach(o=>{
            suma+=o;
            broj++;
            
        })
        
        let prosek = suma / broj;
        console.log(prosek);
        
    });
    
}
maxProsek(studenti);

//e 

//f 

let prosecan = niz =>{
    
    niz.forEach(el=>{
        let prosek = true;

            el.ocene.forEach(o=>{
                if(o== 6 || o==10){
                    prosek = false;      
                }
            });
        
        if(prosek){   // vidi dal moze ovo elegantnije da se resi
            console.log(`${el.ime} ${el.prezime}`) ;
        }
        
    });
    
}
prosecan(studenti);

//g

let ekstraSt = niz =>{
    
    niz.forEach(el=>{
        let ekstra = true;
        let broj9 = 0;
        let broj10= 0;

        el.ocene.forEach(o=>{
            if(o==9){
                broj9++;
            }else if(o==10){
                broj10++;
            }else{
                ekstra = false; 
                    
            }            
        });
        
        if(ekstra==true && broj10>=2*broj9){
        console.log(`Student ${el.ime} ${el.prezime} je ekstra student`);
        }
    });
    
}
ekstraSt(studenti);


//h

let kidaSt = niz => {
    
    niz.forEach(el=>{
        let kida = true;
        let broj10=0;
        let broj9 =0;
            el.ocene.forEach(o=>{
                if(o==9){
                    broj9++;
                }else if(o==10){
                }else {
                    kida = false;
                }
            });
        if(kida == true && broj9<el.godinaStudija){
            console.log(`Student ${el.ime} ${el.prezime} kida`);
        };

    });
}
kidaSt(studenti);

//i

let razbijaSt = niz =>{
    niz.forEach(el=>{
        let razbija = true;
        let broj10=0;
            el.ocene.forEach(o=>{
                if(o==10){
                    broj10++;
                }else {
                    razbija = false;
                }
            });
        if(razbija == true && broj10 >= 5*(el.godinaStudija-1)){
            console.log(`Student ${el.ime} ${el.prezime} razbija`);
        }
    });
}
razbijaSt(studenti);


let aljkavSt = niz =>{
    niz.forEach(el=>{
        let aljkav = true;
            el.ocene.forEach(o=>{
                if(o==6){

                }else if(o==7){
                    
                }else (
                    aljkav =false
                    
                )
            });
        if(aljkav == true){
            console.log(`Student ${el.ime} ${el.prezime} je aljkav `);
        };
    });
}
aljkavSt(studenti);


let brukaSt = niz =>{
    niz.forEach(el=>{
        let bruka = true;
        let brojPolozenih = el.ocene.length;
            el.ocene.forEach(o=>{
                if(o>7){
                    bruka = false
                }
            });
        if (bruka == true && el.godinaStudija!=1 && brojPolozenih<3*(el.godinaStudija-1)){
            console.log(`Student ${el.ime} ${el.prezime} se bruka`);
        };
    });
}
brukaSt(studenti);

