using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/v{version:apiVersion}/fearandgreed")]
    [ApiVersion("1.0")]
    public class FearAndGreedController : ControllerBase { }
}
