import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../actions/restaurantAction";

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading, error, count } = useSelector((state) => state.restaurants); // Adjust the state slice name as needed

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant Count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRastro">
          <span className="Restro">{count} Restaurants</span>
        </p>
      )}
      <hr />
    </div>
  );
}
