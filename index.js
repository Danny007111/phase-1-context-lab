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

function createEmployeeRecords(arrayOA){
    let arrayOO = [];
    for(let arr of arrayOA){
        let createnewarr = createEmployeeRecord(arr);
        arrayOO.push(createnewarr);
    };
    return arrayOO;
};

function createTimeInEvent(Object, dateStamp){
    let editDate = dateStamp.split(" ");
    let newTimeIn = {
        type: "TimeIn",
        hour: parseInt(editDate[1]),
        date: editDate[0]
    };
    Object.timeInEvents.push(newTimeIn);
    return Object;
};

function createTimeOutEvent(Object, dateStamp){
        let editDate = dateStamp.split(" ");
        let newTimeOut = {
            type: "TimeOut",
            hour: parseInt(editDate[1]),
            date: editDate[0]
        };
        Object.timeOutEvents.push(newTimeOut);
        return Object;
};


function hoursWorkedOnDate(Object, dateString){
    let timeIn = Object.timeInEvents.find((event) => {
       
        return event.date === dateString;
    });
    let timeOut = Object.timeOutEvents.find((event) => {
        return event.date === dateString;
    });

    return (timeOut.hour - timeIn.hour) / 100;
};


function wagesEarnedOnDate(Object, dateString){
    return hoursWorkedOnDate(Object, dateString) * Object.payPerHour;
};


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

function calculatePayroll(Array){
    let payroll = Array.reduce((e, d) => {
        return e + allWagesFor(d);
    }, 0
    );
    return payroll;
};

