// MinFuntion.js
function minFunktion(a, b) {
    return a + b;
  }
  module.exports = minFunktion;
  
  
  // MinFunktion.test.js
  const minFunktion = require('./MinFunktion');
  
  describe('MinFunktion', () => {
    it('returnerar rätt värde', () => {
      const resultat = minFunktion(2, 3);
      expect(resultat).toBe(5);
    });
  
    it('hanterar negativa tal', () => {
      const resultat = minFunktion(-5, 3);
      expect(resultat).toBe(-2);
    });
  });

  