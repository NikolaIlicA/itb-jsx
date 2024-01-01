//Zadatak 14

let jbro = [2,5,-2,6,-3,0,1];
let jbro2 = [10,1,0,-4,-5,2];
let znakCelo = niz =>{
    niz.forEach(el=>{
        if(el>0){
            el = -el;
        }else if (el<0){
            el = - el;
        }
    });
    return niz;
}
console.log(znakCelo(jbro));
console.log(znakCelo(jbro2));

/*
let znak = niz => {
    for (i=0; i<niz.length; i++){
        if (niz[i]>0){
            niz[i]=-niz[i];
        }else if (niz[i]< 0){
            niz[i]=-niz[i];
        }
    }
    return niz;
}
console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));
console.log(znak(brojevi4));
*/