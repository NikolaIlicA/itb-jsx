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
    age: 9,
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

let users = [user1,user2];


//zadatak 2

users.forEach(el=>{
    if(el.age<18){
        console.log(el.username);
    }
})


//zadatak 3

users.forEach(el=>{
    el.blogs.forEach(t=>{
        if(t.likes>50){
            console.log(t.title);
        }
    })
})


//zadatak 4

users.forEach(el=>{
    if(el.username == "JelenaMatejic"){
        console.log(el.blogs);
    }
})
//drugi nacin
users.forEach(el=>{
    if(el.username.includes("Jelena")){
        console.log(el.blogs);
    }
})

//zadatak 5 

users.forEach(el=>{
    let suma = 0;
        el.blogs.forEach(t=>{
            suma+=t.likes;
        })
    console.log(suma);
        if(suma > 100){
            console.log(el.username);
        }
});
    
console.log(`---------------------------------`);

//zadatak 6
let sumaUk = 0;
let broj = 0;
users.forEach(el=>{
   
        el.blogs.forEach(t=>{
            sumaUk+=t.likes;      
       
            broj++;
    })

})
console.log(sumaUk);
let prosekUk = sumaUk / broj;
console.log(prosekUk);
users.forEach(el=>{
    el.blogs.forEach(t=>{
        if(t.likes>prosekUk){
            console.log(t.title);
        }
    })
});

console.log(`---------------------------------`);
//zadatak 7
let sumaLikes=0;
let sumaDislikes =0;
broj = 0;
users.forEach(el=>{
    el.blogs.forEach(t=>{
        sumaLikes+= t.likes;
        sumaDislikes += t.dislikes;
        broj++;
    })
})
let prosekLikes = sumaLikes / broj;
let prosekDislikes = sumaDislikes / broj;
console.log(prosekLikes);
console.log(prosekDislikes);

users.forEach(el=>{
    el.blogs.forEach(t=>{
        if(t.likes>prosekLikes){
            console.log(`iznad proseka likes ${t.title}`);
        }if(t.dislikes<prosekDislikes){
            console.log(`ispod proseka dislikes ${t.title}`);
        }
    })
});