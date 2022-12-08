import * as C from "../types/user";

const addDetails = ({ name, lastname, email, id }) => ({
  type: C.ADD_DETAILS,
  payload: { name, lastname, email, id },
});

const removeDetails = () => ({
  type: C.REMOVE_DETAILS,
  payload: {},
});

export { addDetails, removeDetails };
