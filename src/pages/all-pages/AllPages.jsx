import React from "react";
import { Link } from "react-router-dom";

export const allPages = [
  { link: "/", titleLink: "Home" },
  { link: "/pricing", titleLink: "Pricing" },
  { link: "/contacts", titleLink: "Contact" },
  { link: "/faq", titleLink: "FAQ" },
  { link: "/sign-up", titleLink: "Register" },
  { link: "/sign-in", titleLink: "Login" },
  { link: "/text-page", titleLink: "Text page" },
  { link: "/profile", titleLink: "Profile" },
  { link: "/my-files", titleLink: "My files" },
  { link: "/download-file", titleLink: "Download file" },
];

const AllPages = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {allPages.map((item) => {
        return (
          <Link
            key={item.titleLink}
            to={item.link}
            style={{ marginBottom: 15, fontSize: 20 }}
          >
            {item.titleLink}
          </Link>
        );
      })}
    </div>
  );
};

export default AllPages;
