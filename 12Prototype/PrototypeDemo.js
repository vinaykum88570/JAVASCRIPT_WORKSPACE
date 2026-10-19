class Employee{

    constructor(eid ,ename){
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.age=30;

let emp=new Employee(101,"vinay");
console.log(emp.age,emp.eid,emp.ename);