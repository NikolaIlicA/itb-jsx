// zadatak 5

let dan1 = {
    datum: "2024/02/15",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [2,4,6,4,3,5,7,8,10,13,25]
};

let dan2 = {
    datum: "2024/02/16",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [26]
};

let dan3 = {
    datum: "2024/02/17",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [-5,-7,-8,-4,-1]
};
//a 

let dani = [dan1,dan2,dan3];

let prosecnaTemp = niz =>{
    niz.forEach(el=>{
        let suma = 0;
        let broj = 0;
            el.temperature.forEach(t=>{
                suma+=t;
                broj++;
            });
        let Prosecna = suma / broj;
        console.log(`Prosecna temperatura za ${el.datum} je ${Prosecna}`);
    }); 

}
prosecnaTemp(dani);

//b

let brojNatprosecnaMerenja = niz => {
    niz.forEach(el=>{
        let suma = 0;
        let broj = 0;
            el.temperature.forEach(t=>{
                suma+=t;
                broj++;
            });
        let Prosecna = suma / broj;
        let brojNatprosecna = 0;
            el.temperature.forEach(t=>{
                if(t>Prosecna){
                    brojNatprosecna++;
                }
            });
        console.log(`Broj natprosecnih merenja za dan ${el.datum} je ${brojNatprosecna}`);

    });
}
brojNatprosecnaMerenja(dani);

//c
let brojMaxMerenja = niz =>{
    niz.forEach(el=>{
        let broj = 0;
        let max = el.temperature[0];
            el.temperature.forEach(t=>{
                if(t>max){
                    max=t;
                    broj++;
                }
            });
        console.log(`Broj max merenja za ${el.datum} je ${broj}`);
    })
}

brojMaxMerenja(dani);

//e

let natprosecnoTopao = niz =>{
    niz.forEach(el=>{
        let suma = 0;
        let broj = 0;
            el.temperature.forEach(t=>{
                suma+=t;
                broj++;
            });
        let Prosecna = suma / broj;
        let brojNatprosecna = 0;
            el.temperature.forEach(t=>{
                if(t>Prosecna){
                    brojNatprosecna++;
                }
            });
        let topao = true;
        if(brojNatprosecna<=el.temperature.length/2){
            topao= false;
        }
        console.log(`dan ${el.datum} je ${topao} `);
    })
}
natprosecnoTopao(dani);


//f

let ledenDan = niz =>{
    niz.forEach(el=>{
        let leden = true;
            el.temperature.forEach(t=>{
                if(t>0){
                    leden = false;
                }
            });
        if(leden==true){
            console.log(`dan ${el.datum} je leden`);
        }
    })
}
ledenDan(dani);

//g

let tropskiDan = niz =>{
    niz.forEach(el=>{
        let tropski = true;
            el.temperature.forEach(t=>{
                if(t<24){
                    tropski=false;
                }
            });
        if(tropski ==  true){
            console.log(`Dan ${el.datum} je bio tropski`);
        }
    });
}
tropskiDan(dani);

//h
/*
let nepovoljanDan = niz =>{
    niz.forEach(el=>{
        let nepovoljan = true;
            el.temperature.forEach((t,j)=>{
                if(Math.abs(t[j]-t[j+1])<=8){
                    nepovoljan = false;
                }
            });    
                
               
        if (nepovoljan == true){
            console.log(`Dan ${el.datum} je nepovoljan`);
            }
    });
        
}

nepovoljanDan(dani);*/

//i

let neuobicajenDan = niz =>{
    niz.forEach(el=>{
        let neuobicajen = true;
            if(el.temperature<-5 && el.kisa==true){
                
            }else if (el.temperature>25 && el.oblacno==true){

            }else if (el.kisa == true && el.oblacno==true && el.sunce==true){

            }else {
                neuobicajen = false;
            }
        if(neuobicajen == true){
            console.log(`Dan ${el.datum} je bio neuobicajen`);
        }
    });
}
neuobicajenDan(dani);

// c i h nesam umeo