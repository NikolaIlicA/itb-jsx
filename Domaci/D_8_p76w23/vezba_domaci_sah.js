let divTabela = document.getElementById (`tabela`);
let tabela = `<table>`;
let broj = 1;


for (i=1; i<=8; i++)
{
    for (j=1; j<=8; j++)
    {

        if(i%2 == 0 && j%2 ==0) 
      
            {
                tabela+=
                `<span class="belo"><p>${broj++}</p></span>`              
            }
                
        else if (i%2 == 0 && j%2 !=0) 
            {
                tabela+=        
                `<span class="crno"><p>${broj++}</p></span>`   
            }
            
        if (i%2 !=0 && j%2 !=0) 
            {    
                tabela+=      
                `<span class="belo"><p>${broj++}</p></span>`
            } 
        else if (i%2 !=0 && j%2 ==0) 
            {
                tabela+= 
                `<span class="crno"><p>${broj++}</p></span>`
                
            } 
            
    }
    
    tabela+= `<br>`
}  

tabela += `</table>`;
divTabela.innerHTML = tabela;