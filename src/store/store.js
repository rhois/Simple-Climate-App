import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import pageDashboard from '../components/page-dashboard/reducer';

const reducer = combineReducers({
  pageDashboard,
  routing: routerReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //eslint-disable-line
  applyMiddleware(thunk),
);

export default store;
