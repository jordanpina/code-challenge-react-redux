const initialFollowState = {
  unfollowedTopics: [],
};

export default (state = initialFollowState, action) => {
  switch (action.type) {
    case 'UNFOLLOW_TOPIC':
      if (state.unfollowedTopics.includes(action.topicId)) return state;
      return {
        ...state,
        unfollowedTopics: [...state.unfollowedTopics, action.topicId],
      };
    case 'FOLLOW_TOPIC':
      const topicIdIndex = state.unfollowedTopics.indexOf(action.topicId);
      return {
        ...state,
        unfollowedTopics: [...state.unfollowedTopics.slice(0, topicIdIndex),
          ...state.unfollowedTopics.slice(topicIdIndex + 1)],
      };
    default:
      return state;
  }
};
