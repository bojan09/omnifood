import React from "react";

// assets
import sponsor_1 from "../assets/logos/business-insider.png";
import sponsor_2 from "../assets/logos/forbes.png";
import sponsor_3 from "../assets/logos/techcrunch.png";
import sponsor_4 from "../assets/logos/the-new-york-times.png";
import sponsor_5 from "../assets/logos/usa-today.png";

const Sponsors = () => {
  const sponsors = [sponsor_1, sponsor_2, sponsor_3, sponsor_4, sponsor_5];
  return (
    <div id="sponsors" className="pt-[2rem] pb-[3rem]">
      <h1 className="uppercase text-slate-400 text-center md:py-[3.5rem] pb-5 md:text-3xl">
        As featured in
      </h1>
      <div className="flex justify-center items-center md:gap-12  ">
        {sponsors.map((sponsor) => (
          <img
            src={sponsor}
            alt="sponsor"
            className="w-[18%] md:w-[12%] h-full px-2 sponsors_img_filter"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
