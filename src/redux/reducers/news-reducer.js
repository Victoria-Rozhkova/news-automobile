import { isLiked } from "../../utils/isLiked";
import { SET_LIKE, SET_NEWS, TOGGLE_FILTER } from "../actions/news-actions";

const initialState = {
  news: [],
  likedNews: [],
  isFilter: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_LIKE:
      console.log(state.likedNews);
      return {
        ...state,
        likedNews: isLiked(state.likedNews, action.payload),
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        isFilter: action.payload,
      };
    default:
      return state;
  }
};
