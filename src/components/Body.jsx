import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Card from "./Card";
import { API_URL } from "@/utils/constants";
import Shimmer from "./Shimmer";

function Body() {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    // return <Shimmer />;
    return <h1>gg</h1>;
  }

  return (
    <div className="pt-12 px-12 bg-[#373A4D]">
      <div>
        <input
          type="text"
          placeholder="Search item"
          className="border-2 mr-5 rounded-lg ml-20 pl-2 py-1"
        />
        <Button className="py-0.5 text-md">Search</Button>
        <Button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              res.info.avgRating > 4;
            });
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
          className="py-0.5 text-md ml-5"
        >
          Top Rated
        </Button>
      </div>
      <div className="mt-12 gap-9 flex flex-wrap justify-center ">
        {listOfRestaurants.map((res) => (
          <Card key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
}

export default Body;
