import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
  const [hoveredRect, setHoveredRect] = useState(null);
  const navRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const rect = navRefs.current[index].getBoundingClientRect();
    setHoveredRect(rect);
    setActiveIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
    setIsHovered(false);
    setHoveredRect(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <header>
      <nav className="mx-auto sm:flex justify-center py-2 sm:px-8 md:px-10 px-4 mb-10 sm:mb-0 relative">
        {/* Menú hamburguesa animado para móviles */}
        <motion.button
          className="sm:hidden absolute right-4 top-4 z-[60] w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <HiX className="text-neutral-200 text-4xl" />
          ) : (
            <HiMenu className="text-neutral-200 text-4xl" />
          )}
        </motion.button>

        {/* Listado de enlaces para móviles */}
        <div
          className={`sm:hidden fixed top-0 right-0 w-full h-full backdrop-blur-xl bg-transparent bg-opacity-50 text-center flex flex-col justify-center items-center z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="w-full">
            {navLinks.map((link, i) => (
              <li key={link.text}>
                <Link
                  href="#"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="block py-4 text-neutral-200 text-lg"
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú completo para pantallas grandes */}
        <ul className="mx-auto hidden sm:flex justify-center py-2 sm:px-8 md:px-10 px-4">
          {navLinks.map((link, i) => (
            <li
              key={link.text}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              className="relative px-4 py-2 text-neutral-300 hover:text-white transition-colors duration-500 font-medium text-base cursor-pointer"
              ref={(el) => (navRefs.current[i] = el)}
              style={{ zIndex: 100 }}
            >
              <Link
                href="#"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="bg-inherit block w-full h-full"
              >
                <p>{link.text}</p>
              </Link>
            </li>
          ))}
          {hoveredRect && (
            <motion.div
              className="absolute bg-secondary rounded-lg"
              style={{
                width: hoveredRect.width,
                height: hoveredRect.height,
                top: hoveredRect.top,
                left: hoveredRect.left,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                top: hoveredRect.top,
                left: hoveredRect.left,
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                bounce: 0.2,
                duration: 0.5,
              }}
            />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
