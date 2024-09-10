import React from "react";
import { Urbanist } from "next/font/google";
import Input from "../_components/ui-elements/input";
import Button from "../_components/ui-elements/button";
import Link from "next/link";
import GoogleIcon from "../_components/ui-elements/googleIcon";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Login() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form
        className={`${urbanist.className} border border-primary-5 p-8 w-4/12 flex flex-col rounded-[0.6rem]`}
      >
        <div className="text-xl mb-6 font-normal self-center">Login</div>

        <div className="gap-4 flex flex-col mb-2">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>
        <div className="text-sm self-center font-light underline mb-6 hover:font-medium cursor-pointer">
          Forgot password?
        </div>

        <div className="self-center gap-1 flex flex-col mb-8">
          <Button
            type={undefined}
            style="bg-primary-400 hover:bg-primary-450 py-2 px-20"
            text="Login"
          />

          <div className="text-sm font-light">
            Don’t have an account?{" "}
            <Link href="signup" className="underline">
              Signup
            </Link>
          </div>
        </div>

        <div className="self-center items-center gap-8 flex flex-col">
          <div>OR</div>

          <button className="bg-primary-50 text-black rounded-[0.4rem] gap-2 inline-flex font-medium items-center py-1 px-8">
            Continue with Google <GoogleIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
