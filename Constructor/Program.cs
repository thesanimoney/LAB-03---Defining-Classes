using System;

public class Person
{
    private string name;
    private int age;

    public string Name { get; init; } = "No name";
    public int Age { get; init; } = 1;

    // Constructor chaining using the "this" keyword
    public Person() : this("No name", 1) { }

    public Person(int age) : this("No name", age) { }

    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}

class Program
{
    static void Main()
    {
        Person person1 = new Person();                // Default constructor
        Person person2 = new Person(30);              // Constructor with age parameter
        Person person3 = new Person("John", 25);      // Constructor with name and age parameters

        Console.WriteLine("Person 1:");
        person1.DisplayInfo();

        Console.WriteLine("Person 2:");
        person2.DisplayInfo();

        Console.WriteLine("Person 3:");
        person3.DisplayInfo();
    }
}