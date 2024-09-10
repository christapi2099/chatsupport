import React from "react";

interface InputProps {
  placeholder: string;
  type: React.HTMLInputTypeAttribute | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
}

export default function Input({
  placeholder,
  type,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className="bg-primary-500 focus:outline-none active:outline-none w-full focus-visible:outline-none border border-primary-5 rounded-[0.6rem] p-3 grow"
    />
  );
}
