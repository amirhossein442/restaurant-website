import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const cartsContex = createContext();

export const CartsContextProvider = ({ children }) => {
  const [cart, setCarts] = useState([]);
  const [category, setcategory] = useState([]);

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
  

  const handelIncreament = (ID) => {
    const existsCart = cart.find((item) => item.id === ID);
    if (existsCart) {
      setCarts(
        cart.map((item) =>
          item.id === ID ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCarts([...cart, { id: ID, count: 1 }]);
    }
  };

  const handelDecrement = (ID) => {
    setCarts(
      cart.map((item) =>
        item.id === ID
          ? { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          : item
      )
    );
  };
  return (
    <cartsContex.Provider value={{category, cart, handelIncreament, handelDecrement }}>
      {children}
    </cartsContex.Provider>
  );
};
