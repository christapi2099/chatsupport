import React from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  style: string;
}

export default function Button({ text, type, style }: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-[0.6rem]  transition-all tabletMedium:text-[0.8rem] ${
        style ? style : "py-3 px-8"
      }`}
    >
      {text}
    </button>
  );
}
