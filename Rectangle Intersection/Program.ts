class Rectangle {
    // Properties
    public Id: string;
    public Width: number;
    public Height: number;
    public TopLeftX: number;
    public TopLeftY: number;

    // Computed properties for the bottom right coordinates
    public get BottomRightX(): number {
        return this.TopLeftX + this.Width;
    }

    public get BottomRightY(): number {
        return this.TopLeftY + this.Height;
    }

    // Method to check if two rectangles intersect
    public IntersectsWith(other: Rectangle): boolean {
        const noOverlapX = this.BottomRightX < other.TopLeftX || other.BottomRightX < this.TopLeftX;
        const noOverlapY = this.BottomRightY < other.TopLeftY || other.BottomRightY < this.TopLeftY;

        return !(noOverlapX || noOverlapY);
    }
}

function main(): void {
    // Read input values for n and m
    const n: number = parseInt(prompt("Enter the number of rectangles:") ?? "0");
    const m: number = parseInt(prompt("Enter the number of pairs:") ?? "0");

    // Create an array to store rectangles
    const rectangles: Rectangle[] = [];

    // Input rectangles
    for (let i = 0; i < n; i++) {
        const rectangleInfo: string[] = (prompt(`Enter details for rectangle ${i + 1} (Id Width Height TopLeftX TopLeftY):`) ?? "").split(" ");

        const id: string = rectangleInfo[0];
        const width: number = parseFloat(rectangleInfo[1]);
        const height: number = parseFloat(rectangleInfo[2]);
        const topLeftX: number = parseFloat(rectangleInfo[3]);
        const topLeftY: number = parseFloat(rectangleInfo[4]);

        // Create a new Rectangle object and add it to the array
        rectangles.push({
            Id: id,
            Width: width,
            Height: height,
            TopLeftX: topLeftX,
            TopLeftY: topLeftY,
        });
    }

    // Check pairs of rectangles
    for (let i = 0; i < m; i++) {
        const pairInfo: string[] = (prompt(`Enter pair ${i + 1} (FirstId SecondId):`) ?? "").split(" ");
        const firstId: string = pairInfo[0];
        const secondId: string = pairInfo[1];

        // Find rectangles by Id
        const firstRectangle: Rectangle | undefined = rectangles.find(r => r.Id === firstId);
        const secondRectangle: Rectangle | undefined = rectangles.find(r => r.Id === secondId);

        // Check if rectangles exist and if they intersect
        const intersect: boolean = firstRectangle !== undefined && secondRectangle !== undefined
            ? firstRectangle.IntersectsWith(secondRectangle)
            : false;

        // Output the result
        console.log(intersect.toString().toLowerCase());
    }
}

// Call the main function to start the program
main();
