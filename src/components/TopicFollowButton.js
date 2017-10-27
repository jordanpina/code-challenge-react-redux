import React from 'react';
import { connect } from 'react-redux';
import { unfollowTopic, followTopic } from '../actions';


const TopicFollowButton = props => (

  <div className="follow-btn-container">

    {
      props.unfollowedList.includes(props.topicId) ?

        <button
          className="follow-btn"
          onClick={() => {
            props.dispatch(followTopic(props.topicId));
          }}
        >Follow
  </button>
        :
        <button
          className="unfollow-btn"
          onClick={() => {
            props.topicLength - props.unfollowedList.length > 1 ?
              props.dispatch(unfollowTopic(props.topicId))
              :
              null

          }}
        >Unfollow
  </button>

    }

  </div>

);


const mapStateToProps = state => ({
  topicLength: state.topics.topics.data.length,
  unfollowedList: state.filter.unfollowedTopics,
});

export default connect(mapStateToProps)(TopicFollowButton);
