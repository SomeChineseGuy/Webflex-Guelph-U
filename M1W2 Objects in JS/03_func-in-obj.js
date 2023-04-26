let car = {
  color: 'yellow',
  brand: 'Ford',
  startTheCar: function() {
    console.log(`The ${this.color} car started.`)
  },
  infoCar: {
    color: 'red',
    brand:'honda',
    startTheCar: function() {
      console.log(`The ${this.color} car started.`)
    }
  }
}


const copy = car;
car = null;

console.log(copy)
copy.startTheCar();
copy.infoCar.startTheCar();

// console.log(car.myself);

