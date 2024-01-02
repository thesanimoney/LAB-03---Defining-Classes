class Car {
    // Properties
    public Model: string;
    public FuelAmount: number;
    public FuelConsumptionPerKm: number;
    public DistanceTraveled: number;

    // Constructor
    constructor(model: string, fuelAmount: number, fuelConsumptionPerKm: number) {
        this.Model = model;
        this.FuelAmount = fuelAmount;
        this.FuelConsumptionPerKm = fuelConsumptionPerKm;
        this.DistanceTraveled = 0;
    }

    // Method to check if the car can move the given distance
    public CanMove(distance: number): boolean {
        const fuelNeeded: number = distance * this.FuelConsumptionPerKm;

        if (this.FuelAmount >= fuelNeeded) {
            this.FuelAmount -= fuelNeeded;
            this.DistanceTraveled += distance;
            return true;
        }

        return false;
    }
}

function main(): void {
    // Read the number of cars from the user
    const n: number = parseInt(prompt("Enter the number of cars:") ?? "0");

    // Create an array to store cars
    const cars: Car[] = [];

    // Input car details
    for (let i = 0; i < n; i++) {
        const carInfo: string[] = (prompt(`Enter details for car ${i + 1} (Model FuelAmount FuelConsumptionPerKm):`) ?? "").split(" ");

        const model: string = carInfo[0];
        const fuelAmount: number = parseFloat(carInfo[1]);
        const fuelConsumptionPerKm: number = parseFloat(carInfo[2]);

        // Create a new Car object and add it to the array
        cars.push(new Car(model, fuelAmount, fuelConsumptionPerKm));
    }

    // Process commands until "End" is entered
    let command: string;
    while ((command = prompt("Enter a command (e.g., Drive carModel distance) or 'End' to finish:")?.trim() ?? "").toUpperCase() !== "END") {
        const commandArgs: string[] = command.split(" ");
        const carModel: string = commandArgs[1];
        const distance: number = parseFloat(commandArgs[2]);

        // Find the car by model
        const carToDrive: Car | undefined = cars.find(c => c.Model === carModel);

        if (carToDrive !== undefined && !carToDrive.CanMove(distance)) {
            console.log("Insufficient fuel for the drive");
        }
    }

    // Output information for each car
    for (const car of cars) {
        console.log(`${car.Model} ${car.FuelAmount.toFixed(2)} ${car.DistanceTraveled}`);
    }
}

// Call the main function to start the program
main();
