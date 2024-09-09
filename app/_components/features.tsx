import React from "react";
import aipowered from "@/public/aipowered.png";
import personalizedAdvice from "@/public/personalizedAdvice.png";
import stopwatch from "@/public/stopwatch.png";
import Image, { StaticImageData } from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

const features = [
  {
    header: "AI-Powered Predictions",
    details:
      "Leverage cutting-edge AI technology to receive the most accurate predictions, helping you stay ahead of the competition and make smarter decisions in every game you play.",
    image: aipowered,
    alt: "ai illustration",
    colour: "bg-primary-600",
    order: "order-1",
  },
  {
    header: "Real-time Updates",
    details:
      "Stay constantly updated with the latest odds, statistics, and insights, empowering you to make well-informed, strategic bets in real-time and increase your chances of success.",
    image: stopwatch,
    alt: "stopwatch",
    colour: "bg-primary-700",
    order: "order-2",
  },
  {
    header: "Personalised Advice",
    details:
      "Receive personalized betting tips specifically tailored to your unique betting style, preferences, and interests, helping you make more informed decisions and enhance your overall betting experience.",
    image: personalizedAdvice,
    alt: "avatar",
    colour: "bg-primary-800",
    order: "order-1",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col justify-center w-6/12 my-20 items-center">
      <div
        className={`bg-primary-400 text-white w-max text-xl px-6 py-3 mb-6 rounded-[0.6rem] font-medium  ${urbanist.className}`}
      >
        Key Features
      </div>

      <div className="flex flex-col gap-6">
        {features.map((feature, index) => (
          <Feature
            colour={feature.colour}
            header={feature.header}
            alt={feature.alt}
            details={feature.details}
            key={index}
            order={feature.order}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({
  colour,
  header,
  image,
  alt,
  details,
  order,
}: {
  header: string;
  details: string;
  image: StaticImageData;
  alt: string;
  colour: string;
  order: string;
}) {
  return (
    <div
      className={`flex flex-row ${colour} py-4 px-8 items-center gap-10 text-black rounded-[0.6rem] w-full`}
    >
      <div
        className={`flex flex-col ${
          order === "order-1" ? "order-1" : "order-2"
        }`}
      >
        <div className="font-bold tracking-tighter text-primary-900 text-2xl capitalize">
          {header}
        </div>
        <div className="text-base font-extralight">{details}</div>
      </div>

      <div className={`${order === "order-1" ? "order-2" : "order-1"}`}>
        <Image src={image} width={600} height={600} alt={alt} quality={100} />
      </div>
    </div>
  );
}
