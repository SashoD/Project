let devFactory = function (name, salary, IncValue, password) {
    let obj = {};

    var pass = password;
    obj.name = name;
    obj.salary = salary;
    // obj.pass = password;
    obj.increaseSalary = function (newSalary) {
        newSalary = salary + IncValue;
        console.log(`Old salary ${this.salary} after promotion slary ${this[newSalary]}`);
    };

    obj.checkpass = function checkpass(passcheck) {
        if (passcheck == pass) {
            console.log('Right Pass');
            return obj.increaseSalary()
        } else {
            console.log('Wrong Pass');
        }
    }


    return obj;
}

let dev1 = devFactory('Peter', 1000, 500, 'abracadabra');
dev1.increaseSalary();
let dev2 = devFactory('Maria', 1200, 100, '123');

// console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
// console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

// // dev1.increaseSalary(500, 'abracadabra');
// // dev2.increaseSalary(100, '123');

// console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
// console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);