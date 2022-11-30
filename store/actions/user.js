import * as C from "../types/user";

const addName = (input) => ({
  type: C.ADD_USER,
  payload: { input },
});

const removeName = () => ({
  type: C.REMOVE_USER,
  payload: "",
});

export { addName, removeName };
