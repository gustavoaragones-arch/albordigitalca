"use client";

import { motion, type Variants } from "motion/react";
import { GlobeLight } from "@/components/hero/globe-light";
import { LightAbove } from "@/components/hero/light-above";
import { Stars } from "@/components/hero/stars";
import { GradientGrid } from "@/components/hero/gradient-grid";

const layersContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const layerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const gridLayerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.2, transition: { duration: 0.8, ease: "easeInOut" } },
};

const lightAboveVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.4, transition: { duration: 0.8, ease: "easeInOut" } },
};

export const HeroBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 h-full w-full"
      variants={layersContainerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={gridLayerVariants}
        className="h-1/2 w-full mask-[linear-gradient(to_bottom,transparent_0%,black_50%,transparent_100%)]"
      >
        <GradientGrid />
      </motion.div>
      <motion.div
        variants={layerVariants}
        className="absolute -bottom-75 left-1/2 flex h-full w-full -translate-x-1/2 justify-center"
      >
        <div className="w-fit">
          <GlobeLight />
        </div>
      </motion.div>
      <motion.div
        variants={layerVariants}
        className="absolute -bottom-10 left-1/2 z-0 flex h-full w-full -translate-x-1/2 justify-center"
      >
        <div className="w-fit">
          <Stars />
        </div>
      </motion.div>
      <motion.div
        variants={lightAboveVariants}
        className="absolute bottom-0 left-1/2 z-5 flex h-full w-full -translate-x-1/2 justify-center"
      >
        <div className="w-fit">
          <LightAbove />
        </div>
      </motion.div>
    </motion.div>
  );
};
