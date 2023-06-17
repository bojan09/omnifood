import React from "react";

import formImage from "../assets/eating.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" xs:w-[90vw] md:w-[82vw] lg:w-[60vw] lg:h-[60vh] flex md:flex-row xs:flex-col-reverse rounded-lg mx-auto bg-gradient-to-br from-primaryColor to-secondaryColor"
    >
      <div className="m-6">
        {/* Left container - Form*/}
        <h1 className="text-3xl font-medium my-6">
          Get your first meal for free!
        </h1>
        <p className="font-light text-md my-6">
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well today. You can cancel or pause anytime. And the first meal is on
          us!
        </p>
        <form className="font-sm text-lg">
          <div className="md:flex items-center justify-center gap-2">
            <div className="">
              <label className="ml-2">Full Name</label>
              <input
                className="p-2 my-3 w-full rounded-lg bg-primaryBackground"
                type="text"
                placeholder="John Smith"
              />
            </div>

            <div className="xs:my-3 md:m-0">
              <label className="ml-2">Email adress</label>
              <input
                className="p-2 my-3 w-full rounded-lg bg-primaryBackground"
                type="email"
                placeholder="john@smith.com"
              />
            </div>
          </div>

          <div className="md:flex gap-3 items-center justify-center">
            <div className="mt-3 flex-1">
              <label className="ml-2">Where did you hear from us?</label>
              <select
                className="p-2 my-3 w-full rounded-lg bg-primaryBackground"
                name="Where did you hear from us?"
                placeholder="Please choose one option"
                required
              >
                <option value="" disabled defaultChecked hidden>
                  Please choose one option:
                </option>
                <option value="friends and family">Friends and family</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex-1 mt-9 text-center">
              <button
                className=" bg-darkColor  rounded-md hover:bg-shadeColor hover:border-[2px] border-yellow-100 text-white font-medium transition-all duration-200 ease-in-out py-[.4rem] xs:px-6 md:px-[5rem]"
                type="submit"
              >
                Sign up now
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right container - Image */}
      <div className="overflow-hidden">
        <img
          src={formImage}
          alt="formImage"
          className="xs:rounded-t-lg md:rounded-tl-none md:rounded-tr-lg md:rounded-br-lg h-fit bg-cover bg-center"
        />
      </div>
    </div>
  );
};

export default Contact;
