import React from "react";
import { Urbanist } from "next/font/google";
import SendIcon from "./ui-elements/send-icon";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Prompt() {
  return (
    <div className="flex flex-col ">
      <form className="border border-primary-5 mb-8 bg-primary-500 flex flex-row p-1 rounded-[0.6rem]">
        <input
          type="text"
          placeholder="What game are you interested in today?"
          className="bg-primary-500 grow p-1 focus:outline-none active:outline-none focus-visible:outline-none text-sm"
        />
        <button className="bg-primary-50 rounded-[0.5rem] px-3 py-1 items-center flex justify-center">
          <SendIcon />
        </button>
      </form>

      <div
        className={`${urbanist.className} self-center midPhone:text-[0.6rem] text-xs font-light`}
      >
        2024, All rights reserved PlayPicks.
      </div>
    </div>
  );
}
