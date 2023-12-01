let val1 = prompt('Você é Gestante, PCD, Idoso ou comum').toUpperCase();
if (val1=='GESTANTE' || val1=='PCD' || val1=='IDOSO'){
    alert('Estacione em uma vaga preferencial')
}else if(val1=='COMUM'){
    alert('Estacione em uma vaga comum')
}else{
    alert('Opção inválida')
}