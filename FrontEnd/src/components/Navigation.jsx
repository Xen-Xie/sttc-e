/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Btn from "./common/UI/Btn";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router";

function Navigation() {
  const [showCategories, setShowCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const Categories = [
    "Accessories",
    "Art & Collectibles",
    "Baby",
    "Bags & Purses",
    "Bath & Beauty",
    "Books, Film & Music",
    "Clothing",
    "Craft Supplies & Tools",
    "Electronics & Accessories",
    "Gifts",
    "Home & Living",
    "Jewellery",
    "Paper & Party Supplies",
    "Pet Supplies",
    "Shoes",
    "Toys & Games",
    "Wedding",
  ];
  const slugify = (str) =>
  encodeURIComponent(
    str
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
  );


  return (
    <nav className="w-full border-b border-bordered bg-primarybg px-4 sm:px-6 py-3 font-inter">
      <div className="flex items-center justify-between gap-3 max-w-[1400px] mx-auto">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-urbanist font-semibold text-primary cursor-pointer whitespace-nowrap">
          YourLogo
        </h1>

        {/* Search Bar For Mobile */}
        <div className="flex-1 mx-2 sm:mx-4 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-bordered py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-highlight outline-none bg-container placeholder:text-secondary text-primary"
            />
            <Btn className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-1.5">
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </Btn>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl text-primary"
        >
          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
          {/* Categories */}
          <div className="relative">
            <Btn
              variant="outline"
              className="flex items-center gap-2 justify-center px-3 py-1.5 text-sm whitespace-nowrap"
              onClick={() => setShowCategories((prev) => !prev)}
            >
              <i className="fa-solid fa-bars text-base leading-none"></i>
              <span className="hidden sm:inline">Categories</span>
            </Btn>

            {/* Category Popup */}
            <AnimatePresence>
              {showCategories && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-60 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden"
                >
                  <ul className="flex flex-col py-2">
                    {Categories.map((cat, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/category/${slugify(cat)}`}
                          onClick={() => setShowCategories(false)}
                          className="block px-4 py-2.5 text-[15px] text-primary
                          hover:text-highlight 
                          hover:underline
                          transition-colors duration-200"
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar (desktop only) */}
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full rounded-full border border-bordered py-2.5 pl-5 pr-12 text-sm focus:ring-2 focus:ring-highlight outline-none bg-container placeholder:text-secondary text-primary"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* Right Side Icons (desktop only) */}
        <div className="hidden md:flex items-center gap-3 text-primary text-lg">
          <Btn
            className="hover:text-warning hover:bg-accent/30 px-3 transition-colors rounded-full"
            data-tooltip-id="nav-tooltips"
            data-tooltip-content="Favourites"
          >
            <i className="fa-regular fa-heart"></i>
          </Btn>

          <Btn
            className="hover:text-highlight hover:bg-accent/30 px-3 transition-colors rounded-full"
            data-tooltip-id="nav-tooltips"
            data-tooltip-content="Gifts"
          >
            <i className="fa-solid fa-gift"></i>
          </Btn>

          <Btn
            className="hover:text-success hover:bg-accent/30 px-3 transition-colors rounded-full"
            data-tooltip-id="nav-tooltips"
            data-tooltip-content="Cart"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </Btn>

          <Btn
            className="font-inter text-sm font-medium px-4 py-2"
            variant="primary"
          >
            Sign in
          </Btn>

          <Tooltip
            id="nav-tooltips"
            place="bottom"
            style={{
              backgroundColor: "#122868",
              color: "#f4f4f4",
              fontSize: "15px",
              borderRadius: "6px",
              padding: "6px 10px",
            }}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 bg-white border border-border rounded-xl shadow-lg p-4 space-y-3"
          >
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Categories
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {Categories.slice(0, 8).map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/category/${slugify(cat)}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-primary hover:text-highlight"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-3 text-lg text-primary">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-gift"></i>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <Btn
                className="font-inter text-sm font-medium px-4 py-2"
                variant="primary"
              >
                Sign in
              </Btn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
