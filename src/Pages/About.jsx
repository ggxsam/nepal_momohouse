import React from "react";
import group from "../assets/group.png";
import process from "../assets/process.png";
import tattoo from "../assets/tattoo.png";
import steam from "../assets/steam.png";
import fry from "../assets/fry.png";
import handcraft from "../assets/handcraft.png";
import smile from "../assets/smile.png";
import newmomo from "../assets/newmomo.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const About = () => {

  const teamMembers=[
    {name:'Head Chef', image:team1},
    {name:'Assistant Chef', image:team2},
    {name:'Assistant Chef', image:team3},
  ]

  return (
    <div className="px-30">
      <div className="mt-1 flex justify-between items-center pt-10 pb-10">
        <div className=" text-[30px]  ">
          <h1 className="italic text-[#0C6967]">About Us</h1>
          <p className="font-light">WE PRIDE OURSELF ON</p>
          <p>
            <span className="text-[#D95103]">Our authentic momo recipes</span>{" "}
            <br /> passed down through generations
          </p>
        </div>

        <div>
          <img className="h-[556px]" src={group} alt="" />
        </div>
      </div>

      <div className="relative">
        <img src={process} className="w-full h-auto" alt="Process" />
        <div className="absolute top-0 text-white px-30 pt-80 ">
          <h1 className="text-2xl font-bold">Process behind the making</h1>
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
            Our momos are <span className="text-[#D95103]">made with love</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
        </div>

        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 ">
          <img src={steam} alt="" />
        </div>

        <div>
          <img src={tattoo} alt="" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 relative mb-40">
        <div>
          <img src={handcraft} alt="" />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 ">
          <img src={fry} alt="" />
        </div>

        <div className="w-1/2">
          <h1 className="text-4xl font-bold pb-5">
            Taste the difference with{" "}
            <span className="text-[#D95103]">our handcrafted momos</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 relative mb-40">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold pb-5">
            Our momos are <span className="text-[#D95103]">made with love</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 ">
          <img src={newmomo} alt="" />
        </div>

        <div>
          <img src={smile} alt="" />
        </div>
      </div>

      <div>
        <h1 className="font-bold text-3xl text-center">
          Meet The <span className="text-[#D95103] ">Team</span>{" "}
        </h1>
        <p className="font-bold text-l pt-3 text-center">
          {" "}
          <span className="text-[#0C6967]">
            Our talented team members who delivers only the best results
          </span>
        </p>

        
        <div className="flex justify-center items-center gap-20 mt-10 mb-20 flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img className="h-80 w-80 object-cover rounded-lg" src={member.image} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
