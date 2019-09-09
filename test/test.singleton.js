var chai = require('chai')
var singleton = require('../src/singleton')
var expect = chai.expect

describe('Singleton pattern test suite: ', function () {
    it('Should instantiate a singleton', function () {
        expect(singleton).to.be.an.instanceOf(Object)
    })
})