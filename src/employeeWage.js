const constants = require('./constants')
const WageCalculation = require('../src/wageCalculation')
const wage = new WageCalculation.WageCalculation();

let empCheck = 0;
let attendance;
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}
    /*empcheck will store random value from 1 or 2.
    On getting 1 it will display employee is present if the value is 2 then the employee is absent. */
    attendanceCheck(){
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
        return true;
    }
    
}

let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().attendanceCheck();
    wage.dailyWage(attendance);
    console.log(employeeWage);
}
display();

module.exports = {display , EmployeeWage};