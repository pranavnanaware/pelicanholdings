"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const words = text.split(" ");
  let charCounter = 0;

  return (
    <div className="flex flex-wrap justify-center">
      <AnimatePresence>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {word.split("").map((char) => {
              const currentIndex = charCounter++;
              return (
                <motion.h1
                  key={currentIndex}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{
                    duration,
                    delay: currentIndex * delayMultiple,
                  }}
                  className={cn("drop-shadow-sm", className)}
                >
                  {char}
                </motion.h1>
              );
            })}
            {/* Add space between words */}
            <motion.h1
              key={`space-${wordIndex}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{
                duration,
                delay: charCounter * delayMultiple,
              }}
              className={cn("drop-shadow-sm", className)}
            >
              &nbsp;
            </motion.h1>
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
}
