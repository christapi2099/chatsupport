"use client";
import Image from "next/image";
import React from "react";
import heroillustration from "@/public/heroillustration.png";
import basketball from "@/public/basketball.png";
import { Urbanist } from "next/font/google";
import Reveal from "./reveal";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="max-w-7xl flex flex-row justify-center midPhone:mt-48 gap-6 my-48 tabletCustom:mt-52 midPhone:mb-5 phone:mx-20 smallPhone:mt-40 smallPhone:mx-10 tabletCustom:mb-16 mx-10 tabletMedium:mx-16 items-center">
      <Image
        src={heroillustration}
        alt="playpicks illustration"
        width={400}
        height={400}
        quality={100}
        className="tabletLandscape:w-[23rem] phone:hidden tabletPortrait:w-[16rem] tabletMedium:w-[20rem]"
      />

      <Reveal>
        <div className="flex flex-col">
          <div className="font-extrabold tracking-tighter flex flex-col text-6xl  tabletMedium:text-4xl midPhone:text-3xl smallestPhone:text-2xl tabletLandscape:text-5xl phone:text-4xl tabletPortrait:text-3xl mb-1">
            <div className="inline-flex items-end">
              Elevate y
              <span className="">
                <Image
                  src={basketball}
                  alt="basketball"
                  quality={100}
                  width={50}
                  height={50}
                  className="block animate-spin-reverse tabletLandscape:w-[2.5rem] phone:w-[2rem] midPhone:w-[1.8rem] smallestPhone:w-[1.5rem] tabletPortrait:w-[1.8rem] tabletMedium:w-[2rem]"
                />
              </span>
              ur betting
            </div>
            <div>Experience.</div>
          </div>
          <div>
            <div className="font-extralight text-wrap text-base tabletMedium:text-sm phone:text-sm midPhone:text-xs tabletPortrait:text-xs mb-5">
              Get AI-powered insights, real-time odds, and personalised betting
              advice.
            </div>
            <button
              className={` ${urbanist.className} tracking-tight font-medium tabletMedium:text-sm bg-gradient-to-br midPhone:text-xs from-primary-200 phone:text-sm to-primary-300 tabletPortrait:text-xs text-xl py-2 px-6 rounded-[0.6rem]`}
            >
              Get started
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
