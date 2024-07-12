"use client";
import { TypewriterEffect } from "@/components/ui/TypeWriterEffect";
import { Link } from "react-scroll";

function TypeWriter() {
  const words = [
    {
      text: "Crea",
      className: "text-neutral-300",
    },
    {
      text: "asombrosas",
      className: "text-neutral-300",
    },
    {
      text: "páginas",
      className: "text-neutral-300",
    },
    {
      text: "con",
      className: "text-neutral-300",
    },
    {
      text: "WebTech",
      className: "text-[#FC9F5B]",
    },
    {
      text: "Solutions.",
      className: "text-[#FC9F5B]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-14">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-6">
        <Link
          href="#"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="w-40 h-10 rounded-md bg-secondary text-white text-base hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}

export default TypeWriter;
