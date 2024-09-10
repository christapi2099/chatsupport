"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import quote from "@/public/quote.png";
import john from "@/public/john.png";
import alice from "@/public/alice.png";
import robert from "@/public/robert.png";
import { Urbanist } from "next/font/google";
import Reveal from "./reveal";

const urbanist = Urbanist({ subsets: ["latin"] });

const reviews = [
  {
    name: "John D.",
    review:
      "This chatbot has completely transformed the way I approach sports betting. The AI-driven predictions are incredibly accurate and reliable, giving me the confidence to make smarter bets and significantly improving my overall betting experience!",
    image: john,
  },
  {
    name: "Alice M.",
    review:
      "Real-time odds updates and personalized tips have made a huge difference in my betting strategy, allowing me to make quicker, more informed decisions and adapt to changes instantly, ultimately leading to more consistent success in my bets.",
    image: alice,
  },
  {
    name: "Robert C.",
    review:
      "I love how easy it is to use and the accuracy of the insights provided by this amazing tool! It has streamlined my decision-making process, offering valuable data and predictions that have significantly improved my overall betting outcomes and experience.",
    image: robert,
  },
];

export default function Reviews() {
  return (
    <div className="max-w-7xl my-32 midPhone:my-6 tabletPortrait:my-12 smallestPhone:mx-4 tabletCustom:mx-10 items-center justify-center flex flex-col">
      <div
        className={`bg-primary-400 smallestPhone:py-2 smallestPhone:text-[0.7rem] midPhone:mb-4 tabletMedium:py-2 midPhone:text-sm tabletMedium:text-base text-white w-max text-xl px-6 py-3 mb-6 rounded-[0.6rem] font-medium  ${urbanist.className}`}
      >
        Reviews
      </div>

      <Reveal>
        <div className="flex flex-row gap-6 midPhone:gap-3 phone:flex-col phone:items-center justify-center">
          {reviews.map((review, index) => (
            <Review
              review={review.review}
              name={review.name}
              image={review.image}
              key={index}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function Review({
  name,
  image,
  review,
}: {
  name: string;
  image: StaticImageData;
  review: string;
}) {
  return (
    <div className="bg-primary-20 rounded-[0.8rem] midPhone:w-10/12 phone:w-9/12 tabletCustom:w-5/12 relative w-3/12">
      <Image
        src={quote}
        alt="quote"
        width={200}
        height={200}
        className="absolute top-0 right-0 phone:w-[8rem]"
      />
      <div className="flex flex-col space-y-3 tabletCustom:mb-20 mx-5 mt-6 tabletLandscape:mb-8 mb-20 tabletPortrait:mb-5 phone:mb-12 tabletPortrait:mt-5 midPhone:mt-3  midPhone:mb-6 relative z-10">
        <div className="flex flex-row items-center gap-4 tabletPortrait:mb-0 mb-3">
          <div className="bg-primary-50 rounded-[30rem] overflow-hidden items-center ">
            <Image
              src={image}
              alt="users"
              width={80}
              height={80}
              quality={100}
              className="w-[4rem] tabletPortrait:w-[4rem] phone:w-[5rem] midPhone:w-[3rem]"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-white tracking-tight tabletMedium:text-base font-semibold tabletLandscape:text-xl midPhone:text-xl text-2xl phone:text-2xl">
              {name}
            </div>
          </div>
        </div>
        <div className="text-base tabletCustom:text-sm text-primary-50 font-extralight text-wrap tabletCustom:w-full phone:text-base midPhone:text-[0.8rem] midPhone:leading-4 w-10/12">
          {review}
        </div>
      </div>
    </div>
  );
}
