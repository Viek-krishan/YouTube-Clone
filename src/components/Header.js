import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserData from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const title = (
  <a className="no-underline mx-2 h-fit" key={1} href="/">
    <h2 className="text-4xl font-extrabold">Bhola Misthan</h2>
  </a>
);

{
  /* #0a0908 smoky black, #49111c dark senna, #f2f4f3 white, #a9927d pastel, #5e503f umber(brown) */
}

const Header = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserData);
  const cart = useSelector((store) => store.FoodCart.items);
  // console.log(cart);

  return (
    <div
      className="flex justify-around items-center bg-[#f2f4f3] w-full h-24 shadow-xl m-5 mt-5 mb-10 relative left-4"
      key={2}
    >
      {title}
      <h3>{isOnline ? "" : "Oops,seems like you are offline!!"}</h3>
      <ul className="header-navigation flex justify-center mx-10 my-4" key={3}>
        <li className="OnlineStatus mx-4 cursor-default">
          {isOnline ? "🟢" : "🔴"}
        </li>
        <li className="user cursor-default mx-4 text-gray-600 font-thin hover:scale-125 transition duration-300 ease-in-out hover:font-medium">
          {user.name}
        </li>
        <Link
          className="Home mx-4 text-gray-600 font-thin hover:scale-125 transition duration-300 ease-in-out hover:font-medium"
          to="/"
        >
          <li key={5}>Home</li>
        </Link>
        <Link
          className="Support mx-4 text-gray-600 font-thin hover:scale-125 transition duration-300 ease-in-out hover:font-medium"
          to="/"
        >
          <li key={5}>support</li>
        </Link>
        <Link
          className="foodCart mx-4 text-gray-600 font-thin hover:scale-125 transition duration-300 ease-in-out hover:font-medium"
          to="/FoodCart"
        >
          <li key={5}>FoodCart {cart.length} items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
