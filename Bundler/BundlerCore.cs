using Microsoft.AspNetCore.Builder;

namespace MvcApp.BundlerCore
{
    public class BundlerCore
    {
        public static void Run()
        {

        }

        public static void Run(BundlerProperties props)
        {

        }
    }

    public static class Extention
    {
        public static void UseBundler(this IApplicationBuilder builder)
        {
            // builder.
        }
    }

    public class FileChangeTracker
    {
        
    }

    public class BundlerProperties
    {
        public string ProjectDir { get; set; } = "wwwroot/app";
        public string BuildDir { get; set; } = "wwwroot/build";
        public bool IsDevelopment { get; set; } = true;
        public bool AutoPageReload { get; set; }
        public string LibDir { get; set; } = "wwwroot/lib";
        public string[] Vendors { get; set; }
    }
}