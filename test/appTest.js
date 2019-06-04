const assert = require('chai').assert;
const app = require('../src/App'); // faz a referencia ao App.js para poder testá-lo

// para o teste passar, ele deve ter o mesmo return la do componente, que no caso é um BrowserRouter com uma div

describe('App', function() {
    it('app deve retornar a pagina home', function() {
        assert.equal(app(), '');
    });
});