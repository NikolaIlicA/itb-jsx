let blog1 = {
    title: "If naredba grananja !",
    likes: 70,
    dislikes: 14,
};

let blog2 = {
    title: "While petlja !",
    likes: 25,
    dislikes: 36
};

let blog3 = {
    title: "For petlja !",
    likes: 100,
    dislikes: 2
};

let user1 = {
    username: "NikolaIlic",
    age: 32,
    blogs: [blog1,blog3],  
};

let user2 = {
    username: "IvanaColic",
    age: 30,
    blogs: [blog2], 
}

let users = [user1,user2];

//a 
let lajkovi = niz =>{
    niz.forEach(el=>{
        el.blogs.forEach(t=>{
            console.log(`Broj lajkova za blog ${t.title} je ${t.likes}`);
        });
    });
}
lajkovi(users);

//b

let prosekLikes = niz=>{
        
        
    niz.forEach(el=>{
        let suma = 0;
        let broj = 0;
            el.blogs.forEach(t=>{
                suma+=t.likes;
                broj++;
            })
            let prosek = suma / broj;
            console.log(prosek);
            
        });
}
prosekLikes(users)

//c 

let LikesDislikes = niz =>{
    niz.forEach(el =>{
            el.blogs.forEach(t=>{
                if(t.likes > t.dislikes){
                    console.log(t.title);
                }
            });
    });
}
LikesDislikes(users);

//d
