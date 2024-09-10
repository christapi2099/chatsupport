import React from "react";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-primary-500 focus:outline-none active:outline-none w-full focus-visible:outline-none border border-primary-5 rounded-[0.6rem] p-3 grow"
    />
  );
}
