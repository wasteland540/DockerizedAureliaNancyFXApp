using Owin;

namespace Nancy.Demo.Hosting.Docker
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            StaticConfiguration.DisableErrorTraces = false;
            app.UseNancy();
        }
    }
}