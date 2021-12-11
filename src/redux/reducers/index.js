import { combineReducers } from "redux";
import auth from "./auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
});

export default reducer;