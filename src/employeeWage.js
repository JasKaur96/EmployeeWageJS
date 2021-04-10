const IS_PRESENT = 1;
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
        this.empCheck = Math.floor(Math.random() * 10 ) % 2;
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
    /*attendanceCheck() is called here and on the basis of the return value dailywage of employee will be calculated.*/
    dailyWage(){
        this.attendanceCheck();
        if(this.attendance == "Present"){
            this.empHrs = 8;
        }
        else{
            this.empHrs = 0;
        }
         this.salary = this.empHrs * EMP_RATE_PER_HR;
         console.log("Employee Daily Wage :"+this.salary);
    }
  }
  
let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().dailyWage();
    console.log(employeeWage);
}
display();
