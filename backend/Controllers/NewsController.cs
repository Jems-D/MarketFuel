using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.Versioning;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiVersion("1.0")]
    [ApiController]
    [Route("api/v1/news")]
    public class NewsController : ControllerBase
    {
        private readonly ILatestNews _latestnews;

        public NewsController(ILatestNews latestNews)
        {
            _latestnews = latestNews;
        }

        [MapToApiVersion("1.0")]
        [HttpGet]
        [Route("latest")]
        public async Task<IActionResult> LatestNewsEndpoint()
        {
            var latestnews = await _latestnews.GetLatestNews();
            if (latestnews == null)
            {
                return BadRequest("No news found");
            }
            return Ok(latestnews);
        }
    }
}
