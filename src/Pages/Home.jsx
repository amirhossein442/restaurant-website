import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header/Header";

export const Home = () => {
  const [bgHome, setBgHome] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setBgHome(res.data.meals || []));
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      
      {bgHome?.map((b, index) => (
        <img
          key={index}
          className=" absolute inset-0 w-full h-full object-cover"
          src={b.strMealThumb}
          alt={b.strMeal || "Food background"}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/80  to-black/10"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-rose-400 drop-shadow-lg">
          Welcome to MyRestaurant
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl">
          Discover delicious meals from around the world 🍽
        </p>

        <Link to="/menu">
          <button className="mt-8 text-lg sm:text-xl font-bold px-6 py-3 rounded-lg border-2 border-rose-500 text-white bg-rose-600/80 backdrop-blur-md hover:bg-rose-700 hover:scale-105 transition-all shadow-lg">
            See Menu
          </button>
        </Link>
      </div>
    </div>
  );
};
