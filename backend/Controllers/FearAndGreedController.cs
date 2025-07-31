using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiVersion("1.0")]
    [ApiController]
    [Route("api/v{version:apiVersion}/fearandgreed")]
    public class FearAndGreedController : ControllerBase
    {
        [MapToApiVersion("1.0")]
        [HttpGet]
        public async Task<IActionResult> Try()
        {
            return Ok();
        }
    }
}
