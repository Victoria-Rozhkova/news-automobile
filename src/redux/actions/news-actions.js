export const SET_NEWS = "NEWS::SET_NEWS";
export const SET_LIKE = "NEWS::SET_LIKE";
export const TOGGLE_FILTER = "NEWS::TOGGLE_FILTER";
export const DELETE_ITEM = "NEWS::DELETE_ITEM";
export const TOGGLE_IS_LOADING = "NEWS::TOGGLE_IS_LOADING";

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
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  payload: isLoading,
});
