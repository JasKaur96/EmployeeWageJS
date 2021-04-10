const constants = require('./constants')
let empCheck = 0;
let attendance;
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}
    /*empcheck will store random value from 1 or 2.
    On getting 1 it will display employee is present if the value is 2 then the employee is absent. */
    attendanceCheck(){
        empCheck = Math.floor(Math.random() * 10 ) % 2;
        if(empCheck == constants.IS_PRESENT){
            console.log("\nEmployee is Present!")
            attendance = "Present";
            return true;
        } 
        else{
            console.log("\nEmployee is Absent!")
            attendance = "Absent";
            return false;
        }
    }   
}

let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().attendanceCheck();
    console.log(employeeWage);
}
display();

module.exports = {display , EmployeeWage};