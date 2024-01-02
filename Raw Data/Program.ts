// Define the Engine class
class Engine {
    public speed: number;
    public power: number;
}

// Define the Cargo class
class Cargo {
    public weight: number;
    public type: string;
}

// Define the Tire class
class Tire {
    public pressure: number;
    public age: number;
}

// Define the Car class
class Car {
    public model: string;
    public carEngine: Engine;
    public carCargo: Cargo;
    public carTires: Tire[];

    // Constructor for the Car class
    constructor(model: string, speed: number, power: number, weight: number, type: string, tires: Tire[]) {
        this.model = model;
        this.carEngine = { speed, power };
        this.carCargo = { weight, type };
        this.carTires = tires;
    }

    // Method to check if the car is fragile
    isFragile(): boolean {
        return this.carCargo.type === "fragile" && this.carTires.some(t => t.pressure < 1);
    }

    // Method to check if the car is flammable
    isFlammable(): boolean {
        return this.carCargo.type === "flamable" && this.carEngine.power > 250;
    }
}

// Main program
function main(): void {
    // Read the number of cars from the user
    console.log("Enter the number of cars:");
    const n: number = parseInt(prompt("") ?? "0");

    const cars: Car[] = [];

    // Loop to input car details
    for (let i = 0; i < n; i++) {
        console.log(`Enter details for car ${i + 1}:`);
        const carInfo: string[] = (prompt("") ?? "").split(" ");

        const model: string = carInfo[0];
        const engineSpeed: number = parseInt(carInfo[1]);
        const enginePower: number = parseInt(carInfo[2]);
        const cargoWeight: number = parseInt(carInfo[3]);
        const cargoType: string = carInfo[4];

        // Extract tire details from the input
        const tires: Tire[] = [];
        for (let j = 5; j < carInfo.length; j += 2) {
            const tirePressure: number = parseFloat(carInfo[j]);
            const tireAge: number = parseInt(carInfo[j + 1]);
            tires.push({ pressure: tirePressure, age: tireAge });
        }

        // Create a new Car object and add it to the cars array
        const car: Car = new Car(model, engineSpeed, enginePower, cargoWeight, cargoType, tires);
        cars.push(car);
    }

    // Read the command (either "fragile" or "flamable")
    const command: string = prompt("") ?? "";

    // Output cars based on the command
    if (command === "fragile") {
        const fragileCars: Car[] = cars.filter(car => car.isFragile());
        fragileCars.forEach(car => console.log(car.model));
    } else if (command === "flamable") {
        const flammableCars: Car[] = cars.filter(car => car.isFlammable());
        flammableCars.forEach(car => console.log(car.model));
    }
}

// Call the main method to start the program
main();
