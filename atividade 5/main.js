let cor = 'vermelhO';
cor = cor.toUpperCase();
console.log(cor.toUpperCase());
console.log(cor);
// o toUpperCase transforma a string para maiusculo 
// o toLowerCase trasndorma a string para minuscula

if (cor == 'vermelho' ){
    alert ('Pare!');
}else if (cor == 'verde'){
    alert('Prossiga');
}else if(cor == 'amarelo'){
    alert ('Atenção! Se continuar vai dá ruim');
}else{
    alert('Cor inválida');
}