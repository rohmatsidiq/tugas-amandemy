import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-white text-sky-500 shadow-md fixed top-0 w-screen z-50">
      <div className="max-w-[1200px] mx-auto p-5 flex justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">My Shop</h1>
        </Link>
        <div className="flex gap-5">
          <Link
            className="hover:scale-x-105 duration-100 hover:text-sky-600 hover:border-b hover:border-sky-300"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:scale-x-105 duration-100 hover:text-sky-600 hover:border-b hover:border-sky-300"
            to={"/products"}
          >
            Products
          </Link>
          <Link
            className="hover:scale-x-105 duration-100 hover:text-sky-600 hover:border-b hover:border-sky-300"
            to={"/table"}
          >
            Table
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
