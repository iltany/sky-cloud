import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="pricing" element={<div>Pricing</div>} />
    </Routes>
  );
}
