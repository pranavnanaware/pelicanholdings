"use client";

import { HeroParticle } from "@/components/hero/heroParticles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-10">
        <div className="flex flex-col items-center justify-center ">
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image src={"/pellican.png"} alt={""} height={150} width={150} />
          </motion.div>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
              text="A global entertainment and technology company "
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col  items-center justify-center"
        >
          <h1 className=" text-lg md:text-xl font-medium text-black">
            2108 N ST #9219 Sacramento, CA 95816
          </h1>
          <a
            href="mailto:jp@pelicanholdings.co"
            className=" text-lg md:text-xl font-medium text-black"
          >
            <h1>jp@pelicanholdings.co</h1>
          </a>
        </motion.div>
      </div>
      <HeroParticle />
    </div>
  );
}
