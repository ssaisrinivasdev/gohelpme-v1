import * as C from "../types/token";

const addToken = ({ token }) => ({
  type: C.ADD_TOKEN,
  payload: { token },
});

const removeToken = () => ({
  type: C.REMOVE_TOKEN,
  payload: "",
});

export { addToken, removeToken };
