import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen items-center border-black">
        <div className="">
          <h1 className="text-3xl text-bold">Contact Us</h1>
          <div className="space-y-2 mt-4">
            <span>Name :</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
            />
          </div>

          <div className="space-y-2 mt-4">
            <span>Email :</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
            />
          </div>

          <div>
            <span>Message :</span>
            <br />
            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <button className="btn btn-info">Submit</button>

        </div>
      </div>
    </>
  );
};

export default Contact;
