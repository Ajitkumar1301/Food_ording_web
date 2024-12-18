import React, { useEffect, useState } from "react";
import "./hero.css";
import resList from "../utils/mockData";
import ResCard from "./ResCard";
import { MAIN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Hero = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_URL);

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(filteredRestaurant, "listttt");
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="heroheading">
        <div>
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Seach
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res.info?.avgRating) > 4.5
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resContainer">
        {filteredRestaurant?.length > 0 ? (
          filteredRestaurant?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <div className="no-data">No Restaurant Found</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
