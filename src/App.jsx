import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import Navigation from "./Pages/Navbar/Navigation";
import ProductDescription from "./Pages/ProductDescription";
import CartPage from "./Pages/CartPage";
import Payment from "./payment/Payment";
import Success from "./payment/Success";
import Failure from "./payment/Failure";
import Login from "./auth/Login";
import Profile from "./auth/Profile";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={< ProtectedRoute components={<Home/>} />}/>
        <Route path="/about" element={< ProtectedRoute components={<About/>} />} />
        <Route path="/contact" element={< ProtectedRoute components={<Contact />} />} />
        <Route path="/allergyadvice" element={< ProtectedRoute components={<AllergyAdvice/>} />} />
        <Route path="/menu" element={< ProtectedRoute components={<Menu />} />}/>
        <Route path="/services" element={< ProtectedRoute components={<Services />} />} />
        <Route path="/productdescription/:id" element={< ProtectedRoute components={<ProductDescription />} />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/success" element={< ProtectedRoute components={<Success />} />}/>
        <Route path="/failure" element={< ProtectedRoute components={<Failure />} />}/>
        <Route path='/login' element={< Login />}/>
        <Route path="/profile" element={< ProtectedRoute components={<Profile />} />}/>
        <Route path="/payment" element={< ProtectedRoute components={<Payment />} />} /> //navigation ma rakhna parena

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
