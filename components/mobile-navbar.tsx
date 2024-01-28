import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { linkTypes } from "./navbar";
import { Link } from "react-scroll";

type mobileNavStateProps = {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  mobileNav: boolean;
  linkData: linkTypes[];
};

const MobileNavbar = ({
  setMobileNav,
  mobileNav,
  linkData,
}: mobileNavStateProps) => {
  console.log(linkData);
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className=" bg-secondaryColor  absolute right-0 top-0 w-screen h-full   flex flex-col items-center justify-between  px-10 gap-5 bg-opacity-[0.98]"
    >
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className=" right-14 absolute text-[2rem] cursor-pointer gradientText  top-5 "
      >
        <IoMdClose />
      </div>
      <p className="text-[1.1rem] w-full pt-28  pb-3 border-b-[1px]">
        Navigation
      </p>

      <div className=" flex  flex-col   gap-2 w-full h-full mt-28 ">
        {linkData.slice(1).map((link: linkTypes) => (
          <Link
            className="cursor-pointer text-[2.6rem] font-[300]"
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
      <p className="w-full border-b-[1px] pb-2 text-[1.1rem] text-end  mb-10 ">
        Contact
      </p>
    </motion.div>
  );
};

export default MobileNavbar;
