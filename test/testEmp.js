const assert = require ('chai').assert;
const expect = require('chai').expect //getting from asserting lib
const employeeWage = require('../src/employeeWage')
const constants = require('../src/constants');
const wage = require('../src/wageCalculation')
const employee = new employeeWage.EmployeeWage();
const wageCalculation = new wage.WageCalculation();

describe('******Testing Employee Wage.******', function(){
   
    it('Should return true on attendance check', function(){
        const result = employee.attendanceCheck();
        assert.equal(result,true)  ;
    })

    it('Should return true on dailywage', function(){
        assert.equal(wageCalculation.dailyWage("Present"),160);
    })

    it('Should return true on dailywage', function(){
        assert.equal(wageCalculation.dailyWage("Part-Time"),80);
    })

    it('Should return true on returning numeric value.', function(){
        assert.isNumber(wageCalculation.dailyWage("Part-Time"),80);
    })
})