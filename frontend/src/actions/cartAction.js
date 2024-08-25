import axios from "axios";
import {
    ADD_TO_CART,
    FETCH_CART,
    UPDATE_CART_ITEM,
    REMOVE_ITEM_CART,
    CLEAR_CART,
} from "../constants/cartConstant";

// Fetch Cart Items
export const fetchCartItems = (alert) => async (dispatch) => {
    try {
        const response = await axios.get("/api/v1/eats/cart/get-cart");
        if (response.data && response.data.data) {
            dispatch({
                type: FETCH_CART,
                payload: response.data.data,
            });
        } else {
            console.error("Unexpected response format: ", response);
            if (alert) {
                alert.info("Cart is empty or data is not available");
            }
        }
    } catch (error) {
        console.error("Fetch cart error: ", error);
        if (alert) {
            alert.info("Cart is hungry");
        }
    }
};

// Add Item to Cart
export const addItemToCart = (foodItemId, restaurant, quantity, alert) => async (dispatch, getState) => {
    try {
        const { user } = getState().auth;
        const response = await axios.post("/api/v1/eats/cart/add-to-cart", {
            userId: user._id,
            foodItemId,
            restaurantId: restaurant,
            quantity,
        });
        if (response.data && response.data.cart) {
            alert.success("Item added to cart", response.data.cart);
            dispatch({
                type: ADD_TO_CART,
                payload: response.data.cart,
            });
        } else {
            console.error("Unexpected response format: ", response);
            if (alert) {
                alert.info("Unable to add item to cart");
            }
        }
    } catch (error) {
        console.error("Add to cart error: ", error);
        if (alert) {
            alert.error(error.response ? error.response.data.message : error.message);
        }
    }
};

// Update Cart Quantity
export const updateCartQuantity = (foodItemId, quantity, alert) => async (dispatch, getState) => {
    try {
        const { user } = getState().auth;
        if (typeof foodItemId === "object") {
            foodItemId = foodItemId._id;
        }
        const response = await axios.post("/api/v1/eats/cart/update-cart-item", {
            userId: user._id,
            foodItemId,
            quantity,
        });
        if (response.data && response.data.cart) {
            dispatch({
                type: UPDATE_CART_ITEM,
                payload: response.data.cart,
            });
        } else {
            console.error("Unexpected response format: ", response);
            if (alert) {
                alert.info("Unable to update cart item");
            }
        }
    } catch (error) {
        console.error("Update cart error: ", error);
        if (alert) {
            alert.error(error.response ? error.response.data.message : error.message);
        }
    }
};

// Remove Item from Cart
export const removeItemFromCart = (foodItemId) => async (dispatch, getState) => {
    try {
        const { user } = getState().auth;
        if (typeof foodItemId === "object") {
            foodItemId = foodItemId._id;
        }
        const response = await axios.delete("/api/v1/eats/cart/delete-cart-item", {
            data: { userId: user._id, foodItemId },
        });
        if (response.data) {
            dispatch({
                type: REMOVE_ITEM_CART,
                payload: response.data,
            });
        } else {
            console.error("Unexpected response format: ", response);
            if (alert) {
                alert.info("Unable to remove item from cart");
            }
        }
    } catch (error) {
        console.error("Remove item from cart error: ", error);
        if (alert) {
            alert.error(error.response ? error.response.data.message : error.message);
        }
    }
};

// cartActions.js
export const clearCart = () => (dispatch) => {
    localStorage.removeItem('cart'); // Optionally clear cart from local storage
    dispatch({
        type: CLEAR_CART, // Make sure this matches the action type in your reducer
    });
};

