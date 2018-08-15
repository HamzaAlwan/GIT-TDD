  // TODO: Your code here
  const chai = require("chai")
const app = require("../server/index.js")
const request = require("supertest")
const db = require ("../database/index")
var expect = chai.expect

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});



// db.save({  catName:"String",
//   ownerEmail:"String",
//   imageUrl:"String",
//   adoptionMessage:"String"}, function(){});

describe("App", function () {

it('should list ALL data on /index GET', function(done) {
  request(app)
    .get('/cats')
      .expect(200)
       .end(done)
   
});

it('should send post params in request body', function(done) {
  request(app)
    .get('/cats')
      .expect(200)
       .end(done)
   
});

});