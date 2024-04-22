import {combineReducers} from "redux";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers ({
    studentReducer,
})

export default rootReducer;