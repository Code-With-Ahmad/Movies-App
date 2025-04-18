import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { inputValue, setInputValue, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(inputValue);
      navigate("/movies");
    }
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <header className="w-screen border-b px-4 py-2 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative">
      
      <div className="flex w-full lg:w-auto items-center justify-between lg:justify-start gap-2 lg:gap-4">
        <div className="flex w-[20%] md:w-[15%] lg:w-auto">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="h-[50px] md:h-[70px] lg:h-auto"
              style={{ width: "100px" }}
            />
          </Link>
        </div>

        <div className="relative w-[75%] lg:w-[55vw]">
          <input
            type="text"
            placeholder="Search Keyword"
            className="border py-2 px-4 w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              if (val === "") setSearchTerm("");
            }}
            onKeyDown={handleKeyDown}
          />
          {inputValue && (
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-black"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

       
        <div className="lg:hidden w-[10%] text-right me-5">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

     
      <nav className="hidden lg:flex">
        <ul className="flex gap-4 items-center">
          {["Home", "Movies", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

     
      {menuOpen && (
        <div className="fixed top-0 right-0 w-[60%] h-full bg-white shadow-lg z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 mt-6">
            {["Home", "Movies", "About", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
