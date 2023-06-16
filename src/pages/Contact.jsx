import React from "react";

import formImage from "../assets/eating.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" xs:w-[90vw] flex xs:flex-col-reverse rounded-lg mx-auto"
    >
      <div>
        {/* Left container - Form*/}
        <h1>Get your first meal for free!</h1>
        <p>
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well today. You can cancel or pause anytime. And the first meal is on
          us!
        </p>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
          <label>Email adress</label>
          <input type="email" placeholder="john@smith.com" />
          <label>Where did you hear from us?</label>
          <select
            name="Where did you hear from us?"
            placeholder="Please choose one option"
            required
            className=""
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

          <button type="submit">Sign up now</button>
        </form>
      </div>

      {/* Right container - Image*/}
      <div className="bg-red-200 z-10">
        <img
          src={formImage}
          alt="formImage"
          className=" rounded-t-lg bg-primaryColor backdrop-brightness-50"
        />
      </div>
    </div>
  );
};

export default Contact;
