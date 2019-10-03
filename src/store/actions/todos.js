// we want the todos to come from a call to the api, so here we define first thunk
// thunk - async actions in redux
const API = process.env.REACT_APP_API
// just use this naming structure, don't need to have dotenv, bc built into React

// define action creator for fetch
const get = (payload) => {
  return {
    type: 'FETCH_TODOS',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_TODOS',
    payload,
  };
};

// define thunks
// thunk for handling async fetch - function - return async call - when finished - do something
// that will be injected by our middleware

const fetchTodos = () => (dispatch) => {
  return fetch(`${API}/api/v1/todo`)
  .then((results) => results.json())
  .then((data) => dispatch(get(data)));
};
// ^^ this is asynchronous - call to store, but store will go get from DB
// so dispatch action to the redux store, before dispatching action
// want to wait until finish with fetch
// we want to have all our complexit right here, no where else to asynch handling all the object
// delay them when possible
// rather than in component logic, handled in store

const addTodos = (todo) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/todo`, options)
  .then((results) => results.json())
  .then((data) => dispatch(add(data)));
};

export default {
  fetchTodos,
  addTodos,
};