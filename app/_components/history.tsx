"use client";
import React, { useState } from "react";
import { Urbanist } from "next/font/google";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

const urbanist = Urbanist({ subsets: ["latin"] });

const histories = [
  {
    title: "Arsenal winning the premier league",
  },
  {
    title: "Manchester city",
  },
  {
    title: "Most goals in 2023/2022 season",
  },
  {
    title:
      "Arsenal winning the Premier League would mark a historic achievement, showcasing the culmination of years of development, strategic planning, and exceptional performances both on and off the field.",
  },
  {
    title: "Most goals in 2023/2022 season",
  },
];

export default function History() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div
      className={`${urbanist.className} flex tabletCustom:hidden flex-col h-[80dvh] w-3/12 px-4 items-center border-[0.5px] border-primary-5 rounded-[0.6rem]`}
    >
      <div className="text-xl mt-4 mb-6">History</div>

      <button className="bg-primary-400 text-white font-bold inline-flex mb-6 px-4 py-2 rounded-[0.6rem] gap-2 items-center">
        New conversation <PencilSquareIcon className="w-6" />
      </button>

      <div className="flex flex-col gap-6 cursor-pointer h-[68dvh] overflow-y-auto w-full self-start">
        {" "}
        {histories.map((history, index) => (
          <History
            history={history.title}
            key={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );

  function History({
    history,
    isActive,
    onClick,
  }: {
    history: string;
    isActive: boolean;
    onClick: () => void;
  }) {
    return (
      <div
        onClick={onClick}
        className={`text-sm transition-all w-full ${
          isActive
            ? " bg-primary-400 font-medium py-3 px-2 rounded-[0.4rem]"
            : "py-3 px-2"
        }`}
      >
        <div className="flex flex-row gap-2 items-center ">
          <span className="truncate w-10/12">{history}</span>
          {isActive && <TrashIcon className="w-5 ml-auto" />}
        </div>
      </div>
    );
  }
}
