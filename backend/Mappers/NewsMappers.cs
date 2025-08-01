using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;

namespace backend.Mappers
{
    public static class NewsMappers
    {
        public static NewsDTO ToNewsDTOFromNews(this LatestNews.NewsProperties news)
        {
            return new NewsDTO
            {
                Title = news.TITLE,
                Author = news.AUTHORS,
                Url = news.URL,
                PublishedOn = news.PUBLISHED_ON,
            };
        }
    }
}
