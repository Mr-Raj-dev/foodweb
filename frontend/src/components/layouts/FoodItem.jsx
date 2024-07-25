import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvQ9Rxxg7dtKGh98IWaBQsyHzzkuljxOigA&s"
          alt="Pizza"
          className="card-img-top mx-auto"
        />
        {/* Heading and Description */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Veg Loaded Pizza</h5>
          <p className="fooditem_des">
            Crunchy and Cheesy veg loaded pizza served with happiness
          </p>
          <p className="card-text">
            <LiaRupeeSignSolid /> 180
            <br />
          </p>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
          >
            Add to Cart
          </button>
          <br />
          <p>
            Status:{" "}
            <span
              id="stock_status"
              className={10 > 5 ? "greenColor" : "redColor"}
            >
              {10 > 5 ? "In Stock" : "Out Of Stock"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
