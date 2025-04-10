import React from "react";
import chef from '../assets/chef.png'

const AllergyAdvice = () => {
  return (
    <div className="pt-20">
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
    </div>
  );
};

export default AllergyAdvice;
