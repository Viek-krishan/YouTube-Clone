import { useContext, useState } from "react";
import UserData from "../utils/UserContext";
import { useSelector } from "react-redux";

const FoodCart = () => {
  const { user } = useContext(UserData);
  const items = useSelector((store) => store.FoodCart.items);
  const [isvisible, SetIsVisible] = useState("account");
  const [totalPrice, SetTotalPrice] = useState(0);
  const [priceVisible, SetPriceVisible] = useState(false);

  function GetTotalPrice() {
    const sum1 = items.reduce((sum, item) => {
      sum = sum + item.price / 100;
      return sum;
    }, 0);

    SetTotalPrice(sum1);
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-3xl">Check Out</h1>
      </div>
      <div className="Main_Container flex">
        <div className="leftside w-3/5">
          <section className="Account m-5 p-2 bg-[#f2f4f3] drop-shadow-xl ">
            <h1 className="Title text-lg font-extrabold">Account</h1>
            <h3 className="text-gray-500 text-sm font-extralight">
              Your account information is visible here...
            </h3>
            {isvisible === "account" ? (
              <button
                className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                onClick={() => SetIsVisible("")}
              >
                Hide
              </button>
            ) : (
              <button
                className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                onClick={() => SetIsVisible("account")}
              >
                Show
              </button>
            )}
            {isvisible === "account" && (
              <div className="Details ">
                <h3 className="text-lg font-medium">Name: {user.name},</h3>
                <h3 className="text-lg font-medium">Email: {user.email},</h3>
                <h3 className="text-lg font-medium">
                  Location: {user.location}
                </h3>
              </div>
            )}
          </section>
          <section className="Address m-5 p-2 bg-[#f2f4f3] drop-shadow-xl">
            <div>
              <h1 className="Title text-lg font-extrabold">Delivery address</h1>
              <h3 className="text-gray-500 text-sm font-extralight">
                Please give your nearest location for fast and convinent
                delivery
              </h3>
              {isvisible === "address" ? (
                <button
                  className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                  onClick={() => SetIsVisible("")}
                >
                  Hide
                </button>
              ) : (
                <button
                  className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                  onClick={() => SetIsVisible("address")}
                >
                  Show
                </button>
              )}
              {isvisible === "address" && (
                <div className="Details">
                  <h3 className="text-lg font-medium">Name: {user.name},</h3>
                  <h3 className="text-lg font-medium">Email: {user.email},</h3>
                  <h3 className="text-lg font-medium">
                    Location: {user.location}
                  </h3>
                </div>
              )}
            </div>
          </section>
          <section className="Payment m-5 p-2 bg-[#f2f4f3] drop-shadow-xl">
            <div>
              <h1 className="Title text-lg font-extrabold">Payment</h1>
              <h3 className="text-gray-500 text-sm font-extralight">
                Select your payment method
              </h3>
              {isvisible === "payment" ? (
                <button
                  className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                  onClick={() => SetIsVisible("")}
                >
                  Hide
                </button>
              ) : (
                <button
                  className="bg-gray-600 text-white w-16 font-extralight rounded-2xl"
                  onClick={() => SetIsVisible("payment")}
                >
                  Show
                </button>
              )}
              {isvisible === "payment" && (
                <div>
                  <h3 className="text-lg font-medium font-serif mx-6 my-2">
                    Paytm
                  </h3>
                  <h3 className="text-lg font-medium font-serif mx-6 my-2">
                    Gpay
                  </h3>
                  <h3 className="text-lg font-medium font-serif mx-6 my-2">
                    Phonepay
                  </h3>
                </div>
              )}
            </div>
          </section>
        </div>
        <div className="Rightside w-2/5">
          {/* <div className="Restaurant">
                <img
                src={IMG_URL + restaurant[0]?.cloudinaryImageId}
                alt="Restaurant img"
                key={restaurant.id + "restaurant"}
                />
                <h2>{restaurant.name}</h2>
                <h2>{restaurant.locality}</h2>
          </div> */}
          <h1 className="Order_Title w-fit mx-auto text-2xl">Your Orders</h1>
          {items.length == 0 ? (
            <div className="No_items  relative top-20  h-60 flex justify-center items-center">
              <div>
                <h1 className="text-4xl font-extrabold">Oops....</h1>
                <h1 className="text-xl font-extralight text-gray-500">
                  No item in the cart !
                </h1>
              </div>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <div
                  className="Order border-2 border-white w-auto m-5 p-2 flex justify-between items-center bg-[#f2f4f3] drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition duration-200 ease-in-out"
                  key={item.id}
                >
                  <section key={item.id + "section1"}>
                    <h2 className="Name text-lg " key={item.id + "name"}>
                      {item?.name}
                    </h2>
                    <h2
                      className="category text-sm font-extralight text-gray-500"
                      key={(item.id = "category")}
                    >
                      {item?.category}
                    </h2>
                  </section>
                  <section key={item.id + "section2"}></section>
                  <section key={item.id + "section3"}>
                    <h1
                      className="Price text-lg font-medium cursor-default"
                      key={item.id + "price"}
                    >
                      {item?.price / 100}
                    </h1>
                  </section>
                </div>
              ))}
              <div className="Order border-2 border-white w-auto h-14 my-10 mx-2 p-2 flex justify-between items-center bg-[#f2f4f3] drop-shadow-xl hover:scale-105 hover:drop-shadow-2xl transition duration-200 ease-in-out">
                <h1 className="Total text-xl font-semibold">Total Price</h1>
                <button
                  className="bg-gray-600 text-white w-16 font-extralight rounded-xl scale-110 hover:bg-gray-700 hover:scale-105 hover:drop-shadow-2xl transition duration-200 ease-in-out"
                  key={"total price"}
                  onClick={() => {
                    GetTotalPrice();
                    SetPriceVisible(true);
                  }}
                >
                  Total
                </button>
                {priceVisible && <h1 className="cursor-default font-semibold text-lg text-green-800">Rs {totalPrice}</h1>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodCart;
