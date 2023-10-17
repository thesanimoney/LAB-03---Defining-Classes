using System;

public class DateModifier
{
    public int CalculateDateDifference(string date1, string date2)
    {
        DateTime dateTime1, dateTime2;

        if (DateTime.TryParse(date1, out dateTime1) && DateTime.TryParse(date2, out dateTime2))
        {
            TimeSpan difference = dateTime1 - dateTime2;
            return Math.Abs(difference.Days); // Use Math.Abs to ensure a positive difference
        }

        // Handle invalid date format
        throw new ArgumentException("Invalid date format. Please provide dates in a valid format.");
    }
}

class Program
{
    static void Main()
    {
        DateModifier dateModifier = new DateModifier();

        Console.Write("Enter the first date (yyyy-MM-dd): ");
        string date1 = Console.ReadLine();

        Console.Write("Enter the second date (yyyy-MM-dd): ");
        string date2 = Console.ReadLine();

        try
        {
            int daysDifference = dateModifier.CalculateDateDifference(date1, date2);
            Console.WriteLine($"The difference in days between the two dates is: {daysDifference} days.");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
