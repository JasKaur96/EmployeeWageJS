const constants = require('./constants')
// const employeeWage = require('../src/employeeWage')
let dailyWage = 0;
let monthlyWage = 0;

class WageCalculation  {
    constructor() {}

    dailyWageCalculation(attendance){
        if(attendance == "Present"){
            dailyWage = constants.EMP_RATE_PER_HR * constants.FULL_TIME_HOURS;
        }
        else if(attendance == "Part-Time"){
            dailyWage = constants.EMP_RATE_PER_HR * constants.PART_TIME_HOURS;
        }
        else{
            dailyWage = constants.EMP_RATE_PER_HR * 0;
        }
        console.log("Daily Wage:"+dailyWage);
        return dailyWage;
    }

    monthlyWageCalculation(dailyWage){
        monthlyWage = monthlyWage + dailyWage;
        console.log("Monthly Wage:"+monthlyWage);
        return monthlyWage
      }
 }

module.exports = {WageCalculation};