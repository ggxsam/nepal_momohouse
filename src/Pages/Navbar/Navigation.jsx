import { NavLink } from "react-router-dom";
import momologo from "../../assets/momologo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoIosCart } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { state } = useContext(CartContext);
  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);
  return (
    <div className=" border-1  flex  text-[17px]  sticky w-full  bg-white  z-10 justify-between p-2 px-30 ">
      <div className="flex   gap-x-2  justify-center  items-center ">
        <img src={momologo} alt="" />
        <NavLink to="/" className="text-green-950 text-[22px]  font-bold  ">
          Momos
        </NavLink>
      </div>
      <div className=" w-[500] space-x-3.5 flex">
        <NavLink to="/about">About US</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">AllergyAdvice</NavLink>
        <NavLink to="/cartpage" className="relative ">
          <span className="absolute left-4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItem}
          </span>
          <IoIosCart size={28} />
        </NavLink>
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout()
            }
            className="text-xl  text-[17px] mb-3"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>

      <div className="flex      justify-center  items-center   gap-x-3">
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaFacebookF />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaTiktok />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FiInstagram />
        </NavLink>
        <NavLink
          className="bg-orange-700 py-1.5 px-3 rounded-3xl  text-white  "
          to="/contact"
        >
          Contact US
        </NavLink>

        <NavLink to="profile">
          <img className="rounded-full h-7" src={user?.picture} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
