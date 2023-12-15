//zadatak 8

function deljivoSaTri(n,m) {
    let brojac = 0;
    for (let i=n; i<=m; i++) {
        if (i%3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`Ima ${brojac} brojeva u intervalu od ${n} do ${m}`); // !!!!!!!!! da smo ovu console.log stavili na kraju, prijavio bi mi da brojac is not defined
    // da smo let brojac = 0; stavili iznad cele fje, i da smo console.log stavoili iznad ovog dole delivoSaTri (10,30); ne bi se nista desilo, a da smo stavili ispod delivoSaTri (10,30); onda bi prepoznao broj

    return brojac;
}

deljivoSaTri (10,30);  // ako stavim console log na ovu funkciju, on ce mi ispisati u konzoli rezultat samo ako sam stavio u fju return


//Zadatak 9

function sumiraj (n,m) {
    let suma = 0;
    for (i=n; i<=m; i++) {
        suma+=i;
    }   
    return suma;   
}
console.log(sumiraj(4,6));


//zadatak 10

function mnozi(n,m) {
    let proizvod = 1;
    for (i=n; i<=m; i++) {
        proizvod*=i;
    }
    return proizvod;
}
mnozi(2,4)
console.log(mnozi(2,4));

//zadatak 11

function aritmeticka(n,m) {
    let ArSr = 0;       
    suma=0;         // mogao sam da iskoristim i fju odozgo i da stavim let suma=sumiraj(n,m)
    broj=0;
    for (i=n; i<=m; i++) {
        suma+=i;
        broj++;
    }
    ArSr=suma/broj;
    return ArSr;
}
console.log(aritmeticka(3,5));

//zadatak 12

function aritmeticka3(n,m) {
    let ArSr = 0;
    suma=0;
    broj=0;
    for (i=n; i<=m; i++) {
        if (i%10==3) {
        suma+=i;
        broj++;
        }       
    }
    ArSr=suma/broj;
    return ArSr;
}
console.log(aritmeticka3(3,23));


//zadatak 13

function velicinaFonta (f) {
    document.write(`<p style="font-size:${f}px">Neki tekst</p>`)
}
velicinaFonta(21)


//zadatak 14 

function recenica5 () {
    for (i=1; i<=5; i++)
    {
        document.write(`<h${i}>Neki tekst</h${i}>`)
        
    }
}
recenica5()

//iskopiraj primer sa slacka, ovo ispod nije dobro reselje
//zadatak 15 a)

let n = 5;
let a =700;
let d = 50;

function poslednjaPlata (n,a,d) {
    let poslPlata=0;
    for (i=1; i<=n; i++) {
        a+=d;
    }
    return a;
}
console.log(poslednjaPlata(5,700,50));



//zadatak 15 b)

function ukupnaPlata (n,a,d) {
    let sumaMesec=0;
    let sumaBonus=0;
    let sumaUkupno=0;
    for (i=1; i<=n; i++) {
         sumaMesec+=a+d*i;
       }      
        return sumaMesec;
}
console.log(ukupnaPlata(5,700,50));


// 15 a) drugi nacin
function poslednjaPlata (n, a, d){
    let zadnjaPlata = a + (n-1) * d;
    return zadnjaPlata;
}
console.log(`Poslednja plata zaposlenog je ${poslednjaPlata(4, 5, 1)} dinara`);

// 15 b) drugi nacin
function ukupnaPlata (n, a, d){
    let suma = 0;
    
    for(let i = 0; i< n; i++){
        suma = suma + a + d * i;
    }
    return suma;
}
console.log(`Ukupna plata zaposlenog je ${ukupnaPlata(5, 10, 2)} dinara`);

// 15 treci nacin, vise matematicki nego programerski

// 15.a) zadatak treci nacin

function poslednjaPlata(n, a, d) {
  return a + (n - 1) * d;
}
console.log(poslednjaPlata(6, 1000, 100));

// 15.b) zadatak treci nacin
function ukupnaPlata(n, a, d) {
  return ((a + poslednjaPlata(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata(3, 1000, 100));


//zadatak 16

function igraBezGranica (t,p,n) {
    if(t<p || t>p+n) {
        console.log(`Cekanje je 0s`);
    } else {
        let cekanje = p + n - t;
        console.log(`Cekanje je ${cekanje} sekundi`);
    }
}
igraBezGranica(15,20,25);
igraBezGranica(15,10,12);