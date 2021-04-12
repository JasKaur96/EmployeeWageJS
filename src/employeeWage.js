
const constants = require('./constants')
let totalEmpHrs = 0;
let empDailyWageArr= [];
let totalEmpWage = 0, empWage;
let dailyCntr =0,mapDayWithWageArr;
let empHrs = 0,totalWorkingDays = 0;
let totEmpWage;
let empDailyWageMap = new Map();
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

    calDailyWage(empHrs){
        return empHrs * constants.EMP_RATE_PER_HR;
    }
   
    sum(dailyWage){
        totEmpWage = totEmpWage + dailyWage;
    }
    
    wageCalculation(){
        while (totalEmpHrs < constants.MAX_HRS_IN_MONTH && totalWorkingDays < constants.NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10 ) % 3;
            totalEmpHrs = totalEmpHrs + this.attendanceCheck(empCheck);
            empDailyWageArr.push(this.calDailyWage(totalEmpHrs),0);
        }      
        empWage = this.calDailyWage(totalEmpHrs);
        return [totalWorkingDays,totalEmpHrs,empWage,empDailyWageArr];  
    }    
    mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr +" = " + dailyWage;
    }

    mapDayWithWageArray(){
        return mapDayWithWageArr = empDailyWageArr.map(this.mapDayWithWage);
    }

    totalEmployeeHrs(){
        this.wageCalculation();
        this.mapDayWithWageArray();
        empDailyWageArr.forEach(this.sum);
        console.log("\nTotal Working Hrs:"+totalEmpHrs+"\n Daily Wage Map:");
        console.log(mapDayWithWageArr)
        return "DAY:"+  totalWorkingDays + " EmpHr:" + totalEmpHrs + " EmpWage:" + empWage;  
    }
}

let display = function(){
    console.log("****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().totalEmployeeHrs();
    console.log(employeeWage);
}
display();

module.exports = {display , EmployeeWage};