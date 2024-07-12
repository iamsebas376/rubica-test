import React, { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navLinks = [
  { text: "Inicio", to: "home" },
  { text: "Sobre Nosotros", to: "about" },
  { text: "Servicios", to: "services" },
  { text: "Contacto", to: "contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <React.Fragment>
      <nav className="mx-auto sm:flex justify-center py-2 sm:px-8 md:px-10 px-4 mb-10  sm:mb-0">
        {/* Menú hamburguesa para móviles */}
        <button
          className="sm:hidden absolute right-4 top-4"
          onClick={toggleMenu}
        >
          <HiMenu className="text-white text-4xl" />
        </button>

        {/* Listado de enlaces para móviles */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-primary text-center flex flex-col justify-center items-cente z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link, i) => (
            <Link
              href="#"
              key={link.text}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="block py-4 text-white text-lg"
              onClick={toggleMenu}
            >
              {link.text}
            </Link>
          ))}
          {/* Botón "X" para cerrar el menú */}
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <HiX className="text-white text-4xl" />
          </button>
        </div>

        {/* Menú completo para pantallas grandes */}
        <div className="mx-auto hidden sm:flex justify-center py-2 sm:px-8 md:px-10 px-4 ">
          {navLinks.map((link, i) => (
            <span
              key={link.text}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              className={
                "relative px-4 py-2 text-neutral-300 transition-colors duration-500 font-medium text-base"
              }
              style={{ zIndex: 1 }}
            >
              <Link
                href="#"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="bg-inherit"
              >
                {isHovered && activeIndex === i && (
                  <MagicTabSelect
                    id="links"
                    transition={{ type: "spring", bounce: 0.35, duration: 1 }}
                    className="transition-all duration-500 hover:transition-all hover:duration-500"
                  >
                    <span
                      className="absolute inset-0 bg-secondary rounded-full "
                      style={{ zIndex: -1 }}
                    />
                  </MagicTabSelect>
                )}
                {link.text}
              </Link>
            </span>
          ))}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
