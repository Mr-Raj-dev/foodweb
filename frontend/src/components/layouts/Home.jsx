import React, { useEffect } from "react";
import CountRestaurant from "./CountRestaurant";
import Restaurant from "./Restaurant";
import { getRestaurants } from "../../actions/restaurantAction";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <>
      <CountRestaurant />
      <section>
        <div className="sort">
          <button className="sort_veg p-3">Pure Veg</button>
          <button className="sort_rev p-3">Sort By Review</button>
          <button className="sort_rate p-3">Sort By Ratings</button>
        </div>
        <div className="row mt-4">
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </div>
      </section>
    </>
  );
}
