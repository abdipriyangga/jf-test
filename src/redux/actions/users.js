import { http } from "../../helpers/http";
import { authLogout } from "./auth";
const { REACT_APP_URL: URL } = process.env;

const getUserDetail = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/users`);
      console.log("DATA: ", data.results);
      console.log("TOKEN: ", token);
      dispatch({
        type: "SET_GET_USERS",
        payload: data.results,
      });
    } catch (error) {
      dispatch(authLogout);
    }
  };
}

export { getUserDetail };