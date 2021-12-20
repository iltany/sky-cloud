import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/contact/Contact";
import Faq from "../../pages/faq/Faq";
import Home from "../../pages/home/Home";
import Pricing from "../../pages/pricing/Pricing";
import SignUp from "../../pages/sign-up/SignUp";
import SignIn from "../../pages/sign-in/SignIn";
import TextPage from "../../pages/text-page/TextPage";
import Profile from "../../pages/profile/Profile";
import MyFiles from "../../pages/my-files/MyFiles";

const routes = [
  { path: "/", element: <Home /> },
  { path: "contacts", element: <Contact /> },
  { path: "faq", element: <Faq /> },
  { path: "pricing", element: <Pricing /> },
  { path: "sign-up", element: <SignUp /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "text-page", element: <TextPage /> },
  { path: "profile", element: <Profile /> },
  { path: "my-files", element: <MyFiles /> },
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
