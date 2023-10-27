import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "./constant";

const Navbar: FC = () => {
  const location = useLocation();

  return (
    <nav className="text-white bg-blue-900 p-5">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          <ul className="flex items-center justify-start">
            {React.Children.toArray(
              navbarItems.map((navItem) => (
                <li
                  className={`mr-5 text-xs sm:text-base ${
                    navItem.path === location.pathname ? "border-b-2" : ""
                  }`}
                >
                  <Link to={navItem.path}>{navItem.text}</Link>
                </li>
              ))
            )}
          </ul>
          <div>
            <h1 className="first-letter:text-blue-400 small-caps italic md:text-2xl text-xs font-bold">
              Task Manager
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
