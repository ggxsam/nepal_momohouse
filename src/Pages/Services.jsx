import React from "react";
import dine from '../assets/dine.png'
import party from '../assets/party.png'
import chef from '../assets/chef.png'

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
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 relative mb-40">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold pb-5">
          Private Party
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
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
            Catering
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
        </div>
      </div>

    </div>
  );
};

export default Services;
