// Zadatak 1

let stavke = ["hleb", "mleko", "jogurt", "voda", "jabuke", "limun"];

let lista = niz => {
    let d1 = "<ul>";
    for (i=0; i<niz.length; i++) {
        d1+=`<li>${niz[i]}</li>`;
    }
    d1 +=`</ul>`;
    return d1;
    
}


d1.innerHTML += lista(stavke);
console.log(lista(stavke));

//zadatak 2

let timovi = ["Partizan","Panatinaikos","Real Madrid","Barselona","Makabi"];

let timLista = niz => {
    let d2="<table>";
    for (i=0; i<niz.length; i++){
        d2+=`<tr><td style="border:1px solid black">${niz[i]}</td></tr>`
    }
    d2 += `</table>`;
    return d2;
}

d2.innerHTML += timLista(timovi);

//Zadatak 3

let slike = ["slike/Aquaba.jpg","slike/Egipat.jpg","slike/Hurgada.jpg","slike/MarsaAlam.jpg","slike/OrangeBay.jpg"];

let galerija = niz =>{
    let d3 = "";
    for (i=0; i<niz.length; i++){
        d3+= `<img src="${niz[i]}" style="height:300px; width:300px">`
    }
    return d3;
}
d3.innerHTML += galerija(slike);



