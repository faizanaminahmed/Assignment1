var Student = /** @class */ (function () {
    function Student(name, age, rollNum) {
        this.name = name;
        this.age = age;
        this.rollNumber = rollNum;
    }
    return Student;
}());
var student = new Student("Faizan Amin Ahmed", 22, 1512181);
console.log(student.name);
