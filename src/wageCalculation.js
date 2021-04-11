const constants = require('./constants')
const employeeWage = require('../src/employeeWage')
let salary = 0;

class WageCalculation  {
    constructor() {}

    dailyWage(attendance){
        if(attendance == "Present"){
            salary = constants.EMP_RATE_PER_HR * constants.FULL_TIME_HOURS;
        }
        else{
            salary = constants.EMP_RATE_PER_HR * 0;
        }
        console.log("Daily Wage:"+salary)
        return salary;
    }
 }

module.exports = {WageCalculation};
