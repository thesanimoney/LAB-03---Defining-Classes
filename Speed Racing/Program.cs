using System;
using System.Collections.Generic;

public class Car
{
    public string Model { get; set; }
    public double FuelAmount { get; set; }
    public double FuelConsumptionPerKm { get; set; }
    public double DistanceTraveled { get; set; }

    public Car(string model, double fuelAmount, double fuelConsumptionPerKm)
    {
        Model = model;
        FuelAmount = fuelAmount;
        FuelConsumptionPerKm = fuelConsumptionPerKm;
        DistanceTraveled = 0;
    }

    public bool CanMove(double distance)
    {
        double fuelNeeded = distance * FuelConsumptionPerKm;
        if (FuelAmount >= fuelNeeded)
        {
            FuelAmount -= fuelNeeded;
            DistanceTraveled += distance;
            return true;
        }
        return false;
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
            double fuelAmount = double.Parse(carInfo[1]);
            double fuelConsumptionPerKm = double.Parse(carInfo[2]);

            Car car = new Car(model, fuelAmount, fuelConsumptionPerKm);
            cars.Add(car);
        }

        string command;
        while ((command = Console.ReadLine()) != "End")
        {
            string[] commandArgs = command.Split();
            string carModel = commandArgs[1];
            double distance = double.Parse(commandArgs[2]);

            Car carToDrive = cars.Find(c => c.Model == carModel);
            if (carToDrive != null && carToDrive.CanMove(distance) == false)
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }

        foreach (Car car in cars)
        {
            Console.WriteLine($"{car.Model} {car.FuelAmount:f2} {car.DistanceTraveled}");
        }
    }
}
