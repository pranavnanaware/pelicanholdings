"use client";

import { HeroParticle } from "@/components/hero/heroParticles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";

import BlurIn from "@/components/ui/blur-in";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-10">
        <div className="flex flex-col items-center justify-center ">
          {" "}
          <Image src={"/pellican.png"} alt={""} height={200} width={200} />
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="A global entertainment "
          />
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="and technology company"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <BlurIn
            word="2108 N ST #9219 Sacramento, CA 95816"
            className="text-xl font-medium text-black"
          />
          <a
            href="mailto:jp@pelicanholdings.com"
            className="text-xl font-medium text-black"
          >
            <BlurIn word="Email: jp@pelicanholdings.com" />
          </a>
        </div>
      </div>

      <HeroParticle />
    </div>
  );
}
