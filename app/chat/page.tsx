import React from "react";
import { Urbanist } from "next/font/google";
import Prompt from "../_components/prompt";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Chat() {
  return (
    <div className="mx-6 h-[80dvh] justify-center flex flex-col items-center w-full">
      <div className="flex flex-col overflow-y-auto p-2">Messages</div>

      <div
        className={`${urbanist.className} mt-auto pb-4 px-4 w-8/12 pt-2 border border-primary-5 rounded-[0.5rem]`}
      >
        <Prompt />
      </div>
    </div>
  );
}
