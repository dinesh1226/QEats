import { ITEM_URL } from "@/utils/constants";
import React from "react";
import { Button } from "./ui/button";

function ItemList({ items }) {
  // console.log(items);
  return (
    <div className="relative">
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="text-left mb-5 flex justify-between pb-2 border-b-[1px] border-slate-300 w-[700px]"
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-semibold text-base">
                Rs.{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="w-[500px] text-slate-600">
              {item.card.info.description}
            </p>
          </div>
          <div>
            {item?.card?.info?.imageId ? (
              <img
                className="w-32  aspect-square rounded-md"
                src={ITEM_URL + item?.card?.info?.imageId}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          <div className="absolute right-0">
            <Button className="text-sm">ADD +</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
