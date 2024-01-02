class Person {
    // Private fields
    private name: string;
    private age: number;

    // Public properties with inline initialization
    nameProp: string = "Unknown";
    ageProp: number = 0;

    // Default constructor
    constructor();
    
    // Constructor with parameters
    constructor(name: string, age: number);
    
    // Implementation of the constructors
    constructor(name?: string, age?: number) {
        // Inline initialization using properties
        this.name = typeof name === "string" ? name : "Unknown";
        this.age = typeof age === "number" ? age : 0;
    }

    // Public method to display information
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Main program
function main(): void {
    // Create objects of type Person using inline initialization
    const person1: Person = new Person({
        nameProp: "John",
        ageProp: 30
    });

    // Create objects of type Person using the default constructor
    const person2: Person = new Person();

    // Display information for both persons
    console.log("Person 1:");
    person1.displayInfo();

    console.log("Person 2:");
    person2.displayInfo();
}

// Call the main method to start the program
main();
