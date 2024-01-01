let blog1 = {
    title: "HTML",
    content: "osnovni HTML tagovi",
    author: "Jelena",
    likes:10
};

//  ispis objekta

console.log(blog1);
console.log(typeof blog1);
console.log(typeof `zdravo`);



// Ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.content);
console.log(blog1.author);
console.log(blog1[`content`]); // drugi nacin za prikazivanje propertiesa, losiji nacin za prikazivanje, bolji je prvi

//Izmena odredjene osobine
blog1.content = "HTML tabele";
console.log(blog1.content);
blog1[`content`] = "HTML liste"; // drugi nacin za izmenu propertiesa
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1.likes);


let user1 = {
    username: "Nikola Ilic",
    age: 32,
    blogs: ["Naredba grananja","Nizovi","Objekti"],
    nextAge: this.age + 1,
    login: function() {  //METODA == ovo je isto fja ali kada je u objektu onda je zovemo METODA
        console.log(`Ulogovani ste`);
    },
    logout: function(){
        console.log(`Izlogovani ste`);
        console.log(this); // kada sam ovde stavio console log, on mi je izbacio sve properties objekta. kada stavim console log izvan objekta on ispisuje globallni objekat Window
    },
    logblogs: function (){ //logblogs je metod koji ispisuje ceo niz blogova koji je uneo korisnik
        this.blogs.forEach(element=>{ // sa this pristupam propertiesu iz objekta
            console.log(element); 
        }); // this fju sam posle pozvao sa user1.logblogs();
    },
    hello: function(){
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logblogs();
console.log(user1.hello()); // posto sam u hello funkciji stavio return, onda moram da stavim consol log da bi ga vratio u konzolu
console.log(this); // kada sam ovde stavio console log, on mi je izbacio sve properties objekta. kada stavim console log izvan objekta on ispisuje globallni objekat Window


//ispis nizova iz objekta na stranicu

user1.blogs.forEach(blog=>{
    document.write(`<p>${blog}</p>`)
});

//zadatak 1

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-2,-2,3,4,6,7,6,4,8],

    //1.metoda
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach(t=>{
            suma+=t;
        });
        return  suma/this.temperature.length;
    },

    //metoda 2 = natprosecna temp
    brNatprosecnih: function(){
        let broj = 0;
        let pros = this.prosecna(); // ovako unosimo u novu promenljivu funkciju prosecna koju smo gore vec izracunali. ako ne bismo stavili ovde, fju prosecna bismo stavili ispod u if uslov if(t>this.prosecna) sto nije najbolje resenje, jer ako ima hiljade elemenata u nizu, on za svaki element kad iterira mora svaki put da prodje kroz celu fju gore
       
        //Preko forEach petlje
        /* this.temperature.forEach(t=>{
            if(t> pros){
                broj++;
            }
        });*/

        //preko for petlje
        for(i=0; i<this.temperature.length;i++){
            if(this.temperature[i]>pros){
                broj++;
            }
        }
        return broj;
    },

    maksimalna: function(){
        let max = this.temperature[0];
        let broj= 0;
        for (i=0; i<this.temperature.length; i++){
            if(this.temperature[i]>max){
                max=this.temperature[i];
                broj++;
            }
        }
        
        return broj;
    },
    // zadatak 4
    brojMerenja: function (a,b){  
        let broj=0;
        if (a>b) {    // koristimo pomocnu promenljivu, sa principom imamo dve flase, treba sadrzaj da im zameni mesto, treba nam treca flasa da prespemo u nju, pa u jednu od ove dve
            let pom = a;
            a = b;
            b = pom;
        }

        this.temperature.forEach(t=>{
           if (t>a && t<b){
            broj++;
           } 
        });
        return broj;
    },
    // Zadatak 5
    vecaOdProsekaUVeciniDana: function(){
        let brojDana = this.brNatprosecnih;
        if (brojDana> this.temperature.length/2){
            return true;
        }else {
            return false;
        }
    },
    //Zadatak 6
    leden: function(){
        let ledenDan = true;
        this.temperature.forEach(t=>{
            if(t>0){
                ledenDan = false; // posto koristimo forEach ne mozemo u if da stavimo return. Ovde bi mogli da stavimo return da smo radili preko for petlje
            }  // ovde ne treba da stavimo else
            
        });
        return ledenDan;
    }

};
console.log(`Prosecna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih temperatura u danu je ${dan1.brNatprosecnih()}`);
console.log(`Broj maksimalnih temperatura je ${dan1.maksimalna()}`);
console.log(`Broj merenja je ${dan1.brojMerenja(4,8)}`);
console.log(dan1.vecaOdProsekaUVeciniDana());
console.log(dan1.leden());