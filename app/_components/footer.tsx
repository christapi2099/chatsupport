"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { Urbanist } from "next/font/google";
import Reveal from "./reveal";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Footer() {
  return (
    <Reveal>
      <div
        className={`max-w-7xl items-center tabletPortrait:mx-8 my-4 ${urbanist.className} midPhone:flex-col flex-row mb-20 justify-center flex`}
      >
        <div className="w-8/12 midPhone:w-full midPhone:mb-8">
          <Image
            src={logo}
            alt="playpicks logo"
            quality={100}
            width={150}
            height={150}
            className="mb-3 tabletPortrait:w-[7rem] tabletPortrait:mb-1 midPhone:w-[6rem]"
          />
          <div className="w-8/12 midPhone:w-full tabletPortrait:text-sm phone:text-xs">
            Elevate your betting experience with cutting-edge AI technology,
            personalized insights, and a seamless user interface to make every
            wager more informed and enjoyable.
          </div>
        </div>

        <div>
          <ul className="flex flex-row gap-3 tabletPortrait:text-sm phone:text-xs underline">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
