import { IMG_URL } from "../config";

const Card = ({
  name,
  cuisines,
  locality,
  avgRating,
  feeDetails,
  cloudinaryImageId,
}) => {
  return (
    <div className="card w-60 m-6 p-3 bg-[#f2f4f3] rounded-2xl shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:shadow-3xl">
      <div className="scale-100 rounded-xl overflow-hidden m-2 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0px_20px_rgba(0,0,0,0.30)]">
        <img
          className="w-full rounded-xl hover:scale-110 transition duration-300 ease-in-out "
          src={IMG_URL + cloudinaryImageId}
          alt="food img"
          key={8}
        ></img>
      </div>
      <div className="ItemDetails">
        <h1 className="font-semibold">{name}</h1>
        <h3 className="font-extralight">{cuisines?.join(", ")}</h3>
        <h4 className="font-mono">{locality}</h4>
        <h3 className="font-semibold text-green-600">
          {avgRating} stars
        </h3>
        <h3 className="font-extrabold text-gray-500">
          Rs {feeDetails?.totalFee}/-
        </h3>
      </div>
    </div>
  );
};

export default Card;
