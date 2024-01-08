let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false, 
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true, 
    oblacno: true,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true, 
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

let dani = [dan1,dan2,dan3];

//zadatak 3  // najbolje resenje do sad

let brojKisnihSuncObl = niz => {
    let brKisa=0;
    let brSunce=0;
    let brOblacno=0;
    niz.forEach(el=>{
        if(el.kisa){
            brKisa++;
        }if(el.sunce){
            brSunce++;
        }if(el.oblacno){
            brOblacno++;
        }
    });
    console.log(brKisa,brSunce,brOblacno);
}
brojKisnihSuncObl(dani);

//zadatak 4

let BrojDanaNatprosecnaTemp = niz =>{
    let SumaUk = 0;
    let brojUk = 0;
    let brojDanaNatprosecna = 0;
     niz.forEach(el=>{
        el.temperature.forEach(t=>{
            SumaUk+=t;
            brojUk++;
        });
     })

    let prosekUk = SumaUk / brojUk;
    console.log(prosekUk);
    niz.forEach(el=>{
        let sumaDan = 0;
        let brojDan = 0;
            el.temperature.forEach(t=>{
                sumaDan+=t;
                brojDan++;
            })
        let prosekDan = sumaDan/brojDan;
        

        
        if(prosekDan>prosekUk){
            brojDanaNatprosecna++;
        }   
    
    });
    return brojDanaNatprosecna;
     
}
console.log(BrojDanaNatprosecnaTemp(dani));

//zadatak b
/*
let datumSaNajviseIzmerenaTemp = niz=>{
    niz.forEach(el=>{
        let brojMerenja = 0; 
            el.temperature.forEach(t=>{
           if(t.length)

        })
        console.log(max);
    })
}
datumSaNajviseIzmerenaTemp(dani)
*/