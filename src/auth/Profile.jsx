import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, logout,isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-100">
  //       <div className="text-lg font-semibold text-gray-600">Loading...</div>
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-100">
  //       <div className="text-lg font-semibold text-red-500">
  //         You are not logged in.
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="pt-20">
      <div className=" w-[700px] gap-5 p-2 m-auto flex shadow-2xl shadow-gray-800 rounded-2xl ">
        <div>
          <img className="h-52 rounded-2xl  " src={user?.picture} alt="" />
        </div>

        <div className="mt-5 space-y-4">
          <h1>Name:{user?.name}</h1>
          <p>Email:{user?.email}</p>
          <p className="underline">Email Verification:{user?.email_verification}</p>

          <button
          onClick={()=>{
            logout();
            
          }}
          className="bg-black text-white p-2 w-28 rounded-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
