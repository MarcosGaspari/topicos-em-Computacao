const { moduleExpression } = require("@babel/types");

function aleatorio(inicio, fim){
    if (inicio < 0 || fim < 0 )
        return -1;
    if (inicio >= fim)
        return -1;
        
    const aux = Math.random();
    return aux * (fim - inicio) + inicio;
}
module.exports = aleatorio;