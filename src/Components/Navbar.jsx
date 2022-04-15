import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { PublicRoutes } from "./Routes/PublicRoutes";

function Navbar() {
  const location = useLocation();
  const pathMatch = (path) =>  { 
    if (path === location.pathname) {
        return true
    }
  }
  const [openMenu, setOpenMenu] = useState(false);
   
  return (
    <div className="ud-header bg-dark bg-opacity-80 absolute top-0 left-0 z-40 w-full flex items-center justify-between lg:px-10">
      <div className="flex justify-between items-center">
        <div className="px-4 w-60 max-w-full">
          <Link to="/" className="navbar-logo w-full block py-5">
            <img src={logo} alt="logo" className="w-full header-logo" />
          </Link>
        </div>
        <button
          onClick={() => setOpenMenu((prevState) => !prevState)}
          className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
        >
          <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
          <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
          <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
        </button>
      </div>
      <div className="mr-10">
        <nav
          className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full ${
            openMenu ? "hidden" : null
          } lg:block lg:static lg:shadow-none`}
        >
          <ul className="blcok lg:flex">
            {PublicRoutes.map((routes, i) => (
              <li className="relative group submenu-item" key={i}>
                <Link to={`${routes.path}`}
                  className={`text-base ${pathMatch(routes.path) ? 'text-gray-100' : 'text-gray-300'} lg:text-md lg:font-bold lg:group-hover:opacity-70 lg:group-hover:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex  mx-8 lg:mr-0 
                               ${
                                 routes.childrens
                                   ? "lg:ml-8 xl:ml-12  relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0  after:right-1 after:top-1/2 after:-translate-y-1/2  after:mt-[-2px]"
                                   : null
                               }
                            `}
                >
                  {routes.name}
                </Link>
                {routes.childrens ? (
                  <div className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                    {routes.childrens.map((child, i) => (
                      <Link
                        to={`${routes.path}`}
                        key={i}
                        className=" block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
