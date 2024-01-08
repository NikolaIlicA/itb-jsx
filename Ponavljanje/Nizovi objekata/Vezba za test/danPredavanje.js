let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: true, 
    oblacno: false,
    temperature: [-3, -4, -6, -7, -6, -4, -10]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: true,
    sunce: true, 
    oblacno: false,
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




//zadatak 3

let kisaOblSun = niz =>{
    let brKisa = 0;
    let brSunce = 0;
    let brOblak = 0;
    niz.forEach(el=>{
        if(el.kisa == true){
            brKisa++;
        } if(el.sunce == true){
            brSunce++;
        } if(el.oblacno == true){
            brOblak++;
        }
    
    })
    console.log(`bilo je ${brKisa} kisnih dana, ${brSunce} suncanih i ${brOblak} oblacnih dana`);
}
kisaOblSun(dani);

//zadatak 4

let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);