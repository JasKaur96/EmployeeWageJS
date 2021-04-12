const constants = require('./constants')
const wageCalculation = require('../src/wageCalculation')
const wage = new wageCalculation.WageCalculation();
let totalEmpHrs = 0, empDailyWageArr= [];
let totalEmpWage = 0;
let empHrs = 0,totalWorkingDays = 0;
let empDailyWAgeMap = new Map();
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}

    attendanceCheck(empCheck){
           switch(empCheck){
                case 1:
                    empHrs = 8;
                    break;
                case 2:
                    empHrs = 4;
                    break;
                case 3:
                    empHrs = 0;
                    break;
            } 
            return empHrs;
    }

    wageCalculation(){
        while (totalEmpHrs < constants.MAX_HRS_IN_MONTH && totalWorkingDays < constants.NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10 ) % 3;
            totalEmpHrs = totalEmpHrs + this.attendanceCheck(empCheck);
            empDailyWageArr.push(wage.calDailyWage(totalEmpHrs));
        }      
        let empWage = wage.calDailyWage(totalEmpHrs);
        return "\nDAY:"+  totalWorkingDays + " EmpHr:" + totalEmpHrs + " EmpWage:" + empWage;  
    }    
}

let display = function(){
    console.log("****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().wageCalculation();
    console.log(employeeWage);
}
display();


module.exports = {display , EmployeeWage};