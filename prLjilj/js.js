let pitanje1 = {
    pitanje: "Koja od sledećih pesama nije izvođena od strane The Beatles?",
    odgovori: ["Hey Jude" , "Paint It Black" , "Let It Be"],
    indexTacnog: 1,
};

let pitanje2 = {
    pitanje: "Koji instrument David Gilmour svira u bendu Pink Floyd?",
    odgovori: ["Klavir" , "Bubnjeve" , "Gitaru"],
    indexTacnog: 2,
};

let pitanje3 = {
    pitanje: "Koja pesma je najpoznatija izvođača Queen?",
    odgovori: ["Livin' on a Prayer", "Bohemian Rhapsody" , "Sweet Child o' Mine"],
    indexTacnog: 1,
};

let pitanje4 = {
    pitanje: "Koja pesma Michaela Jacksona je postala najprodavaniji singl svih vremena?",
    odgovori: ["Beat It", "Billie Jean", " Thriller"],
    indexTacnog: 2,
};

let pitanje5 = {
    pitanje: "Ko je komponovao 'Four Seasons', seriju koncerata za violinu i orkestar?",
    odgovori: ["Wolfgang Amadeus Mozart" , "Antonio Vivaldi" , "Ludwig van Beethoven"],
    indexTacnog: 1,
};

let pitanje6 = {
    pitanje: " Koji bend je izveo pesmu 'Stairway to Heaven', jednu od najpoznatijih rock balada?",
    odgovori: ["Led Zeppelin" , "The Rolling Stones" , "The Who"],
    indexTacnog: 0,
};

let pitanje7 = {
    pitanje: "Koji klasični kompozitor je bio poznat po svojim simfonijama, uključujući 'Simfoniju br. 9'?",
    odgovori: ["Ludwig van Beethoven" , "Johannes Brahms", "Franz Schubert"],
    indexTacnog: 0,
};

let pitanje8 = {
    pitanje: "Ko je bio frontmen grupe The Doors, poznat po svojoj karakterističnoj glasovnoj interpretaciji i stihovima?",
    odgovori: ["Mick Jagger" , "Freddie Mercury" , "Jim Morrison"],
    indexTacnog: 2,
};

let pitanje9 = {
    pitanje: "Koja pesma grupe Pink Floyd počinje zvukom srca koje kuca i postala je poznata po svojoj eksperimentalnoj strukturi?",
    odgovori: ["Money" , "Time" , "Comfortably Numb"],
    indexTacnog: 1,
};

let pitanje10 = {
    pitanje: " Koja klasična kompozicija je poznata po svojim dramatičnim udarima na timpanima i korišćena je u brojnim filmovima, uključujući 'Apocalypse Now'?",
    odgovori:["Rhapsody in Blue" , "Carmina Burana" , "O Fortuna"],
    indexTacnog: 1,
};

let arrPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

function randomizeQuestions(arrPitanja) {
    for (let i = arrPitanja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrPitanja[i], arrPitanja[j]] = [arrPitanja[j], arrPitanja[i]];
    }
}
randomizeQuestions(arrPitanja);


let polaNiza = arrPitanja.slice(0, 5);

polaNiza.forEach((p, index) => {
    

    let divZaPitanja = document.createElement('div');
    
    divZaPitanja.innerHTML = `<strong>Pitanje br. ${index + 1 + '.'}</strong> ${p.pitanje} <br>`;
    divZaPitanja.style.border = `5px solid pink`;
    divZaPitanja.style.backgroundColor = `bisque`;
    divZaPitanja.style.fontFamily = `Arial`;
    divZaPitanja.style.margin = `50px 450px`;
    divZaPitanja.style.padding = `50px`;
    document.body.appendChild(divZaPitanja);

    let kvizOdgovori = p.odgovori;
        
    kvizOdgovori.forEach((odgovor, indexOdgovora)=> {
       
        let inputRadio = document.createElement('input');
        inputRadio.type = `radio`
        inputRadio.value = `${indexOdgovora}`;    
        inputRadio.id = `${odgovor}`; //mora da bude isti kao htmlFOR label kako bi bili povezani
        inputRadio.name = `pitanje${index}`;//jedinstveni name za svaku grupu pitanja onemogucuje da se moze odabrati vise odgovora
        inputRadio.style.margin = `15px`;
       
        
        if(indexOdgovora == 0) {
            inputRadio.checked = true;
        }
        
        divZaPitanja.append(inputRadio);
        
        let labelZaRadio = document.createElement('label');
        labelZaRadio.htmlFor = `${odgovor}`;
        labelZaRadio.innerHTML = `${odgovor}`;
        labelZaRadio.margin = `50px`;
        divZaPitanja.append(labelZaRadio);
        divZaPitanja.appendChild(document.createElement('br'));
    });

});

let btnDiv = document.createElement('div');
btnDiv.style.margin = `50px 450px`;
btnDiv.style.padding = `50px`;
btnDiv.style.textAlign = `center`;
document.body.appendChild(btnDiv)

let btnPosalji = document.createElement('button');
btnPosalji.textContent = 'Posalji odgovore!';
btnDiv.append(btnPosalji);

let btnNovaPitanja = document.createElement('button');
btnNovaPitanja.textContent = 'Nova pitanja!';
btnDiv.append(btnNovaPitanja);

btnPosalji.addEventListener('click', () => {

    polaNiza = arrPitanja.slice(0, 5);

    polaNiza.forEach((p, index )=> {

        let kvizOdgovori = p.odgovori;

        let inputRadio = document.querySelector(`input[name=pitanje${index}]:checked`);

            if(p.indexTacnog == inputRadio.value) {
          
                let paragrafZaTacanOdgovor = document.createElement('div')
                paragrafZaTacanOdgovor.innerHTML = `<strong>Tacan</strong> odgovor na pitanje br. ${index + 1}!`;
                paragrafZaTacanOdgovor.style.color = `green`;
                document.body.appendChild(paragrafZaTacanOdgovor);
            }

            else {
                let paragrafZaNetacne = document.createElement('p')
                paragrafZaNetacne.innerHTML = `<strong>Netacan</strong> odgovor na pitanje br. ${index + 1}!`;
                paragrafZaNetacne.style.color = `red`;
                document.body.appendChild(paragrafZaNetacne);
            }
    });
});


btnNovaPitanja.addEventListener('click', (randomizeQuestions) => {

    document.body.innerHTML = '';
    
    let arrPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10]; 

    function randomizeQuestions(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    randomizeQuestions(arrPitanja);
    
    let polaNiza = arrPitanja.slice(0, 5);

polaNiza.forEach((p, index) => {
    
    let divZaPitanja = document.createElement('div');
    
    divZaPitanja.innerHTML = `<strong>Pitanje br. ${index + 1 + '.'}</strong> ${p.pitanje} <br>`;
    divZaPitanja.style.border = `5px solid pink`;
    divZaPitanja.style.backgroundColor = `bisque`;
    divZaPitanja.style.fontFamily = `Arial`;
    divZaPitanja.style.margin = `50px 450px`;
    divZaPitanja.style.padding = `50px`;
    document.body.appendChild(divZaPitanja);

    let kvizOdgovori = p.odgovori;
        
    kvizOdgovori.forEach((odgovor, indexOdgovora)=> {
       
        let inputRadio = document.createElement('input');
        inputRadio.type = `radio`
        inputRadio.value = `${indexOdgovora}`;    
        inputRadio.id = `${odgovor}`; //mora da bude isti kao htmlFOR label kako bi bili povezani
        inputRadio.name = `pitanje${index}`;//jedinstveni name za svaku grupu pitanja onemogucuje da se moze odabrati vise odgovora
        inputRadio.style.margin = `15px`;
        
        if(indexOdgovora == 0) {
            inputRadio.checked = true;
        }
        
        divZaPitanja.append(inputRadio);

        let labelZaRadio = document.createElement('label');
        labelZaRadio.htmlFor = `${odgovor}`;
        labelZaRadio.innerHTML = `${odgovor}`;
        labelZaRadio.margin = `50px`;
        divZaPitanja.append(labelZaRadio);
        divZaPitanja.appendChild(document.createElement('br'));
    });

});

let btnDiv = document.createElement('div');
btnDiv.style.margin = `50px 450px`;
btnDiv.style.padding = `50px`;
btnDiv.style.textAlign = `center`;
document.body.appendChild(btnDiv)

let btnPosalji = document.createElement('button');
btnPosalji.textContent = 'Posalji odgovore!';
btnDiv.append(btnPosalji);

let btnNovaPitanja = document.createElement('button');
btnNovaPitanja.textContent = 'Nova pitanja!';
btnDiv.append(btnNovaPitanja);
btnPosalji.addEventListener('click', () => {

    polaNiza = arrPitanja.slice(0, 5);

    polaNiza.forEach((p, index )=> {

        let kvizOdgovori = p.odgovori;

        let inputRadio = document.querySelector(`input[name=pitanje${index}]:checked`);

            if(p.indexTacnog == inputRadio.value) {
          
                let paragrafZaTacanOdgovor = document.createElement('div')
                paragrafZaTacanOdgovor.innerHTML = `<strong>Tacan</strong> odgovor na pitanje br. ${index + 1}!`;
                paragrafZaTacanOdgovor.style.color = `green`;
                document.body.appendChild(paragrafZaTacanOdgovor);
            }

            else {
                let paragrafZaNetacne = document.createElement('p')
                paragrafZaNetacne.innerHTML = `<strong>Netacan</strong> odgovor na pitanje br. ${index + 1}!`;
                paragrafZaNetacne.style.color = `red`;
                document.body.appendChild(paragrafZaNetacne);
            }
    });
});
    

});

    
