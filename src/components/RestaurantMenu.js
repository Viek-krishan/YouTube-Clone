import { useParams } from "react-router-dom";
import Shimmer from "../utils/shimmer";
import { IMG_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  addItems,
  addRestaurant,
  removeItem,
  removeRestaurant,
} from "../utils/FoodCartSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const Restaurant = useRestaurantMenu(id);
  console.log(Restaurant);

  const restaurant = useSelector((store) => store.FoodCart.restaurant);
  const Dispatch = useDispatch();
  const AddItems = (item) => {
    Dispatch(addItems(item));
  };
  const RemoveItems = () => {
    Dispatch(removeItem());
  };
  const handelAddRestaurant = (restaurant) => {
    if (!restaurant) {
      Dispatch(addRestaurant(restaurant));
    }
  };
  const handelRemoveRestaurant = () => {
    Dispatch(removeRestaurant());
  };

  return !Restaurant?.cards ? (
    <Shimmer />
  ) : (
    <div className="Menu-data flex justify-evenly box-border " key={117}>
      <div className="about_restaurant sticky h-fit top-10" key={116}>
        <h1
          className="restaurant relative top-10 z-10 text-4xl font-black "
          key={115}
        >
          Welcome to {Restaurant?.cards[0]?.card?.card?.info?.name}
        </h1>
        <h2
          className="welcome relative  z-10 text-2xl font-semibold top-10"
          key={114}
        >
          Here you will get amazing foods...
        </h2>
        <img
          className="RestaurantImg w-4/5 relative top-[10vh] left-0 rounded-3xl drop-shadow-2xl"
          src={
            IMG_URL + Restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="food img"
          key={Restaurant?.cards[0]?.card?.card?.info?.id}
        ></img>
      </div>
      <div className="Menu-items" key={113}>
        <h1 className="relative w-fit h-fit m-4 text-2xl font-bold" key={112}>
          {
            Restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.title
          }{" "}
          Menu
        </h1>
        <ul className="all-items" key={111}>
          {Object?.values(
            Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.itemCards
          ).map((item) => {
            return (
              <div className="items flex items-center p-2 border-y-2">
                <img
                  className="FoodImg w-60 rounded-3xl m-4 relative left-0"
                  src={IMG_URL + item.card?.info?.imageId}
                  alt="food img"
                  key={item.card?.info?.id + "img"}
                ></img>
                <div className="">
                  <li className="item-name" key={item.card?.info?.id + "item"}>
                    <h1 className="text-lg font-medium">
                      {item.card?.info?.name}
                    </h1>
                    <ul
                      className="item-details"
                      key={item.card?.info?.id + "ul"}
                    >
                      <li
                        className="Category font-extralight text-sm"
                        key={item.card?.info?.id + "Category"}
                      >
                        {item.card?.info?.category}
                      </li>
                      <li
                        className="price text-lg color text-green-700"
                        key={item.card?.info?.id + "price"}
                      >
                        {"Rs " + item.card?.info?.price / 100}
                      </li>
                    </ul>
                    <button
                      className="m-2 w-8 h-8 bg-green-100 rounded-lg"
                      key={"AddItems"}
                      onClick={() => {
                        AddItems(item.card?.info);
                        handelAddRestaurant(
                          Restaurant?.cards[0]?.card?.card?.info
                        );
                      }}
                    >
                      +
                    </button>
                    <button
                      className="w-8 h-8 bg-green-100 rounded-lg"
                      key={item.card?.info?.id + "AddItems"}
                      onClick={() => {
                        RemoveItems();
                        handelRemoveRestaurant();
                      }}
                    >
                      -
                    </button>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
