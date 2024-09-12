import React from "react";
import Input from "../_components/ui-elements/input";
import Button from "../_components/ui-elements/button";
import john from "@/public/john.png";
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Profile() {
  return (
    <div className="flex flex-row h-[90dvh] justify-center midPhone:mt-8 items-center mb-10 mt-16">
      <form
        className={` ${urbanist.className} w-4/12 tabletLandscape:w-5/12 tabletMedium:w-6/12 tabletPortrait:w-7/12 phone:w-8/12 midPhone:w-11/12 border gap-7 flex flex-col midPhone:px-6 border-primary-5 rounded-[0.6rem] py-6 px-12`}
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-primary-50 midPhone:p-2 rounded-full p-3 w-max">
            <Image src={john} alt="john" width={80} height={80} />
          </div>

          <div className="flex flex-col text-xl midPhone:leading-5 phone:text-base font-medium">
            <span className="text-2xl midPhone:text-xl capitalize">John</span>
            <span>Johndoe@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 midPhone:text-sm">
          <div className="space-y-3  midPhone:space-y-1">
            <span>Name</span>
            <Input type="text" placeholder="johndoe" />
          </div>
          <div className="space-y-3 midPhone:space-y-1">
            <span>Email</span>
            <Input type="email" placeholder="johndoe@gmail.com" />
          </div>
        </div>

        <div className="flex flex-col midPhone:font-medium midPhone:mb-12 mb-6">
          <Button
            text="Update details"
            type="submit"
            style="self-end bg-primary-400 hover:bg-primary-450 py-2 px-6"
          />
        </div>
      </form>
    </div>
  );
}
