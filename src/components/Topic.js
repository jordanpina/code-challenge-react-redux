import React from 'react';
import TopicFollowButton from './TopicFollowButton';

const Topic = props => (
  <div className="topic">
    <h1>{props.name}</h1>
    <TopicFollowButton topicId={props.topicId} />
  </div>
);

export default Topic;

