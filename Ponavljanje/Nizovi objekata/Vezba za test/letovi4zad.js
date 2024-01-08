

let let1 = {
    destinacija: 'Barselona',
    drzava: 'Spanija',
    vremePoletenja: '09:25',
    vremeSletanja: '12:45',
};
let let2 = {
    destinacija: 'Minhen',
    drzava: 'Nemacka',
    vremePoletenja: '11:15',
    vremeSletanja: '14:45',
};
let let3 = {
    destinacija: 'Tokio',
    drzava: 'Japan',
    vremePoletenja: '06:25',
    vremeSletanja: '19:45',
};
let let4 = {
    destinacija: 'New York',
    drzava: 'Amerika',
    vremePoletenja: '12:40',
    vremeSletanja: '22:45',
};
let let5 = {
    destinacija: 'Denver',
    drzava: 'Amerika',
    vremePoletenja: '09:40',
    vremeSletanja: '21:45',
}
let letovi = [let1, let2, let3, let4, let5];

//zadatak a

let brojLetovaZaZemlju = (niz,zemlja) =>{
    let broj=0;
    niz.forEach(el=>{
        
        if(el.drzava == zemlja){
            broj++;
            
        }
    });
    console.log(`bilo je ${broj} letova`);
    
}
brojLetovaZaZemlju(letovi,"Amerika");

//zadatak b

function visePrePodne (niz) {
    let prePodne = 0;
    niz.forEach(el => {
        let sati =Number(el.vremePoletenja.split(':')[0])
        if(sati < 12){
            prePodne++;
        }
    });
    return prePodne > niz.length - prePodne;
}
console.log(visePrePodne(letovi));

//zadatak c

let ispisLetovaDoSada = (niz,zemlja) =>{
    let vreme = new Date ();
    let d = vreme.getDate();

    niz.forEach(el=>{
        if(Number(el.vremePoletenja<=d)){
            console.log();
        }
    })
}