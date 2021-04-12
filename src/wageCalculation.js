const constants = require('./constants')

let empWage = 0;
let monthlyWage = 0;
let totalEmpHrs =0;
let totalWorkingDays = 0;
totalEmpWage =0;
let empDailyWageArray = [];
class WageCalculation  {
    constructor() {}

    dailyWageCalculation(attendance){
        for(let day=0; day<constants.NUM_OF_WORKING_DAYS; day++){
        totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10 ) % 3 + 1;
            switch(empCheck){
                case 1:
                    console.log("\nEmployee is Present!")
                    this.empHrs = 8;
                    break;
                case 2:
                    console.log("\nEmployee is Part-time Present!")
                    this.empHrs = 4;
                    break;
                case 3:
                    console.log("\nEmployee is Absent!")
                    this.empHrs = 0;
                    break;
            }
            this.empHrsCalculation();
            }   
        return true;
    }

    
    empHrsCalculation(){
        let salary = this.empHrs * constants.EMP_RATE_PER_HR;
        totalEmpHrs = totalEmpHrs + this.empHrs;
        totalEmpWage = totalEmpWage + salary;
        console.log("Employee Daily Wage :"+salary);
        console.log("\nDAY:"+  totalWorkingDays + " EmpHr:" + totalEmpHrs);
        console.log("Total Employee Wage :"+totalEmpWage);
    
    }
    calDailyWage(empHrs){
        return empHrs * constants.EMP_RATE_PER_HR;
    }
   
    show(totalWorkingDays){
        console.log( "\nDAY:"+  totalWorkingDays + " EmpHr:" + totalEmpHrs + " EmpWage:" + empWage);
    }
    
    monthlyWageCalculation(dailyWage){
        monthlyWage = monthlyWage + dailyWage;
        console.log("Monthly Wage:"+monthlyWage);
        // let emp=empDailyWageArray.push(dailyWage);
        return monthlyWage;
      }
 }

module.exports = {WageCalculation};