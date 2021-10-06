const { expect } = require('@jest/globals');
const IMCCalculadora = require('../lib/atv2');

describe('Calcula IMC', () =>{
    test('Teste', () => {
        expect( () => {
            IMCCalculadora(0, 2.0);
        }).toThrow("Valor inválido!");
    });
    test('Abaixo do Peso', () => {
        const res = IMCCalculadora(55, 1.85);
        expect(res).toBe("Abaixo do Peso");
    });
    test('Normal', () => {
        const res = IMCCalculadora(60, 1.72);
        expect(res).toBe("Normal");
    });
    test('Acima do Peso', () => {
        const res = IMCCalculadora(87, 1.72);
        expect(res).toBe("Acima do Peso");
    });
    test('Obesidade', () => {
        const res = IMCCalculadora(100, 1.50);
        expect(res).toBe("Obeso");
    });
});