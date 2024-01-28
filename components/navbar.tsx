"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

import { BiCategory, BiMenuAltRight, BiX } from "react-icons/bi";
import MobileNavbar from "./mobile-navbar";
import { AnimatePresence } from "framer-motion";

// header data
const linkData = [
  {
    name: "gtd.",
    to: "home",
  },
  {
    name: "Products",
    to: "products",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Testimonials",
    to: "testimonials",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

export type linkTypes = {
  name: string;
  to: string;
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = React.useState<boolean>(false);

  return (
    <nav className="bg-secondaryColor px-14 py-4 flex justify-between  items-center text-white ">
      <Link
        key={linkData[0].name}
        to={linkData[0].to}
        className="text-[1.4rem] font-[500] cursor-pointer"
      >
        {linkData[0].name}
      </Link>
      <div className="max-md:hidden flex gap-10  text-[1.1rem]">
        {linkData.slice(1).map((link: linkTypes) => (
          <Link
            className="cursor-pointer"
            key={link.name}
            to={link.to}
            activeClass={"active"}
            spy={true}
            smooth={true}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="cursor-pointer md:hidden flex items-center">
        <BiMenuAltRight
          onClick={() => setMobileNav(true)}
          className="text-4xl"
        />
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MobileNavbar
            linkData={linkData}
            setMobileNav={setMobileNav}
            mobileNav={mobileNav}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
