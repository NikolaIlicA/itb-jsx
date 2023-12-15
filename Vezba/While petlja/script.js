//zadatak 1 a)

let i = 0;
let poruka = "";

while (i<=20) {
    
    poruka = poruka + i + " "; //konkatenacija stringova valjda, sabiraju se string i broj
    i++;
}
console.log(poruka);

//zadatak 1b

i=0;

while (i<=20){
    
    console.log(`${i++}`);
}


//Zadatak 2

i = 20;

while (i>=1) {
    console.log(`${i--}`);
    
}

//zadatak 3 

i=0;
while (i<=20) {
    console.log(`${i+=2}`);
}

//zadatak 4 

let n = 7;
i=1;
let klasa;

 while (i<=n) 
 {

    if (i%3 == 1) 
    {
        klasa = `crvena`
    }

    else if (i%3 ==2)
    {
        klasa = `zelena`   
    }

    else 
    {
        klasa = `plava`    
    }
    
        
        document.body.innerHTML += `<p class='${klasa}'>Paragaraf broj ${i} </p>`; 
        i++;
 }

 // zadatak 4 na drugi nacin

 n=7;
 i=1;

 while (i<=n)
 {

    if (i%3 ==1)
    {
        document.body.innerHTML += `<p class="crvena">Paragraf broj ${i}</p>`;
    }
    else if (i%3 == 2)
    {
        document.body.innerHTML += `<p class="zelena">Paragraf broj ${i}</p>`;
    }
    else 
    {
        document.body.innerHTML += `<p class="plava">Paragrag broj ${i}</p>`;
    }
    i++;
 }

 // zadatak 5


 n=8;
 i=1;

 while (i<n)
 {
    if (i%2 == 0)
    {
        document.body.innerHTML += `<img src="Hurgada.jpg" style="width: 300px; height:300px; border: 5px solid red">`
        document.body.innerHTML += `<br>`
    }
    else 
    {
        document.body.innerHTML += `<img src="Hurgada.jpg" style="width: 300px; height:300px; border: 5px solid blue">`
        document.body.innerHTML += `<br>`
    }
    i++
 }
 

 //zadatak 5 drugi nacin

 let klas;
 i=1;
 n=8;

 while (i<=n)
 {
    if (i%2 == 0)
    {
        klas = `okvir1`
    }
    else
    {
        klas = `okvir2`
    }

    document.body.innerHTML += `<img src="Hurgada.jpg" class="${klas}">`;
    i++;
    document.body.innerHTML += `<br>`
 }

 //zadatak 6

 i=1;
 let suma = 0;
  while (i<=100)
  {
    i++;
    suma+=i;
  }
  console.log(`Suma brojeva je ${suma}`);

  //zadatak 7

  i=1;
  n=50;
  suma=0;
  while (i<=n)
  {
    i++;
    suma+=i;
  }
  console.log(`Suma je ${suma}`);

  //zadatak 8

  n=2;
  let m= 22;
  suma=0;

  while (n<=m)
  {
    n++;
    suma+=n;
  }

  console.log(`Suma je ${suma}`);

  //zadatak 9
  n=1;
  m=5;
  let proizvod = 1;

  while (n<=m)
  {
    n++;
    proizvod*=n;
  }
  console.log(`Proizvod je ${proizvod}`);

  //Zadatak 10

  n=1;
  m=5;
  let sumaKvad = 0;
  let sumaKub=0;

  while (n<=m)
  {
    if (n%2 ==0) 
    {   
        sumaKvad+=n**2;
    }
    else 
    { 
        sumaKub+=n**3;
    }
    n++;
  }
  console.log(`Suma kvadrata parnih brojeva je ${sumaKvad} a suma kubova neparnih brojeva je ${sumaKub}`);

  //zadatak 11

  let k = 9;
  i=0;
  let broj = 0;

  while (i<=k)
  {
    i++;
    if (k%i == 0) 
    {
        broj++;
    }
    
  }
  console.log(`Broj ${k} je deljiv sa ukupno ${broj} brojeva`);

  //Zadatak 12
  