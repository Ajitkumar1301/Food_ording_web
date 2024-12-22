import React, { useContext, useEffect, useState } from "react";
import "./hero.css";
import resList from "../utils/mockData";
import ResCard from "./ResCard";
import { MAIN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userData from "../utils/userContext";
const Hero = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { user } = useContext(userData);

  console.log(user);

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
      <div className="m-12">
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="w-64 bg-slate-300 rounded-md p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-slate-300 px-4 py-2 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <button
            className="bg-slate-300 px-4 py-1 rounded-lg font-medium text-sm"
            onClick={() => setFilteredRestaurant(listOfRestaurants)}
          >
            All
          </button>
          <button
            className="bg-slate-300 px-4 py-1 rounded-lg font-medium text-sm"
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
      <div className="flex flex-wrap m-8">
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
          <div className="flex justify-center  text-3xl font-bold w-full">
            No Restaurant Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
