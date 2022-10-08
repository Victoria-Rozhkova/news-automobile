export const SET_NEWS = "NEWS::SET_NEWS";
export const SET_LIKE = "NEWS::SET_LIKE";
export const TOGGLE_FILTER = "NEWS::TOGGLE_FILTER";

export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news,
});
export const setLike = (news) => ({
  type: SET_LIKE,
  payload: news,
});
export const toggleFilter = (isFilter) => ({
  type: TOGGLE_FILTER,
  payload: isFilter,
});
