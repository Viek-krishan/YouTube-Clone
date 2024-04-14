// import "boxicons";
import { CircleUser, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../Images/logo-no-background.png";

export default Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithPopup } = useAuth0();

  console.log(user);

  const HandelSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <div className=" w-screen h-24  flex justify-around items-center">
      <Link to="/" className="Logo flex ">
        <div>
          <img src={Logo} alt="Logo" className="w-40" />
        </div>
      </Link>
      <div className="SearchBtn flex ">
        <input
          className="w-72 h-10 rounded-full p-2 text-black"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onSubmit={HandelSubmit}
          onKeyPress={(e) => e.key === "Enter" && HandelSubmit(e)}
        />
        <button className="relative right-8 w-10 " onClick={HandelSubmit}>
          <Search color="#000000" />
        </button>
      </div>
      {isAuthenticated ? (
        <section className="Profile mr-5 relative left-20 text-white">
          <Link to={`#`} className="flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={user.picture} alt="dp" className="w-full h-full" />
            </div>
            {/* <h1 className=" font-serif">{user.name}</h1> */}
          </Link>
        </section>
      ) : (
        <section className="LogIn flex relative left-20">
          <Link
            to={`#`}
            className="bg-red-700 mx-2 px-2 py-1 rounded-lg text-sm  border-b-2 border-l-2 border-white/60 hover:scale-105 transition duration-200 ease-in-out"
            onClick={loginWithPopup}
          >
            Login
          </Link>
        </section>
      )}
    </div>
  );
};
