let dan1 = {
    datum: "2023/12/23",
    kisa: true,
    sunce: true, 
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: true,
    sunce: true, 
    oblacno: true,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true, 
    oblacno: true,
    temperature: [31,25,55,33,31]
};


let dani = [dan1,dan2,dan3];

//zadatak a

let prosecnaTemp = niz =>{
    niz.forEach(el=>{
        let suma = 0;
            el.temperature.forEach(t=>{
                suma+= t;
            });
        let prosek = suma / el.temperature.length;
        console.log(`Prosecna temperatura za dan ${el.datum} je ${prosek}`);
    });
}
prosecnaTemp(dani);

//zadatak b
let natprosecnaTemp = niz =>{  // trazi nam prosek za sve ukupno, pa onda da racunam prosek za svaki dan i vidim da li je veci od proseka
    
    let sumaUk = 0;
    let brojUk = 0;
    let brojDanaNatprosecno = 0;
    niz.forEach(el=>{
        el.temperature.forEach(t=>{
            sumaUk+=t;
            brojUk++;
        })
    });
    let prosekUk = sumaUk / brojUk;
    console.log(prosekUk);

    niz.forEach(el=>{
        let sumaDan = 0;
        let brojDan = 0;
            el.temperature.forEach(t=>{
                sumaDan += t;
                brojDan++;
            });
        let prosekDan = sumaDan / brojDan;
        console.log(prosekDan);
        
        
        if(prosekDan>prosekUk){
            brojDanaNatprosecno++;
        }
    
    });
    return brojDanaNatprosecno;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${natprosecnaTemp(dani)}`);


//zadatak e 
/*
let natprosecnoTopao = niz =>{
    niz.forEach(el=>{
        natprosecan = true;
            el.temperature.forEach(
    })
}
*/

//zadatak f

let ledenDan = niz =>{
    niz.forEach(el=>{
        leden =true;
            el.temperature.forEach(t=>{
                if(t<0){
                }else{
                    leden = false;
                }
            });
        if(leden == true){
            console.log(`Dan ${el.datum} je bio leden`);
        }    
    });
}
ledenDan(dani);

//zadatak g 

let tropskiDan = niz =>{
    niz.forEach(el=>{
        let tropski  = true;
            el.temperature.forEach(t=>{
                if(t>=24){

                }else {
                    tropski = false;
                }
            });
        if(tropski == true){
            console.log(`Dan ${el.datum} je bio tropski`);
        }
    });
}
tropskiDan(dani);

//zadatak h 
/*
nepovoljan: function(dani) {
    for(let i=0; i<temperature.length-1; i++) {
        if(Math.abs(temperature[i]-temperature[i+1]) > 8) {
            return true;
        }
    }
    return false;
}



// zadatak i 
/*
let neuobicajenDan = niz=>{
    niz.forEach(el=>{
        neuobicajen = true;
            el.temperature.forEach(t=>{
                if(t<-5 && el.kisa == true){

                }else if(t>25 && el.oblacno == true){

                }else if( el.kisa == true && el.oblacno == true && el.sunce == true){

                }else {
                    neuobicajen = false;
                }
            });
        if(neuobicajen == true) {
            console.log(`Dan ${el.datum} je bio neuobicajen`);
        }
    });
}
neuobicajenDan(dani);
*/