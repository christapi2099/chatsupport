import React from "react";
import { Urbanist } from "next/font/google";
import CopyrightIcon from "@/app/_components/ui-elements/copyrightIcon";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Copyright() {
  return (
    <div className="border-t-[0.2px] w-full text-primary-5 border-primary-10 justify-center flex flex-col items-center">
      <div className="my-3 midPhone:my-2 inline-flex gap-1 items-center">
        <CopyrightIcon />
        <div
          className={`${urbanist.className} phone:text-xs midPhone:text-[0.6rem] text-sm font-light`}
        >
          All rights reserved PlayPicks inc.
        </div>
      </div>
    </div>
  );
}
