import axios from 'axios';
import { ARTICLE_URL, TOPIC_URL } from '../../apiUrls/apiUrls';


export const getArticles = (dispatch) => {
  dispatch({ type: 'FETCH_ARTICLES_START' });
  axios.get(ARTICLE_URL)
    .then((response) => {
      dispatch({ type: 'RECIEVE_ARTICLES', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_ARTICLES_ERROR', payload: err });
    });
};

export const getTopics = (dispatch) => {
  dispatch({ type: 'FETCH_TOPICS_START' });
  axios.get(TOPIC_URL)
    .then((response) => {
      dispatch({ type: 'RECIEVE_TOPICS', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_TOPICS_ERROR', payload: err });
    });
};

