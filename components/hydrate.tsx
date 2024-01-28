"use client";
import { ReactNode, useEffect, useState } from "react";
import React from "react";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(true);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    setIsHydrated(true);
  }, []);
  return (
    <>{isHydrated ? <>{children}</> : <p className="text-[3rem]">Essa</p>}</>
  );
};

export default Hydrate;
