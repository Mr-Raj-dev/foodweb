import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const restaurants = [
  "Haldiram's",
  "Mani's Dum Biryani",
  "Dindigul Thalappakatti",
  "KFC",
  "Impire restaurant",
  "Imperial Restaurant Since 1954",
  "Meghana's Biryani",
  "Daily Sushi's",
  "Singh saab Chhole's",
  "The Gulmohar Bar",
  "FML - Food Music Love",
  "Tales & Spirits",
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(restaurants);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery) {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.toLowerCase().includes(searchQuery)
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(restaurants);
    }
  };

  const handleClick = (restaurant) => {
    switch (restaurant) {
      case "Haldiram's":
        navigate("/eats/stores/66716cb0e1a78e67dc8c8dbf/menus");
        break;
      case "Mani's Dum Biryani":
        navigate("/eats/stores/6671719fe1a78e67dc8c8dce/menus");
        break;
      case "Dindigul Thalappakatti":
        navigate("/eats/stores/667167a4a0215dd827e9d81e/menus");
        break;
      case "KFC":
        navigate("/eats/stores/667164e6bd4249c429fee778/menus");
        break;
      case "Impire restaurant":
        navigate("/eats/stores/66716f8c945c5a8b80d4631e/menus");
        break;
      case "Imperial Restaurant Since 1954":
        navigate("/eats/stores/667176756b69467538f24983/menus");
        break;
      case "Meghana's Biryani":
        navigate("/eats/stores/66717b16e1a78e67dc8c8df1/menus");
        break;
      case "Daily Sushi's":
        navigate("/eats/stores/667158dec45b2f6c5ad027d3/menus");
        break;
      case "Singh saab Chhole's":
        navigate("/eats/stores/66a92121380eb9322f9bdf14/menus");
        break;
      case "The Gulmohar Bar":
        navigate("/eats/stores/66a922f0380eb9322f9bdf16/menus");
        break;
      case "FML - Food Music Love":
        navigate("/eats/stores/66a9239f380eb9322f9bdf18/menus");
        break;
      case "Tales & Spirits":
        navigate("/eats/stores/66a92489380eb9322f9bdf19/menus");
        break;
      default:
        console.log("Restaurant not found");
    }
    setQuery(""); // Clear the search bar
  };

  return (
    <div style={{ position: "relative", maxWidth: "400px", margin: "auto" }}>
      <form>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for your favorite Restaurant ..."
            id="search_field"
            className="form-control"
            value={query}
            onChange={handleSearch}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </form>

      {query && (
        <ul
          style={{
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            listStyleType: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((restaurant, index) => (
              <li
                key={index}
                style={{
                  padding: "5px 0",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => handleClick(restaurant)}
              >
                {restaurant}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
