class Employee {
    // Properties of the Employee class
    name: string;
    salary: number;
    position: string;
    department: string;
    email: string;
    age: number;

    // Constructor to initialize the Employee object
    constructor(name: string, salary: number, position: string, department: string, email: string = "n/a", age: number = -1) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Program {
    static main(): void {
        // User input for the number of employees
        const n: number = Number(prompt("Enter the number of employees:"));

        // List to store employee objects
        const employees: Employee[] = [];

        // Loop to input employee details
        for (let i = 0; i < n; i++) {
            // User input for employee details
            const input: string[] = prompt("Enter employee details (name salary position department [email] [age]):").split(" ");
            const name: string = input[0];
            const salary: number = Number(input[1]);
            const position: string = input[2];
            const department: string = input[3];
            let email: string = "n/a";
            let age: number = -1;

            // Check if additional details (email or age) are provided
            if (input.length > 4) {
                if (input.length === 5) {
                    // Check if the provided information is an email or age
                    if (input[4].includes('@')) {
                        email = input[4];
                    } else {
                        age = Number(input[4]);
                    }
                } else {
                    email = input[4];
                    age = Number(input[5]);
                }
            }

            // Create an Employee object and add it to the list
            const employee: Employee = new Employee(name, salary, position, department, email, age);
            employees.push(employee);
        }

        // Calculate the highest average salary department
        const highestAverageSalaryDepartment = employees
            .reduce((acc, e) => {
                acc[e.department] = (acc[e.department] || []);
                acc[e.department].push(e.salary);
                return acc;
            }, {})
            .map((value, key) => {
                const averageSalary = value.reduce((total, salary) => total + salary, 0) / value.length;
                return { department: key, averageSalary };
            })
            .sort((a, b) => b.averageSalary - a.averageSalary)[0];

        // Output the highest average salary department
        console.log(`Highest Average Salary: ${highestAverageSalaryDepartment.department}`);

        // Retrieve and output employees in the highest average salary department, sorted by salary
        const employeesInDepartment = employees
            .filter(e => e.department === highestAverageSalaryDepartment.department)
            .sort((a, b) => b.salary - a.salary);

        employeesInDepartment.forEach(employee => {
            console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email} ${employee.age}`);
        });
    }
}

// Call the main method to start the program
Program.main();
