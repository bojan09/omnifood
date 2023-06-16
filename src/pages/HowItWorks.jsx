import React from "react";

// assets
import phone_step_01 from "../assets/app/app-screen-1.png";
import phone_step_02 from "../assets/app/app-screen-2.png";
import phone_step_03 from "../assets/app/app-screen-3.png";

const HowItWorks = () => {
  return (
    <div id="howItWorks" className="max-w-[1200px] mx-auto mt-[2rem] mb-[5rem]">
      <h2 className="uppercase text-primaryColor text-lg pl-[2rem] pb-[1rem]">
        How it works
      </h2>

      <h1 className="pl-[2rem] pr-[3rem] font-semibold text-3xl md:text-[2.5rem] md:mb-[9rem] md:mt-[2rem]">
        Your daily dose of health in 3 simple steps
      </h1>

      {/* Main container -- 1*/}
      <div className="my-[3rem] flex md:flex-row xs:flex-col-reverse md:justify-evenly items-center]">
        {/* Left container -- text */}
        <div className="xs:px-[1.5rem] md:px-5 md:w-[50%]">
          {/* Number */}
          <p className="text-[5rem] font-semibold text-gray-200">01</p>
          {/* Heading secondary */}
          <h2 className="my-3 text-[19px] md:text-2xl font-semibold">
            Tell us what you like (and what not)
          </h2>
          <p className="xs:font-thin md:font-normal md:text-lg">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        {/* Right container - Phone image */}
        <div className="step-img-box md:w-[50%]">
          <img
            src={phone_step_01}
            alt="phone_step"
            className="w-[35%] md:w-[200px]"
          />
        </div>
      </div>

      {/* Main container -- 2  */}
      <div className="my-[5rem] md:flex justify-around items-center">
        {/* Right container - Phone image */}
        <div className="step-img-box md:w-[50%]">
          <img
            src={phone_step_02}
            alt="phone_step"
            className="w-[35%] md:w-[200px]"
          />
        </div>

        {/* Left container -- text */}
        <div className="px-[1.5rem] md:px-5 md:w-[50%]">
          {/* Number */}
          <p className="text-[5rem] font-semibold text-gray-200">02</p>
          {/* Heading secondary */}
          <h2 className="my-3 text-[19px] font-semibold">
            Approve your weekly meal plan
          </h2>
          <p className="xs:font-thin md:font-normal md:text-lg">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
      </div>

      {/* Main container -- 3  */}
      <div className=" my-[3rem] flex md:flex-row xs:flex-col-reverse">
        {/* Left container -- text */}
        <div className="px-[1.5rem] md:px-5 md:w-[50%]">
          {/* Number */}
          <p className="text-[5rem] font-semibold text-gray-200">03</p>
          {/* Heading secondary */}
          <h2 className="my-3 text-[19px] font-semibold">
            Receive meals at convenient time
          </h2>
          <p className="xs:font-thin md:font-normal md:text-lg">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        {/* Right container - Phone image */}
        <div className="step-img-box md:w-[50%]">
          <img
            src={phone_step_03}
            alt="phone_step"
            className="w-[35%] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
