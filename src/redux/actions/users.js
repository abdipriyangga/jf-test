import { http } from "../../helpers/http";
import { authLogout } from "./auth";
const { REACT_APP_URL: URL } = process.env;

const getUserDetail = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/users`);
      console.log("DATA: ", data.results);
      dispatch({
        type: "SET_GET_USER",
        payload: data.results,
      });
    } catch (error) {
      dispatch(authLogout);
    }
  };
}

export { getUserDetail };