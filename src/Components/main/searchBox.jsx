import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";

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
      console.log(errore.massage);
    }
  }
  useEffect(() => {
    const TimeOut = setTimeout(() => {
      if (meal !== "") {
        handeSearch();
      }
    }, 3000);

    return () => {
      clearTimeout(TimeOut);
    };
  }, [meal]);

  return (
    <div className="">
      <input
        className="container px-5 h-10 mb-5 bg-rose-900   text-white"
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="type food..."
      />

      {listMeal ? (
        <Swiper navigation={true} modules={[Navigation]} >
          {listMeal.map((meal, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                className="w-full h-44 object-cover"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className="text-center">{meal.strMeal}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1> Is Not Defind</h1>
      )}
    </div>
  );
};
