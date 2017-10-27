import React from 'react';
import { connect } from 'react-redux';
import Topic from './Topic';

const TopicsList = props => (
  <div>

    {props.topics.data ?
        props.topics.data.map((topic) => (
            <div key={topic.id}>
                <Topic
                    name={topic.name}
                    topicId={topic.id}
                />
            </div>
        ))
        :
        null
    }

    </div>
);

const mapStateToProps = (state) => {
    return {
        topics: state.topics.topics,
        filter: state.filter,
    };
  };

  export default connect(mapStateToProps)(TopicsList);
