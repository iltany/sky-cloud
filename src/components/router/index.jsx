import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact/Contact";
import Faq from "../../pages/faq/Faq";
import Home from "../../pages/home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="faq" element={<Faq />} />
      <Route path="pricing" element={<div>Pricing</div>} />
    </Routes>
  );
}
