/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
};

// let arrayOO = [];
// for(let arr of arrayOA){
//     let createnewarr = createEmployeeRecord(arr);
//     arrayOO.push(createnewarr);
// };
// return arrayOO;
function createEmployeeRecords(arrayOA){
    // Give a new array and then populate it with values returned.
    return arrayOA.map(createEmployeeRecord);
};

function createTimeInEvent(dateStamp){
    let editDate = dateStamp.split(" ");
    let newTimeIn = {
        type: "TimeIn",
        hour: parseInt(editDate[1]),
        date: editDate[0]
    };
    this.timeInEvents.push(newTimeIn);
    return this;
};

function createTimeOutEvent(dateStamp){
        let editDate = dateStamp.split(" ");
        let newTimeOut = {
            type: "TimeOut",
            hour: parseInt(editDate[1]),
            date: editDate[0]
        };
        this.timeOutEvents.push(newTimeOut);
        return this;
};


function hoursWorkedOnDate(dateString){
    let timeIn = this.timeInEvents.find((event) => {
        return dateString === event.date;
    });
    let timeOut = this.timeOutEvents.find((event) => {
        return dateString === event.date;
    });

    return (timeOut.hour - timeIn.hour) / 100;
};


function wagesEarnedOnDate(dateString){
    return hoursWorkedOnDate.call(this, dateString) * this.payPerHour;
};


function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable;
};

function calculatePayroll(Array){
    let payroll = Array.reduce((e, d) => {
        return e + allWagesFor.call(d);
    }, 0
    );
    return payroll;
};


function findEmployeeByFirstName(srcArray, firstName){
    let emp = srcArray.find((rec) => rec.firstName === firstName);
    return emp;
};