//Reducer for managing authentication related state

import { CLEAR_ERRORS } from "../constants/restaurantConstant";
import {
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_FAIL,
}
    from "../constants/userConstant";

export const authReducer = (
    state = {
        user: null,
        loading: false,
        isAuthenticated: false,
        data: {},
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
            };

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,

            };

        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
