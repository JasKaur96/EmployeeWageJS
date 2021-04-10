const IS_PRESENT = 1, IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;

class EmployeeWage {
    constructor() { 
    }
    
    print() {
        return "****** Welcome to EmployeeWage! ******";
     }
    /*empcheck will store random value from 1, 2 or 3.
    It will display employee is present, parttime or absent and calculate its wages accordingly.*/
    dailyWage(){
        this.empCheck = Math.floor(Math.random() * 10 ) % 3 + 1;
        switch(this.empCheck){
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
