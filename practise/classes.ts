class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  drive(): void {
    console.log('Inside Drive Method in Vehicle Class');
  }

  //protected methods can be called inside the same class and also can be accessed from the child classes
  //but cant be accessed on a object
  protected honk(): void {
    console.log('Honk Method');
  }
}

class Car extends Vehicle {
  /*
    when extended a class with constructor, add constructor args of 
    parent class in child class constructor definition and 
    call super() method inside constructor method with the parent args
   */
  constructor(public fueltype: string, color: string) {
    super(color);
    this.fueltype = fueltype;
  }
  //overriding the parent method
  drive(): void {
    console.log('Inside Car Class');
  }

  private printMethod(): void {
    console.log('Private Print Method');
  }

  print(): void {
    this.printMethod();
    this.honk(); //accessing the parent protected class.
    console.log(`Car color is ${this.color} and fueltype is ${this.fueltype}`);
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

const car = new Car('diesel', 'brown');
car.drive();
// car.printMethod() : Error, Can't access the private methods on the objects.
// only accessed inside the class from other methods

car.print();

//default behaviour : all methods inside a class are public.
