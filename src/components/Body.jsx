import React from "react";
import { Button } from "./ui/button";
import Card from "./Card";
import resList from "../utils/mockData";

function Body() {
  return (
    <div className="pt-12 px-12 bg-[#373A4D]">
      <div>
        <input
          type="text"
          placeholder="Search item"
          className="border-2 mr-5 rounded-lg ml-20 pl-2 py-1"
        />
        <Button className="py-0.5 text-md">Search</Button>
      </div>
      <div className="mt-12 gap-9 flex flex-wrap justify-center ">
        {resList.map((res) =>
          res.card.card.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => (
              <Card key={restaurant.info.id} resData={restaurant.info} />
            )
          )
        )}
      </div>
    </div>
  );
}

export default Body;
