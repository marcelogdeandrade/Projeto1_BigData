var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


describe('Dogs', function () {
  it('should list ALL dogs on /get_dogs GET', function (done) {
    chai.request('http://localhost:3001')
      .get('/get_dogs')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('birth_date');
        done();
      });
  });
  it('should add a dog on /get_dogs POST', function (done) {
    chai.request('http://localhost:3001')
      .post('/get_dogs')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});