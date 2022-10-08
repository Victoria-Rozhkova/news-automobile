export const newAPI = {
  async getNews(category) {
    const data = await fetch(
      `https://inshorts.deta.dev/news?category=${category}`
    );
    const result = await data.json();
    return result.data;
  },
};
