

let inputPoljeRuze = document.getElementById('poljeRuze');
let inputPoljeLjiljani = document.getElementById('poljeLjiljani');
let inputPoljeGerberi= document.getElementById('poljeGerberi');

let btnIzracunaj = document.getElementById('izracunaj');
let btnResetuj = document.getElementById('resetuj');

let pSlicice1 = document.getElementById('slicice1');
let pSlicice2 = document.getElementById('slicice2');
let pSlicice3 = document.getElementById('slicice3');

let pDodatniPokloni = document.getElementById('dodatniPokloni');
let pCenaBezPopusta = document.getElementById('cenaBezPopusta');
let pCenaSaPopustom = document.getElementById('cenaSaPopustom');

let cenaRuza = 150;
let cenaLjiljan = 120;
let cenaGerber = 70;

let cenaBombonjera = 500;
let cenaCokolada=500;
let cenaSampanjac= 500;

let cenaUkupno=0;

btnIzracunaj.addEventListener('click',()=>{

    event.preventDefault();

    let brojRuza = inputPoljeRuze.value;
    let brojLjiljana = inputPoljeLjiljani.value;
    let brojGerbera = inputPoljeGerberi.value;
   

    if (brojRuza <0 || brojRuza%1!=0 || brojLjiljana <0 || brojLjiljana%1!=0 || brojGerbera <0 || brojGerbera%1!=0){

        inputPoljeRuze.value=0;
        inputPoljeLjiljani.value=0;
        inputPoljeGerberi.value=0;

            pCenaBezPopusta.innerHTML = `Molimo vas unesite ceo pozitivan broj`;  

            alert("Molimo vas da unesete ceo pozitivan broj za porudzbinu")    
        }
    
     
    else{ 
     
        for(let i = 1; i<=brojRuza; i++){
            if(i>5 && i!=101){
                pSlicice1.innerHTML = `<img src="slike/ruza.jpg"><span>x${i}</span>`;
            }else if (i == 101){
                pSlicice1.innerHTML = `<img src="slike/101ruza.jpg"><span></span>`;
            }else {
                pSlicice1.innerHTML += `<img src="slike/ruza.jpg">`;
            }
        };

        for( i = 1; i<=brojLjiljana; i++){
            if(i>5){
                pSlicice2.innerHTML = `<img src="slike/ljiljan.jpg"><span>x${i}</span>`;
            }else{
                pSlicice2.innerHTML += `<img src="slike/ljiljan.jpg">`;
            }
        };

        for( i = 1; i<=brojGerbera; i++){
            if(i>5){
                pSlicice3.innerHTML = `<img src="slike/gerber.jpg"><span>x${i}</span>`;
            }else{
            pSlicice3.innerHTML += `<img src="slike/gerber.jpg">`;
            }
        };

        

        
        
        
        let dodatniPokloni = document.querySelectorAll("input[name='dodatno']:checked");
        let suma = 0;
        
        dodatniPokloni.forEach(el=>{
            if(el.checked){
                suma+=Number(el.value);
                pDodatniPokloni.innerHTML += `+${el.id}<br>`;

            }
        });

        let inputRacun = document.querySelector("input[name='placanje']:checked");
        let placanje = inputRacun.value;
        cenaUkupno = brojRuza * cenaRuza + brojLjiljana * cenaLjiljan + brojGerbera * cenaGerber + suma;
        
        if(placanje == "kes"){
            cenaUkupno = cenaUkupno;
            
            pCenaBezPopusta.innerHTML=`Cena za gotovinsko placanje iznosi ${cenaUkupno} dinara`;

        } else if (placanje == "kartica" && cenaUkupno>2000){
            pCenaBezPopusta.innerHTML=`Cena bez popusta iznosi ${cenaUkupno} dinara`;
            cenaUkupno = 0.9*cenaUkupno;
            pCenaSaPopustom.innerHTML= `Cena sa popustom za placanje karticom iznosi ${cenaUkupno} dinara`;

        }else if (placanje == "kartica" && cenaUkupno<=2000){
            cenaUkupno = cenaUkupno;
            pCenaBezPopusta.innerHTML=`Cena za placanje karticom bez popusta iznosi ${cenaUkupno} dinara`;
        }
      
    }
});















