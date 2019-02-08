var employees = [];

function Employee(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function () {
    console.log(this.name + '\n' + this.title + '\n' + this.salary + '\n' + this.status)
};

var me = new Employee('Attila', 'student', 'poorAF');
var you = new Employee('You', 'buttcrack','so HIGH');
var lover = new Employee('Jack','lover','irrelevant');

you.status = 'Part Time';

me.printEmployeeForm();
you.printEmployeeForm();
lover.printEmployeeForm();

employees.push(me,you,lover);

console.log(employees)