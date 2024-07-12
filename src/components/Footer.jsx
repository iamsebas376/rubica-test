import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Component() {
  return (
    <footer className="py-6 text-muted-foreground max-w-screen-xl mx-auto px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-neutral-300">
          <Link
            href="#"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Inicio
          </Link>
          <Link
            href="#"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#"
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Servicios
          </Link>
          <Link
            href="#"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4 mt-10 sm:mt-0">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
            className="text-neutral-300 hover:scale-110 transition-all duration-300"
          >
            <FaFacebook className="h-5 w-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            aria-label="Twitter"
            className="text-neutral-300 hover:scale-110 transition-all duration-300"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
            className="text-neutral-300 hover:scale-110 transition-all duration-300"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-neutral-300 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
