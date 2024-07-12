import { cn } from "@/utils/cn";
import React from "react";
import ServicesData from "@/data/ServicesData";

function Services() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6">
      <div className=" p-4 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl font-semibold text-center bg-clip-text text-neutral-300">
          Nuestros
          <br />
          <span className="text-quaternary">servicios </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 sm:py-10 max-w-7xl mx-auto">
        {ServicesData.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col py-10 relative group/feature border-quaternary"
            )}
          >
            {index < 4 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none " />
            )}
            {index >= 4 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-400">
              {feature.icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-quinary transition-all duration-200 origin-center rounded-lg" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                {feature.title}
              </span>
            </div>
            <p className="text-base text-neutral-300 max-w-xs relative z-10 px-10">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
