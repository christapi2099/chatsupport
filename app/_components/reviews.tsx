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
    <div className="max-w-7xl my-32 tabletPortrait:my-12 smallestPhone:mx-4 tabletCustom:mx-10 items-center justify-center flex flex-col">
      <div
        className={`mb-8 bg-primary-400  ${urbanist.className} text-white text-xl w-max px-6 py-3 rounded-[0.6rem] font-medium`}
      >
        Reviews
      </div>

      <Reveal>
        <div className="flex flex-row gap-6 phone:flex-col phone:items-center justify-center">
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
    <div className="bg-primary-20 rounded-[0.8rem] phmid:w-full phone:w-9/12 tabletCustom:w-5/12 relative w-3/12">
      <Image
        src={quote}
        alt="quote"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      <div className="flex flex-col space-y-3 tabletCustom:mb-12 mx-5 mt-6 tabletLandscape:mb-8 mb-20 tabletPortrait:mb-5 phone:mb-12 tabletPortrait:mt-5 relative z-10">
        <div className="flex flex-row items-center gap-4 mb-3">
          <div className="bg-primary-50 rounded-[30rem] overflow-hidden items-center ">
            <Image
              src={image}
              alt="users"
              width={80}
              height={80}
              quality={100}
              className="tabletPortrait:w-[4rem] phone:w-[5rem] smallPhone:w-[3rem]"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-white tracking-tight tabletMedium:text-base font-semibold tabletLandscape:text-xl smallPhone:text-base text-2xl phone:text-2xl">
              {name}
            </div>
          </div>
        </div>
        <div className="text-base tabletCustom:text-sm text-primary-50 font-extralight text-wrap tabletCustom:w-11/12 smallPhone:text-xs phone:text-base tabletPortrait:text-xs tabletMedium:w-full w-10/12">
          {review}
        </div>
      </div>
    </div>
  );
}
