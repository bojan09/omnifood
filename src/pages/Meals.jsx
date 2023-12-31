import React from "react";

// assets
import vegeterian_meal from "../assets/meals/meal-1.jpg";
import vegeterian_paleo_meal from "../assets/meals/meal-2.jpg";

const Meals = () => {
  return (
    <div id="meals" className="max-w-[1200px] mx-auto mt-[2rem] mb-[5rem]">
      <h2 className="text-center uppercase text-primaryColor text-lg pb-[1rem]">
        MEALS
      </h2>

      <h1 className="text-center font-semibold text-3xl md:text-[2.5rem] md:mb-[4rem] md:mt-[2rem]">
        Omnifood AI chooses from 5,000+ recipes
      </h1>

      {/* Main - Container */}
      <div className="flex md:flex-row md:gap-[4rem] xs:flex-col justify-center items-center mt-[3rem]">
        {/* Container -- 1 */}
        <div className="w-[300px] mb-[3.5rem] shadow-md rounded-lg pb-4 scale-100 hover:scale-110 transition-all duration-300 ease-in">
          {/* Meal - Image */}
          <img
            src={vegeterian_meal}
            alt="vegeterian_meal"
            className="rounded-t-lg"
          />
          <div className="p-4">
            {/* Meal - Category */}
            <span className="bg-greenDarkColor py-[4px] px-[8px] rounded-xl uppercase text-[12px] text-white font-medium">
              vegeterian
            </span>

            {/* Meal - Heading */}
            <h2 className="text-xl font-semibold my-4">Japanese Gyozas</h2>

            {/* Meal - Description */}
            <div className="flex flex-col justify-center gap-4 pl-4">
              <p className="font-light xs:text-[15px]">650 calories</p>
              <p className="font-light xs:text-[15px]">NutriScore ® 74</p>
              <p className="font-light xs:text-[15px]">4.9 rating (537)</p>
            </div>
          </div>
        </div>

        {/* Container -- 2 */}
        <div className="w-[300px] mb-[3.5rem] shadow-md rounded-lg pb-4 scale-100 hover:scale-110 transition-all duration-300 ease-in">
          {/* Meal - Image */}
          <img
            src={vegeterian_paleo_meal}
            alt="vegeterian_paleo_meal"
            className="rounded-t-lg"
          />
          <div className="p-4">
            {/* Meal - Category */}
            <div>
              <span className="bg-greenLightColor py-[4px] px-[8px] rounded-xl uppercase text-[12px] text-white font-medium mr-2">
                vegeterian
              </span>
              <span className="bg-secondaryColor py-[4px] px-[8px] rounded-xl uppercase text-[12px] text-white font-medium">
                paleo
              </span>
            </div>
            {/* Meal - Heading */}
            <h2 className="text-xl font-semibold my-4 px-4">Avocado Salad</h2>

            {/* Meal - Description */}
            <div className="flex flex-col justify-center gap-4 pl-6">
              <p className="font-light xs:text-[15px]">400 calories</p>
              <p className="font-light xs:text-[15px]">NutriScore ® 92</p>
              <p className="font-light xs:text-[15px]">4.8 rating (441)</p>
            </div>
          </div>
        </div>

        {/* Container -- 3 */}
        <div>
          {/* Heading  */}
          <h1 className="font-semibold text-xl mb-5">Works with any diet:</h1>
          {/* Other choices  */}
          <div className="flex flex-col justify-center items-center gap-4 mb-[4rem]">
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Vegetarian
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Vegan
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Pescatarian
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Gluten-free
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Lactose-free
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Keto
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Paleo
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Low FODMAP
            </p>
            <p className="font-light xs:text-[15px] scale-100 hover:scale-110 transition-all duration-300 ease-in">
              Kid-friendly
            </p>
          </div>
        </div>
      </div>

      <button className="flex justify-center items-center mx-auto">
        <a
          className="border-b-2 border-primaryColor hover:bg-secondaryColor hover:text-white p-2 transition-all duration-400 ease-in-out"
          href="#"
        >
          See all recipes →
        </a>
      </button>
    </div>
  );
};

export default Meals;
