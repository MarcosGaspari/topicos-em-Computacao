const { expect } = require('@jest/globals');
const aleatorio = require('../lib/atv1');

describe('Gerar Random', () =>{
    test('Valor incial negativo', () => {
        const res = aleatorio(-5,10);
        expect(res).toBe(-1); 
    });
    test('Valor final negativo', () => {
        const res = aleatorio(5,-10);
        expect(res).toBe(-1); 
    });
    test('Valor inicial igual final', () => {
        const res = aleatorio(5,5);
        expect(res).toBe(-1); 
    });
    test('Valor entre 200 e 3000', () => {
        const res = aleatorio(200,3000);
        expect(res > 200 && res < 3000); 
    });
});