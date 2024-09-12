import React, { ReactNode } from "react";
import History from "../_components/history";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="overflow-hidden h-screen">
      <div className="flex flex-row h-[90dvh] justify-center items-center mb-10 mt-24">
        <History />
        <div className="w-6/12 tabletLandscape:w-7/12 tabletMedium:w-8/12 phone:w-full tabletPortrait:w-10/12">
          {children}
        </div>
      </div>
    </div>
  );
}
