import React from "react";
import { Urbanist } from "next/font/google";
import GoogleIcon from "../_components/ui-elements/google-icon";
import Button from "../_components/ui-elements/button";
import Link from "next/link";
import Input from "../_components/ui-elements/input";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Signup() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form
        className={`${urbanist.className} border border-primary-5 tabletLandscape:w-5/12 phone:w-8/12 midPhone:w-10/12 midPhone:mt-6 mt-16 p-8 w-4/12 tabletMedium:w-6/12 flex flex-col rounded-[0.6rem]`}
      >
        <div className="text-xl mb-6 font-normal self-center">
          Create an Account
        </div>

        <div className="gap-4 flex flex-col mb-4">
          <Input placeholder="Email" type="text" />
          <Input placeholder="Password" type="password" />
        </div>

        <div className="self-center gap-1 flex flex-col mb-8">
          <Button
            type="submit"
            style="bg-primary-400 hover:bg-primary-450 py-2 px-20"
            text="Signup"
          />

          <div className="text-sm font-light">
            Already have an account?{" "}
            <Link href="login" className="underline">
              Login
            </Link>
          </div>
        </div>

        <div className="self-center items-center gap-8 flex flex-col">
          <div>OR</div>

          <button className="bg-primary-50 text-black smallPhone:text-sm rounded-[0.4rem] gap-2 inline-flex font-medium items-center py-1 px-8">
            Continue with Google <GoogleIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
