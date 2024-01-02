class Person {
    // Private fields
    private name: string;
    private age: number;

    // Public properties with init
    nameProp: string;
    ageProp: number;

    // Default constructor
    constructor();

    // Constructor with parameters
    constructor(name: string, age: number);

    // Implementation of the constructors
    constructor(name?: string, age?: number) {
        // Init properties
        this.nameProp = name ?? "";
        this.ageProp = age ?? 0;
    }
}

class Family {
    // Private field
    private members: Person[];

    // Default constructor
    constructor() {
        // Initialize the array
        this.members = [];
    }

    // Public method to add a member
    addMember(member: Person): void {
        this.members.push(member);
    }

    // Public method to get the oldest member
    getOldestMember(): Person | null {
        if (this.members.length === 0) {
            return null;
        }

        // Use spread syntax to clone the array and sort
        const sortedMembers = [...this.members].sort((a, b) => b.ageProp - a.ageProp);
        return sortedMembers[0];
    }
}

// Main program
function main(): void {
    console.log("Enter the number of family members:");
    const numMembers: number = parseInt(prompt("") ?? "0");

    const family: Family = new Family();

    for (let i = 0; i < numMembers; i++) {
        console.log(`Enter details for family member ${i + 1}:`);
        const name: string = prompt("Name:") ?? "";
        const age: number = parseInt(prompt("Age:") ?? "0");

        const person: Person = new Person(name, age);
        family.addMember(person);
    }

    const oldestMember: Person | null = family.getOldestMember();

    if (oldestMember !== null) {
        console.log(`The oldest family member is ${oldestMember.nameProp} with age ${oldestMember.ageProp}.`);
    } else {
        console.log("No family members added.");
    }
}

// Call the main method to start the program
main();
