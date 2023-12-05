// Zadatak 1

let x = 3; // x je 3 mkv na koji ide jedan covek
let v = 90; // povrsina kafica u kv
let n = 50; //trenutni broj gostiju

let maxGostiju = v/x;
let napustiti= n - maxGostiju;

if (n<=maxGostiju) {
    document.write(`<p style="color:green">DA</p>`)
}
else {
    document.write(`<p style="color:red">NE</p>`)
    document.write(`<p style="color:red"> Potrebno je da lokal napusti ${napustiti} ljudi </p>`)
}

//Zadatak 2

let Pozitivno = 35; //broj pozitivno testiranih
let TestiranoDan = 100; // broj testiranih na dan
let BrojStanovnika = 120; // broj stanovnika zemlje

if ((Pozitivno / TestiranoDan*100 > 30) && (Pozitivno/BrojStanovnika*100 > 10)) {
    document.write (`<p style="color:red">VANREDNO STANJE</p>`)
} else {}



