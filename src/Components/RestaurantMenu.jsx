import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);
  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
  const RestaurantTitle = resinfo?.cards[0]?.card?.card?.text;
  console.log(itemCards);

  return (
    <div>
      <h1>{RestaurantTitle}</h1>
      {/* <h2>Menu Items</h2> */}

      {itemCards?.length > 0 ? (
        itemCards?.map((item) => (
          <ul key={item?.card?.info?.id}>
            <li>
              {item?.card?.info?.name} - {item?.card?.info?.price}
            </li>
          </ul>
        ))
      ) : (
        <>
          <Shimmer />
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
