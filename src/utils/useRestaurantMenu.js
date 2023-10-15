import { useState, useEffect } from "react";
import { Swiggy_resturant_menu } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getResturantMenu();
  }, []);

  async function getResturantMenu() {
    const data = await fetch(
      Swiggy_resturant_menu[0] + id + Swiggy_resturant_menu[1]
    );
    const json_data = await data.json();
    setRestaurant(json_data.data);
  }

  return restaurant;
};

export default useRestaurantMenu;
