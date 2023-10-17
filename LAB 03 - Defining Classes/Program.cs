
public class Person
{
    // Private fields
    private string name;
    private int age;

    // Inline initialization using properties
    public string Name { get; set; }
    public int Age { get; set; }

    // Default constructor
    public Person()
    {
        // Default values
        name = "Unknown";
        age = 0;
    }

    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    // Public methods to display information
    public void DisplayInfo()
    {
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}

class Program
{
    static void Main()
    {
        // Create objects of type Person using inline initialization
        Person person1 = new Person
        {
            Name = "John",
            Age = 30
        };

        // Create objects of type Person using the default constructor
        Person person2 = new Person();

        // Display information for both persons
        Console.WriteLine("Person 1:");
        person1.DisplayInfo();

        Console.WriteLine("Person 2:");
        person2.DisplayInfo();
    }
}
