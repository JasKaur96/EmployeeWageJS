
const IS_PRESENT = 1, IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

let totalEmpHrs = 0;
let empHrs = 0;
class EmployeeWage {
    constructor() {}

    print() {return "****** Welcome to EmployeeWage! ******";}

    dailyWage(){
        for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
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
            totalEmpHrs = totalEmpHrs + salary;
            console.log("Employee Daily Wage :"+salary);    
        } 
        console.log("Total Employee Wage :",totalEmpHrs) 
    }
}

let display = function(){
    console.log( "****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().dailyWage();
    console.log(employeeWage);
}
display();