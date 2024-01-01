// primitivni tipovi podataka : stringovi, brojevi, logicki tipovi

// slozeni tipovi: nizovi

// OBJEKTI su slozeni tipovi podataka, koji mogu da sadrze vise prostih ili vise slozenih tipova podataka, kao i mesavinu ta dva tipa podataka



let blog1 = {
    title: "HTML",
    content: "Osnovni HTML tagovi",
    author: "Jelena",
    likes: 10,
    comments: true
};    // sada smo kreirali objekat koji ima neka polja, koja blize opisuju taj objekat  /

console.log(blog1);  // ispisujemo taj objekat
// atributi objekta se redjaju u konzoli abecednim redom

console.log(typeof blog1); // ovako pitam kog je tipa promenljiva ==> ispisace da je to objekat u konzoli
console.log(typeof `Hello world`); //za ovo ce ispisati da je string


// ispis odredjene osobine

console.log(blog1.title);
console.log(blog1.author); // console.log(promenljiva.properties)
console.log(blog1[`content`]); // mozemo i ovako da pristupimo propertiesima, preko uglastih zagrada



// Izmena odredjene osobine == menjamo sadrzaj content propertiesa na sledeca dva nacina

blog1.content = "HTML tabele";
console.log(blog1.content);
blog1[`content`] = "HTML liste";
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1);
console.log(blog1.likes);


// ******* ako u atributu stavimo da ima dva naziva, treba da idu ili sa donjom crtom izmedju ili prva rec pa druga velikim slovom, zajedno napisane

let user1 = {
    username: "Nikola Ilic",
    age: 32,
    blogs: ["Naredba grananja", "Nizovi", "Objekti"],
    nextAge: this.age + 1,  // ovo je samo primer kako se pristupa objektima
    login: function () {  // ovo su metodi
        console.log(`Ulogovani ste`);
    },
    logout: function() {
        console.log(`Izlogovani ste`);
    },
    logBlogs: function () {
        this.blogs.forEach( element =>{  // THIS JE kljucna rec u objektu preko koga mogu da pozivam i metode objekta, this koristim umesto imena objekta
            console.log(element);
        });   // unutar ovog propertia nadji mi blogs i pristupi mu
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());

user1.blogs.forEach(blog=> {
    document.write(`<p>${blog}</p>`);
});

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3,4,6,7,6,4],
    
    
    // 1.
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach(t=>{
            suma+= t;
        });
        return suma / this.temperature.length;

    }
},
/*
//2. natprosecna temperatura

brNatprosecnih: function(){
    let br = 0;
    let pros = this.prosecna();
    this.temperature.forEach(t=> {
        if(t > pros) {
            br++;
        }
    });
    return br;

};
console.log(`Prosecna temperatura je: ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je: ${dan1.brNatprosecnih()}`);
*/

//zadatak 3

brMaxTemp: function() {
    let br = 0;
    let maxTemp = this.temperature[0];
      this.temperature.forEach(t => {
        if(t > maxTemp) {
          maxTemp = t;
        }
      });
      this.temperature.forEach(t => {
        if(t == maxTemp) {
          br++;
        }
      });
      return br;
}


//zadatak 4
/*
većaodt1manjaodt2: function (t1, t2) {
    let brMerenja = 0;
    let većatemp = t1;
    let manjatemp = t2
    if (t2 > većatemp){
        većatemp = t2;
    }
    if (t1 < manjatemp){
        manjatemp = t1;
    }
    this.temperature.forEach(el => {
        if (el > manjatemp && el < većatemp){
            brMerenja++;
        }
    });
    return brMerenja;
}*/


//Zadatak 5

iznadProsekaUVeciniDana: function() {
    let brDana = this.brNatprosecnih();
    if (brDana> this.temperature.length/2) {
        return true;
    } else {
        return false;
        }
    }
};


// Zadatak 6

leden: function () {
    let ledenDan = true;
    this.temperature.forEach (t=> {
        if (t>0) {
            ledenDan = false;
        }
    })
    return ledenDan;
}
