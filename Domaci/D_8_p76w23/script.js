9//Zadatak 2

let divTabela = document.getElementById (`tabela`);
let tabela = `<table>`;
let broj = 1;


for (i=1; i<=8; i++)
{   

    if(i%2 == 0) {    
        tabela+=
        
        `<tr>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>   
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>       
        </tr>` 
               
    } 

    if (i%2 !=0) {    
        tabela+=
        
        `<tr>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
            <td><span class="belo">${broj++}</span></td>
            <td><span class="crno">${broj++}<span></td>
        </tr>`
        
    }  
}  

tabela += `</table>`;
divTabela.innerHTML = tabela;



//Zadatak 1

let divLista = document.getElementById (`lista`);
let lista = `<ul>`;
broj = 1;


for (i=1; i<=10; i++) 
{
    if( i%3 == 0) 
    {
        lista+=
        `<ul type="disc">          
                <ul type="circle">
                    <li class="element">Element ${broj}</li>
                </ul> 
        </ul>`

    }else {
        lista+=
        `<ul type="disc">          
            <li>Element ${broj} </li>    
        </ul>`
    }
    broj++;
}

lista += `</ul>`;
divLista.innerHTML = lista;





