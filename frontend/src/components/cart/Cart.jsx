import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartAction";
import { payment } from "../../actions/orderAction";

const Cart = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  // Retrieve cartItems and restaurant from Redux store
  const { cartItems, restaurant } = useSelector((state) => state.cart);

  // Fetch cart items when the component mounts
  useEffect(() => {
    dispatch(fetchCartItems(alert));
  }, [dispatch, alert]);

  // Handler for removing an item from the cart
  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id, alert));
  };

  // Handler for increasing item quantity
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) {
      alert.error("Exceeded stock limit");
    } else {
      dispatch(updateCartQuantity(id, newQty, alert));
    }
  };

  // Handler for decreasing item quantity
  const decreaseQty = (id, quantity) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCartQuantity(id, newQty, alert));
    } else {
      alert.error("Minimum Quantity Reached");
    }
  };

  // Handler for checking out
  const checkoutHandler = () => {
    dispatch(payment(cartItems, restaurant));
    // After payment, refetch cart items to reflect changes
    dispatch(fetchCartItems(alert));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <h3 className="mt-5">
            Restaurant: <b>{restaurant.name}</b>
          </h3>

          <div className="row d-flex justify-content-between cartt">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <div className="cart-item" key={item._id}>
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      <img
                        src={item.foodItem.images[0].url}
                        alt="items"
                        height="90"
                        width="115"
                      />
                    </div>
                    <div className="col-5 col-lg-3">{item.foodItem.name}</div>
                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                      <p id="card_item_price">
                        <LiaRupeeSignSolid />
                        {item.foodItem.price}
                      </p>
                    </div>
                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <div className="stockCounter d-inline">
                        <span
                          className="btn btn-danger minus"
                          onClick={() => decreaseQty(item._id, item.quantity)}
                        >
                          -
                        </span>
                        <input
                          type="number"
                          className="form-control count d-inline"
                          value={item.quantity}
                          readOnly
                        />
                        <span
                          className="btn btn-primary plus"
                          onClick={() =>
                            increaseQty(item._id, item.quantity, item.stock)
                          }
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                      <i
                        id="delete_cart_item"
                        className="fa fa-trash btn btn-danger"
                        onClick={() => removeCartItemHandler(item._id)}
                      ></i>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}
                    (Units)
                  </span>
                </p>
                <p>
                  Total:
                  <span className="order-summary-values">
                    <LiaRupeeSignSolid />
                    {cartItems
                      .reduce(
                        (acc, item) =>
                          acc + item.quantity * item.foodItem.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
