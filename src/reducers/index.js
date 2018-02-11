import {combineReducers} from "redux";
import RepertoarReducer from "./reducers_repertoar";


const rootReducer = combineReducers({
    repertoar: RepertoarReducer
});

export default rootReducer;