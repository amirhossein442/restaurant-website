import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartsContex } from "../../Contex/CartsContex";


type MenuItem = {
  name: string;
  path: string;
};

export const Navigation: React.FC = () => {
  const menuNav: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Carts", path: "/carts" },
  ];

  const context = useContext(cartsContex);

  if (!context) {
    throw new Error("cartsContex must be used within a CartsContextProvider");
  }

  const { cart } = context;

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <nav className="relative">
      {menuNav.map((i) => (
        <Link
          className="font-bold mr-5 text-xl text-rose-600 hover:text-rose-400 transition-all duration-200"
          key={i.name}
          to={i.path}
        >
          {i.name}
        </Link>
      ))}
      {totalCount !== 0 && (
        <div className="absolute right-2 -top-3 px-2 bg-rose-500 text-white rounded-xl">
          {totalCount}
        </div>
      )}
    </nav>
  );
};
