import React from "react";

// assets
import vegeterian_meal from "../assets/meals/meal-1.jpg";
import vegeterian_paleo_meal from "../assets/meals/meal-2.jpg";

const About = () => {
  return (
    <div id="about" className="max-w-[1200px] mx-auto mt-[2rem] mb-[5rem]">
      <h2 className="text-center uppercase text-primaryColor text-lg pl-[2rem] pb-[1rem]">
        MEALS
      </h2>

      <h1 className="text-center font-semibold text-3xl md:text-[2.5rem] md:mb-[9rem] md:mt-[2rem]">
        Omnifood AI chooses from 5,000+ recipes
      </h1>

      {/* Main - Container */}
      <div className="flex xs:flex-col justify-center items-center mt-[3rem]">
        {/* Container -- 1 */}
        <div className="w-[300px] mb-[3.5rem]">
          {/* Meal - Image */}
          <img src={vegeterian_meal} alt="vegeterian_meal" />
          <div>
            {/* Meal - Category */}
            <span>vegeterian</span>

            {/* Meal - Heading */}
            <h2>Japanese Gyozas</h2>

            {/* Meal - Description */}
            <div>
              <p>650 calories</p>
              <p>NutriScore ® 74</p>
              <p>4.9 rating (537)</p>
            </div>
          </div>
        </div>

        {/* Container -- 2 */}
        <div className="w-[300px]">
          {/* Meal - Image */}
          <img
            src={vegeterian_paleo_meal}
            alt="vegeterian_paleo_meal"
            className=""
          />
          <div>
            {/* Meal - Category */}
            <div>
              <span>vegeterian</span>
              <span>paleo</span>
            </div>
            {/* Meal - Heading */}
            <h2>Japanese Gyozas</h2>

            {/* Meal - Description */}
            <div>
              <p>650 calories</p>
              <p>NutriScore ® 74</p>
              <p>4.9 rating (537)</p>
            </div>
          </div>
        </div>

        {/* Container -- 3 */}
        <div>
          {/* Heading  */}
          <h1>Works with any diet:</h1>
          {/* Other choices  */}
          <p>Vegetarian</p>
          <p>Vegan</p>
          <p>Pescatarian</p>
          <p>Gluten-free</p>
          <p>Lactose-free</p>
          <p>Keto</p>
          <p>Paleo</p>
          <p>Low FODMAP</p>
          <p>Kid-friendly</p>
        </div>
      </div>

      <button>
        <a className="" href="">
          See all recipes →
        </a>
      </button>
    </div>
  );
};

export default About;
