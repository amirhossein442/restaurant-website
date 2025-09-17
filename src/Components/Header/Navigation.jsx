import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartsContex } from "../../Contex/CartsContex";

export const Navigation = () => {
  const menuNav = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "carts", path: "/carts" },
  ];
  const { cart } = useContext(cartsContex);
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0)
  return (
    <nav className="relative">
      {menuNav.map((i) => (
        <Link className=" font-bold mr-5 text-xl text-rose-600 hover:text-rose-400 transition-all duration-200" key={i.name} to={i.path}>
          {i.name}
        </Link>
      ))}
      {totalCount !== 0 && (
        <div className="absolute right-2 -top-3 px-2 bg-rose-500 text-white rounded-xl">{totalCount}</div>
      )}
    </nav>
  );
};
