import Image from "next/image";
import React from "react";
import heroillustration from "@/public/heroillustration.png";
import basketball from "@/public/basketball.png";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="max-w-7xl flex flex-row justify-center gap-6 my-48 mx-10 items-center">
      <Image
        src={heroillustration}
        alt="playpicks illustration"
        width={400}
        height={400}
        quality={100}
      />

      <div className="flex flex-col">
        <div className="font-extrabold tracking-tighter flex flex-col text-6xl mb-1">
          <div className="inline-flex items-end">
            Elevate y
            <span className="">
              <Image
                src={basketball}
                alt="basketball"
                quality={100}
                width={50}
                height={50}
                className="block animate-spin-reverse"
              />
            </span>
            ur betting
          </div>
          <div>Experience.</div>
        </div>
        <div>
          <div className="font-extralight text-wrap text-base mb-5">
            Get AI-powered insights, real-time odds, and personalised betting
            advice.
          </div>
          <button
            className={` ${urbanist.className} tracking-tight font-medium bg-gradient-to-br from-primary-200 to-primary-300 text-xl py-2 px-6 rounded-[0.6rem]`}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
