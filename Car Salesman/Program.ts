class Engine {
    // Properties of the Engine class
    public Model: string;
    public Power: number;
    public Displacement: number;
    public Efficiency: string;

    // Constructor to initialize the Engine object
    constructor(model: string, power: number, displacement: number = -1, efficiency: string = "n/a") {
        this.Model = model;
        this.Power = power;
        this.Displacement = displacement;
        this.Efficiency = efficiency;
    }

    // Custom toString method to represent the Engine object as a string
    public toString(): string {
        return `${this.Model}:\n  Power: ${this.Power}\n  Displacement: ${(this.Displacement === -1 ? "n/a" : this.Displacement.toString())}\n  Efficiency: ${this.Efficiency}`;
    }
}

class Car {
    // Properties of the Car class
    public Model: string;
    public CarEngine: Engine;
    public Weight: number;
    public Color: string;

    // Constructor to initialize the Car object
    constructor(model: string, carEngine: Engine, weight: number = -1, color: string = "n/a") {
        this.Model = model;
        this.CarEngine = carEngine;
        this.Weight = weight;
        this.Color = color;
    }

    // Custom toString method to represent the Car object as a string
    public toString(): string {
        return `${this.Model}:\n ${this.CarEngine}\n  Weight: ${(this.Weight === -1 ? "n/a" : this.Weight.toString())}\n  Color: ${this.Color}`;
    }
}

class Program {
    // Main method to execute the program
    static main(): void {
        // User input for the number of engines
        let n: number = parseInt(prompt("Enter the number of engines:"));

        // Dictionary to store engines with their models as keys
        let engines: { [key: string]: Engine } = {};

        // Loop to input engine details
        for (let i = 0; i < n; i++) {
            // User input for engine details
            let engineInfo: string[] = prompt("Enter engine info (Model Power [Displacement] [Efficiency]):").split(" ");
            let model: string = engineInfo[0];
            let power: number = parseInt(engineInfo[1]);

            let displacement: number = -1;
            let efficiency: string = "n/a";

            // Check if displacement is provided in the input
            if (engineInfo.length > 2) {
                if (!isNaN(parseInt(engineInfo[2]))) {
                    displacement = parseInt(engineInfo[2]);

                    // Check if efficiency is provided in the input
                    if (engineInfo.length > 3) {
                        efficiency = engineInfo[3];
                    }
                } else {
                    efficiency = engineInfo[2];
                }
            }

            // Create an Engine object and add it to the dictionary
            let engine: Engine = new Engine(model, power, displacement, efficiency);
            engines[model] = engine;
        }

        // User input for the number of cars
        let m: number = parseInt(prompt("Enter the number of cars:"));

        // List to store car objects
        let cars: Car[] = [];

        // Loop to input car details
        for (let i = 0; i < m; i++) {
            // User input for car details
            let carInfo: string[] = prompt("Enter car info (Model EngineModel [Weight] [Color]):").split(" ");
            let model: string = carInfo[0];
            let engineModel: string = carInfo[1];

            let carEngine: Engine = engines[engineModel];

            let weight: number = -1;
            let color: string = "n/a";

            // Check if weight is provided in the input
            if (carInfo.length > 2) {
                if (!isNaN(parseInt(carInfo[2]))) {
                    weight = parseInt(carInfo[2]);

                    // Check if color is provided in the input
                    if (carInfo.length > 3) {
                        color = carInfo[3];
                    }
                } else {
                    color = carInfo[2];
                }
            }

            // Create a Car object and add it to the list
            let car: Car = new Car(model, carEngine, weight, color);
            cars.push(car);
        }

        // Output details of each car using the toString method
        for (let car of cars) {
            console.log(car.toString());
        }
    }
}

// Call the main method to start the program
Program.main();
