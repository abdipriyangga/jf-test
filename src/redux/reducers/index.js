import { combineReducers } from "redux";
import auth from "./auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "./users";
import products from "./products";
const persistAuth = {
  storage,
  key: "auth",
};
const persistUsers = {
  storage,
  key: "users",
};
const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  users: persistReducer(persistUsers, users),
  products,
});

export default reducer;