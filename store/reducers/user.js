const initialState = { name: "", lastname: "", email: "", id: "" };

function userReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "ADD_DETAILS") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      name: (state.name = action.payload.name),
      lastname: (state.lastname = action.payload.lastname),
      email: (state.email = action.payload.email),
      id: (state.id = action.payload.id),
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

export default userReducer;
