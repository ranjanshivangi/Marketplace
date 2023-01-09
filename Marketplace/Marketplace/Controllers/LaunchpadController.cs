using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace Marketplace.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    public class LaunchpadController : ControllerBase
    {
        

        private readonly ILogger<LaunchpadController> _logger;

        public LaunchpadController(ILogger<LaunchpadController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetEmployeesOnLaunchpad")]
        public IEnumerable<Employees> Get()
        {
            return new List<Employees>();
        }
    }
}