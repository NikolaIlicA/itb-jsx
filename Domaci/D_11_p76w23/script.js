// Zadatak 1

let dnevneTemp = [7,11,9,14,16,17];

let dnevneTemperature = niz =>{
    let suma = 0;
    niz.forEach (el=>{
        suma+=el;
    });
    let SrednjaTemperatura = suma / niz.length;

    let RazlikaTemperatura = 0;
    let sveRazlike = [];
    
    niz.forEach(el=>{
         RazlikaTemperatura = Math.abs(el-SrednjaTemperatura);
         console.log(RazlikaTemperatura);
         sveRazlike.push(RazlikaTemperatura);
    });    

    let najmanjaRazlika = sveRazlike[0];
        
    sveRazlike.forEach(el=>{
        if(el<najmanjaRazlika){
            najmanjaRazlika=el;
            console.log(najmanjaRazlika);
        }    
    });
    
    let temperaturaNajblizaProsecnoj = 0;
    niz.forEach(el=>{
        RazlikaTemperatura = Math.abs(el-SrednjaTemperatura);
        if(RazlikaTemperatura == najmanjaRazlika){
            temperaturaNajblizaProsecnoj=el;
        }
    });
    return temperaturaNajblizaProsecnoj;
}
console.log(dnevneTemperature(dnevneTemp));



// Zadatak 2 

let temperature = [22, 23, 25, 28, 33, 31, 24, 22];

let sveTemperature = niz =>{
    let min = niz[0];
    niz.forEach(el=>{
        if(el<min){
            min=el;
        }
    });
    let max = niz[0];
    niz.forEach (el=>{
        if(el>max){
            max=el;
        }
    });
    let suma = 0;
    niz.forEach (el=>{
        suma+=el;
    });
    let SrednjaTemperatura = suma / niz.length;

    let RazlikaTemperatura = 0;
    let sveRazlike = [];
    
    niz.forEach(el=>{
         RazlikaTemperatura = Math.abs(el-SrednjaTemperatura);
         
         sveRazlike.push(RazlikaTemperatura);
    });    

    let najmanjaRazlika = sveRazlike[0];
        
    sveRazlike.forEach(el=>{
        if(el<najmanjaRazlika){
            najmanjaRazlika=el;
            
        }    
    });
    
    let temperaturaNajblizaProsecnoj = 0;
    niz.forEach(el=>{
        RazlikaTemperatura = Math.abs(el-SrednjaTemperatura);
        if(RazlikaTemperatura == najmanjaRazlika){
            temperaturaNajblizaProsecnoj=el;
        }
    });

    
    niz.forEach(el=>{
        if(el == min ){
            document.write(`<p style="color:blue"> Minimalna temperatura je ${min} stepeni </p>`);
        }else if ( el == max){
            document.write(`<p style="color:red"> Maksimalna temperatura je ${max} stepeni</p> `);
        }else if (el == temperaturaNajblizaProsecnoj) {
            document.write(`<p style="color:yellow"> Temperatura najbliza prosecnoj je ${temperaturaNajblizaProsecnoj} stepeni</p>`);
        }else {
            document.write(`<p style="color:black"> Temperatura je  ${el} stepeni</p> `);
        }
    });
}
sveTemperature(temperature);