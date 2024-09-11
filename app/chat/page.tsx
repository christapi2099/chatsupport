import React from "react";
import { Urbanist } from "next/font/google";
import Prompt from "../_components/prompt";
import ChatBubble from "../_components/chat-bubble";

const urbanist = Urbanist({ subsets: ["latin"] });

const messages = [
  {
    text: "Which team is at the top of the premier league table?",
    role: "user",
  },
  {
    text: "According to recent update Manchester City is at the top of the premier league table, they won have won the premier league title four times in a role and are doing very well in the current campaign defeating Ipswich 4 goals to 1 in their last game with haaland scoring a hatrick.",
    role: "assistant",
  },
];

export default function Chat() {
  return (
    <div className="mx-6 h-[80dvh] justify-center flex flex-col items-center w-full">
      <div className="flex flex-col overflow-y-auto w-9/12 p-2">
        {messages.map((message, index) => (
          <ChatBubble text={message.text} role={message.role} key={index} />
        ))}
      </div>

      <div
        className={`${urbanist.className} mt-auto pb-4 px-4 w-9/12 pt-2 border border-primary-5 rounded-[0.5rem]`}
      >
        <Prompt />
      </div>
    </div>
  );
}
