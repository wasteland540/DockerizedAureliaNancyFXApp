using System;
using Microsoft.Owin.Hosting;

namespace Nancy.Demo.Hosting.Docker
{
    internal class Program
    {
        private static void Main()
        {
            const int port = 8080;

            using (WebApp.Start<Startup>(string.Format("http://+:{0}", port)))
            {
                Console.WriteLine("Nancy now listening on http://+:" + port);

                string line = Console.ReadLine();
                while (line != "quit")
                {
                    line = Console.ReadLine();
                }
            }
        }
    }
}