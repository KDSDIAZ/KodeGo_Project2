import LandingPage from "../page/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";


export default function RouterConvention() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/home' element={<LandingPage />} />
    </Routes>
  )
}