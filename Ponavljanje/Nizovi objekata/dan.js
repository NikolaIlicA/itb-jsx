let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false, 
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10,0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
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

//zadatak 2



dani.forEach(el=>{
    console.log(el.temperature.length);
});

let max = dani[0].temperature.length;

dani.forEach(d=>{
    if(d.temperature.length>max){
        max = d.temperature.length;
    }if (d.temperature.length == max){
        console.log(d.datum);
        //console.log(d.datum.);
    }
});
//a)
console.log(dani[0].datum);



//zadatak 3 


let brDana = niz =>{

    let brojSun = 0;
    let brojKis = 0;
    let brojObl = 0;

    niz.forEach(d=>{
        if(d.kisa == true){
            brojKis++;
        }if(d.sunce ==  true){
            brojSun++;
        }if(d.oblacno == true){
            brojObl++;
        }
        
    });
    console.log(`Kisnih dana je bilo ${brojKis}`);
    console.log(`Suncanih dana je bilo ${brojSun}`);
    console.log(`Oblacnih dana je bilo ${brojObl}`);
    
}
brDana(dani);


//zadatak 4

let natprosecnaTemp = niz =>{ // usao sam u arrow funckiju, i odmah sam definisao promenljive, pre ulaska u forEach petlju. To mi je omogucilo da kada unesem promenljive u forEach, on ce mi sabirati sve temperature i sve brojTemp zajedno, za sva tri dana, i na osnovu toga dobicu prosecnu temperaturu za sve dane i sve temp.
    let suma = 0;
    let brojTemp = 0;
    let brojDana=0;

    niz.forEach(dan=>{
        dan.temperature.forEach(t=>{
            suma+=t;
            brojTemp++;
        });
    });
    let prosekUk = suma / brojTemp;
    console.log(prosekUk);  
       
    niz.forEach(dan => { // za razliku od prethodnog definisanja promenljivih, ovde sam promenljive definisao kada sam usao u forEach petlju, jer na taj nacin on ce meni racunati sume temperatura i broj temperatura za svaki dan pojedinacno, na osnovu cega mogu da racunam prosek temp za svaki dan pojedinacno// na kraju cu porediti te dnevne proseke sa ukupnim prosekom i odrediti preko if da li su dnevne prosecne temp vece od ukupne prosecne temp. If petlja takodje ide unutar ove forEach petlje, da bi iterirao za svaki dan,i svaki dan poredio sa ukupnom temp
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });

        let prosLok = zbirLok / brLok;
        console.log(prosLok);

        if (prosLok>prosekUk){
            brojDana++;
        }
    });
    return brojDana;
    
};
console.log(`Broj dana sa natprosecnom temperaturom je ${natprosecnaTemp(dani)}`);
    


    