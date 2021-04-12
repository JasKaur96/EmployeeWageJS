const assert = require ('chai').assert;
const expect = require('chai').expect //getting from asserting lib
const employeeWage = require('../src/employeeWage')
const constants = require('../src/constants');
const wageCalculation = require('../../wageCalculation')
const employee = new employeeWage.EmployeeWage();
const wage = new wageCalculation.WageCalculation();

describe('******Testing Employee Wage.******', function(){
   
    it('Should return true on attendance check', function(){
        const result = employee.attendanceCheck();
        assert.equal(result,8)  ;
    })

    it('Should return true on dailywage', function(){
        const result = wage.dailyWageCalculation("Present");
        assert.equal(result,true);
    })

    it('DailyWage for Part-time employee', function(){
        assert.equal(wage.dailyWageCalculation("Part-Time"),true);
    })

    it('Should return true on returning numeric value.', function(){
        assert.isBoolean(wage.dailyWageCalculation("Part-Time"),true);
    })

    it('Calculate Monthly Wage.', function(){
        let sal = 160 * 20
        assert.equal(wage.monthlyWageCalculation(sal),3200);
    })
    
})