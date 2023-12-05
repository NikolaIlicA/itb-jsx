console.log("if");

let x = 3;
let y = 3;

if(x==y) {
    console.log("vrednosti promenljivih x i y su jednake"); //mogu samo da ukucam log i da  izaberem ovu drugu opciju i sam ce ispaliti console.log
    console.log("Vrednosti promenljivih " + x + " i " + y + " su jednake." );
    console.log(`Vrednosti promenljivih ${x} i ${y} su jednake`); // `` se zovu bek tikovi;  kada stavim ${} onda ce da ocitava vrednost tih promenljivih u konzoli
    console.log("Vrednosti promenljivih",  x,  "i", y , " su jednake." ); // mogu da koristim zareze umesto pluseva ocitavace razmake
}

console.log("komanda ispod IF grane");


let a = 4;
let b = "4";

if (a==b) {
    console.log("Vrednosti a i b su jednake po vrednosti");
}


if (a === b) {  // == poredi samo po vrednosti, a ===poredi i po vrednosti i po tipu
    console.log("Vrednosti a i b su jednake po i tipu i po vrednosti");
} // nije se ispisala vrednost u konzoli, zato sto je a number tip a b je string tip


if (a !== b) {
    console.log("Promenljive a i b su razlicite bilo po tipu bilo po vrednosti");
}




