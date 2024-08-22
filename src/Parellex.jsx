import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import img1 from "./assets/image-bottom.png";
import img2 from "./assets/image-full.png";

const Parellex = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-6xl md:text-9xl relative z-10 uppercase"
      >
        Title
      </motion.h1>
      <motion.div
        className=" absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <div
        className=" absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Parellex;
