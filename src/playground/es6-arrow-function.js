/*
function square(x) {
  return x * x;
};

console.log(square(6))


const arrowSquare = (x) => {
  return x * x;
};

console.log(arrowSquare(4))

const arrowSquare2 = (x) => x * x;

console.log(arrowSquare2(4))
*/

/*
const getFirstName = (full) => {
  return full.split(' ')[0];
}
*/

const getFirstName = (full) => full.split(' ')[0];

console.log(getFirstName('Maciej Hyrycz'));

//babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch
