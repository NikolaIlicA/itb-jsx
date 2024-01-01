

let knjiga1 = {
    naziv: "Kum",
    autor: "Mario Puzo",
    slika: "slike/kum.jpg",
    procitana: true
} 

let knjiga2 = {
    naziv: "Gospodar Prstenova ",
    autor: "J.R.R.Tolkin",
    slika: "slike/GospodarPrstenova.jpg",
    procitana: true
} 


let knjiga3 = {
    naziv: "Kockar",
    autor: "F.Dostojevski",
    slika: "slike/kockar.jpg",
    procitana: false
} 

let knjige = [knjiga1, knjiga2, knjiga3];

let tabela = niz =>{
    let d1="<table>";

    niz.forEach((i,j)=>{

        if(j%2==0){
            d1+= `<tr style ="background-color: bisque";>`
        } else {
            d1 += `<tr style ="background-color: powderblue";>`
       }
       
        if(i.procitana == true){
            
        d1 +=`<td><img src="${i.slika}"; ></td><td><p style="color:blue">Naziv knjige: ${i.naziv}</p><br><p style="color:blue"> Autor: ${i.autor}</p></td></tr>`;                          

         } else {
            
        d1 +=`<td><img src="${i.slika}"; ></td><td><p style="color:gray">Naziv knjige: ${i.naziv}</p><br><p style="color:gray"> Autor: ${i.autor}</p></td></tr>`;    
         }
        
    });
    

    d1 += `</table>`;
    return d1;    
}
d1.innerHTML += tabela(knjige);

