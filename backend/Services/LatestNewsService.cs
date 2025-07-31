using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Models;
using Newtonsoft.Json;

namespace backend.Services
{
    public class LatestNewsService : ILatestNews
    {
        private readonly HttpClient _httpClient;
        private string? apiKey;
        private readonly ILogger<LatestNewsService> _logger;

        public LatestNewsService(HttpClient httpClient, ILogger<LatestNewsService> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
            DotNetEnv.Env.Load();
            apiKey = Environment.GetEnvironmentVariable("MARKET_FUEL_API_KEY");
        }

        public async Task<List<LatestNews.NewsProperties>> GetLatestNews()
        {
            try
            {
                var result = await _httpClient.GetAsync(
                    $"https://data-api.coindesk.com/news/v1/article/list?lang=EN&limit=20&api_key={apiKey}"
                );

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var news = JsonConvert.DeserializeObject<LatestNews.Root>(content);
                    if (news != null)
                    {
                        return news?.Data;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
                return null;
            }
        }
    }
}
