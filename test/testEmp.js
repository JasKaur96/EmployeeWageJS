const assert = require ('chai').assert;
const expect = require('chai').expect //getting from asserting lib
const employeeWage = require('../src/employeeWage')
const employee = new employeeWage.EmployeeWage();

describe('******Testing Employee Wage.******', () =>{
   
    it('Test attendance check', () => {
        const result = employee.attendanceCheck();
        assert.equal(result,8)  ;
    })

    it('Calculate Dailywage check ',()  => {
        const result = employee.calDailyWage(8);
        assert.equal(result,160);
    })

    it('Calculate dailywage returns numeric value.',() => {
        expect(employee.calDailyWage(4)).to.be.equal(80);
    })

    it('Test Totalwage.', function(){
        let result = 15 + 80;
        expect(employee.totalWages(15,80)).to.be.equal(result);
    })

    it('Calculate Monthly Wage.', function(){
        let result = 98 + 160;
        expect(employee.totalWages(98,160)).to.be.equal(result);
    })
    
})