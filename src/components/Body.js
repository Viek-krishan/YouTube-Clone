import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./RestaurantCard";
import { SwiggyAPI, SwiggyAPI2 } from "../config";
import Shimmer from "../utils/shimmer";
import { filterResturant } from "../utils/helper";
import useOnline from "../utils/useOnline";

function Body() {
  //state variables
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(["No item"]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    GetRestaurants();
  }, []);

  async function GetRestaurants() {
    const data = await fetch(SwiggyAPI2);
    const jsonData = await data.json();
    setAllRestaurants(jsonData.data.cards);
    setFilteredRestaurants(jsonData.data.cards);
  }

  const isOnline = useOnline();

  if (isOnline !=true) {
    return (
      <div>
        <h1>🔴 Ooops, Seems like you are offline</h1>
      </div>
    );
  }

  if (filteredRestaurants.length === 0) {
    return <h1>No Restaurant Match Found</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="SearchBar m-10 p-1 w-96 h-10 flex justify-around">
        <input
          type="text"
          className="searchInput w-full rounded-lg border-none"
          placeholder="Search the Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredData = filterResturant(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {filteredRestaurants.map((foodItem) => {
          if (!foodItem.card?.card?.info) {
            return null;
          }
          return (
            <Link
              className="no-underline"
              to={"/restaurant/" + foodItem.card?.card?.info?.id}
              key={foodItem.card?.card?.info?.id}
            >
              <Card {...foodItem.card?.card?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
