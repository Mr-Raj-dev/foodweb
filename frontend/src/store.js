import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import { thunk } from "redux-thunk";  // Import named export from redux-thunk
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import {
    authReducer,
    forgotPasswordReducer,
    userReducer,
} from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";

// Combine reducers
const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
});

// Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;