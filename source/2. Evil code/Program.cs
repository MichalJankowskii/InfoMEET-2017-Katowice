using System;

namespace Demo2
{
    public class Program
    {
        // Example from https://github.com/jskeet/DemoCode/tree/master/Abusing%20CSharp/Code/WhatTheHeck

        public static void Main(string[] args)
        {
            var limit = 10;
            limit = "five";
            for (var x = 0; x < limit; x++)
            {
                Console.WriteLine(x);
                Console.WriteLine("The current value of x is: {0}", x);
            }
        }
    }
}
