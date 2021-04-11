const assert = require ('chai').assert;
const expect = require('chai').expect //getting from asserting lib
const employeeWage = require('../src/employeeWage')
const constants = require('../src/constants');
const wageCalculation = require('../src/wageCalculation')
const employee = new employeeWage.EmployeeWage();
const wage = new wageCalculation.WageCalculation();

describe('******Testing Employee Wage.******', function(){
   
    it('Should return true on attendance check', function(){
        const result = employee.attendanceCheck();
        assert.equal(result,true)  ;
    })

    it('Should return true on dailywage', function(){
        assert.equal(wage.dailyWageCalculation("Present"),160);
    })

    it('DailyWage for Part-time employee', function(){
        assert.equal(wage.dailyWageCalculation("Part-Time"),80);
    })

    it('Should return true on returning numeric value.', function(){
        assert.isNumber(wage.dailyWageCalculation("Part-Time"),80);
    })

    it('Calculate Monthly Wage.', function(){
        // let salary = wage.dailyWageCalculation("Present");
        let sal = 160 * 20
        assert.equal(wage.monthlyWageCalculation(sal),3200);
    })
})