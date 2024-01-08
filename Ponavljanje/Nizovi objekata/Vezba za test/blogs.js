

// blogovi

let blog1 = {
    title: "IF naredba grananja!",
    likes: 50,
    dislikes: 21,
}

let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36,
}

let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
}

let blogs = [blog1,blog2,blog3];

//zadatak a

let BrLajkova = niz =>{
    let suma = 0;
    niz.forEach(el=>{
        suma += el.likes;
    });
    return suma;
}
console.log(BrLajkova(blogs));

//zadatak b

let prosecanBrLajkova = niz =>{
    let suma = 0;
    niz.forEach(el=>{
        suma+=el.likes;

    });
    let prosek = suma / blogs.length;
    return prosek;
}
console.log(prosecanBrLajkova(blogs));

//zadatak c

let likesDislikes = niz =>{
    niz.forEach(el=>{
        if(el.likes > el.dislikes){
            console.log(`Naslov sa vise lajkova je ${el.title}`);
        }
    });
    
}
likesDislikes(blogs);

//zadatak d

let duploViseLikes = niz =>{
    niz.forEach(el=>{
        if(el.likes>=2*el.dislikes){
            console.log(`Naslov sa bar duplo vise lajkova je ${el.title}`);
        }
    });
}
duploViseLikes(blogs);

//zadatak e

let uzvicnik = niz =>{
    niz.forEach(el=>{
        if (el.title.endsWith("!")){
            console.log(`Naslov koji se zavrsava uzvicnikom je ${el.title}`);
        }
    });
}
uzvicnik(blogs);

// zadatak f

let granica = (niz,grana)=>{
    let broj=0;
    niz.forEach(el=>{
        if(el.likes > grana){
            broj++;
        }
    });
    return broj;
    
}
console.log(granica(blogs,70));

//zadatak g

let prosledjenaRec = (niz, rec) =>{
    let suma = 0;
    let broj = 0;
    niz.forEach(el=>{      
        if(el.title.includes(rec)){
            suma += el.likes;
            broj++;
            
        }
        
    });
    console.log(suma);
        console.log(broj);
    let prosek = suma/broj;
    console.log(prosek);
}
    
prosledjenaRec(blogs,"petlja");

//h 
let iznadProseka = niz =>{
    let prosek = prosecanBrLajkova(niz);

    niz.forEach(el=>{
        if(el.likes>prosek){
            console.log(`Blog sa iznadprosecnim brojem lajkova je ${el.title} a prosek je ${prosek}`);
        }
    });

    
}
iznadProseka(blogs);


// i
let ispodProseka = niz => {
    let suma = 0;
    niz.forEach(el=>{
        suma+=el.likes;
    });
    let prosek = suma / blogs.length;
    niz.forEach(el=>{
        if(el.likes<prosek){
            console.log(`blog sa manjim brojem lajkova od proseka (${prosek}) je ${el.title} sa brojem lajkova ${el.likes}`);
        }
    });

}
ispodProseka(blogs);