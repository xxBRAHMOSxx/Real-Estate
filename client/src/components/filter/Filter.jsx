import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom"

function Filter() {
  const [searchParams, setSearchParams ] = useSearchParams();
  const [error, setError] = useState("");
  const [query,setQuery] = useState({
    type:searchParams.get("type") || "",
    city:searchParams.get("city") || "",
    property:searchParams.get("property") || "",
    minPrice:searchParams.get("minPrice") || 0,
    maxPrice:searchParams.get("maxPrice") || 10000000,
    bedroom:searchParams.get("bedroom") || 1,
  }) 

  const handleClick = (e)=>{
    setQuery({
      ...query,
      [e.target.name] : e.target.value
    })
  }

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

  const handleFilter = () =>{
    setSearchParams(query)
  }

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city") }</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input onChange={handleCityChange}
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleClick} defaultValue={query.type}> 
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" onChange={handleClick} defaultValue={query.property}>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input onChange={handleMinPriceChange} defaultValue={query.minPrice}
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input onChange={handleMaxPriceChange} defaultValue={query.maxPrice}
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input onChange={handleClick} defaultValue={query.bedroom}
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button onClick={handleFilter} disabled={!!error}>
          <img src="/search.png" alt="" />
        </button>
      </div>
      {error && <p className="error">{error}</p>} {/* Display error message */}

    </div>
  );
}

export default Filter;
