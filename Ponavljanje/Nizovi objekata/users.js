// OBBJEKAT U OBJEKTU TJ NIZ OBJEKATA UNUTAR NEKOG OBJEKTA

// imali smo do sada niz u okviru objekta(primer sa temperaturama), a sada imamo niz objekata u objektu

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
    // u objektu user napraviti metod koji ispisuje sve blogove korisnika
    logBlogs : function (){
        this.blogs.forEach(el=>{
            console.log(el);
            console.log(el.title); // ispisuje naslove
        });
    },

    
};

let user2 = {
    username: "IvanaColic",
    age: 30,
    blogs: [blog2],  // pravimo niz od jednog elementa, da smo stavili bez zagrada ne bi ga prepoznao kao niz
    logBlogs: function(){
        this.blogs.forEach(el=>{
            console.log(el);
            console.log(el.title);
        })
    }
};

user1.logBlogs();
user2.logBlogs();
/*
console.log(user1.blogs);// ispisujemo blogove koje je napisao korisnik nikola ilic
console.log(user1.blogs[0]); // pristupamo prvom blogu koji je napisao korisnik nikola ilic (nula je index niza)

console.log(user1.blogs[0].title); // pristupamo naslovu prvog bloga koji je napisao korisnik nikola ilic
console.log(user1.blogs[0]["title"]); //isto sto i prethodno
console.log(user1["blogs"][0]["title"]); // isto sto i prethodno
*/


//zadatak 1

let users = [user1,user2]; //kreirani su useri i blogovi, ostalo je da napravimo ovaj niz usera
let blogs = [blog1,blog2,blog3];


// **ispis username polja iz users niza

users.forEach(el=>{
    console.log(el.username);
});

// ispis svih naslova blogova koje su korisnici kreirali 

users.forEach(el => {
    el.logBlogs();   // pozvali smo metodu za ispis blogova, ovu metodu smo kreirali u user1 i user2
});

//drugi nacin bez koriscnenja logBlogs metode

users.forEach(el=>{
    let = userBlogs = el.blogs; // niz blogova korisnika
    //iteriram nizom objekata gde je svaki objekat po jedan blog. iz tog objekta mogu uzeti naslov
    userBlogs.forEach(b=>{
        console.log(`Naslov ${b.title}`);
        
    });
});

// treci nacin bez pomocne promenljive

users.forEach(el=>{
    el.blogs.forEach(b=>{
        console.log(`Radi li ${b.title}`);
    });
});


//zadatak 2

users.forEach(el=>{
    if(el.age<18){
        console.log(el.username);
    }
});

//zadatak 3

/* ne radi se ovako kako sam mislio, da kreiram niz blogs, vec moram preko usersa da im pristupim

blogs.forEach(el=>{
    if(el.likes>50){
        console.log(el.title);
    }
});
*/

// ovako bi trebalo

users.forEach(u=>{
    u.blogs.forEach(b=>{
        if(b.likes>50){
            console.log(`Naslov bloga sa preko 50 lajkova je ${b.title}`);
        }
    });
});

//zadatak 4

users.forEach(el=>{
    if(el.username == "IvanaColic"){
        console.log(el.blogs);
    }
});

//zadatak 5 

users.forEach(u=>{
    let sumLikes = 0; // kada smo ovde stavili promenljivu, u prvoj iteraciji fja ce se kretati prvo kroz prvog usera i njemu racunati sumu lajkova, a onda ce u drugoj iteraciji da racuna drugom useru// da smo ovu promenljivu definisali na pocetku pre svih petlju, on ne bi sabirao lajkove po svakom useru vec bi stavio kumulativ za sve usere zajedno. //da sam definisao ovu promenljivu u narednoj ovoj ispod forEach petlji, on bi pri svakoj iteraciji resetovao sumu na nulu pa bi izbacio netacne cifre
    u.blogs.forEach(b=>{     
        sumLikes +=b.likes;
    });
    if(sumLikes>100){
    console.log(`korisnik ${u.username} ima vise od 100 lajkova`);
    }
});


//zadatak 6

let suma=0;
let br = 0;
users.forEach(u=>{
    u.blogs.forEach(b=>{
        suma+=b.likes;
        br++;
    });
    
})
let prosek = suma / br;
    console.log(prosek);

users.forEach(u=>{
    u.blogs.forEach(b=>{
        if(b.likes>prosek){
            console.log(b.title);
        }else{}
    });
});


console.log(`------------------------`);
//zadatak 7



let sumaLikes=0;
let sumaDislikes=0;
let broj=0;

users.forEach(u=>{
    u.blogs.forEach(b=>{
        
        sumaLikes+= b.likes;
        sumaDislikes += b.dislikes;
        broj++;
        
    });
});
let prosekLikes = sumaLikes / broj;
console.log(prosekLikes);
let prosekDislikes = sumaDislikes / broj;
console.log(prosekDislikes);
users.forEach(u=>{
    u.blogs.forEach(b=>{
        if(b.likes>prosekLikes && b.dislikes<prosekDislikes){
            console.log(`Natprosecan broj pozitivnih i ispodprosecan broj negativnih lajkova ima blog sa naslovom ${b.title}`);
        }
    });
});

console.log(`------------------------`);