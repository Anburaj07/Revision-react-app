import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { quizReducer } from "./questionsRedux/quizReducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({quizReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))