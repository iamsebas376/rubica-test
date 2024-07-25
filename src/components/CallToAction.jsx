import React from "react";
import Spotlight from "@/components/ui/Spotlight";

function CallToAction() {
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center ">
      <Spotlight className="-mt-52 sm:-mt-0" fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-neutral-300">
          WebTech Solutions <br />
          <span className="text-tertiary">es el nuevo trend. </span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-lg text-center mx-auto">
          En WebTech Solutions, creamos experiencias web únicas y funcionales
          que impulsan tu negocio hacia el éxito digital. Nuestro equipo está
          comprometido con la excelencia en diseño y desarrollo web.
        </p>
      </div>
    </div>
  );
}

export default CallToAction;
