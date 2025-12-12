import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// ----------------------
// تایپ‌ها
// ----------------------
interface Meal {
  strMeal: string;
  strMealThumb: string;
  [key: string]: any; // برای هر فیلد اضافی که API برمی‌گرداند
}

// ----------------------
// کامپوننت
// ----------------------
export const SearchBox: React.FC = () => {
  const [meal, setMeal] = useState<string>("");
  const [listMeal, setListMeal] = useState<Meal[]>([]);

  async function handleSearch(): Promise<void> {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      setListMeal(data.meals || []); // اگر API چیزی برنگرداند، آرایه خالی
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (meal !== "") {
        handleSearch();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [meal]);

  return (
    <div className="w-full max-w-4xl mx-auto pt-14 md:pt-24">
      <input
        className="w-full px-4 py-2 mb-5 rounded-lg bg-rose-700 text-white placeholder-gray-100/50 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-md"
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="See your favorite food...."
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
          {listMeal.map((mealItem, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                className="w-full h-44 object-cover rounded-xl shadow-lg"
                src={mealItem.strMealThumb}
                alt={mealItem.strMeal}
              />
              <p className="mt-2 text-center text-white font-semibold">
                {mealItem.strMeal}
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
