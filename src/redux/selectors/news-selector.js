export const newsSelector = (state) => {
  return state.news.news;
};
export const likedNewsSelector = (state) => {
  return state.news.likedNews;
};
export const isFilterSelector = (state) => {
  return state.news.isFilter;
};
export const isLoadingSelector = (state) => {
  return state.news.isLoading;
};