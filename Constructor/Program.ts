class Person {
    private name: string;
    private age: number;

    // Public properties with init keyword emulation
    nameProp: string = "No name";
    ageProp: number = 1;

    // Constructor chaining using "this"
    constructor();
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(name?: string | number, age?: number) {
        // Initialize private fields
        this.name = typeof name === "string" ? name : "No name";
        this.age = typeof name === "number" ? name : typeof age === "number" ? age : 1;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Main program
function main(): void {
    const person1: Person = new Person();             // Default constructor
    const person2: Person = new Person(30);           // Constructor with age parameter
    const person3: Person = new Person("John", 25);   // Constructor with name and age parameters

    console.log("Person 1:");
    person1.displayInfo();

    console.log("Person 2:");
    person2.displayInfo();

    console.log("Person 3:");
    person3.displayInfo();
}

// Call the main method to start the program
main();
