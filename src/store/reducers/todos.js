// reducers are a function - control state of store specifically for todos
export default (state = [], action) => {
  // two things always passed into reducer
  //state and action object (type and payload (payload optional))
  switch(action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODOS":
      return [...state, action.payload];
    default:
      return state;// just return because didn't change anything and want to return exact thing passed in
  }
};
