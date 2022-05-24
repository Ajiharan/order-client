import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

import countryReducer from "./country/countrySlice";
import autoFillReducer from "./autoField/autoFillSlice";
import userReducer from "./user/userSlice";
import addressReducer from "./address/addressSlice";
import interestReducer from "./interest/interestSlice";
import OrderReducer from "./order/orderSlice";

const appReducer = combineReducers({
  country: countryReducer,
  autoFill: autoFillReducer,
  user: userReducer,
  address: addressReducer,
  interest: interestReducer,
  order: OrderReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
