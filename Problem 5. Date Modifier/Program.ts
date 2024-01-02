class DateModifier {
    // Method to calculate the difference in days between two dates
    calculateDateDifference(date1: string, date2: string): number {
        // Attempt to parse input dates
        const dateTime1: Date = new Date(date1);
        const dateTime2: Date = new Date(date2);

        // Check if parsing was successful
        if (!isNaN(dateTime1.getTime()) && !isNaN(dateTime2.getTime())) {
            // Calculate the difference in days using getTime() and abs to ensure positive result
            const difference: number = Math.abs((dateTime1.getTime() - dateTime2.getTime()) / (1000 * 60 * 60 * 24));
            return difference;
        }

        // Handle invalid date format
        throw new Error("Invalid date format. Please provide dates in a valid format (yyyy-MM-dd).");
    }
}

// Main program
function main(): void {
    // Create an instance of the DateModifier class
    const dateModifier: DateModifier = new DateModifier();

    // Read input dates from the user
    console.log("Enter the first date (yyyy-MM-dd):");
    const date1: string = prompt("") ?? "";

    console.log("Enter the second date (yyyy-MM-dd):");
    const date2: string = prompt("") ?? "";

    try {
        // Calculate and display the difference in days
        const daysDifference: number = dateModifier.calculateDateDifference(date1, date2);
        console.log(`The difference in days between the two dates is: ${daysDifference} days.`);
    } catch (error) {
        // Handle exceptions (e.g., invalid date format)
        console.log(error.message);
    }
}

// Call the main method to start the program
main();
