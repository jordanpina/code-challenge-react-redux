
export const followTopic = topicId => ({
  type: 'FOLLOW_TOPIC',
  topicId,
});


export const unfollowTopic = topicId => ({
  type: 'UNFOLLOW_TOPIC',
  topicId,
});
