//  Now with using redux toolkit we can get rid of all these imports manually bcz rtk will automatically
// combine our reducers, apply middleware(thunk), compose dev tools by using configureStore

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// using RTK
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
