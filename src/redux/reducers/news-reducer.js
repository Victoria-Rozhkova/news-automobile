import { isLiked } from "../../utils/isLiked";
import {
  DELETE_ITEM,
  SET_LIKE,
  SET_NEWS,
  TOGGLE_FILTER,
  TOGGLE_IS_LOADING,
} from "../actions/news-actions";

const initialState = {
  news: [],
  likedNews: [],
  isFilter: false,
  isLoading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_LIKE:
      return {
        ...state,
        likedNews: isLiked(state.likedNews, action.payload),
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        isFilter: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        news: state.news.filter((el) => el.id !== action.payload),
        likedNews: state.likedNews.filter((el) => el.id !== action.payload),
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
