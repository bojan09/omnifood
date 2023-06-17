import React from "react";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="md:w-[1200px] md:mx-auto xs:ml-6 pt-[6rem] pb-[2rem]">
        <h2 className="uppercase text-primaryColor text-lg">Pricing</h2>
        <h1 className="py-4 md:text-[2.6rem] md:my-3 text-3xl font-medium ">
          Eating well without breaking the bank
        </h1>
      </div>

      {/* Main - Container*/}
      <div className="md:flex justify-center items-center md:w-[40vw] mx-auto">
        {/* Starter - Container*/}
        <div className="border-[2px] border-secondaryBackground rounded-xl flex flex-col justify-center items-center xs:w-[85vw] md:w-[350px] p-[4rem] mb-[4rem] mx-auto">
          <h1 className="uppercase text-primaryColor text-xl font-medium">
            Starter
          </h1>
          <p className="text-5xl font-semibold my-4">
            <span className="text-sm font-medium">$</span>
            399
          </p>
          <span className="text-xs font-light mb-[2rem] text-center">
            per month. That's just $13 per meal!
          </span>

          <div className="flex flex-col gap-2 font-light my-6">
            <p>1 meal per day</p>
            <p>Order from 11am to 9pm</p>
            <p>Delivery is free</p>
          </div>

          <button className="mt-[4rem]">
            <a
              className="py-4 px-5 rounded-lg text-white hover:bg-shadeColor transition-all duration-500 ease-in-out bg-primaryColor font-medium text-lg"
              href="#contact"
            >
              Start eating well
            </a>
          </button>
        </div>

        {/* Complete - Container*/}
        <div className="bg-primaryBackground rounded-xl flex flex-col justify-center items-center xs:w-[85vw] md:w-[350px] mx-auto p-[3rem] mb-[4rem] relative overflow-hidden">
          <span className="bg-yellow-300 font-medium uppercase py-1 px-8 absolute top-0 right-0 rotate-[45deg] translate-x-9 translate-y-7 ">
            best value
          </span>
          <h1 className="uppercase text-primaryColor text-xl font-medium">
            Complete
          </h1>
          <p className="text-5xl font-semibold my-4">
            <span className="text-sm font-medium">$</span>
            649
          </p>
          <span className="text-xs font-light mb-[2rem] text-center">
            per month. That's just $11 per meal!
          </span>

          <div className="flex flex-col gap-2 font-light my-6">
            <p>2 meal per day</p>
            <p>Order 25/7</p>
            <p>Delivery is free</p>
            <p>Get access to latest recipes</p>
          </div>

          <button className="mt-[4rem]">
            <a
              className="py-4 px-5 rounded-lg text-white hover:bg-shadeColor transition-all duration-500 ease-in-out bg-primaryColor font-medium text-lg"
              href="#contact"
            >
              Start eating well
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
