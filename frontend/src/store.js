import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import { authReducer } from "./reducer/userReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    auth: authReducer,
});

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

const middleware = [thunk];

const store = createStore(
    reducer,
    composeenhancers(applyMiddleware(...middleware))
);

export default store; 