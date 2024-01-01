
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


////////////////////////////////////////////////


let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs: [blog1,blog3],
    
    logBlogs: function(){
        this.blogs.forEach(el=>{
            console.log(el.title);
        })
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 34,
    blogs: [blog2],  //niz od jednog elementa
    logBlogs: function(){
        this.blogs.forEach(el=>{
            console.log(el.title);
        })
    }
};


///////////////////////////////////////////////

//3 nacina za ispisivanje naslova prvog bloga koji je napravio user1

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
console.log(user1["blogs"]["0"]["title"]);


//// ovo mi je ispis iz funkcije za fju logBlogs
user1.logBlogs();
user2.logBlogs();


//zadatak 1

let users = [user1,user2];

//Ispis username polja iz users niza

users.forEach(u=>{
    console.log(u.username);
});

//izpis svih naslova blogova koje su korisnici kreirali

users.forEach(u=>{
    u.logBlogs();
})

//Da niam imao metodu logBlogs

users.forEach(u=>{
    let userBlogs = u.blogs; // niz blogova korisnika
    userBlogs.forEach(b=>{
        console.log(b.title);
    });
});


//zadatak 3

users.forEach(u=>{
    let userBlogs = u.blogs;
    userBlogs.forEach(b=>{
        if(b.likes>50){
            console.log(b.title);
        }
    });
});


//zadatak 4

users.forEach(u=>{
    let userBlogs=u.blogs;  // vidi sa jelenom da li je ovo isto kao da sam samo napisao user.blog
    userBlogs.forEach(b=>{
        if(u.username == "JelenaMatejic")
        console.log(b.title);
    });
});

//zadatak 2
users.forEach(u=>{
    if(u.age<18){
        console.log(user.username);
    }
});


//zadatak 5

/*
let users = [user1,user2];
*/

users.forEach(u=>{
    let sumLikes = 0;  // !!!!! kada stavimo sumu unutar forEach, on ce da broji za svakog korisnika pojedinacno, i da vrati na nulu kada izbroji za jednog
    u.blogs.forEach(b=>{     
        sumLikes += b.likes;
    });
    if(sumLikes>100) {
        console.log(u.username);
    }
});


//zadatak 6

let sumLikes = 0;  // !!!!! kada stavimo sumu ispred forEach, on ce da broji za sve korisnike 
let broj = 0;
users.forEach(u=>{   
    u.blogs.forEach(b=>{
        sumLikes+=b.likes;
        broj++;
    });
        let prosecan= sumLikes / broj;
        users.forEach(u=>{
            u.blogs.forEach(b=>{
                if(b.likes>prosecan){
                    console.log(b.title);
            }
        });
    });
});




//zadatak 7

sumLikes = 0;   
broj = 0;
let sumDislikes =0;
let brojDis =0;

users.forEach(u=>{   
    u.blogs.forEach(b=>{
        sumLikes+=b.likes;
        broj++;
        sumDislikes+=b.dislikes;
        brojDis++;
    });
});  
        let prosecan= sumLikes / broj;
        let prosecanDis = sumDislikes / brojDis;
        users.forEach(u=>{
            u.blogs.forEach(b=>{
                if(b.likes>prosecan && b.dislikes<prosecanDis){
                    console.log(b.title);
                }
        });
     
});


//zadatak 2

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};


// 1. ZADATAK
// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
let dani = [dan1, dan2, dan3];


// 2. ZADATAK
// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
let maxBrMerenja = dani[0].temperature.length;
let indeksPrvog = 0;
let indeksPoslednjeg = 0;
dani.forEach((d, indeks) => {
    if(maxBrMerenja < d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPrvog = indeks;
    }

    if(maxBrMerenja <= d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPoslednjeg = indeks;
    }
});

// a) Ispisati svaki takav datum
dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja){
        console.log(d.datum);
    }
});

// b) Ispisati prvi od njih
console.log(dani[indeksPrvog].datum);


// c) Ispisati poslednji od njih
console.log(dani[indeksPoslednjeg].datum);


// 3. ZADATAK
// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let brSuncanihIKisnih = niz => {
    let kisni = 0;
    let suncani = 0;
    niz.forEach(dan => {
        if(dan.kisa) {
            kisni++;
        }
        if(dan.sunce) {
            suncani++;
        }
    });
    console.log(`Kisnih dana je bilo: ${kisni}, a suncanih je bilo: ${suncani}`);
}
brSuncanihIKisnih(dani);

// 4. ZADATAK
// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom



let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);