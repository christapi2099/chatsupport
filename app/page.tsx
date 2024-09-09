import React from "react";
import Hero from "./_components/hero";
import Features from "./_components/features";
import Reviews from "./_components/reviews";
import Cta from "./_components/cta";
import Footer from "./_components/footer";
import Copyright from "./_components/copyright";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <Reviews />
      <Cta />
      <Footer />
      <Copyright />
    </main>
  );
}
