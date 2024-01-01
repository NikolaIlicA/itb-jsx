console.log("Nizovi objekata");

let blog1 = {
    title: "IF naredba grananja!",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
};

let arrBlogs = [blog1,blog2,blog3];


//Ispis niza objekata
console.log(arrBlogs);

//Ispis ili dohvatanje jednog elementa iz niza objekata
console.log(arrBlogs[1]); // ovo je index 1, sto znaci da ce to biti blog2 jer je index 0 blog 1

//Ispis jednog propertiesa iz niza objekata
console.log(arrBlogs[1].title);
console.log(blog3["title"]);  // ovo se moze zapisati isto kao i na donji nacin
console.log(arrBlogs[2]["title"]);


// Ispis naslova svih elemenata iz niza - koriscenjem for petlje

for(i=0; i<arrBlogs.length;i++){
    console.log(arrBlogs[i].title);
}

//Ispis naslova svih elemenata iz niza - koriscenjem forEach petlje
arrBlogs.forEach(obj => { //ovde ce kao element da bude ceo objekat
    console.log(obj.title);
    console.log(obj.likes);
});

//Izmena propertieas nekom objektu
arrBlogs[1].title = "Ispisan novi naslov";
console.log(arrBlogs[1].title);


//zadatak 1
// pravimo klasicnu arrow funkciju kojoj prosledjujemo niz a ona vraca lajkove

let sumLikes = arr =>{
    let sum =0;
    arr.forEach(obj=>{
    sum += obj.likes;
    });
    return sum;
}
console.log((`Suma lajkova je: ${sumLikes(arrBlogs)}`));

//Zadatak 2

let avgLikes = (arr) =>{
    let s = sumLikes(arr); // pozivamo predjasnju fju gde smo izracunali prosecnu vrednost
    let n = arr.length;
    let avg = s / n;
    return avg;
}
console.log(`Prosecan broj lajkova je ${avgLikes(arrBlogs)}`);

//zadatak 3

let ocene = arr =>{
    arr.forEach(obj=>{
        if(obj.likes>obj.dislikes){
            console.log(obj.title);
        }
    });
}
ocene(arrBlogs);


//zadatak 4

let oceneDuplo = arr =>{
    arr.forEach(obj=>{
        if(obj.likes>=obj.dislikes*2){
            console.log(obj.title);
        }
    });
}
oceneDuplo(arrBlogs);

//zadatak 5


let uzvicnik = arr => {
    arr.forEach(obj=>{
       /* if(obj.title.endsWith("!")){  //Prvi nacin preko ugradjene petlje
            console.log(obj.title);
        }*/
        if(obj.title[blog1.title.length-1]=="!"){   // drugi nacin logicki vise
            console.log(obj.title);
        }
    });
};
uzvicnik(arrBlogs);
