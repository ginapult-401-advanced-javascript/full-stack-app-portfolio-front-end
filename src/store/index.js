import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';// allows browser dev tools to see what's in the store

import thunk from './middleware/thunk';
// import thunk from 'redux-thunk'
// import todos from './reducer/todos - takes in payloads and actions and modifies state
import todos from './reducers/todos';
// process will be same for most part for every project

const reducers = combineReducers({ 
  todos,
});//what our state looks like in our store

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
// this sets our store up, we input it into our app
// get provider wrap around components with access to store
// to opt into store use connect function in componenets
// npm install redux (stores, reducers and apply middlware) react-redux (to use redux)
// npm install --save-dave redux-devtools-extension