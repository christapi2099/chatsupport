"use client";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Urbanist } from "next/font/google";
import john from "@/public/john.png";
import Button from "./ui-elements/button";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); //temporary Login state, CHANGE LATER

  return (
    <header className="fixed top-0 left-0 w-full bg-primary-500 z-50">
      <div
        className={` ${urbanist.className} px-6 py-4 mt-2 flex justify-between items-center max-w-7xl mx-auto`}
      >
        <Logo />
        <NavLinks />
        {isLoggedIn ? (
          <div className="items-center gap-2 xl:inline-flex hidden">
            <div
              onClick={() => setIsLoggedIn(false)}
              className="cursor-pointer text-xl font-medium"
            >
              Logout
            </div>
            <Link href="profile" className="bg-primary-50 rounded-full p-1">
              <Image src={john} alt="john user" width={40} height={40} />
            </Link>
          </div>
        ) : (
          <NavButton />
        )}
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
          <li className="cursor-pointer hidden tabletPortrait:block w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300">
            <Link href="history">History</Link>
          </li>
          {isLoggedIn ? (
            <li
              onClick={() => setIsLoggedIn(false)}
              className="cursor-pointer w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300"
            >
              Logout
            </li>
          ) : (
            <>
              <li className="cursor-pointer w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300">
                <Link href="login">login</Link>
              </li>
              <li className="cursor-pointer w-full list-none text-center font-medium p-4 midPhone:py-2 transition-all hover:text-primary-300">
                <Link href="signup">Signup</Link>
              </li>
            </>
          )}
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
        height={120}
        width={120}
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
          <Link href="/#features">Features</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/#reviews">Reviews</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="chat">Chat</Link>
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
