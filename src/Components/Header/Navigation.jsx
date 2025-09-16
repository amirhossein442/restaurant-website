import { Link } from "react-router-dom";
export const Navigation = () => {
  const menuNav = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
  ];

  return (
    <nav className=" ">
      {menuNav.map((i) => (
        <Link className=" font-bold mr-5 text-xl " key={i.name} to={i.path}>
          {i.name}
        </Link>
      ))}
    </nav>
  );
};
