// in projects npm install redux-thunk library
// this function gets put into redux which handles it
export default (store) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
}