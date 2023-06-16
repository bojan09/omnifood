import React from "react";

// assets

// people
import person_1 from "../assets/customers/dave.jpg";
import person_2 from "../assets/customers/ben.jpg";
import person_3 from "../assets/customers/steve.jpg";
import person_4 from "../assets/customers/hannah.jpg";
// gallery
import gallery_1 from "../assets/gallery/gallery-1.jpg";
import gallery_2 from "../assets/gallery/gallery-2.jpg";
import gallery_3 from "../assets/gallery/gallery-3.jpg";
import gallery_4 from "../assets/gallery/gallery-4.jpg";
import gallery_5 from "../assets/gallery/gallery-5.jpg";
import gallery_6 from "../assets/gallery/gallery-6.jpg";
import gallery_7 from "../assets/gallery/gallery-7.jpg";
import gallery_8 from "../assets/gallery/gallery-8.jpg";
import gallery_9 from "../assets/gallery/gallery-9.jpg";
import gallery_10 from "../assets/gallery/gallery-10.jpg";
import gallery_11 from "../assets/gallery/gallery-11.jpg";
import gallery_12 from "../assets/gallery/gallery-12.jpg";

const Testimonials = () => {
  const people = [
    {
      id: 1,
      img: person_1,
      description:
        "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
      name: "Dave Bryson",
    },

    {
      id: 2,
      img: person_2,
      description:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      name: "Ben Hadley",
    },

    {
      id: 3,
      img: person_3,
      description:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      name: "Steve Miller",
    },

    {
      id: 4,
      img: person_4,
      description:
        "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
      name: "Hannah Smith",
    },
  ];

  const imageGallery = [
    {
      id: 1,
      img: gallery_1,
    },

    {
      id: 2,
      img: gallery_2,
    },

    {
      id: 3,
      img: gallery_3,
    },

    {
      id: 4,
      img: gallery_4,
    },

    {
      id: 5,
      img: gallery_5,
    },

    {
      id: 6,
      img: gallery_6,
    },

    {
      id: 7,
      img: gallery_7,
    },

    {
      id: 8,
      img: gallery_8,
    },

    {
      id: 9,
      img: gallery_9,
    },

    {
      id: 10,
      img: gallery_10,
    },

    {
      id: 11,
      img: gallery_11,
    },
    {
      id: 12,
      img: gallery_12,
    },
  ];

  return (
    <div
      id="testimonials"
      className="pt-[2rem] pb-[5rem] bg-primaryBackground md:flex items-center"
    >
      <div className="xs:pl-8 lg:pl-[7rem] flex-1">
        <h2 className="text-primaryColor md:text-xl uppercase mt-[2rem]">
          TESTIMONIALS
        </h2>
        <h1 className="py-4 md:text-[2.6rem] md:my-3 text-3xl font-medium mb-[2rem]">
          Once you try it, you can't go back
        </h1>

        {/* People Testimonials */}
        <div className="lg:w-[50vw] md:flex flex-wrap gap-[4rem]">
          {people.map((person) => (
            <div key={person.id}>
              <img
                src={person.img}
                alt="person.img"
                className="w-[50px] lg:w-[70px] rounded-full mt-[2rem] "
              />
              <p className="w-[86vw] lg:text-lg text-[15px] py-4 font-light text-gray-600 md:w-[20vw]">
                {person.description}
              </p>
              <p className="py-3 text-gray-600">
                <span className="text-gray-500">— </span>
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Gallery Testimonials */}
      <div className="flex-1 mt-[3rem] flex flex-row flex-wrap justify-center items-center gap-4">
        {imageGallery.map((image) => (
          <div
            key={image.id}
            className=" lg:w-[250px] md:w-[200px] xs:w-[25vw] overflow-hidden shadow-md rounded-md"
          >
            <img
              src={image.img}
              alt="person.img"
              className="scale-100 hover:scale-110 transition-all duration-500 ease-in-out overflow-clip "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
