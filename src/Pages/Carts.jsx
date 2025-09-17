import { useContext } from "react";
import { cartsContex } from "../Contex/CartsContex";

export const Carts = () => {
  const { category, cart, handelIncreament, handelDecrement } =
    useContext(cartsContex);
  return (
    <div>
      {cart.map((c) => {
        const exsistCart = category.find((cat) => cat.idCategory === c.id);
        if (exsistCart) {
          if (c.count !== 0) {
            return (
              <div className="border-2 mt-3">
                <img className="ml-5 w-fit" src={exsistCart.strCategoryThumb} />
                <p className="text-center">{exsistCart.strCategory}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handelIncreament(exsistCart.idCategory)}
                    className="border-2 p-2"
                  >
                    +
                  </button>
                  <p>
                    {cart.find((c) => c.id === exsistCart.idCategory)?.count ||
                      0}
                  </p>
                  <button
                    onClick={() => handelDecrement(exsistCart.idCategory)}
                    className="border-2 p-2"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
};
