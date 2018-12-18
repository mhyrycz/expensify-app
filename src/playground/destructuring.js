const person = {
  name: 'Maciek',
  age: 26,
  location: {
    city: 'Kraków',
    temp: -5
  }
};


const { name: firstName = 'Anonymous', age } = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);


const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It is ${temperature} in ${city}.`);
}
