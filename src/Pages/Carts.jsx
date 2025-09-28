import { useContext } from "react";
import { cartsContex } from "../Contex/CartsContex";

export const Carts = () => {
  const { category, cart, handelIncreament, handelDecrement } =
    useContext(cartsContex);

  const activeCarts = cart.filter((item) => item.count > 0);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-rose-950 px-4 sm:px-6 lg:px-12 py-8 text-white">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-rose-500 mb-10 drop-shadow-lg">
        🛒 My Cart
      </h1>
      <div>
        {activeCarts.length === 0 ? (
          <h1 className="text-xl text-center text-white">There is no food order.</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCarts.map((c) => {
              const exsistCart = category.find(
                (cat) => cat.idCategory === c.id
              );
              if (!exsistCart) return null;

              return (
                <div
                  key={c.id}
                  className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-rose-500 transition duration-300"
                >
                  <img
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    src={exsistCart.strCategoryThumb}
                    alt={exsistCart.strCategory}
                  />
                  <div className="p-4 flex flex-col items-center">
                    <p className="text-lg font-semibold mb-3 text-rose-400">
                      {exsistCart.strCategory}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handelIncreament(exsistCart.idCategory)}
                        className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition transform hover:scale-110"
                      >
                        +
                      </button>
                      <p className="text-xl font-bold text-white">{c.count}</p>
                      <button
                        onClick={() => handelDecrement(exsistCart.idCategory)}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-lg shadow-md transition transform hover:scale-110"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
