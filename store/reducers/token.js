const initialState = { token: "" };

function userReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "ADD_TOKEN") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      token: (state.token = action.payload),
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

export default tokenReducer;
