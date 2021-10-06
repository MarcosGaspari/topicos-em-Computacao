function IMCCalculadora(peso,altura){
    if (peso <=0 || altura <=0)
        throw ("Valor inválido!");

    let imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5)
        classificacao= "Abaixo do Peso";
    else if (imc < 25)
        classificacao= "Normal";
    else if (imc < 30)
        classificacao= "Acima do Peso";
    else 
        classificacao= "Obeso";
    
    return classificacao;
}
module.exports = IMCCalculadora;