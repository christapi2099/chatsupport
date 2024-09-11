import React, { ReactNode } from "react";
import History from "../_components/history";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-row h-screen justify-center items-center my-10">
        <History />
        <div className="w-6/12">{children}</div>
      </div>
    </>
  );
}
