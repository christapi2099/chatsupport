"use client";
import React, { useEffect, useState, FormEvent } from "react";
import { Urbanist } from "next/font/google";
import Input from "../_components/ui-elements/input";
import Button from "../_components/ui-elements/button";
import Link from "next/link";
import GoogleIcon from "../_components/ui-elements/google-icon";
import { auth, provider } from "../../firebaseConfig";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";


const urbanist = Urbanist({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/home");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleAuth = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);

      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      router.push("/home");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithPopup(auth, provider);
      router.push("/home");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form
        onSubmit={handleAuth}
        className={`${urbanist.className} border border-primary-5 tabletLandscape:w-5/12 phone:w-8/12 midPhone:w-10/12 midPhone:mt-6 mt-16 p-8 w-4/12 tabletMedium:w-6/12 flex flex-col rounded-[0.6rem]`}
      >
        <div className="text-xl mb-6 font-normal self-center">Login</div>

        <div className="gap-4 flex flex-col mb-2">
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-sm self-center font-light underline mb-6 hover:font-medium cursor-pointer">
          Forgot password?
        </div>

        <div className="self-center gap-1 flex flex-col mb-8">
          <Button
            type="submit"
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

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-primary-50 text-black smallPhone:text-sm rounded-[0.4rem] gap-2 inline-flex font-medium items-center py-1 px-8"
          >
            Continue with Google <GoogleIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
