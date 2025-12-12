import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface CartItem {
  id: number | string;
  count: number;
}

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CartsContextType {
  cart: CartItem[];
  category: Category[];
  total: number;
  handelIncreament: (id: number | string) => void;
  handelDecrement: (id: number | string) => void;
}

export const cartsContex = createContext<CartsContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const CartsContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCarts] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [category, setCategory] = useState<Category[]>([]);
  const [total, setTotal] = useState<number>(0);

  const axiosCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategory(data.categories);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    axiosCategory();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handelIncreament = (ID: number | string) => {
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

  const handelDecrement = (ID: number | string) => {
    setCarts(
      cart.map((item) =>
        item.id === ID
          ? { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          : item
      )
    );
  };

  return (
    <cartsContex.Provider
      value={{ category, cart, handelIncreament, handelDecrement, total }}
    >
      {children}
    </cartsContex.Provider>
  );
};
