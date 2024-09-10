"use client";
import React from "react";
import { Urbanist } from "next/font/google";
import Reveal from "./reveal";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Cta() {
  return (
    <div className="w-8/12 tabletCustom:w-10/12">
      <Reveal>
        <div className="bg-primary-400 flex flex-col midPhone:px-10 midPhone:my-6 phone:my-12 midPhone:py-8 midPhone:gap-3 phone:py-12 rounded-[0.6rem] gap-6 items-center my-20 px-20 py-28">
          <div className="tracking-tighter text-4xl midPhone:text-xl smallestPhone:text-base phone:text-2xl items-center text-center font-extrabold">
            Ready to Elevate Your Betting <br /> Strategy?
          </div>
          <button
            className={` ${urbanist.className} phone:text-base tracking-tight midPhone:rounded-[0.4rem] smallPhone:text-xs smallPhone:px-3 midPhone:text-sm midPhone:py-1 midPhone:px-4 font-bold bg-gradient-to-br from-primary-200 to-primary-300 text-xl py-2 px-6 rounded-[0.6rem]`}
          >
            Join Now
          </button>
        </div>
      </Reveal>
    </div>
  );
}
