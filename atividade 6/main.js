let val1 = parseInt(prompt('Qual sua idade?'))
val1 = toUpper
let val2 = prompt("Já possui habilitação?")

 if(val1 >=18){
    if(val2 == 'Sim'){
       alert("Pode dirigir");
     } else{
        alert('Não pode dirigir!');
     }
    
} else if (val1<18){
    alert('Não pode dirigr.')
}