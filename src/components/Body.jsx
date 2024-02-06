import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Card from "./Card";
import { API_URL } from "@/utils/constants";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Conditionalrendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-12 mx-16">
      <div>
        <input
          type="text"
          placeholder="Search item"
          className="border-2 mr-3 rounded-lg ml-28 pl-2 py-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button
          className="py-0.5 text-md"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // console.log(filteredRestaurants);
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </Button>
        {/* <Button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              res.info.avgRating > 4;
            });
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
          className="py-0.5 text-md ml-5"
        >
          Top Rated
        </Button> */}
      </div>
      <div className="mt-12 gap-9 flex flex-wrap justify-center">
        {filteredRestaurants.map((res) => (
          <Card key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
}

export default Body;
