import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [bgHome, setBgHome] = useState();
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setBgHome(res.data.meals));
  }, []);
  console.log(bgHome);

  return (
    <div className="relative">
      {bgHome?.map((b, index) => (
        <div key={index}>
          <img className="h-fit w-full object-cover" src={b.strMealThumb} alt="is not defind" />
        </div>
      ))}

      <Link
        to={"/menu"}
        className="absolute bottom-5 left-36 text-slate-950 flex justify-center items-center"
      >
        <button className=" mt-5 text-xl border-2 border-rose-700  hover:bg-rose-600 text-white font-bold backdrop-blur-sm px-5 py-2 rounded-md">
          See menu
        </button>
      </Link>
    </div>
  );
};
