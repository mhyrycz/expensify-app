//Object destructuring

const person = {
  name: 'Maciek',
  age: 26,
  location: {
    city1: 'Kraków',
    temp: -5
  }
};


const { name: firstName = 'Anonymous', age } = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);


const { city1, temp: temperature } = person.location;
if (city1 && temperature) {
  console.log(`It is ${temperature} in ${city1}.`);
}

//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
const [ street, city2 = 'New York', state, zip ] = address;
console.log(`You are in ${city2} ${state}.`);
