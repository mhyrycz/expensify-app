class Person {
  constructor(name="Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  };
  getDescritpion() {
    return `${this.name} is ${this.age} years old.`
  };
  getGreeting() {
    return `Hi. I am ${this.name}.`
  };
}

class Student extends Person {
  constructor(name,age,major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescritpion() {
    let description = super.getDescritpion();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`
    }
    return description;
  };

}

class Traveler extends Person {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.city) {
      greeting  += ` I'm visiting from ${this.city}.`;
    }
    return greeting;
  };
}

const me = new Student('Maciej Hyrycz', 26, 'Computer Science');
console.log(me.getDescritpion());
const me2 = new Student();
console.log(me2.getDescritpion());

const traveler = new Traveler('Maciej Hyrycz', 26, 'Kraków');
console.log(traveler.getGreeting());
const traveler2 = new Traveler();
console.log(traveler2.getGreeting());




// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
