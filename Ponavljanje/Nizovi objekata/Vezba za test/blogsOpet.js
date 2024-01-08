let blog1 = {
    title: "IF naredba grananja",
    likes: 50,
    dislikes: 21,
}

let blog2 = {
    title: "While petlja!",
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

let lajkovi = niz =>{
    let suma = 0;
    niz.forEach(el=>{
        suma+= el.likes;
    })
    console.log(suma);
};
lajkovi(blogs)

//zadatak b

let prosekLajk = niz=>{
    let suma = 0;
    niz.forEach(el=>{
        suma+=el.likes;
    })
    let prosek = suma / niz.length;
    console.log(prosek);
}    
prosekLajk(blogs)

//zadatak c

let LajkDislajk = niz =>{
    niz.forEach(el=>{
        if(el.likes > el.dislikes){
            console.log(el.title);
        }
    });
}
LajkDislajk(blogs);

//zadatak d

let duploVise = niz =>{
    niz.forEach(el=>{
        if(el.likes >=2*el.dislikes){
            console.log(el.title);
        }
    })
}
duploVise(blogs);

//zadatak e

let uzvicnik = niz =>{
    niz.forEach(el=>{
        if(el.title.endsWith("!")){
            console.log(el.title);
        }
    })
}
uzvicnik(blogs)

//zadatak f)

let VeciOdGranice = (niz, granica)=>{
    let broj = 0;
    niz.forEach(el=>{
        if(el.likes>granica){
            broj++;
        }
    });
    console.log(broj);
}
VeciOdGranice(blogs,40);

//zadatak g)

let prosledjenaRec = (niz, rec)=>{
    let suma = 0;
    let broj = 0;
    niz.forEach(el=>{
        
        if(el.title.includes(rec)){
            suma+=el.likes;
            broj++;
            
        }
        
    })
    let prosek = suma / broj;
    console.log(prosek);
}
prosledjenaRec(blogs, "petlja")


//zadatak h

let iznadProseka = niz =>{
    let suma = 0;
    let broj = 0;
    niz.forEach(el=>{
            suma+=el.likes;
            broj++;
    })
    let prosek = suma / broj;
    console.log(prosek);
    niz.forEach(el=>{
        if(el.likes>prosek){
            console.log(el.title);
        }
    })
}
iznadProseka(blogs)

//zadatak i

let ispodProsekaDislikes = niz=>{
    let sumaDislikes = 0;
    let brojDislikes = 0;
    niz.forEach(el=>{
        sumaDislikes+=el.dislikes;
        brojDislikes++;
    })
    prosek = sumaDislikes / brojDislikes;
    console.log(prosek);
    niz.forEach(el=>{
        if(el.dislikes<prosek){
            console.log(el.title);
        }
    })
}
ispodProsekaDislikes(blogs)