import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstGfit from "../Components/FirstGfit";

import SliderImages from "../Components/SliderImages";
import EnvelopeMsg from "../Components/EnvelopeMsg";
import Navigation from "../Navbar/Navigation";
import Welcome from "../Components/Welcome";
import GFandBF from "../GFandBF/GFandBF";
import Couple from "../Couple/Couple";
import Home from "../Components/Home";
import Photos from "../Photos/Photos";

function RoutesParams(props) {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/crush" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="firstgift" element={<FirstGfit />} />
        <Route path="slider" element={<SliderImages />} />
        <Route path="letter" element={<EnvelopeMsg />} />
        <Route path="gfandbf" element={<GFandBF />} />
        <Route path="couple" element={<Couple />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default RoutesParams;
