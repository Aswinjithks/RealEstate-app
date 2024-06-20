import React, { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  console.log("params", searchParams);
  const [query, setQuery] = useState({
    city: searchParams.get("city") || "",
    type: searchParams.get("type") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: searchParams.get("bedroom") || 1,
  });

  const handleChange = (e) => {
    console.log("e.target.name",e.target.name);
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilter = () => {
    setSerachParams(query);
  };

  return (
    <div className="filter">
      <h1>
        Serach results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Name"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            handleChange={handleChange}
            name="type"
            id="type"
            htmlFor="type"
            defaultValue={query.type}
          >
            <option value="" id="any">
              Any
            </option>
            <option value="buy" id="buy">
              Buy
            </option>
            <option value="rent" id="rent">
              Rent
            </option>
          </select>
        </div>{" "}
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="" id="any">
              Any
            </option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>{" "}
        <div className="item">
          <label htmlFor="minPrice">Min-Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="maxPrice">Max-Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>{" "}
        <div className="item">
          <label htmlFor="bedRoom">Bedroom</label>
          <input
            type="bedRoom"
            id="bedRoom"
            name="cbedRoom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
