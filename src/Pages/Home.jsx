import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="">
      <div className=" border-4 border-slate-950">
        <img className="" src="/images/header.webp" />
      </div>
      <Link to={"/menu"} className="text-slate-950 flex justify-center items-center">
        <button className=" mt-5 text-xl bg-slate-950 hover:bg-slate-800 text-white px-5 py-2 rounded-md">
          See menu
        </button>
      </Link>
    </div>
  );
};
