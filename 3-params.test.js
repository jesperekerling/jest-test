
const { it } = require('node:test');
const divide = require('./3-params');

describe('divide', () => {
    it('Dividera två tal', () => {
        expect(divide(10, 2)).toBe(5);
    });
    it('Dividera två tal', () => {
        expect(divide(0, 5)).toBe(0);
    })
    it('Dividera två tal', () => {
        expect(divide(5, 0)).toBe(null);
    })
})