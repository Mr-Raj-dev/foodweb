import {
    ADD_TO_CART,
    CLEAR_CART,
    FETCH_CART,
    REMOVE_ITEM_CART,
    UPDATE_CART_ITEM
} from "../constants/cartConstant";

// Function to get cart items from localStorage
const getCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
};

// Initialize state from localStorage
const initialState = {
    cartItems: getCartFromLocalStorage(), // Load cartItems from localStorage
    restaurant: {}
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // When items are added to the cart, update the restaurant and cartItems
            const newAddCartItems = action.payload.items;
            localStorage.setItem('cartItems', JSON.stringify(newAddCartItems)); // Save to localStorage
            return {
                ...state,
                restaurant: action.payload.restaurant,
                cartItems: newAddCartItems,
            };

        case UPDATE_CART_ITEM:
            // When cart items are updated, replace the cartItems
            const updatedCartItems = action.payload.items;
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to localStorage
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        case FETCH_CART:
            // When fetching cart, update the restaurant and cartItems with fetched data
            const fetchedCartItems = action.payload.items;
            localStorage.setItem('cartItems', JSON.stringify(fetchedCartItems)); // Save to localStorage
            return {
                ...state,
                restaurant: action.payload.restaurant,
                cartItems: fetchedCartItems,
            };

        case REMOVE_ITEM_CART:
            // Handle the removal of an item from the cart
            let updatedItemsAfterRemoval = [];
            if (action.payload.cart === undefined) {
                // If no cart data provided, clear the cart
                updatedItemsAfterRemoval = [];
            } else {
                // Otherwise, update the cart with the provided items
                updatedItemsAfterRemoval = action.payload.cart.items;
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedItemsAfterRemoval)); // Save to localStorage
            return {
                ...state,
                cartItems: updatedItemsAfterRemoval,
            };

        case CLEAR_CART:
            // Clear all items from the cart
            localStorage.removeItem('cartItems'); // Remove cartItems from localStorage
            return {
                ...state,
                cartItems: []
            };

        default:
            // Return the current state for unrecognized actions
            return state;
    }
};
