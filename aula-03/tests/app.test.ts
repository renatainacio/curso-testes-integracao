describe("testes de soma", () => {
    it("should return the sum of two values", () => {
        expect(0 + 0).toBe(0);
        expect(1 + 0).toBe(1);
        expect(1 + 1).toBe(2);
    });
});

describe("testes de subtração", () => {
    it("should return the sum of two values", () => {
        expect(0 - 0).toBe(0);
        expect(1 - 0).toBe(1);
        expect(3 - 1).toBe(2);
    });
});

describe("testes de multiplicação", () => {
    it("should return the sum of two values", () => {
        expect(59 * 0).toBe(0);
        expect(1 * 123).toBe(123);
        expect(5 * 12).toBe(60);
    });
});

describe("testes de divisão", () => {
    it("should return the sum of two values", () => {
        expect(320 / 10).toBe(32);
        expect(42 / 7).toBe(6);
        expect(15 / 1).toBe(15);
    });
});