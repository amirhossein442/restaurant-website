import axios from "axios";
import { useContext} from "react";
import { SearchBox } from "../Components/main/searchBox";
import { cartsContex } from "../Contex/CartsContex";

export const Menu = () => {
  const {category, cart, handelIncreament, handelDecrement} = useContext(cartsContex)

  return (
    <div>
      <SearchBox />

      <div className="mt-14">
        <h1 className="text-2xl font-bold">categories</h1>
        {category.map((item) => (
          <div className="border-2 mt-3">
            <img className="ml-5 w-fit" src={item.strCategoryThumb} />
            <p className="text-center">{item.strCategory}</p>
            <div className="flex justify-center">
              <button
                onClick={() => handelIncreament(item.idCategory)}
                className="border-2 p-2"
              >
                +
              </button>
              <p>{cart.find((c) => c.id === item.idCategory)?.count || 0}</p>

              <button
                onClick={() => handelDecrement(item.idCategory)}
                className="border-2 p-2"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
