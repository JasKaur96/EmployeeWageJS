
const IS_PRESENT = 1, IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;

class EmployeeWage {
    constructor() { 
    }
    
    print() {
        return "****** Welcome to EmployeeWage! ******";
     }
    /*empcheck will store random value from 1 or 2.
    On getting 1 it will display employee is present if the value is 2 then the employee is absent. */
    attendanceCheck(){
        this.empCheck = Math.floor(Math.random() * 10 ) % 3;
        if(this.empCheck == IS_PRESENT){
            console.log("\nEmployee is Present!")
            this.attendance = "Present";
            return this.attendance;
        } 
        else{
            console.log("\nEmployee is Absent!")
            this.attendance = "Absent";
            return this.attendance;
        }
    }   
}

let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().attendanceCheck();
    console.log(employeeWage);
}
display();