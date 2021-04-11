const constants = require('./constants')
const WageCalculation = require('../src/wageCalculation')
const wage = new WageCalculation.WageCalculation();
let totalWorkingDays = 0;
let empCheck = 0;
let attendance;
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}
    /*empcheck will store random value from 1 or 2.
    On getting 1 it will display employee is present if the value is 2 then the employee is absent. */
    attendanceCheck(){
        for(let day=0; day<constants.NUM_OF_WORKING_DAYS; day++){
            totalWorkingDays++;
            empCheck = Math.floor(Math.random() * 10 ) % 3;
            switch(empCheck){
                case 1: 
                    console.log("\nEmployee is Present!")
                    attendance = "Present";
                break;
                case 2:
                    console.log("\nEmployee is Part-time Present!")
                    attendance = "Part-Time";
                break;
                default:
                    console.log("\nEmployee is Absent!")
                    attendance = "Absent";     
            }
            console.log("\nDAY:"+  totalWorkingDays);
            wage.monthlyWageCalculation(wage.dailyWageCalculation(attendance));
        }
        return true;
    }
    
}

let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().attendanceCheck();
    console.log(employeeWage);
}
display();

module.exports = {display , EmployeeWage};