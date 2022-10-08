export const isLiked = (likedNews, news) => {
  const index = likedNews.indexOf(news);
  if (index === -1) {
    return [...likedNews, news];
  } else {
    return likedNews.filter((el) => el.id !== news.id);
  }
};
