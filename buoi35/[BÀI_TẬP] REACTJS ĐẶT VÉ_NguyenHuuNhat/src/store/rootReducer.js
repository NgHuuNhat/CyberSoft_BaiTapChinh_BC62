import { combineReducers } from "redux";
import seatReducer from "./seatReducer";

const rootReducer = combineReducers({
  seatReducer,
});

export default rootReducer;
