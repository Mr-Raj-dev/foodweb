import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer,
});

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ||
    compose;

const middleware = [thunk];

const store = createStore(
    reducer,
    composeenhancers(applyMiddleware(...middleware))
);

export default store; 