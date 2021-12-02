import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts" element={<div>Contacts</div>} />
      <Route path="pricing" element={<div>Pricing</div>} />
    </Routes>
  );
}
