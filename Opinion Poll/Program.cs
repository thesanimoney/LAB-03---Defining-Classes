using System;
using System.Collections.Generic;
using System.Linq;

public class Person
{
    private string name;
    private int age;

    public string Name { get; init; }
    public int Age { get; init; }
}

class Program
{
    static void Main()
    {
        Console.Write("Enter the number of people: ");
        int numPeople = int.Parse(Console.ReadLine());

        List<Person> people = new List<Person>();

        for (int i = 0; i < numPeople; i++)
        {
            Console.WriteLine($"Enter personal information for person {i + 1}:");
            string[] input = Console.ReadLine().Split();
            string name = input[0];
            int age = int.Parse(input[1]);

            Person person = new Person { Name = name, Age = age };
            people.Add(person);
        }

        var filteredPeople = people
            .Where(person => person.Age > 30)
            .OrderBy(person => person.Name)
            .ToList();

        if (filteredPeople.Count > 0)
        {
            Console.WriteLine("People over 30, sorted alphabetically:");
            foreach (var person in filteredPeople)
            {
                Console.WriteLine($"{person.Name} {person.Age}");
            }
        }
        else
        {
            Console.WriteLine("No people over 30 found.");
        }
    }
}
