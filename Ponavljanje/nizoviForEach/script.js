


// nalazi se u callback fajlu, jer se nastavlja na njega/////////////



// ZA RAZLIKU OD FOR PETLJI, gde mozemo da biramo od kog clana niza cemo da iteriramo u nekoj funkciji, u forEach petlji mi to ne mozemo da radimo. U forEach petlji mi iteriramo kroz sve elemente jednog niza, i kroz sve indekse tog niza.

//BITNO SVOJSTVO JE STO forEach petlja kao parametar moze da primi i callback funkciju

let a = [-6,8,11,6,0];
let b = ["pera", "mika", "laza"];

a.forEach(ispisKonzola);
// forEach petlja = prolazi kroz sve elemente niza i za svaki element niza poziva callback fju i prosledjuje vrednost elementa kao argument
// znaci ako imam niz a, for each petalja ce da ide kroz sve elemente niza i da poziva sledece:
//ispisKonzola(-6);
//ispisKonzola(8);
//ispisKonzola(11);
//ispisKonzola(6);
//ispisKonzola(0);