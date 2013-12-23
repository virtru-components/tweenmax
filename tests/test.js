
var assert = require('chai').assert;
var sinon = require('sinon');
var itAsync = require('mocha-promises-kit').itAsync;

describe('TweenMax', function() {

  it('test', function(){

    var tm = require('../index');

    assert(window.TweenMax);

  });

});