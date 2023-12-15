// Zadatak 1

let stavke = ["hleb", "mleko", "jogurt", "voda", "jabuke", "limun"];

let lista = niz => {
    let d1 = "";
    for (i=0; i<niz.length; i++) {
        d1+=`<ul><li>${niz[i]}</li></ul>`;
    }
    return d1;
}

d1.innerHTML += lista(stavke);
console.log(lista(stavke));

//zadatak 2

let timovi = ["Partizan","Panatinaikos","Real Madrid","Barselona","Makabi"];

let timLista = niz => {
    let d2="";
    for (i=0; i<niz.length; i++){
        d2+=`<table style="border:1px solid black"><tr><td>${niz[i]}</td></tr></table>`
    }
    return d2;
}
d2.innerHTML += timLista(timovi);

//Zadatak 3

let slike = ["slike/Aquaba.jpg","slike/Egipat.jpg","slike/Hurgada.jpg","slike/MarsaAlam.jpg","slike/OrangeBay.jpg"];

let galerija = niz =>{
    let d3 = "";
    for (i=0; i<niz.length; i++){
        d3+= `<br><img src="${niz[i]}" style="height:300px; width:300px">`
    }
    return d3;
}
d3.innerHTML += galerija(slike);



