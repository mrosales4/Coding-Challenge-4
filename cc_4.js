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
  
// Method to charge the battery 
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
  }
  
 // Override accelerate method to adjust speed and charge
  accelerate() {
    if (this.charge > 0) {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    } else {
      console.log(`${this.make} has insufficient charge to accelerate.`);
    }
  }
}

// Test Data
const tesla = new EV('Tesla', 120, 23);

// Test accelerate, brake and chargeBattery methods
console.log("Initial state:");
console.log(`${tesla.make} speed: ${tesla.speed} km/h, charge: ${tesla.charge}%`);

console.log("Accelerating and Charging:");
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(23);

console.log("Braking:");  
tesla.brake();
tesla.brake();
