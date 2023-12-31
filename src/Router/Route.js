import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import SliderImages from "../Components/SliderImages";
import EnvelopeMsg from "../Components/EnvelopeMsg";

function RoutesParams(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="slider" element={<SliderImages />} />
      <Route path="letter" element={<EnvelopeMsg />} />
    </Routes>
  );
}

export default RoutesParams;
