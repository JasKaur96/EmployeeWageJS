const assert = require ('chai').assert;
const employeeWage = require('../src/employeeWage')
const constants = require('../src/constants');
const employee = new employeeWage.EmployeeWage();

describe('******Testing Employee Wage.******', function(){
   
    it('Should return true on attendance check', function(){
        const result = employee.attendanceCheck();
        assert.equal(result,true)  ;
    })
})