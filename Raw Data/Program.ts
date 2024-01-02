using System;
using System.Collections.Generic;

public class Engine
{
    public int Speed { get; set; }
    public int Power { get; set; }
}

public class Cargo
{
    public int Weight { get; set; }
    public string Type { get; set; }
}

public class Tire
{
    public double Pressure { get; set; }
    public int Age { get; set; }
}

public class Car
{
    public string Model { get; set; }
    public Engine CarEngine { get; set; }
    public Cargo CarCargo { get; set; }
    public List<Tire> CarTires { get; set; }

    public Car(string model, int speed, int power, int weight, string type, List<Tire> tires)
    {
        Model = model;
        CarEngine = new Engine { Speed = speed, Power = power };
        CarCargo = new Cargo { Weight = weight, Type = type };
        CarTires = tires;
    }

    public bool IsFragile()
    {
        return CarCargo.Type == "fragile" && CarTires.Any(t => t.Pressure < 1);
    }

    public bool IsFlammable()
    {
        return CarCargo.Type == "flamable" && CarEngine.Power > 250;
    }
}

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        List<Car> cars = new List<Car>();

        for (int i = 0; i < n; i++)
        {
            string[] carInfo = Console.ReadLine().Split();
            string model = carInfo[0];
            int engineSpeed = int.Parse(carInfo[1]);
            int enginePower = int.Parse(carInfo[2]);
            int cargoWeight = int.Parse(carInfo[3]);
            string cargoType = carInfo[4];
            List<Tire> tires = new List<Tire>();

            for (int j = 5; j < carInfo.Length; j += 2)
            {
                double tirePressure = double.Parse(carInfo[j]);
                int tireAge = int.Parse(carInfo[j + 1]);
                tires.Add(new Tire { Pressure = tirePressure, Age = tireAge });
            }

            Car car = new Car(model, engineSpeed, enginePower, cargoWeight, cargoType, tires);
            cars.Add(car);
        }

        string command = Console.ReadLine();

        if (command == "fragile")
        {
            foreach (Car car in cars)
            {
                if (car.IsFragile())
                {
                    Console.WriteLine(car.Model);
                }
            }
        }
        else if (command == "flamable")
        {
            foreach (Car car in cars)
            {
                if (car.IsFlammable())
                {
                    Console.WriteLine(car.Model);
                }
            }
        }
    }
}
