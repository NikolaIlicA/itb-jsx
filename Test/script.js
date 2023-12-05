let datum = new Date ();
let dan = datum.getDay();


let vreme = new Date();
let x = vreme.getHours ();
let y = vreme.getMinutes ();

if (dan>=1 && dan<=5) {
    document.write(`Radite?IT Bootcamp vam nudi mogucnost da se okrenete novoj profesiji! (${x}:${y})`)
} else {
    document.write(`Odmarate? ITBootcamp vam nudi mogucnosti da sticete nove vestine! (${x}:${y})`)
}
