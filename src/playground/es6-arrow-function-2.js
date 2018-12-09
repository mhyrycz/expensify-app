// "this" keyword is not bounded in arrow functions
let cities = ["Gdańsk", "Pabianice", "Kraków"];
const user = {
  name: 'Maciej',
  cities: ["Gdańsk", "Pabianice", "Kraków"],
  printPlacesLived: function () { //here is es5 function syntax
    this.cities.forEach( (city) => {
      console.log(this.name + " has lived in " + city);
    }
  )},
  printPlacesLived2() { //here looks strange but it works
    this.cities.forEach( (city) => {
      console.log(this.name + " has lived in " + city);
    }
  )},
  printPlacesLived3() { //here looks strange but it works
    const newCities = this.cities.map( (city) => {
      return this.name + " has lived in " + city;
    })
    return newCities;
  }
};

user.printPlacesLived();
user.printPlacesLived2();
console.log(user.printPlacesLived3());


const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return  this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

//babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch
