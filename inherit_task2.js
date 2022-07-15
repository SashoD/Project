
function Person(name, age){
  this.name=name;
  this.age=age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
}
}
// Person greet method
// your code here ...




/* --------------------------- Manager constructor -------------------------- */
function Manager(name, age, managed,arr){
    Person.call(this,name,age);
    this.managed= managed
        // arr= [];
        // arr = managed.toString();
        // console.log(arr);
        // for (const name in this) {
        //   if (this.hasOwnProperty.call(this, name)) {
        //     const element = this[name];
        //     console.log(element);
        //   }
        // }
        // copyItems.push(item)
        // console.log(item.name);
        // console.log(managed);
        this.greet = function(){
          var developer= '';
          for (let i = 0; i < managed.length; i++) {
            developer = developer + managed[i].name+" ";
            
          }
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${developer} `)
        }
    };;
    // console.log(managed);
    // let dev = [];
    // let dev1 = managed.find(e =>e.name === 'Maria Popova');
    // console.log(dev1);
    // let dev2 = managed.find(e =>e.name === 'Petar Petrov');
    // console.log(dev2);
    // // console.log(managed);
    // this.greet = function(){
    //   var dev= '';
    //   for (let i = 0; i < managed.length; i++) {
    //   dev = dev +", "+ managed[i].name;
        
    //   }
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old I managed ${dev} `)
    // }
  // reuse Person constructor
  // your code here ...

// Manager objects should inherit all methods from Person:
Manager.prototype.__proto__ = Person.prototype;



/* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset){
    Person.call(this,name,age)
    this.skillset = skillset;
    this.greet = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old and I know ${this.skillset}`);
    }
  // reuse Person constructor
  // your code here ...
}
// Developer objects should inherit all methods from Person:
Developer.prototype.__proto__= Person.prototype;

/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();