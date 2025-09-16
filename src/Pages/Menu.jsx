import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const Menu = () => {
  const [meal, setMeal] = useState("");
  const [listMeal, setListMeal] = useState([]);
  const [category, setcategory] = useState([]);

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

  const axiosCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setcategory(data.categories);
    } catch (errore) {
      console.log(errore.massage);
    }
  };
  useEffect(() => {
    axiosCategory();
  }, []);
  console.log(category)
  return (
    <div>
      <input
        className="container px-5 h-10 mb-5 bg-slate-950 text-white w-full"
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="type food..."
      />

      {listMeal ? (
        <Swiper navigation={true} modules={[Navigation]} loop>
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

      <div className="mt-14">
        <h1 className="text-2xl font-bold">categories</h1>
        {category.map((item) => (
          <div className="border-2 mt-3">
            <img className="ml-5 w-fit" src={item.strCategoryThumb} />
            <p className="text-center">{item.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
