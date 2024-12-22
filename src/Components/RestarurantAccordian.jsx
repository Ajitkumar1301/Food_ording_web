import React, { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestarurantAccordian = ({ data, showItems, setShowIndex }) => {
  // const [show, setShow] = useState(false);
  const { title, itemCards } = data;

  return (
    <div>
      <div
        onClick={() => setShowIndex()}
        className="mx-auto flex justify-between bg-gray-50  p-4 cursor-pointer shadow-lg my-4 rounded-lg"
      >
        <h4 className="font-bold">
          {title}
          <span className="text-sm font-bold text-gray-400 mx-1">
            ({itemCards?.length})
          </span>
        </h4>
        <span>{showItems ? "🡅" : "🡇"}</span>
      </div>
      {showItems && <RestaurantMenuCard itemsList={itemCards} />}
    </div>
  );
};

export default RestarurantAccordian;
