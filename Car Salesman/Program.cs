using System;
using System.Collections.Generic;

public class Engine
{
    public string Model { get; set; }
    public int Power { get; set; }
    public int Displacement { get; set; }
    public string Efficiency { get; set; }

    public Engine(string model, int power, int displacement = -1, string efficiency = "n/a")
    {
        Model = model;
        Power = power;
        Displacement = displacement;
        Efficiency = efficiency;
    }

    public override string ToString()
    {
        return $"{Model}:\n  Power: {Power}\n  Displacement: {(Displacement == -1 ? "n/a" : Displacement.ToString())}\n  Efficiency: {Efficiency}";
    }
}

public class Car
{
    public string Model { get; set; }
    public Engine CarEngine { get; set; }
    public int Weight { get; set; }
    public string Color { get; set; }

    public Car(string model, Engine carEngine, int weight = -1, string color = "n/a")
    {
        Model = model;
        CarEngine = carEngine;
        Weight = weight;
        Color = color;
    }

    public override string ToString()
    {
        return $"{Model}:\n {CarEngine}\n  Weight: {(Weight == -1 ? "n/a" : Weight.ToString())}\n  Color: {Color}";
    }
}

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        Dictionary<string, Engine> engines = new Dictionary<string, Engine>();

        for (int i = 0; i < n; i++)
        {
            string[] engineInfo = Console.ReadLine().Split();
            string model = engineInfo[0];
            int power = int.Parse(engineInfo[1]);

            int displacement = -1;
            string efficiency = "n/a";

            if (engineInfo.Length > 2)
            {
                if (int.TryParse(engineInfo[2], out displacement))
                {
                    if (engineInfo.Length > 3)
                    {
                        efficiency = engineInfo[3];
                    }
                }
                else
                {
                    efficiency = engineInfo[2];
                }
            }

            Engine engine = new Engine(model, power, displacement, efficiency);
            engines.Add(model, engine);
        }

        int m = int.Parse(Console.ReadLine());
        List<Car> cars = new List<Car>();

        for (int i = 0; i < m; i++)
        {
            string[] carInfo = Console.ReadLine().Split();
            string model = carInfo[0];
            string engineModel = carInfo[1];

            Engine carEngine = engines[engineModel];

            int weight = -1;
            string color = "n/a";

            if (carInfo.Length > 2)
            {
                if (int.TryParse(carInfo[2], out weight))
                {
                    if (carInfo.Length > 3)
                    {
                        color = carInfo[3];
                    }
                }
                else
                {
                    color = carInfo[2];
                }
            }

            Car car = new Car(model, carEngine, weight, color);
            cars.Add(car);
        }

        foreach (var car in cars)
        {
            Console.WriteLine(car);
        }
    }
}
