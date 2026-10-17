let employee={
    empname:"vinay",
    empid:123,
    job:"engineer",
    salary:55000,
    bonus:function()
       {
        // Write your logic
        return((this.salary+1000))
       }
};

console.log(employee["empname"])
console.log(employee.bonus())

