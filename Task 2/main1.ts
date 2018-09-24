class Student{
    name:string;
    age:number;
    rollNumber:number;
constructor(name,age,rollNum){
   this.name=name;
   this.age=age;
   this.rollNumber=rollNum;
}
}
let student :Student= new Student("Faizan Amin Ahmed",22,1512181);
console.log(student.name);