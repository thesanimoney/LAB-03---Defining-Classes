using System;

public class Rectangle
{
    public string Id { get; set; }
    public double Width { get; set; }
    public double Height { get; set; }
    public double TopLeftX { get; set; }
    public double TopLeftY { get; set; }

    public double BottomRightX => TopLeftX + Width;
    public double BottomRightY => TopLeftY + Height;

    public bool IntersectsWith(Rectangle other)
    {
        bool noOverlapX = BottomRightX < other.TopLeftX || other.BottomRightX < TopLeftX;
        bool noOverlapY = BottomRightY < other.TopLeftY || other.BottomRightY < TopLeftY;

        return !(noOverlapX || noOverlapY);
    }
}

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int m = int.Parse(Console.ReadLine());

        Rectangle[] rectangles = new Rectangle[n];

        for (int i = 0; i < n; i++)
        {
            string[] rectangleInfo = Console.ReadLine().Split();
            string id = rectangleInfo[0];
            double width = double.Parse(rectangleInfo[1]);
            double height = double.Parse(rectangleInfo[2]);
            double topLeftX = double.Parse(rectangleInfo[3]);
            double topLeftY = double.Parse(rectangleInfo[4]);

            rectangles[i] = new Rectangle
            {
                Id = id,
                Width = width,
                Height = height,
                TopLeftX = topLeftX,
                TopLeftY = topLeftY
            };
        }

        for (int i = 0; i < m; i++)
        {
            string[] pairInfo = Console.ReadLine().Split();
            string firstId = pairInfo[0];
            string secondId = pairInfo[1];

            Rectangle firstRectangle = Array.Find(rectangles, r => r.Id == firstId);
            Rectangle secondRectangle = Array.Find(rectangles, r => r.Id == secondId);

            bool intersect = firstRectangle.IntersectsWith(secondRectangle);
            Console.WriteLine(intersect.ToString().ToLower());
        }
    }
}
