
// Zadatak 1

function funkc(broj,string) {
    document.write(`<p style="font-size:${broj}px">${string}</p>`)
}
funkc(40,"neki random tekst")

//Zadatak 2

function funkc2 (n, boja1, boja2, slika) {
    for (i=1; i<=n; i++) {
        if(i%2 == 0) {
            document.write(`<img src="${slika}" style="border:5px solid ${boja1}; width:300px; height:300px"><br>`)
        } else {
            document.write(`<img src="${slika}" style="border:5px solid ${boja2}; width:300px; height:300px"><br>`)
        }
    }
}
funkc2(6,"red","green","1.jpg")