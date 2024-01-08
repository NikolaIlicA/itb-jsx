

//Objekti su slozeni tipovi podataka au sebi mogu da sadrze vise razlicitih tipova podataka

// npr mogu da sadrze primitivne tipove podatak kao stringove, brojeve, logicke tipove, ali i slozene tipove kao sto su nizovi

// primer objekta iz realnog zivota == mobilni telefon. On ima osobine kao sto su boja, velicina, model, proizvodjac ali ima i funkcionalnosti kao sto su zvonjava, slikanje, muzika, slanje poruka..

//Objekat BLOG u Javascriptu == osobine: naslov, sadrzaj, autor; funkcionalnosti: objavi, skloni objavu, obrisi
 
let blog1 = {   // blog 1 je objekat, u viticastim zagradama su mu properties
    title: "HTML", // ovo su properties, title, content, author
    content: "osnovni HTML tagovi",
    author: "Nikola Ilic",
    likes: 10,
    comments: true
};

// ispis objekta
console.log(blog1);  // ispisace u konzoli, gde mozemo za objekat da vidimo sva njegova svojstva

console.log(typeof blog1); // ispitujemo kojeg je tipa ovaj objekat
console.log(typeof 'Zdravo');

//ispis odredjenog svojstva (osobine, propertiesa) nekog objekta

console.log(blog1.title); // ispisuje naslov objekta
console.log(blog1.author);
console.log(blog1.content);
console.log(blog1['content']); // drugi nacin za ispisivanje

//izmena odredjene osobine
blog1.content = "izmena contenta - HTML tabele";
console.log(blog1.content);
blog1.likes = "7"
console.log(blog1.likes);
blog1.comments= false;
console.log(blog1.comments);

/*
!!!!!!!!!!!!!!!!!!!!!!!NAPOMENE ZA OBJEKTE !!!!!!!!!!!!!!!!!!!!!!!!!!!

**** posle properties idu : a ne =
**** posle navodjenja vrednosti propertiesa, bilo da je to niz, broj, funkcija, ide zarez (,)
**** zarez stavljamo i nakon propertiesa koji je funkcija tj metoda, ne stavljam ; nego ,
*/

// kreiramo novi objekat user
let user1 = {
    username: "NikolaIlic",
    age:"32",
    nextAge: this.age + 1,
    blogs: ["Naredba grananja", "Nizovi","Objekti"],
    login: function() {   //Metoda == isto sto i funkcija, samo je zovemo metoda jer je u objektu
        console.log(`Ulogovani ste`);
        console.log(this);
    },
    logout: function(){
        console.log(`Izlogovani ste`);
    },
    logBlogs: function() {
        // kad hocu da pristupim nekom propertiesu unutar objekta moram da koristim THIS!!!!!!!!!!!!! druga varijanta je da napisem naziv objekta, ali moze i this
        this.blogs.forEach(el=>{
            console.log(el); // kad ostavim samo ovako, nece ispisati nista, vec moram da pozovem metod, i dole ispisem user1.logBlogs();
        });
    },
    hello: function() {
        return `Hello ${this.username}`
    },
    
};

user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.nextAge);
console.log(user1.hello());

// mogu da pozovem funkciju i izvan objekta, pa onda moram da napomenem na pocetku odmah na koji se objekat odnosi, u ovom slucaju pocinjemo funkciju sa user1. i dalje iteriramo niz
user1.blogs.forEach(blog=>{
    document.write(`<p>${blog}</p>`)
});




// VEZBANJE

let dan = {
    datum: "2024.2.1",
    kisa: true,
    sunce: true,
    oblacno:true,
    temperature: [3,4,6,7,6,4],

    //zadatak 1
    prosecnaTemp: function(){
        let suma = 0;
        this.temperature.forEach(el=>{
            suma+=el;
        });
        let prosecna = suma / this.temperature.length;
        return prosecna;
    },

    //zadatak 2
    brNatprosecnih: function(){   
        let broj = 0;
        let prosek = this.prosecnaTemp(); // pravimo promenljivu pre ulaska u forEach petlju, iz razloga da se prethodna funkcija prosecnaTemp ne bi stalno iterirala, sto moze da bude problem ako ta fja ima 1000 elemenata. ovako kada je fiksiramo pre ulaska u petlju, nece se stalno iterirati,vec je gotovu unosimo u sledecu forEach petlju
        
        /* sa forEach
        this.temperature.forEach(el=>{
            if(el>prosek){
                broj++;
            }
        });
        */
       
        // SA FOR PETLJOM:
        for(let i =0; i<this.temperature.length;i++){
            if(this.temperature[i]>prosek){
                broj++;
            }
        }
        
        return broj;
    },
    //zadatak 3
    brojMax: function(){
        let max = this.temperature[0];
        let broj = 0;
        this.temperature.forEach(t=>{
            if(t>max){
                max = t;
            }
        });
        this.temperature.forEach(t=>{
            if(t == max){
                broj++;
            }
        })
        return broj;
    },

    //zadatak 4
    brojIzmedju:function(a,b){
        let broj = 0;
        // moze da se desi da je a vece od b, pa onda mora da se modifikuje kod tako da ce a zapravo biti manji od b. to se radi uvodjenjem trece promenljive ( ona prica sa dve pune flase, i dodajemo trecu flasu da bismo sadrzaj prve presuli u drugu i obrnuto)

        if(a>b){
            let pomocna = a;
            a = b;
            b = pomocna;
        }

        this.temperature.forEach(t=>{
            if(t>a && t<b){
                broj++;
            }
        });
        return broj;
    },

    //zadatak 5
    iznadProseka: function(){
        let brDana = this.brNatprosecnih();
        if(brDana>this.temperature.length/2){
            return true;
        }else{
            return false
        }
    },

    //zadatak 6

    ledenDan:function(){ 
        let leden = true;  // ovako postavljamo da je svaki element ispod nule te je dan leden, a ispod u forEach kazem da ako ima jedan da je veci od nule, leden je false
        this.temperature.forEach(t=>{
            if(t>0){
                leden = false;
            }
        });
        return leden;

        /* DRUGI NACIN PREKO FOR PETLJE

        for(let i = 0; i<this.temperature.length; i++){
            if(this.temperature[i]>0){
                return false;
            }else{
                return true;
            }
        }
        */

    },

    //zadatak 7

    tropskiDan: function(){
        let tropski = true; // ista logika kao u prethodnom zadataku, samo dan nije leden nego tropski. Znaci, postavljamo da je tropski = true i ispod ispitujemo niz temperatura, i ukoliko funkcija pronadje vrednost elementa temperature koja je ispod 24 stepene, dan onda nije tropski i tropski=false
        this.temperature.forEach(t=>{
            if(t<24){
                tropski=false;
            }
        });
        return tropski;
    },

    //zadatak 8
    nepovoljanDan: function(){
        let nepovoljan = false;
        
        for (i=0; i<this.temperature.length-1; i++){ // dodajemo -1 zbog poslednjeg clana niza, jer ako ne stavimo -1, funkcija ce doci do poslednjeg clana niza, i kada mu treba i+1 on nece imati koju vrednost da uzme jer izlazi iz opsega
            if(Math.abs(this.temperature[i] - this.temperature[i+1])>8){
                nepovoljan = true;
            }
        }
        return nepovoljan;
    }
    
};
console.log(dan.prosecnaTemp());
console.log(dan.brNatprosecnih());
console.log(dan.brojMax());
console.log(dan.brojIzmedju(5,7));
console.log(dan.iznadProseka());
console.log(dan.ledenDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());




//razlika izmedju break i return == break prekida petlju, a return prekida i petlju i funkciju



//Objekti - dodatni zadatak za vezbu

let student = {
    ime: "Nikola",
    prezime: "Ilic",
    godinaStudija: 2,
    ocene: [10,10,10,9,10,10,10,10,10],

    prosecanSt:function(){
        let prosecan = true;
        this.ocene.forEach(el=>{
            if(el==6 || el ==10){
                prosecan=false;
            }
        });
        return prosecan;
    },

    ekstraSt: function(){
        let ekstra = true;
        let br9 =0;
        let br10 =0;
        this.ocene.forEach(el=>{
            if(el==9){
                br9++;
            }
            if(el == 10){
                br10++
            }
        });
        this.ocene.forEach(el=>{
            if(el<9 || (br10)/2<=br9){
                ekstra=false;
            }
        });
        
        return ekstra;
    },
    
    kidaSt: function(){
        let kida = true;
        let br9 = 0
        let br10=0;
        this.ocene.forEach(el=>{
            if(el==9){
                br9++;
            }if(el==10){
                br10++;
            }
        });
    this.ocene.forEach(el=>{
        if(el<9 || br9>=this.godinaStudija){
            kida = false;
        }
    });
    return kida;

    },

    razbijaSt: function(){
        let razbija = true;
        let broj10 =0;
        this.ocene.forEach(el=>{
            if(el == 10){
                broj10++;
            }
        })
        this.ocene.forEach(el=>{
            if(el!=10 || broj10 < 5*(this.godinaStudija-1)){
                razbija = false;
            }
        });
        return razbija;
    },

    aljkavSt: function() {
        aljkav = true;
        this.ocene.forEach(el=>{
            if(el>7){
                aljkav =  false;
            }
        });
        return aljkav;
    },
    
    brukaSt: function(){
        let bruka = false;
        broj7 = 0;
        this.ocene.forEach(el=>{
            if(el == 7){
                broj7++;
            }
        });
        let brPolozenih = this.ocene.length;
        this.ocene.forEach(el=>{
            if(this.godinaStudija>1 && brPolozenih<3*(this.godinaStudija-1) && el<=7){
                bruka = true;
            }
        });
        return bruka;
    },

    kolekcionarSt: function(){
        let kolekcionar = false;
        let br6=0;
        let br7=0;
        let br8=0;
        let br9=0;
        let br10=0;
        this.ocene.forEach(el=>{
            if(el==6){
                br6++;
            }if(el==7){
                br7++;
            }if(el==8){
                br8++;
            }if(el==9){
                br9++;
            }if(el==10){
                br10++;
            }
        });
        this.ocene.forEach(el=>{
            if(br6>=1 && br7>=1 && br8>=1 && br9>=1 && br10>=1){
                kolekcionar = true;
            }
        });
        return kolekcionar;
        
    },

    skoroSavrsenSt: function(){
        let skoroSavrsen = false;
        let broj10 =0;
        this.ocene.forEach(el=>{
            if(el ==10){
                broj10++;
            }
        });
        this.ocene.forEach(el=>{
            if(broj10>0.9*this.ocene.length && this.ocene.length>8){
                skoroSavrsen = true;
            }
        });
        return skoroSavrsen;
    },

    napredujeSt: function (){
        let napreduje = false;
        let sumaPrvaPol =0;
        let duzinaPrvaPol = Math.floor(this.ocene.length/2);
        for(i=0; i<duzinaPrvaPol; i++){
            sumaPrvaPol += this.ocene[i];
        }  
        let prosekPrvaPol = sumaPrvaPol / duzinaPrvaPol;

        let sumaDrugaPol = 0;
        let duzinaDrugaPol = this.ocene.length - duzinaPrvaPol;
        for(i=(duzinaPrvaPol); i<this.ocene.length;i++){
            sumaDrugaPol += this.ocene[i];
        }
        let prosekDrugapol = sumaDrugaPol / duzinaDrugaPol;

        if(prosekPrvaPol<prosekDrugapol){
            napreduje=true;
        }
    return napreduje;
    },
    ocene: [10,7,10,9,10,9,10,6,7],

    najvecaRazlikaUzastopno: function (){
        let razlika = 0;
        let najRazlika= [];
        for(i=0; i<this.ocene.length-1; i++){
            razlika = Math.abs(this.ocene[i]-this.ocene[i+1]);
            console.log(razlika);
            najRazlika.push(razlika);
            
        };
        
        let max = najRazlika[0];
        najRazlika.forEach(el=>{
            if(el>max){
                max=el;
            }
        });
         return max;
    },

    najvecaRazlika: function (){
        let max = this.ocene[0];
        this.ocene.forEach(el=>{
            if(el>max){
                max=el;
            }
        });

        let min = this.ocene[0];
        this.ocene.forEach(el=>{
            if(el<min){
                min=el;
            }
        })
        let najvecaRaz = max - min;
        return najvecaRaz;
    },


    ocene: [7,10,7,9,10,8,8,8,8,8,8,10,6,6,10],

    najcescaOcena: function(){
        let br6=0;
        let br7=0;
        let br8=0;
        let br9=0;
        let br10=0;
        let nizOcena=[];
        this.ocene.forEach(el=>{
            if(el==6){
                br6++;
            }if(el==7){
                br7++;
            }if(el==8){
                br8++;
            }if(el==9){
                br9++;
            }if(el==10){
                br10++;
            }
            
        });
        nizOcena.push(br6,br7,br8,br9,br10);

        let najcesca = nizOcena[0];
        let naj = 0;
        
        nizOcena.forEach((el,j)=>{
            if(el>najcesca){
                najcesca=el;   
                naj = j;               
            }
        });
           
        if(naj==0){
            console.log(`Najcesca je bila ocena 6`);
        }else if(naj==1){
            console.log(`Najcesca je bila ocena 7`);
        }else if(naj==2){
            console.log(`Najcesca je bila ocena 8`);
        }else if(naj==3){
            console.log(`Najcesca je bila ocena 9`);
        }else if(naj==4){
            console.log(`Najcesca je bila ocena 10`);
        }
        return naj;
    },

    ocene: [7,10,7,9,10,8,8,8,8,8,8,10,6,6,10],

    prosecnaDoN: function(){
        let n = 5;
        let suma =0;
        for(i=0;i<this.ocene.length;i++){
            if (i>= this.ocene.length-n){
                suma+=this.ocene[i];
            }
        }
        let prosecna = suma/n;

        return prosecna;
    },


    ocene: [10,10,6,6,10],
    cudakSt: function (){
        let cudak = true;
        this.ocene.forEach(el=>{
            if(el == 7 || el == 8 || el == 9){
                cudak = false;
            }
        });
        return cudak;
    },
    


    

};

//ocene: [10,10,10,9,10,10,10,10,10],
console.log(student.prosecanSt());
console.log(student.ekstraSt());
console.log(student.kidaSt());
console.log(student.razbijaSt());
console.log(student.aljkavSt());
console.log(student.brukaSt());
console.log(student.kolekcionarSt());
console.log(student.skoroSavrsenSt());
console.log(student.napredujeSt());
console.log(student.najvecaRazlikaUzastopno());
console.log(student.najvecaRazlika());
console.log(student.najcescaOcena());
console.log(student.prosecnaDoN());
console.log(student.cudakSt());

/*
nepovoljanDan: function(){
        let nepovoljan = false;
        
        for (i=0; i<this.temperature.length-1; i++){ // dodajemo -1 zbog poslednjeg clana niza, jer ako ne stavimo -1, funkcija ce doci do poslednjeg clana niza, i kada mu treba i+1 on nece imati koju vrednost da uzme jer izlazi iz opsega
            if(Math.abs(this.temperature[i] - this.temperature[i+1])>8){
                nepovoljan = true;
            }
        }
        return nepovoljan;
        */