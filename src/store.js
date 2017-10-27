import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { getArticles, getTopics } from './api/apiCalls';
import followReducer from './reducers/followReducer';
import articlesReducer from './reducers/articlesReducer';
import topicsReducer from './reducers/topicsReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  filter: followReducer,
});

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, middleware);


store.dispatch(getArticles);
store.dispatch(getTopics);

export default store;
