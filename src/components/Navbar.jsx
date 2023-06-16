import React, { useState } from "react";

// assets
import logo from "../assets/omnifood-logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primaryBackground  p-6 px-8 md:px-[8rem] sticky top-0">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="logo" className="w-[150px]" />
        </a>

        {/* Nav List - Desktop*/}
        <nav className="md:block xs:hidden">
          <ul className="flex justify-center items-center gap-6">
            <li className="font-medium text-colorText hover:text-primaryColor">
              <a href="#howItWorks">How it Works</a>
            </li>
            <li className="font-medium text-colorText hover:text-primaryColor">
              <a href="#meals">Meals</a>
            </li>
            <li className="font-medium text-colorText hover:text-primaryColor">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="font-medium text-colorText hover:text-primaryColor">
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a
                className="font-medium text-white py-2 px-4 bg-primaryColor rounded-lg hover:bg-shadeColor cursor-pointer"
                href="#contact"
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        {/* Nav List - Mobile*/}
        <nav className="md:hidden xs:relative ">
          <img
            src={!toggle ? menu : close}
            className="fixed top-4 right-7 w-[35px] h-[35px] object-contain cursor-pointer "
            alt="nav menu"
            onClick={() => setToggle(!toggle)}
          />

          <ul
            className={`${
              !toggle ? "hidden" : "block"
            } text-center w-[90vw] h-[100vh] relative top-[8rem] right-4 `}
          >
            <li
              onClick={() => setToggle(!toggle)}
              className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
            >
              <a href="#howItWorks">How it Works</a>
            </li>
            <li
              onClick={() => setToggle(!toggle)}
              className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
            >
              <a href="#meals">Meals</a>
            </li>
            <li
              onClick={() => setToggle(!toggle)}
              className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
            >
              <a>Testimonials</a>
            </li>
            <li
              onClick={() => setToggle(!toggle)}
              href="#testimonials"
              className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              onClick={() => setToggle(!toggle)}
              className="font-medium text-white py-2 px-4 w-[9rem] bg-primaryColor rounded-lg hover:bg-shadeColor cursor-pointer mx-auto text-xl mt-6"
            >
              <a href="#contact">Try for free</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
