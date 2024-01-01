

////////////////////////////////////////////////////////////////////////////////////////
/////////////////////NAVIGACIJA KROZ DOM STABLO/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


// kada dodjemo do nekog el u DOM stablu, mozemo da se krecemo kroz samo DOM stablo
// kada se krecemo po dom stabl treba da imamo u  vidu strukturu stabla. npr tr node ima tacno jednog roditelja, tj table
//svaki cvor tj node ima tacno jednog parenta (parent node)
//ChildNodes[nodenumber] == dobicemo prakticno niz childova, tj dobijamo direktne potomke sa zadatim indexom

let elem1 = document.getElementById("p2");
console.log(elem1);

// ispisujemo u konzolu parent node od child node-a p sa id-jem p2
console.log(elem1.parentNode);

let div = elem1.parentNode;
console.log(div);

console.log(div.childNodes); // kada sam uzeo da ispisem u konzolu child nodes, on mi je izbacio listu od 13 child nodesa == ne ispisuje znaci samo html tagove, vec i prikazuje da postoji neki tekst.. npr prvi cvor je tekst, pa je drugi p tag....

// ako hocemo da pristupamo elementima child liste treba da koristimo indexe, npr

console.log(div.childNodes[1]);
console.log(div.childNodes[4]);


// imamo posebna svojstva First Child i Last Child, kao i nextSibling i previousSibling. Rodjaci su nodovi tj cvorovi tj objekti na istom nivou
// svojstva mogu da se lancaju 
// elem.parentNode - vraca roditelja
// elem.parentNode.parentNode == vraca dedu



// kada hocemo da iteriramo kroz listu Child Nodesa (iteriramo kroz listu elem1 koju smo gore napravli) == znaci ispod cemo da napravimo da iz liste izvucemo sve one objekte tj childove koji nisu text

div.childNodes.forEach(el=>{
    let tip = el.nodeName;
    if(tip != "#text"){   // ovo "#text" ovako pise u konzoli, kada kliknem na padajuci meni text i u okviru reda nodeName // isto je kao da smo napisali if(tip == "p" || tip == "a")
        console.log(el);
    }

})




////////////////////////////////////////////////////////////////////////////////////////
/////////////////////MENJANJE KLASA ELEMENTIMA//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// element.classList == Lista klasa koju element poseduje

// ovo ispod sam iskopirao samo od proslog predavanja
let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight:bold;'>Novi tekst </span>";
link.setAttribute("href","https://www.google.com");
link.setAttribute("target","blank");
link.id="pera";
console.log(link);

// Svojstvo a.classList == Lista klasa koju element poseduje

// Metoda element.classList.add("class") == dodaje zadatu vrednost
// Metoda element.classList.remove("class") == uklanja zadatu vrednost
// Metoda element.classList.toggle("class") == ako element ne poseduje zadatu klasu, onda je dodaje, ako ima tu klasu onda je brise
// Metoda element.classList.contains("class") == ispituje da li element ima zadatu klasu

// zadatak 1  == tacno je odradjen nego sam ga zakomentarisao jer se sukobljava sa trecim zad
/*
let z1 = document.querySelectorAll("p");
console.log(z1);
z1.forEach((el,j)=>{
    el.classList.remove("par");
    if(j%2==0){
        el.classList.add('error');  // ne pise se klasa sa tackom ispred!!!!!!!!!!!!
    }else{
        el.classList.add('success'); // ne pise se klasa sa tackom ispred!!!!!!!!!!!!
    }
});
*/
//zadatak 2

let z2 = document.querySelectorAll("p");
z2.forEach((el,j)=>{
    if(j%3==0){
        el.style.fontSize="15px"
    }else if (j%3 == 1){
        el.style.fontSize="25px"
    }else {
        el.style.fontSize="35px"   
     }    // znaci logika iza ovih procenata i uslova je da je 0 kroz 3 jednako 0, 1 kroz 3 je ostatak 1, sve ostalo ide u else granu, pa ce se dobiti naizmenicno 
})

//zadatak 3

let z3 = document.querySelectorAll("p");
z3.forEach(el=>{
    if(el.textContent.includes('success')){
        el.classList.add('success');
    }else if (el.textContent.includes('error')){
       
        el.classList.add('error');
    }
})

//zadatak 4

let z4 = document.querySelectorAll("p");
z4.forEach(el=>{
    
        el.classList.toggle("error");
    
});




////////////////////////////////////////////////////////////////////////////////////////
/////////////////////DODAVANJE I BRISANJE TAGOVA////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


//koristicemo document za kreiranje elementa
// element.createElement('tag') == Kreiranje cvora DOM stabla kao zadatog HTML taga
// element.removeChild('child') == brisanje zadatog cvora DOM stabla
// element.appendChild('child') == dodavanj cvora (child) DOM stabla kao dete postojeceg cvora (element)
// element.replaceChild('new,old') == zamena starog deteta (old) cvora DOM stabla novim detetom
// document.write(text) == dodavanje teksta


//zadatak 1

//nevezano za zadatak, ovde sam prvo kreirao novi stil u head tagu sa novom klasom, pa sam onda napravio novi paragraf, kome sam zatim dodao klasu koju sam kreirao
let noviStil = document.createElement("style")
noviStil.innerHTML = `.treciStil{color:blue;background-color:orange;}`
document.head.appendChild(noviStil);

let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u JSu"
document.body.appendChild(noviDiv);
noviDiv.classList.add("treciStil");

//zadatak 2 

let noviDiv2 = document.createElement("div");
document.body.appendChild(noviDiv2);  // ovde stavljam document.body vrv jer je body dete documenta, posle nisam stavljao to document
noviDiv2.innerHTML= "Div 2 je kreiran"

let noviUl = document.createElement("ul");
noviUl.innerHTML = "Novi UL u divu"
noviDiv2.appendChild(noviUl);

let noviLi1 = document.createElement("li");
noviLi1.innerHTML = "Lista 1"
noviUl.appendChild(noviLi1);

let noviLi2 = document.createElement("li");
noviLi2.innerHTML = "Lista 2"
noviUl.appendChild(noviLi2);

let noviLi3 = document.createElement("li");
noviLi3.innerHTML = "Lista 3"
noviUl.appendChild(noviLi3);
noviDiv2.classList.add("treciStil")

noviLi1.style.backgroundColor="green"


//!!!!!!!!!!!!!!!!!!!!!!
// umesto sto sam za svaki li element pisao posebno noviUl.appendChild(li1), mogu da jednom komandom obuhvatim sve li-jeve koje sam kreirao === noviUl.append(li1,li2,li3)  == ovde nisam napisao ni appendChild, samo append === izgleda da kad stavim append samo onda mogu vise elemenata, a kada stavim appendChild onda mogu samo 1 element
//!!!!!!!!!!!!!!!!!!!!!!

//zadatak 3

noviUl.removeChild(noviLi1);  // ne stavljamo navodnike, pozivamo ceo element
// moze da se zapise i na sledeci nacin:
// noviUl.removeChild(noviUl.firstChild);

// moze da se napise i kao:
// noviUl.removeChild(noviUl.childNodes[0]);

//zadatak 4

let noviLi4 = document.createElement("li");
noviLi4.innerHTML = "Lista 4";
noviUl.replaceChild(noviLi4,noviLi3);

//zadatak 5

let noviLi5 = document.createElement("li");
noviUl.appendChild(noviLi5);

let slika = document.createElement("img");
noviLi5.appendChild(slika);
slika.src = "slika.jpg";
slika.alt = "slika";
