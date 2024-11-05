"use client";

import { HeroParticle } from "@/components/hero/heroParticles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-10 px-4">
        <div className="flex flex-col items-center space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src={"/studios.png"}
              alt={""}
              height={150}
              width={150}
              className="invert"
            />
          </motion.div>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
              text="We finance, produce and distribute film and television entertainment for global audiences"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className=" text-lg md:text-xl font-medium text-black sm:text-lg">
            Los Angeles, CA
          </h1>
          <a
            href="mailto:jp@efficientstudio.com"
            className=" text-lg md:text-xl font-medium  text-black sm:text-lg"
          >
            jp@efficientstudio.com
          </a>
        </motion.div>
      </div>
      <HeroParticle />
    </div>
  );
}
