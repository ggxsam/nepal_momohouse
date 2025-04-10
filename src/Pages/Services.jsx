import React from "react";
import dine from '../assets/dine.png'
import party from '../assets/party.png'
import chef from '../assets/chef.png'
import { NavLink } from "react-router-dom";
import partypopper from '../assets/partypopper.png'
import hat from '../assets/hat.png'
import qr from '../assets/qr.png'
import { BsArrowRightShort } from "react-icons/bs";

const Services = () => {

  return (
    <div className="px-30">
      <div className="mt-1 flex justify-between items-center pt-10 pb-10">
        <div className=" text-[30px]  ">
          <h1 className="italic text-[#0C6967]">Our Services</h1>
          <p className="font-light">WE PRIDE OURSELF ON</p>
          <p>
            <span className="text-[#D95103]">Our authentic momo recipes</span>{" "}
            <br /> passed down through generations
          </p>
        </div>

        <div>
          <img className="h-[556px]" src={chef} alt="" />
        </div>
      </div>

      <div className="relative">
        <img src={dine} className="w-full h-auto" alt="Process" />
        <div className="absolute top-0 text-white px-30 pt-80  ">
          <h1 className="text-2xl font-bold">Dine With Us</h1>
          <p className="text-lg mt-2 ">
            See how we make momos that you like from only the best ingredients
          </p>

          <NavLink
                        className="bg-[#0C6967] mt-4 p-2  flex   justify-center items-center gap-x-1 w-50   rounded-3xl  text-white  "
                        to="/menu"
                      >
                        Watch the Video
                        <BsArrowRightShort size={32} className="mt-1" />
                      </NavLink>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 relative mb-40">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold pb-5">
            <img src={partypopper} alt="" />
          Private Party
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>

          <div className="flex  items-center gap-28 mt-5 p-5 shadow-2xl shadow-gray-400 rounded-2xl pl-7  ">
            <div>
            <h1>Scan the QR code</h1>
            <p>You can also check about the service</p>
            </div>
            <img src={qr} alt="" />
          </div>
        </div>

        <div>
          <img src={party} alt="" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 relative mb-40">
        <div>
          <img src={party} alt="" />
        </div>

        <div className="w-1/2">
          <h1 className="text-4xl font-bold pb-5">
            <img src={hat} alt="" />
            Catering
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
          <div className="flex  items-center gap-28 mt-5 p-5 shadow-2xl shadow-gray-400 rounded-2xl pl-7  ">
            <div>
            <h1>Scan the QR code</h1>
            <p>You can also check about the service</p>
            </div>
            <img src={qr} alt="" />
          </div>
        </div>
      </div>

       <div className=" bg-[#FAFBFB] ">
            <div className="flex flex-col items-center mt-20">
              <h2 className="text-[#0C6967]  text-2xl font-bold mb-5 pt-7">Got any Queries?</h2>
              <p className="text-center text-gray-700 mb-7">
              If you have any queries, send us a message. Our Friendly team would love to hear from you 
              </p>
             <NavLink  className="bg-[#0C6967] p-2 flex   justify-center items-center w-30   rounded-3xl  text-white  " to='/contact'>Get In Touch</NavLink>
            </div>
          </div>

    </div>
  );
};

export default Services;
