const calculateAge = require('./Age');

describe('Test av calculateAge()', () => {
    it('Beräknar åldern', () => {
        expect(calculateAge(1990)).toBe(33);
    })
})

