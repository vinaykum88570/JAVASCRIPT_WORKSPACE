function student(){
        this.name="vinay";
        this.gender="male";

}

student.prototype.age=35;

stu1=new student();
console.log(stu1.name,stu1.gender,stu1.age);


stu2= new student();
console.log(stu1.name,stu1.gender,stu2.age);

