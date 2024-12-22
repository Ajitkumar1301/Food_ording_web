import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import starimg from "../assets/star.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import RestarurantAccordian from "./RestarurantAccordian";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resinfo = useRestaurantMenu(resId);
  // const { cards } = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const Categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const RestaurantTitle = resinfo?.cards[0]?.card?.card?.text;

  const {
    avgRatingString,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
    sla,
    areaName,
  } = resinfo?.cards[2]?.card?.card?.info || [];

  return (
    <div className=" flex px-96">
      <div className="mt-12 w-full">
        <h1 className="text-2xl text-left font-bold">{name}</h1>
        {/* <h2>Menu Items</h2> */}
        <div className="border-4 border-solid  shadow-lg rounded-3xl p-6 mt-6 ">
          <div className="flex space-x-2">
            <img src={starimg} className="w-5 h-5 mt-1" alt="star-rate" />
            <h2 className="text-base font-bold">
              {avgRatingString} ({totalRatingsString})
            </h2>{" "}
            <span className="text-lg font-bold">-</span>
            <h2 className="text-base font-bold">{costForTwoMessage}</h2>
          </div>
          <div>
            <h1 className="text-base font-semibold text-orange-600">
              {cuisines?.join(",")}
            </h1>
          </div>
          <div className="flex space-x-2 mt-2">
            <div className="flex flex-col items-center mt-2">
              <div className="dot-line"></div>
              <div className="line-dot"></div>
              <div className="dot-line"></div>
            </div>
            <div>
              <div className="flex">
                <h2 className="text-sm font-semibold">outlet</h2>
                <span className="text-xs mx-3 text-orange-500 font-semibold mt-1">
                  {areaName}
                </span>
              </div>

              <h3 className="text-sm font-semibold mt-3">
                {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-8">
          {Categories?.length > 0 ? (
            Categories?.map((item, i) => (
              <div key={i}>
                <RestarurantAccordian
                  data={item?.card?.card}
                  showItems={i === showIndex}
                  setShowIndex={() =>
                    setShowIndex((prevIndex) => (prevIndex === i ? -1 : i))
                  }
                />
              </div>
            ))
          ) : (
            <>
              <Shimmer />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
