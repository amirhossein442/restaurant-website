import { useContext } from "react";
import { SearchBox } from "../Components/main/searchBox";
import { cartsContex } from "../Contex/CartsContex";

export const Menu = () => {
  const { category, cart, handelIncreament, handelDecrement } =
    useContext(cartsContex);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-rose-950 px-4 sm:px-6 lg:px-12 py-8 text-white">

      <div className="flex justify-center mb-8">
        <SearchBox />
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-rose-500 mb-10 drop-shadow-lg">
        🍽 Categories
      </h1>

      {/* کارت‌های دسته‌بندی */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.map((item) => (
          <div
            key={item.idCategory}
            className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-rose-500 transition duration-300"
          >
            <img
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              src={item.strCategoryThumb}
              alt={item.strCategory}
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-lg font-semibold mb-3 text-rose-400">
                {item.strCategory}
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handelIncreament(item.idCategory)}
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition transform hover:scale-110"
                >
                  +
                </button>
                <p className="text-xl font-bold text-white">
                  {cart.find((c) => c.id === item.idCategory)?.count || 0}
                </p>
                <button
                  onClick={() => handelDecrement(item.idCategory)}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition transform hover:scale-110"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
