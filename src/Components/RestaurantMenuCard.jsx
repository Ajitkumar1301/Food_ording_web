import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import Shimmer from "./Shimmer";

const RestaurantMenuCard = ({ itemsList }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleAddCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveCart = (item) => {
    dispatch(removeItem(item));
  };

  const getItemQuantity = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
    );
    return existingItem ? existingItem.quantity : 0;
  };

  return (
    <div>
      {itemsList?.map((item) => {
        const quantity = getItemQuantity(item);
        return (
          <div
            key={item?.card?.info?.id}
            className="m-4 shadow-lg w-full transition ease-in-out duration-300 hover:border hover:border-solid hover:border-1 bg-gray-50 rounded-3xl"
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
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
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
                  className="w-64 h-48 rounded-3xl"
                  alt="food-image"
                />

                {quantity > 0 ? (
                  <div className="flex justify-between font-bold text-green-600 w-24 px-4 py-2 bg-white rounded-lg absolute bottom-2 hover:bg-gray-200">
                    <button
                      className="font-bold text-green-600 hover:bg-gray-200"
                      onClick={() => handleRemoveCart(item)}
                    >
                      -
                    </button>
                    <div>{quantity}</div>
                    <button
                      className="font-bold text-green-600"
                      onClick={() => handleAddCart(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="font-bold text-green-600 bg-white rounded-lg px-8 py-2 absolute bottom-2 hover:bg-gray-200"
                    onClick={() => handleAddCart(item)}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCard;
