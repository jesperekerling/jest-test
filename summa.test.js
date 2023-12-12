const beraknaSumma = require('./summa');


describe('beraknaSumma', () => {
    it('Beräknar summan av två positiva tal', () => {
        expect(beraknaSumma(1, 2)).toBe(3);
        })
    })

