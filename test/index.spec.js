const assert = require('assert');
const {sum, mult} = require('../index.js');
describe('function sum', () => {

    it('should function sum equals 10', () => {
        assert.equal(sum(2, 3), 5)
    });

    it('should function sum  not equals 0', () => {
        assert.notEqual(sum(2, 4), 0)
    });
    it('should function mult equals ', () => {
        assert.equal(mult(2, 3), 6)
    });
});
