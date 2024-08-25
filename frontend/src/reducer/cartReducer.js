import {
    ADD_TO_CART,
    CLEAR_CART,
    FETCH_CART,
    REMOVE_ITEM_CART,
    UPDATE_CART_ITEM
} from "../constants/cartConstant";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cart'))?.items || [],
    restaurant: JSON.parse(localStorage.getItem('cart'))?.restaurant || {},
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // When items are added to the cart, update the restaurant and cartItems
            return {
                ...state,
                restaurant: action.payload.restaurant || state.restaurant,
                cartItems: action.payload.items || state.cartItems,
            };

        case UPDATE_CART_ITEM:
            // When cart items are updated, replace the cartItems
            return {
                ...state,
                cartItems: action.payload.items || state.cartItems,
            };

        case FETCH_CART:
            // When fetching cart, update the restaurant and cartItems with fetched data
            return {
                ...state,
                restaurant: action.payload.restaurant || state.restaurant,
                cartItems: action.payload.items || state.cartItems,
            };

        case REMOVE_ITEM_CART:
            // Handle the removal of an item from the cart
            if (!action.payload || !action.payload.cart) {
                // If no cart data provided, clear the cart
                return {
                    ...state,
                    cartItems: []
                };
            } else {
                // Otherwise, update the cart with the provided items
                return {
                    ...state,
                    cartItems: action.payload.cart.items || state.cartItems,
                };
            }

        case CLEAR_CART:
            // Clear all items from the cart
            return {
                ...state,
                cartItems: []
            };

        default:
            // Return the current state for unrecognized actions
            return state;
    }
};
