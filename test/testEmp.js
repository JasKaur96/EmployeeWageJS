const assert = require ('chai').assert;
const utils = require('../src/employeeWage')
describe('Testing Employee Wage.', function(){
    it('first name should return true', function(){
        assert.equal(utils.firstName("Jaspreet"),true)  
    })
})