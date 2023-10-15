import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import UserData from "./utils/UserContext";
// import FoodCart from "./components/FoodCart";

{
  /*color pallets #0a0908 smoky black, #49111c dark senna, #f2f4f3 white, #a9927d pastel, #5e503f umber(brown) */
}

const FoodCart = lazy(() => import("./components/FoodCart"));
// main container going to be rendered.
const AppLayOut = function () {
  const [user, setUser] = useState({
    name: "vivek Krishan",
    location: "Ranchi",
    email: "vivekkrishan0@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserData.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <div className="container w-screen" key={"main-container"}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserData.Provider>
    </Provider>
  );
};

// Creating router configration...
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/FoodCart",
        element: (
          <Suspense>
            <FoodCart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
