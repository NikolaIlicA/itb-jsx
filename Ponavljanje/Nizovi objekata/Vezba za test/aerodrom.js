let fly1 = {
    destinacija: "Jordan",
    putnici: 180,
    mesta: 200
}

let fly2 = {
    destinacija: "Hurgada",
    putnici: 200,
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

//zadatak a)  // nauci da pises konzolu kada imas return majmune

let MaxBrojPutnika =niz=>{
    let max = niz[0].putnici;
    niz.forEach(el=>{
       if(el.putnici > max){
        max = el.putnici
       }
    });
    return max;
}
console.log(`Maksimalan broj putnika je bio ${MaxBrojPutnika(flights)}`);

//zadatak b)

let brojMax = niz => {
    let max = niz[0].putnici;
    let broj = 0;
        niz.forEach(el=>{
            if(el.putnici > max){
                max = el.putnici;
                broj++;         
            }         
        });
        return broj;
}
console.log(`Broj maksimalnih putnika je bio ${brojMax(flights)}`);


//zadatak c

let prosecanBroj = niz=>{
    let suma = 0;
    let broj = 0;
        niz.forEach(el=>{
            suma+=el.putnici;
            broj++;
        })
    let prosek = suma / broj;
    return prosek;
}
console.log(`Prosecan broj putnika je ${prosecanBroj(flights)}`);


//zadatak d 

let isplativ = niz =>{
    
    niz.forEach (el=>{
        if(el.putnici>el.mesta/2){
            console.log(`Dan je bio isplativ za destinaciju ${el.destinacija}`);
        }     
    });
}
isplativ(flights)


//zadatak e 

let granicaLet = (niz,granica)=>{
    let broj = 0;  
    niz.forEach(el=>{
            if(el.putnici>granica){
                broj++;
            }
    });

    let isplativ = true;
    if(broj<=niz.length/2){
        isplativ = false
   }
   console.log(isplativ);
    
}
granicaLet(flights,170)


//zadatak f 
let dobreDestinacije = niz=>{
    let prosek = prosecanBroj(niz);

    niz.forEach(el=>{
        if(el.putnici>prosek){
            console.log(`Natprosecan broj putnika bio je na letu za ${el.destinacija}`);
        }
    });
}
dobreDestinacije(flights);

//zadatak g


let ukupanBrojPutnikaDestinacija = (niz,destinacija)=>{
    let suma = 0;
    niz.forEach(el=>{
        if(el.destinacija == destinacija){
            suma += el.putnici;
        }
        
    });
    console.log(`Na destinaciju ${destinacija} letelo je ukupno ${suma} putnika`);
}
ukupanBrojPutnikaDestinacija(flights,"Jordan");

//zadatak h   !!!!!!!!!!!!!! videti kako, vrv je isti princip kao i za pod a i b

let slabaProdaja = niz =>{
    niz.forEach(el=>{

    })
}



/*
/// prvo sam se drkao sa ovom varijantom, izgleda da i ovo radi, ali bolje je mnogo resenje koje sam gore ostavio
 pitaj boga dal je tacno, ovde sam na kraju uradio if u if petlji da prebroji da li je put isplativ preko el.putnici>granica // napisao sam da prebroji sve takve// i tek posle stavio da ako je taj broj veci od polovine niza da ispise ovo iz konzole
let granicaLet = (niz,granica)=>{
    let broj = 0;
    
    niz.forEach(el=>{
        let isplativ = true;
        
            if(el.putnici>granica){
                broj++;
                               
            }else{
                isplativ = false;
            }    
    });
   if(broj>niz.length/2){
        console.log(`Letovi su bili iznad granice i isplativi`);
   }
    
}
granicaLet(flights,170)

*/