import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="w-64 p-3 bg-slate-200 m-1 shadow-lg cursor-pointer min-h-96 transition ease-in-out duration-300 hover:border hover:border-solid hover:border-1 hover:border-black">
      <img
        className="w-full h-56"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />{" "}
      <h3 className="text-red-500">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};
export default ResCard;
