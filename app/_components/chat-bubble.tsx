import React, { ReactNode } from "react";
import { Urbanist } from "next/font/google";
import PlayPicksLogo from "./ui-elements/playpick-logo";

const urbanist = Urbanist({ subsets: ["latin"] });

interface ChatBubbleProps {
  role: string;
  text: string;
}

export default function ChatBubble({ role, text }: ChatBubbleProps) {
  return (
    <div
      className={` ${urbanist.className} p-2 w-9/12 ${
        role === "user" ? "self-end" : "self-start"
      }`}
    >
      {role === "user" ? (
        <UserBubble content={text} />
      ) : (
        <BotBubble content={text} />
      )}
    </div>
  );
}

function BotBubble({ content }: { content: string }) {
  return (
    <div className="inline-flex gap-2">
      <div className="self-end">
        <PlayPicksLogo />
      </div>

      <div className=" bg-primary-50 text-black rounded-t-[0.6rem] rounded-br-[0.6rem] p-3 text-wrap text-[0.8rem] overflow-x-auto">
        {content}
      </div>
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="bg-primary-400 rounded-tl-[0.6rem] rounded-b-[0.6rem] p-3 text-wrap text-[0.8rem] overflow-x-auto">
      <span>{content}</span>
    </div>
  );
}
