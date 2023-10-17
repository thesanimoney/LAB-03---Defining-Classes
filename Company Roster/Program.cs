using System;
using System.Collections.Generic;
using System.Linq;

public class Employee
{
    public string Name { get; set; }
    public decimal Salary { get; set; }
    public string Position { get; set; }
    public string Department { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }

    public Employee(string name, decimal salary, string position, string department, string email = "n/a", int age = -1)
    {
        Name = name;
        Salary = salary;
        Position = position;
        Department = department;
        Email = email;
        Age = age;
    }
}

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        List<Employee> employees = new List<Employee>();

        for (int i = 0; i < n; i++)
        {
            string[] input = Console.ReadLine().Split();
            string name = input[0];
            decimal salary = decimal.Parse(input[1]);
            string position = input[2];
            string department = input[3];
            string email = "n/a";
            int age = -1;

            if (input.Length > 4)
            {
                if (input.Length == 5)
                {
                    if (input[4].Contains('@'))
                        email = input[4];
                    else
                        age = int.Parse(input[4]);
                }
                else
                {
                    email = input[4];
                    age = int.Parse(input[5]);
                }
            }

            Employee employee = new Employee(name, salary, position, department, email, age);
            employees.Add(employee);
        }

        var highestAverageSalaryDepartment = employees
            .GroupBy(e => e.Department)
            .Select(group => new
            {
                Department = group.Key,
                AverageSalary = group.Average(e => e.Salary)
            })
            .OrderByDescending(x => x.AverageSalary)
            .First();

        Console.WriteLine($"Highest Average Salary: {highestAverageSalaryDepartment.Department}");
        var employeesInDepartment = employees
            .Where(e => e.Department == highestAverageSalaryDepartment.Department)
            .OrderByDescending(e => e.Salary);

        foreach (var employee in employeesInDepartment)
        {
            Console.WriteLine($"{employee.Name} {employee.Salary:F2} {employee.Email} {employee.Age}");
        }
    }
}
