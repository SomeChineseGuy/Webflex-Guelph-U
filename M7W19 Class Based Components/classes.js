const obj = {
  username: 'alvin',
  num: 10,
  func: () =>{
    return 'hello'
  }
}

const obj2 = {
  ...obj,
  username: "joe"
}

class Car {
  constructor (color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  detailCar() {
    return 'detail my car'
  }

  describeCar() {
    return `This is a ${this.color} ${this.brand} ${this.model}`
  }
}

const myHonda = new Car("Black", "Honda", "SUV");
console.log(myHonda.color);
console.log(myHonda.brand);
console.log(myHonda.describeCar());

class ElectricCar extends Car {
  constructor(color, brand, model, batteryCapacity) {
    super(color, brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  describeCar() {
    return `This is a ${this.color} ${this.brand} ${this.model} and has a Battery Capacity of ${this.batteryCapacity}`
  }
}

const myTesla = new ElectricCar("Silver", "Tesla", "X", 500)

console.log(myTesla.describeCar());