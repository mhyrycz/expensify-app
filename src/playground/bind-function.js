const obj ={
  name: 'Vikram',
  getName() {
    return this.name
  }
}

const obj2 ={
  name: 'Vikram'
}

const shit0 = obj.getName()

const shit1 = obj.getName.bind(obj)

const shit2 = obj.getName.bind({name: 'Vikram'})

const shit3 = obj.getName.bind(obj2)

const shit4 = obj.getName

console.log(shit0)
console.log(shit1())
console.log(shit2())
console.log(shit3())
console.log(shit4())



// babel src/playground/bind-function.js --out-file=public/scripts/app.js --presets=env,react --watch
