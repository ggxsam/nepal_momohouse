import circle from "../assets/circle.png";
import momologo from "../assets/momologo.png";
import momo from "../assets/momo.png";
import man from "../assets/man.png";
import onebg from "../assets/onebg.png";
import NavigateToMenu from "../components/NavigateToMenu";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Loading from "../components/Loading";
import video from "../assets/video.png";
import hat from "../assets/hat.png";
import partypopper from "../assets/partypopper.png";
import thumbsup from "../assets/thumbsup.png";
import woman from "../assets/woman.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);

    const filterItems = data.recipes.filter(
      (item) => item.cuisine === "Italian"
    );
    setFilterProduct(filterItems);
  };

  const filterRecipes = (country) => {
    const filterItems = recipes.filter((item) => item.cuisine === country);
    setFilterProduct(filterItems);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-end">
        <div className="mr-48 mt-10 pt-7">
          <div>
            <p className="font-Roboto">RESTAURANT</p>
            <h1 className="text-[61px] flex">
              The
              <span
                style={{ backgroundImage: `url(${onebg})` }}
                className="h-20 text-white bg-no-repeat w-48 flex justify-center items-center border-2"
              >
                #One
              </span>
            </h1>
            <h1 className="text-[61px]">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>
            <p className="text-[20px] font-medium">
              More than
              <span className="text-[#D95103] text-[20px]">
                {" "}
                20+ Varieties{" "}
              </span>
              of momo available for you
            </p>
          </div>
          <NavigateToMenu />
        </div>

        <div className="overflow-hidden w-96 relative flex justify-end">
          <img
            className="h-52 top-14 left-8 absolute"
            src={momo}
            alt="Delicious Momo"
          />
          <img className="h-96 -mt-4" src={circle} alt="Decorative Circle" />
        </div>
      </div>

      {/* Why Customers Love Us */}
      <div className="grid grid-cols-2 justify-center items-center gap-10 px-30 py-10">
        <div className="flex justify-center">
          <img src={man} alt="Customer Image" className="h-[350px]" />
        </div>
        <div>
          Why Customers <span className="text-[#D95103]"> Love Us</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            perspiciatis inventore in ea enim provident earum reprehenderit
            quae, consectetur, architecto, assumenda minus quam obcaecati
            repellat officia! Suscipit aspernatur maxime nesciunt!
          </p>
          <div className="mt-5    ">
            <NavLink
              className="bg-[#0C6967] p-2  flex   justify-center items-center gap-x-1 w-60   rounded-3xl  text-white  "
              to="/menu"
            >
              Explore Story
              <BsArrowRightShort size={32} className="mt-1" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Popular Recipes Section */}
      <div className="">
        <div className=" text-center">
          <h1 className="text-[39px]">
            Our <span className="text-[#D95103]">Most Popular</span> Recipes
          </h1>
          <p className="text-[20px]">
            Browse through a variety of recipes with fresh ingredients selected
            only from the best places
          </p>
        </div>

        <div className="text-center space-x-2 p-2">
          {["Italian", "Korean", "Indian"].map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => filterRecipes(cuisine)}
              className="border hover:bg-gray-400 rounded-2xl px-3 py-1"
            >
              {cuisine}
            </button>
          ))}
        </div>

        {/* Recipe Display */}
        <div className=" ">
          {filterProduct.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5 p-5 px-14">
              {filterProduct.map((item) => (
                <div
                  key={item.id}
                  className="shadow-2xl shadow-gray-800 rounded-2xl w-52 h-52 flex justify-center flex-col items-center"
                >
                  <img
                    className="h-32 rounded-2xl"
                    src={item.image}
                    alt={item.name}
                  />

                  <NavLink to={`/productDescription/${item.id}`}>
                    <h1>{item.name}</h1>
                    <p>Rs.{item.caloriesPerServing}</p>
                    <p>{item.cuisine}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <Loading />
            </div>
          )}
        </div>

        <div className="flex justify-center pb-4">
          <NavigateToMenu />
        </div>
      </div>

      {/* process behind the making */}
      <div className="px-30">
        <div className="text-center py-10 text-2xl font-bold">
          <span className="text-[#D95103]">We Offer People </span>The Service
          They Want
        </div>
        <div className="relative">
          <img src={video} alt="" />
          <div className=" absolute top-0 w-full h-full flex flex-col justify-center items-center text-white text-2xl">
            <h1 className="font-bold"> Process behind the making</h1>
            <p className="py-5">See how only chefs cooks only the best momos</p>

            <NavLink
              className="bg-[#0C6967] p-2  flex   justify-center items-center gap-x-1 w-60   rounded-3xl  text-white  "
              to="/menu"
            >
              Watch the Video
              <BsArrowRightShort size={32} className="mt-1" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="px-30 py-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <img className="h-20 w-20 mb-4" src={thumbsup} alt="Quality Food" />
            <h1 className="text-lg font-bold">Quality Food</h1>
            <p className="text-sm">
              Only the best food with top quality <br /> products and
              ingredients
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="h-20 w-20 mb-4"
              src={partypopper}
              alt="Private Party"
            />
            <h1 className="text-lg font-bold">Private Party</h1>
            <p className="text-sm">
              Get the best food for all your private <br /> parties and
              gatherings
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img className="h-20 w-20 mb-4" src={hat} alt="Catering" />
            <h1 className="text-lg font-bold">Catering</h1>
            <p className="text-sm">
              Get the best food for any occasions <br /> and gatherings
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <NavLink
            className="bg-[#0C6967] p-2 flex justify-center items-center gap-x-1 w-60 rounded-3xl text-white"
            to="/services"
          >
            Explore Our Services
            <BsArrowRightShort size={32} className="mt-1" />
          </NavLink>
        </div>
      </div>

      <div className="px-30 py-10">
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-4xl">
              200+ <span className="text-[#D95103]">Happy Customers</span>
            </h1>
            <p className="text-[#0C6967] font-bold mt-4 text-2xl">
              What our customers say about us
            </p>
            <p className="italic py-7 text-2xl">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>
            <p className="font-bold text-xl">Livia Dias</p>
          </div>

          <div className="flex justify-center">
            <img
              src={woman}
              alt="Happy Customer"
              className="h-[550px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-30 py-10 bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="font-bold text-4xl">
            Get <span className="text-[#D95103]">In Touch</span>
          </h1>
          <p className="text-[#0C6967] font-bold text-lg">
            Our Friendly team would love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="bg-[#0C6967] text-white p-8 rounded-lg">
            {/* Address Section */}
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <IoLocationSharp /> Our Address
            </h2>
            <p className="mb-6">BagBazaar, Kathmandu, Bagmati, Nepal</p>

            {/* Contacts Section */}
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <FaPhone /> Our Contacts
            </h2>
            <p className="mb-2">Mobile: 9808080808</p>
            <p className="mb-6">Landline: 01-4000000</p>

            {/* Service Time Section */}
            <h2 className="font-medium text-xl mb-4 inline-flex gap-x-2 items-center">
              <IoMdTime /> Our Service Time
            </h2>
            <p className="mb-2">MON - FRI: 10 am - 8 pm</p>
            <p>SAT - SUN: Closed</p>

            {/* Social Networks Section */}
            <h2 className="font-light text-xl mb-4 inline-flex gap-x-2 items-center mt-10 italic">
              Get in touch on social networks
            </h2>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-[#0C6967] p-3 rounded-full hover:bg-[#D95103] hover:text-white"
              >
               < FaFacebook />
              </a>
              <a
                href="#"
                className="bg-white text-[#0C6967] p-3 rounded-full hover:bg-[#D95103] hover:text-white"
              >
                < FaInstagram/>
              </a>
              <a
                href="#"
                className="bg-white text-[#0C6967] p-3 rounded-full hover:bg-[#D95103] hover:text-white"
              >
                 < FaTiktok/>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
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
                <textarea
                  
                  className="w-full border border-gray-300 rounded-lg p-2 h-24"
                ></textarea>
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

      <div className="py-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.398241981041!2d85.31761337566405!3d27.704987825595186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9d936239f%3A0x6627e25565f694ef!2sDe&#39;%20Pink%20Cafe!5e0!3m2!1sen!2snp!4v1743050673441!5m2!1sen!2snp"
          width={"1500"}
          height={"450"}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
