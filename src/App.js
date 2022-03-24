import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navigation } from "./Components/Navbar/Navbar";
import { About } from "./Pages/About/About";
import { Artists } from "./Pages/Artists/Artists";
import { Arts } from "./Pages/Arts/Arts";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Profiles } from "./Pages/Profiles/Profiles";
import { SignUp } from "./Pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <Routes>
          <Route path="/Arts" element={<Arts />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Profiles" element={<Profiles />} />

          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
