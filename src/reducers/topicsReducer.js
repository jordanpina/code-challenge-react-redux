const initialStateTopics = {
  fetchingTopics: false,
  fetchedTopics: false,
  topics: [],
  errorTopics: null,
};

export default (state = initialStateTopics, action) => {
  switch (action.type) {
    case 'FETCH_TOPICS_START': {
      return { ...state, fetchingTopics: true };
    }
    case 'FETCH_TOPICS_ERROR': {
      return { ...state, fetchingTopics: false, error: action.payload };
    }
    case 'RECIEVE_TOPICS': {
      return {
        ...state,
        fetchingTopics: false,
        fetchedTopics: true,
        topics: action.payload,
      };
    }
    default:
      return state;
  }
};
