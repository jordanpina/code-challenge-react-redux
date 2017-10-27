export default (articles, unfollowedTopics) => {
  if (!articles) return null;
  return articles.filter((article) => {
    const articleTopics = article.topics;
    for (let i = 0; i < articleTopics.length; i += 1) {
      if (unfollowedTopics.includes(articleTopics[i].id)) return false;
    }

    return true;
  });
};
