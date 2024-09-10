"use client";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Urbanist } from "next/font/google";
import Button from "./ui-elements/button";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary-500 z-50">
      <div
        className={` ${urbanist.className} px-6 py-4 mt-2 flex justify-between items-center max-w-7xl mx-auto`}
      >
        <Logo />
        <NavLinks />
        <NavButton />
        <Bars3Icon
          className="xl:hidden block cursor-pointer tabletLandscape:w-10 smallPhone:w-8 w-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:hidden top-20 midPhone:top-14 w-full left-0 capitalize bg-primary-500 flex flex-col items-center gap-3 midPhone:gap-1 text-sm font-light transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
        >
          {/* <li className="cursor-pointer w-full list-none text-center p-4 transition-all hover:text-primary-300">
            Features
          </li>
          <li className="cursor-pointer w-full list-none text-center p-4 transition-all hover:text-primary-300">
            Reviews
          </li>
          <li className="cursor-pointer w-full list-none text-center p-4 transition-all hover:text-primary-300">
            About
          </li> */}
          <li className="cursor-pointer w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300">
            login
          </li>
          <li className="cursor-pointer w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300">
            Signup
          </li>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        quality={100}
        height={150}
        width={150}
        alt="logo"
        className="tabletLandscape:w-[7rem] smallPhone:w-[5rem]"
      />
    </Link>
  );
}

function NavLinks() {
  return (
    <div>
      <ul className="gap-5 text-base font-light hidden xl:inline-flex tabletMedium:text-[0.8rem]">
        <li className="cursor-pointer">
          <a href="#features">Features</a>
        </li>
        <li className="cursor-pointer">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="cursor-pointer">
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}

function NavButton() {
  return (
    <div className="gap-4 xl:flex hidden font-medium ">
      <Link href="signup">
        <Button
          text="Signup"
          type="button"
          style="bg-primary-400 hover:bg-primary-450 py-3 px-8"
        />
      </Link>

      <Link href="login">
        <Button
          text="Login"
          type="button"
          style="bg-primary-100 hover:bg-primary-900 py-3 px-8"
        />
      </Link>
    </div>
  );
}
