import React from "react";
import { CDN_URL } from "@/utils/constants";

function Card({ resData }) {
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div
      className={`w-60 mb-4 hover:scale-[0.95] hover:transition cursor-pointer bg-white rounded-lg border-2 border-t-0`}
    >
      <div key={id} className="mb-4">
        <img
          className="w-full h-36 object-cover rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={`Image for ${name}`}
        />
        <div className="pt-3 pl-4 pr-2">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{cuisines.join(", ")}</p>
          <p>{avgRating} stars</p>
          <p>{costForTwo}</p>
          <p>{sla.deliveryTime} min</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
