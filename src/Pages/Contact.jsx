import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1
          className="font-bold text-2xl italic text-[#0C6967] mb-7"
          style={{ fontFamily: "Allura" }}
        >
          Our Contact
        </h1>
        <p className="text-[18px] font-light text-gray-500">GET IN TOUCH</p>
        <p className="font-bold">
          {" "}
          <span className="text-[#D95103]">Our Friendly Team </span>would love
          to hear from you
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-28 px-30 ">
          {/* Address Section */}
          <div className="pt-5 flex flex-col items-center shadow-2xl shadow-gray-400 rounded-2xl">
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <IoLocationSharp /> Our Address
            </h2>
            <p className="mb-6">BagBazaar, Kathmandu, Bagmati, Nepal</p>
          </div>

          {/* Contacts Section */}
          <div className="pt-5 flex flex-col items-center shadow-2xl shadow-gray-400 rounded-2xl">
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <FaPhone /> Our Contacts
            </h2>
            <p className="mb-2">Mobile: 9808080808</p>
            <p className="mb-6">Landline: 01-4000000</p>
          </div>

          {/* Service Time Section */}
          <div className="pt-5 flex flex-col items-center shadow-2xl shadow-gray-400 rounded-2xl">
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <IoMdTime /> Our Service Time
            </h2>
            <p className="mb-2">MON - FRI: 10 am - 8 pm</p>
            <p>SAT - SUN: Closed</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 py-10  ">
        {/* Map */}
        <div className="w-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.398241981041!2d85.31761337566405!3d27.704987825595186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9d936239f%3A0x6627e25565f694ef!2sDe&#39;%20Pink%20Cafe!5e0!3m2!1sen!2snp!4v1743050673441!5m2!1sen!2snp"
            width={"100%"}
            height={"650"}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Contact <span className="text-[#D95103]">Us</span>
          </h2>
          <p className="text-gray-500 font-light ">
            If you have any queries, send us a message. Our Friendly team would{" "}
            <br /> love to hear from you
          </p>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  className="w-20 border border-gray-300 rounded-lg p-2 bg-white"
                  defaultValue="+977"
                >
                  <option value="+977">+977 (Nepal)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+49">+49 (Germany)</option>
                </select>

                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                What can we do for you
              </label>
              <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24"></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0C6967] text-white px-6 py-2 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
