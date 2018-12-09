var nameVar = "Andrew";
var nameVar = 'Mike';
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Joey";
console.log(nameLet);

const nameConst = "Jen";
console.log(nameConst);

function getPetName() {
  var petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = "Andre Saimon";
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
}

console.log(firstName)

//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
