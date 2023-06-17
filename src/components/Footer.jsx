import React from "react";

// assets
import footerLogo from "../assets/omnifood-logo.png";

const Footer = () => {
  return (
    <div className="my-[5rem] border-t-2 mx-4">
      {/* Top container */}
      <div className="flex justify-center my-[3rem] gap-5">
        {/* Account - container */}
        <div className="font-light text-sm flex flex-col gap-4">
          <h1 className="mb-5 font-normal">Account</h1>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS App</p>
          <p>Android App</p>
        </div>

        {/* Company - container */}
        <div className="font-light text-sm flex flex-col gap-4">
          <h1 className="mb-5 font-normal">Company</h1>
          <p>About Omnifood</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Carrers</p>
        </div>

        {/* Resources - container */}
        <div className="font-light text-sm flex flex-col gap-4">
          <h1 className="mb-5 font-normal">Resources</h1>
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
      </div>

      {/* Bottom container */}
      <div className="flex gap-8">
        {/* Logo & Copyright - container */}
        <a href="#" className="w-[50vw]">
          <img src={footerLogo} alt="logo" className="mb-[4rem]" />
          <p className="font-light text-sm flex flex-col gap-4">
            Copyright © 2023 by Omnifood, Inc. <br />
            All rights reserved.
          </p>
        </a>
        {/* Contact us - container */}
        <div>
          <h1 className="mb-5 font-normal">Contact us</h1>
          <div className="font-light text-sm flex flex-col gap-4">
            <p>
              623 Harrison St., <br /> 2nd Floor,
              <br /> San Francisco, <br /> CA 94107
            </p>
            <p>
              415-201-6370 <br />
              hello@omnifood.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
