
const IS_PRESENT = 1, IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_HRS_IN_MONTH = 10;
let totalEmpHrs = 0;
let totalEmpWage = 0;
let empHrs = 0,totalWorkingDays = 0;
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}

    totalWage(){
        while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
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
            let salary = this.empHrs * EMP_RATE_PER_HR;
            totalEmpHrs = totalEmpHrs + this.empHrs;
            totalEmpWage = totalEmpWage + salary;
            console.log("Employee Daily Wage :"+salary);
            console.log("\nDAY:"+  totalWorkingDays + " EmpHr:" + totalEmpHrs);
        } 
        console.log("Total Employee Wage :"+totalEmpWage);
    }
}

let display = function(){
    console.log("****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().totalWage();
    console.log(employeeWage);
}
display();