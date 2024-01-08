let blog1 = {
    title: "IF naredba grananja", 
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

////////////////////////////

let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};
let user2 = {
    username: "StefanStanimirovic",
    age: 34,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};

console.log(user1.blogs);
console.log(user1.blogs[0].title);

//zadatak 1

let users = [user1,user2];

// ispisati sve username korisnika

users.forEach(u=>{
    console.log(u.username);
});

//zadatak 2

users.forEach(u=>{
    if(u.age < 18){
        console.log(u.username);
    }
})


//zadatak 3

users.forEach(el=>{
    el.blogs.forEach(b=>{
        if(b.likes>50){
            console.log(b.title);
        }
        
    })
})

//zadatak 4

users.forEach(el=>{
    if(el.username == "StefanStanimirovic"){
        el.blogs.forEach(t=>{
            console.log(t.title);
        })
    }
})

//zadatak 5

users.forEach(el=>{
    let sumLikes = 0;
        el.blogs.forEach(b=>{
            sumLikes+= b.likes;
        });
    if(sumLikes>100){
        console.log(el.username);
    }
})

//zadatak 6
let suma = 0;
let broj = 0;
users.forEach(el=>{
    
        el.blogs.forEach(b=>{
            suma+=b.likes
            broj++;
        })
        
})
console.log(suma);
console.log(broj);
let prosek = suma / broj;
console.log(prosek);
users.forEach(el=>{
    el.blogs.forEach(b=>{
        if(b.likes>prosek){
            console.log(b.title);
        }
    
    })
})

//zadatak 7  // ovo sam mogao i da skratim, da u jednoj forEach racunam i sumaNat i sumaNeg i br++
let sumaNat = 0;
let brojNat = 0;
users.forEach(el=>{
    el.blogs.forEach(b=>{
        sumaNat+=b.likes;
        brojNat++;
    })
})
let prosekNat = sumaNat/brojNat;
console.log(prosekNat);

let sumaDis = 0;
let brojDis = 0
users.forEach(el=>{
    el.blogs.forEach(b=>{
        sumaDis+=b.dislikes;
        brojDis++;
    })
})
let prosekDis = sumaDis / brojDis;
console.log(prosekDis);

users.forEach(el=>{
    el.blogs.forEach(b=>{
        if(b.likes>prosekNat && b.dislikes<prosekDis){
            console.log(b.title);
        }
    })
})