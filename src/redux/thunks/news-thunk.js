import { setNews, toggleIsLoading } from "../actions/news-actions";
import { newAPI } from "../api/news-api";

export const getNews = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const data = await newAPI.getNews("automobile");
  dispatch(setNews(data));
  dispatch(toggleIsLoading(false));
};
