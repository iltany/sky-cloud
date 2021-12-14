import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact/Contact";
import Faq from "../../pages/faq/Faq";
import Home from "../../pages/home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "contacts", element: <Contact /> },
  { path: "faq", element: <Faq /> },
  { path: "pricing", element: <div>Pricing</div> },
];

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}
