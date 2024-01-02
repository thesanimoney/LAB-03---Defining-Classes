class Person {
    // Private fields
    private name: string;
    private age: number;

    // Public properties with init
    nameProp: string;
    ageProp: number;

    // Implementation of the constructors
    constructor(name: string, age: number) {
        // Init properties
        this.nameProp = name;
        this.ageProp = age;
    }
}

// Main program
function main(): void {
    // Read the number of people from the user
    console.log("Enter the number of people:");
    const numPeople: number = parseInt(prompt("") ?? "0");

    // Array to store instances of the Person class
    const people: Person[] = [];

    // Loop to collect information for each person
    for (let i = 0; i < numPeople; i++) {
        console.log(`Enter personal information for person ${i + 1}:`);
        // Read input for name and age from the user
        const input: string[] = (prompt("") ?? "").split(" ");
        const name: string = input[0];
        const age: number = parseInt(input[1] ?? "0");

        // Create a new instance of the Person class and add it to the array
        const person: Person = new Person(name, age);
        people.push(person);
    }

    // Filter people over 30 and sort them alphabetically
    const filteredPeople: Person[] = people
        .filter(person => person.ageProp > 30)
        .sort((a, b) => a.nameProp.localeCompare(b.nameProp));

    // Display the result
    if (filteredPeople.length > 0) {
        console.log("People over 30, sorted alphabetically:");
        for (const person of filteredPeople) {
            console.log(`${person.nameProp} ${person.ageProp}`);
        }
    } else {
        console.log("No people over 30 found.");
    }
}

// Call the main method to start the program
main();
