import { useState } from "react";
import "./searchBar.scss";
import {Link} from "react-router-dom"

const types = ["buy", "rent"];

function SearchBar() {

  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 10000000,
  });
  const [error, setError] = useState("");
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleMinPriceChange = (e) => {
    e.target.value  = Math.max(0, e.target.value)
    setQuery((prev) => ({ ...prev, minPrice:e.target.value  }));
  }
  const handleMaxPriceChange = (e) => {
    e.target.value  = Math.max(0, e.target.value)
    setQuery((prev) => ({ ...prev, maxPrice: e.target.value }));
  }
  const handleCityChange = (e) => {
    const newValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/; // Allow letters and spaces only
    if (regex.test(newValue)) {
      setQuery((prev) => ({ ...prev, city: newValue }));
      setError(""); // Clear the error message
    }else { 
      setError("Please enter only letters and spaces."); // Set the error message
      }
  }
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="city" placeholder="City" onChange={handleCityChange} />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          
          placeholder="Min Price"
          onChange={handleMinPriceChange}
          />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleMaxPriceChange}
          />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
        <button disabled={!!error} >
          <img src="/search.png" alt="" />
        </button>
        </Link>
      </form>
          {error && <p className="error">{error}</p>} {/* Display error message */}
    </div>
  );
}

export default SearchBar;
