import axios from "axios";
import type { News } from "../Model/News";

const newsUrl = import.meta.env.VITE_APP_NEWS_API_URL;

export const FetchLatestNews = async () => {
  try {
    var results = await axios.get<News[]>(newsUrl, { withCredentials: true });
    console.log(newsUrl);
    return results.data;
  } catch (err: any) {
    console.log(err.Message);
  }
};
