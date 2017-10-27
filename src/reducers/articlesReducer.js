const initialState = {
  fetchingArticles: false,
  fetchedArticles: false,
  articles: [],
  errorArticle: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_START': {
      return { ...state, fetchingArticles: true };
    }
    case 'FETCH_ARTICLES_ERROR': {
      return { ...state, fetchingArticles: false, errorArticle: action.payload };
    }
    case 'RECIEVE_ARTICLES': {
      return {
        ...state,
        fetchingArticles: false,
        fetchedArticles: true,
        articles: action.payload,
      };
    }
    default:
      return state;
  }
};
