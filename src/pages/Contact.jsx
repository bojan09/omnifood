import React from "react";

import formImage from "../assets/eating.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" xs:w-[90vw] flex xs:flex-col-reverse rounded-lg mx-auto bg-secondaryColor"
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
        <form className="flex flex-col gap-2 font-sm text-lg">
          <label className="ml-2">Full Name</label>
          <input
            className="p-2 rounded-lg bg-primaryBackground"
            type="text"
            placeholder="John Smith"
          />
          <label className="ml-2 mt-3">Email adress</label>
          <input
            className="p-2 rounded-lg bg-primaryBackground"
            type="email"
            placeholder="john@smith.com"
          />
          <label className="ml-2 mt-3">Where did you hear from us?</label>
          <select
            className="p-2 rounded-lg bg-primaryBackground"
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

          <button
            className=" bg-shadeColor py-3 rounded-md my-6 hover:bg-primaryColor text-white font-medium transition-all duration-500 ease-in-out"
            type="submit"
          >
            Sign up now
          </button>
        </form>
      </div>

      {/* Right container - Image */}
      <div>
        <img src={formImage} alt="formImage" className=" rounded-t-lg" />
      </div>
    </div>
  );
};

export default Contact;
