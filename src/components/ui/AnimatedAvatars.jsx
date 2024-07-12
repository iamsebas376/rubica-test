"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const AnimatedAvatars = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 10 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-5, 5]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="-mr-4 relative group cursor-pointer"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-tertiary z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-gray relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-quiternary text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="object-cover m-0 p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-neutral-300 relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedAvatars;
