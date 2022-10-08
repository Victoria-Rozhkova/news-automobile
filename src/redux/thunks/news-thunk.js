import { setNews } from "../actions/news-actions";
import { newAPI } from "../api/news-api";

export const getNews = () => async (dispatch) => {
  const data = await newAPI.getNews("automobile");
  dispatch(setNews(data));
};
