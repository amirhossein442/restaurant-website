import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const SearchBox = () => {
  const [meal, setMeal] = useState("");
  const [listMeal, setListMeal] = useState([]);

  async function handeSearch() {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      setListMeal(data.meals);
    } catch (errore) {
      console.log(errore.message);
    }
  }

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      if (meal !== "") {
        handeSearch();
      }
    }, 1000);

    return () => clearTimeout(TimeOut);
  }, [meal]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <input
        className="w-full px-4 py-2 mb-5 rounded-lg bg-rose-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-md"
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Type food..."
      />

      {listMeal && listMeal.length > 0 ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="pb-10"
        >
          {listMeal.map((meal, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                className="w-full h-44 object-cover rounded-xl shadow-lg"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className="mt-2 text-center text-white font-semibold">
                {meal.strMeal}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1 className="text-center text-gray-300">No results found</h1>
      )}
    </div>
  );
};
