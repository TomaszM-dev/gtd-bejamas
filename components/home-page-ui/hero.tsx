import Image from "next/image";
import React from "react";
import hero from "/public/img_hero.jpg";
import teamBrian from "/public/media/img_brian_circle.png";
import teamDanielle from "/public/media/img_danielle_circle.png";
import teamLisa from "/public/media/img_lisa_circle.png";

const Hero = () => {
  return (
    <main className="">
      <div className="relative">
        <Image
          className="object-cover w-full max-lg:h-[40vh] max-md:h-[40vh] max-sm:h-[30vh] "
          alt="background-image"
          src={hero}
        ></Image>
        <h1 className=" absolute top-[50%] left-[45%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap text-secondaryColor text-[6rem] font-[900]  max-lg:text-[5rem] max-md:left-[50%] max-md:text-[4.5rem] max-sm:text-[2.8rem]">
          Hello, we're gtd.
        </h1>
      </div>
      <div className="flex gap-28 max-lg:gap-14 max-lg:mt-[-4rem] w-full justify-center max-sm:flex-col max-sm:items-center max-sm:gap-18 mt-[-6rem] max-md:gap-8 z-10 relative max-sm:mt-[-3rem]">
        <Image
          className=" max-lg:w-40 max-lg:h-40 max-md:w-30 max-md:h-30 max-sm:w-44 max-sm:h-44 "
          src={teamLisa}
          alt="lisa"
        ></Image>
        <Image
          className=" max-lg:w-40 max-lg:h-40 max-md:w-30 max-md:h-30  max-sm:w-44 max-sm:h-44"
          src={teamBrian}
          alt="brian"
        ></Image>
        <Image
          className=" max-lg:w-40 max-lg:h-40 max-md:w-30 max-md:h-30 max-sm:w-44 max-sm:h-44 "
          src={teamDanielle}
          alt="danielle"
        ></Image>
      </div>
    </main>
  );
};

export default Hero;
