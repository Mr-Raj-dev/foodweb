// RestaurantPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function RestaurantPage() {
  const { name } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <p>Welcome to {name} restaurant page.</p>
    </div>
  );
}
