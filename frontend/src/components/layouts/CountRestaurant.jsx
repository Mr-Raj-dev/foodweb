import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../actions/restaurantAction";

const pluralize = (count, singular, plural) =>
  count === 1 ? singular : plural;

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading, error, count, showVegOnly, pureVegRestaurantsCount } =
    useSelector(({ restaurants }) => ({
      loading: restaurants.loading,
      error: restaurants.error,
      count: restaurants.count,
      showVegOnly: restaurants.showVegOnly,
      pureVegRestaurantsCount: restaurants.pureVegRestaurantsCount,
    }));

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantCount = useMemo(
    () => (showVegOnly ? pureVegRestaurantsCount : count),
    [showVegOnly, pureVegRestaurantsCount, count]
  );

  const restaurantLabel = useMemo(
    () => pluralize(restaurantCount, "Restaurant", "Restaurants"),
    [restaurantCount]
  );

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant Count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRastro">
          <span className="Restro">
            {restaurantCount} {restaurantLabel}
          </span>
        </p>
      )}
      <hr />
    </div>
  );
}
