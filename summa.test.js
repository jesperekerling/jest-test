const beraknaSumma = require('./summa');


describe('Test av beraknaSumma()', () => {
    it('Beräknar summan av två positiva tal', () => {
        expect(beraknaSumma(1, 2)).toBe(3);
    })
    it('Beräknar summan av två negativa tal', () => {
        expect(beraknaSumma(-1, -2)).toBe(-3);
    })
    it('Beräknar summan av ett positivt och ett negativt tal', () => {
        expect(beraknaSumma(1, -2)).toBe(-1);
    })
})