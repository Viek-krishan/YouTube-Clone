import { useEffect, useState } from "react";
import { SwiggyAPI } from "../config";

const useGetRestaurant = () => {
  const [restaurant, setRestaurant] = useState(["No item"]);

  useEffect(() => {
    GetRestaurants();
  }, []);

  async function GetRestaurants() {
    const data = await fetch(SwiggyAPI);
    const jsonData = await data.json();
    setRestaurant(jsonData.data.cards);
  }

  return restaurant;
};

export default useGetRestaurant;
