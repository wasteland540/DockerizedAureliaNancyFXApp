using System;

namespace Nancy.Demo.Hosting.Docker
{
    public class TestModule : NancyModule
    {
        public TestModule()
        {
            Get["/"] = parameters =>
            {
                Console.WriteLine("Visit / on " + Environment.MachineName);
                return View["staticview", Request.Url];
            };

            Get["/machine"] = parameters =>
            {
                Console.WriteLine("Visit /machine on " + Environment.MachineName);
                return Environment.MachineName + "\r\n";
            };

            Get["/add"] = parameters =>
            {
                dynamic aParam = Request.Query["a"];
                dynamic bParam = Request.Query["b"];

                var result = new
                {
                    a = aParam,
                    b = bParam,
                    result = (int) aParam + (int) bParam
                };

                return Response.AsJson(result);
            };
        }
    }
}