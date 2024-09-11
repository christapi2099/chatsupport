"use client";
import React, { useState } from "react";
import { Urbanist } from "next/font/google";

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
      className={`${urbanist.className} flex flex-col h-[80dvh] w-3/12 px-4 items-center border-[0.5px] border-primary-5 rounded-[0.6rem]`}
    >
      <div className="text-xl mt-4 mb-6">History</div>

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
            : ""
        }`}
      >
        <span className="truncate">{history}</span>
      </div>
    );
  }
}
