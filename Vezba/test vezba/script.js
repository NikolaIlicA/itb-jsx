let dan = new Date ();
let dani = dan.getDay();
let sati = dan.getHours();
let minuti = dan.getMinutes();

if (dani>0 && dani<6) {
    document.write(`<h1>Radite? ITBootcamp vam nudi mogućnost da se okrenete novoj profesiji! (${sati}:${minuti})</h1>`)
}else {
    document.write(`<h1>Odmarate? ITBootcamp vam nudi mogućnost da stičete nove veštine!(${sati}:${minuti})</h1>`)
}