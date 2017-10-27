import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import followFilter from '../followFilter/followFilter';


const ArticleList = props => (
    <div>

        {props.articles ?
            props.articles.map((article) => (
                <div key={article.id}>
                    <Article
                        title={article.title}
                        displayName={article.attribution.displayName}
                        createdAt={article.createdAt}
                        summary={article.summary}
                        likesCount={article.likesCount}
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
        articles: followFilter(state.articles.articles.data, state.filter.unfollowedTopics)
    };
};

export default connect(mapStateToProps)(ArticleList);
