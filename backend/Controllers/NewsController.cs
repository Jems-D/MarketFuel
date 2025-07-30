using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/latestnews")]
    public class NewsController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Try()
        {
            return Ok();
        }
    }
}
