import React from "react";
import CallToAction from "@/components/CallToAction";
import TypeWriter from "@/components/TypeWriter";

function Home() {
  return (
    <section className="min-h-screen flex flex-col place-content-center -mt-20 sm:-mt-10">
      <CallToAction />
      <TypeWriter />
    </section>
  );
}

export default Home;
