
// Nizovi objekata == tj objekti koji su smesteni u niz


let blog1 = {
    title: "If naredba grananja !",
    likes: 50,
    dislikes: 21,
};

let blog2 = {
    title: "While petlja !",
    likes: 25,
    dislikes: 36
};

let blog3 = {
    title: "For petlja !",
    likes: 100,
    dislikes: 12
};

let arrBlogs = [blog1,blog2,blog3];  // kreirali smo niz sa proizvoljnim imenom arrBlog, sa elementima niza koji cine sva tri ova kreirana objekta

// ispis niza objekata
console.log(arrBlogs);

//dohvatanje jednog elementa iz niza objekata
console.log(arrBlogs[1]); // ispisujemo element sa indexom 1, i dobijamo i njegova svojstva

//ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title); // znaci iz niza elemenata pristupamo elementu sa indexom 1, i uzimamo i ispisujemo njegovo svojstvo title

console.log(arrBlogs[1]["title"]); // isto radi kao prethodna komanda


//ispis naslova svih elemenata iz niza = koriscenjem for petlje

for(let i =0; i<arrBlogs.length;i++){ // u for petlji i predstavlja index elementa iz niza
    console.log(arrBlogs[i].title);
}

//ispis naslova svih elemeata iz niza koriscenjem forEach petlje

arrBlogs.forEach(el=>{   // u forEach el ce da bude ceo objekat iz niza
    console.log(el.title);
    console.log(el.likes);
    console.log(el.dislikes);
    console.log(el);
})

// menjanje propertiesa 
/*
arrBlogs[1].title = "While ciklus";
console.log(arrBlogs[1].title);
*/
arrBlogs.forEach(el=>{
    console.log(el.title, el.likes);  // znaci mozemo vise svojstava niza objekata da ispisujemo odjednom
});

//1.zadatak 


/*
let arrBlogs = [blog1,blog2,blog3]; 
*/

let sumLikes = arr =>{  // posto se prosledjuje niz elemenata, stavljamo arr, mogli smo i niz da napisemo, svejeno je
    let suma  = 0;

    arr.forEach(el=>{   // sada stavljamo arr umesto arrBlogs, jer smo uveli parametar arr
        suma += el.likes; 
    });
    return suma;
}
console.log(`Suma lajkova je ${sumLikes(arrBlogs)}`);



//zadatak 2

/*
let arrBlogs = [blog1,blog2,blog3]; 
*/

let sumLikesProsek = arr => {

let suma = 0;
arr.forEach(el=>{
    suma += el.likes;
})

let ArSr = suma / arrBlogs.length;
return ArSr;

}

console.log(`Prosecan broj lajkova je ${sumLikesProsek(arrBlogs)}`);



//zadatak 3

let likesDislikes = arr =>{

    arr.forEach(el=>{
        if(el.likes>el.dislikes){
            console.log(`naslov je ${el.title}`);
        }
    });
    return
}
likesDislikes(arrBlogs);


//zadatak 4

let likesDislikesDuplo = arr =>{

    arr.forEach(el=>{
        if(el.likes >= el.dislikes*2){
            console.log(`Naslov je ${el.title}`);
        }
    });
}
likesDislikesDuplo(arrBlogs);

//zadatak 5

let Uzvicnik = arr =>{
    /* PRVI NACIN
    arr.forEach(el=>{       
        if(el.title.endsWith("!")){
            console.log(`Naslov koji se zavrsava uzvicnikom je ${el.title}`);
        }
    });
    */
   //DRUGI NACIN
   arr.forEach(el=>{
   if (el.title[el.title.length-1] == "!"){
        console.log(`Naslov sa uzvicnikom je ${el.title}`);
   }
    });
}
Uzvicnik(arrBlogs);