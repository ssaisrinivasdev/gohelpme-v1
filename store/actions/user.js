import * as C from "../types/user";

const addDetails = ({ name, lastname, email }) => ({
  type: C.ADD_DETAILS,
  payload: { name, lastname, email },
});

// const addLName = (lname) => ({
//   type: C.ADD_LNAME,
//   payload: {lname},
// });

export { addDetails };
