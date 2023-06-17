import React from "react";

// assets
import heroImage from "../assets/hero.png";
import deliveredImage1 from "../assets/customers/customer-1.jpg";
import deliveredImage2 from "../assets/customers/customer-2.jpg";
import deliveredImage3 from "../assets/customers/customer-3.jpg";
import deliveredImage4 from "../assets/customers/customer-4.jpg";
import deliveredImage5 from "../assets/customers/customer-5.jpg";
import deliveredImage6 from "../assets/customers/customer-6.jpg";

const Home = () => {
  return (
    <div
      id="#"
      className="bg-primaryBackground md:flex justify-evenly lg:px-[20rem] md:pt-[2rem] md:pb-[3rem]"
    >
      <div className="md:flex flex-col gap-6 xs:pt-5 md:flex-1">
        <h1 className="xs:text-[35px] md:text-[52px] font-medium text-center px-5 xs:py-4 md:leading-[55px] md:text-start">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className="px-5 py-2 xs:py-5 text-center text-[16px] md:text-[18px] md:text-start ">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 py-4 xs:py-[3rem] md:ml-5">
          <button>
            <a
              className="bg-primaryColor hover:bg-shadeColor transition-all duration-500 ease-in-out text-white py-3 px-2 rounded-lg text-lg font-medium"
              href="#contact"
            >
              Start eating well again
            </a>
          </button>
          <button>
            <a
              className="bg-white  hover:text-primaryColor transition-all duration-500 ease-in-out py-3 px-2 rounded-lg font-medium text-lg"
              href="#howItWorks"
            >
              Learn more ↓
            </a>
          </button>
        </div>

        {/* Delivered/Customers Tab  */}
        <div className="flex md:items-center px-4 py-4">
          {/* Customers img tab  */}
          <img
            className="rounded-full border-white border-[5px] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75"
            src={deliveredImage1}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] xs:ml-[-.7rem] md:ml-[-.9rem] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75 "
            src={deliveredImage2}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] xs:ml-[-.7rem] md:ml-[-.9rem] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75 "
            src={deliveredImage3}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] xs:ml-[-.7rem] md:ml-[-.9rem] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75 "
            src={deliveredImage4}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] xs:ml-[-.7rem] md:ml-[-.9rem] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75 "
            src={deliveredImage5}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] xs:ml-[-.7rem] md:ml-[-.9rem] md:w-[60x] md:h-[40px] xs:w-[40px] h-[40px] hover:scale-105 transition-all ease-in-out duration-75 "
            src={deliveredImage6}
            alt="customer_img"
          />
          <p className="px-5 text-center">
            <span className="text-primaryColor font-medium">250,000+</span>{" "}
            meals delivered last year!
          </p>
        </div>
      </div>

      {/* Right side - Container */}
      <div className="md:flex-1 flex justify-center items-center md:px-12 xs:px-5 py-[3rem]">
        <img src={heroImage} alt="hero_img" className="md:w-[600px]" />
      </div>
    </div>
  );
};

export default Home;
