function EmployeeMaker(firstName, secName, salary, password) {
    let obj = {}
    var _password = password;
    obj.firstName = firstName;
    obj.secName = secName;
    obj.salary = salary;
    obj.getName = function getname() {
        return console.log(`First Name : ${this.firstName}; Second Name : ${this.secName}`);
    };
    obj.getSalary = function getSalary() {
        return console.log(`Current salary is ${this.salary} `)
    };

    obj.checkPassword = function checkPassword(passCheck, bonus) {
        if (passCheck == _password) {
            console.log('Correct Pass');
            let newSalary = salary + bonus
            return console.log(`Previos salary: ${salary}; Current salary is ${newSalary}`);
        } else {
            console.log('Wrong Pass');
            return console.log(`Current salary still is ${salary}.`);
        }
    };
    return obj;
};

var dev1 = EmployeeMaker('Pesho', 'Petrov', 1000, 'abracadabra');
var dev2 = EmployeeMaker('Maria', 'Petrova', 1000, 'abracadabra123');

dev1.getName();
dev1.getSalary();
dev1.checkPassword('abracadabra', 300);


dev2.getName();
dev2.getSalary();
dev2.checkPassword('123', 300);
