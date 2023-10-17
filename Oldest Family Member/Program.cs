using System;
using System.Collections.Generic;
using System.Linq;

public class Person
{
    private string name;
    private int age;

    public string Name { get; init; }
    public int Age { get; init; }

    public Person() { }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

public class Family
{
    private List<Person> members;

    public Family()
    {
        members = new List<Person>();
    }

    public void AddMember(Person member)
    {
        members.Add(member);
    }

    public Person GetOldestMember()
    {
        if (members.Count == 0)
        {
            return null;
        }

        return members.OrderByDescending(p => p.Age).First();
    }
}

class Program
{
    static void Main()
    {
        Console.Write("Enter the number of family members: ");
        int numMembers = int.Parse(Console.ReadLine());

        Family family = new Family();

        for (int i = 0; i < numMembers; i++)
        {
            Console.WriteLine($"Enter details for family member {i + 1}:");
            Console.Write("Name: ");
            string name = Console.ReadLine();
            Console.Write("Age: ");
            int age = int.Parse(Console.ReadLine());

            Person person = new Person(name, age);
            family.AddMember(person);
        }

        Person oldestMember = family.GetOldestMember();

        if (oldestMember != null)
        {
            Console.WriteLine($"The oldest family member is {oldestMember.Name} with age {oldestMember.Age}.");
        }
        else
        {
            Console.WriteLine("No family members added.");
        }
    }
}
