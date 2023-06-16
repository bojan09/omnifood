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
    <div id="#" className="bg-primaryBackground md:flex justify-around ">
      <div className="flex flex-col justify-center items-center gap-8 pt-5 ">
        <h1 className="xs:text-[35px] md:text-[52px] font-medium text-center px-5 xs:py-4 md:leading-[55px] md:text-start">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className="px-5 text-center text-[16px]">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 py-4">
          <button className="bg-primaryColor text-white py-3 px-2 rounded-lg font-medium">
            <a href="#contact">Start eating well again</a>
          </button>
          <button className="bg-white py-3 px-2 rounded-lg font-medium">
            <a href="#howItWorks">Learn more ↓</a>
          </button>
        </div>

        {/* Delivered/Customers Tab  */}
        <div className="flex justify-evenly px-4 py-4">
          {/* Customers img tab  */}
          <img
            className="rounded-full border-white border-[5px] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
            src={deliveredImage1}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] ml-[-1rem] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
            src={deliveredImage2}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] ml-[-1rem] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
            src={deliveredImage3}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] ml-[-1rem] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
            src={deliveredImage4}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] ml-[-1rem] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
            src={deliveredImage5}
            alt="customer_img"
          />
          <img
            className="rounded-full border-white border-[5px] ml-[-1rem] md:w-[55x] md:h-[55px] xs:w-[40px] h-[40px]"
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
      <div className="px-12 py-[3rem]">
        <img src={heroImage} alt="hero_img" />
      </div>
    </div>
  );
};

export default Home;
