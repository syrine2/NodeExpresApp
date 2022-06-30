var request = require('supertest');
var app = require('../index.js');

describe('Get /parking', function(){
it(' response GET /parking', function(done){
    request(app)
    .get('/parking')
    .expect('Content-Type', /json/)
    .expect(200,done);
});

});