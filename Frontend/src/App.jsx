import React, { useState } from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvide";
import Contact from "./contact/Contact";

function App() {

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={authUser ? <Contact/> : <Navigate to="/signup"/>}/>
      </Routes>
      <Toaster/>
      </div>
      
    </>
  );
}

export default App;
