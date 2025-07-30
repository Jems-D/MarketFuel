using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Interfaces;
using backend.Models;

namespace backend.Services
{
    public class LatestNewsService : ILatestNews
    {
        public Task<List<LatestNews.NewsProperties>> GetLatestNews()
        {
            throw new NotImplementedException();
        }
    }
}
