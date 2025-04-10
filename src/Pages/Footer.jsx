import React from "react";
import momologo from '../assets/momologo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-30 py-10 mt-10 bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">

          <div>
            <h3 className="text-lg font-bold mb-4 inline-flex gap-3 items-center">
              <img src={momologo} alt="Momo Logo" />
              <span className="text-[#0C6967]">momos</span>
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit in. Lorem
              nunc nullam morbi urna amet suspendisse nullam ac vivamus.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Momos Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">
                <span className="text-[#0C6967]">momos</span>
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="/menu" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legals Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">
                <span className="text-[#0C6967]">Legals</span>
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/services" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">
                <span className="text-[#0C6967]">Follow Us</span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center w-10 h-10"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
