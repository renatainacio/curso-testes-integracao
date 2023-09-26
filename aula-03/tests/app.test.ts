import calculator from "calculator";

describe("testes de soma", () => {
    it("should return the sum of two values", () => {
        let sum: number;

        sum = calculator.sum(0, 0);
        expect(sum).toBe(0);

        sum = calculator.sum(1, 0);
        expect(sum).toBe(1);

        sum = calculator.sum(1, 1);
        expect(sum).toBe(2);
    });
});

describe("testes de subtração", () => {
    it("should return the sum of two values", () => {
        let sub: number;

        sub = calculator.sub(0, 0);
        expect(sub).toBe(0);

        sub = calculator.sub(1, 0);
        expect(sub).toBe(1);
    
        sub = calculator.sub(3, 1);
        expect(sub).toBe(2);
    });
});

describe("testes de multiplicação", () => {
    it("should return the sum of two values", () => {
        let mult;

        mult = calculator.mul(59, 0);
        expect(mult).toBe(0);

        mult = calculator.mul(123, 1);
        expect(mult).toBe(123);

        mult = calculator.mul(12, 5);
        expect(mult).toBe(60);
    });
});

describe("testes de divisão", () => {
    it("should return the sum of two values", () => {
        let div;

        div = calculator.div(320, 10);
        expect(div).toBe(32);

        div = calculator.div(42, 7);
        expect(div).toBe(6);

        div = calculator.div(15, 1);
        expect(div).toBe(15);
    });
});