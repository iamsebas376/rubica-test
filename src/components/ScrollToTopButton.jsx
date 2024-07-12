import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolledFromTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (
        scrolledFromTop > 300 &&
        scrolledFromTop + windowHeight < fullHeight - 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Botón para volver arriba"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-secondary text-neutral-300 rounded-full hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 z-50 shadow-lg ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
