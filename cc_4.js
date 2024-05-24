// U22978120

//Creating the car class with constructor
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Implementing an acceleration method that increases the car speed by 10 km/h
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed increased to ${this.speed} km/h`);
  }

  // Implementing a brake method that decreases the car's speed by 5 km/h
  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed decreased to ${this.speed} km/h`);
  }
}
// Implement and define the EV class
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
