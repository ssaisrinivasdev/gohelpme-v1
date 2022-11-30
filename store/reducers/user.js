const initialState = { name: "" };

function userReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "ADD_USER") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      name: (state.name = action.payload),
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

export default userReducer;
