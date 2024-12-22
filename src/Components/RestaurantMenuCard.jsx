import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Shimmer from "./Shimmer";

const RestaurantMenuCard = ({ itemsList }) => {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addItem(item));
  };

  console.log(itemsList, "itemss");

  return (
    <div>
      {itemsList?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-4   shadow-lg w-full transition ease-in-out duration-300 hover:border hover:border-solid hover:border-1 bg-gray-50 rounded-3xl"
        >
          <div className="flex flex-row justify-between space-x-7 w-full">
            <div className="w-6/12 p-4">
              <h1 className="text-xl font-bold">{item?.card?.info?.name}</h1>
              <h1 className="text-md font-bold m-2">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </h1>
              <h4 className="text-sm font-bold m-2">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}

                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 >
                  0 && (
                  <span className="text-sm text-gray-400">
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                )}
              </h4>
              <h5 className="text-sm text-gray-400">
                {item?.card?.info?.description}
              </h5>
            </div>

            <div className="flex flex-col items-center p-4 relative">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-64 h-48  rounded-3xl"
                alt="food-image"
              />

              <button
                className="font-bold text-green-600 bg-white rounded-lg px-8 py-2 absolute bottom-2 hover:bg-gray-200"
                onClick={() => handleAddCart(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
