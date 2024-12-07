"use client";

import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";
import { MarketCapCard } from "./market-cap-card";
import { BarChart, DollarSign, TrendingUp } from "lucide-react";

// HeadingBox Component: A styled container for headings
const HeadingBox = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
>(({ className, children, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-6 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">{children}</div>
    </div>
  );
});

HeadingBox.displayName = "HeadingBox";

// Ventures Component: Displays the three headings with connecting beams
export function Ventures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [showMarketCapLeft, setShowMarketCapLeft] = useState(false);
  const [showMarketCapRight, setShowMarketCapRight] = useState(false);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center rounded-lg bg-background p-10"
      ref={containerRef}
    >
      {/* Container for the three headings */}
      <div className="flex flex-col items-center justify-between w-full max-w-4xl">
        <HeadingBox ref={topRef} className="w-40 h-40 mb-10">
          <Image src="/pellican.png" alt="" width={120} height={120} />
        </HeadingBox>
        <div className="flex flex-row items-center justify-between w-full">
          {/* Content Studio with MarketCapCard */}
          <div
            className="flex flex-col relative"
            onMouseEnter={() => setShowMarketCapLeft(true)}
            onMouseLeave={() => setShowMarketCapLeft(false)}
          >
            <HeadingBox ref={leftRef} className="flex flex-col w-40 h-40">
              <Image src="/studio.svg" alt="" width={120} height={120} />
            </HeadingBox>
            <div className="flex flex-col items-center mt-2">
              <span className="text-center text-lg font-medium">
                Content Studio
              </span>
            </div>
            <MarketCapCard
              isVisible={showMarketCapLeft}
              title="Film and Television Market"
              items={[
                {
                  icon: <DollarSign />,
                  text: "Total Revenue: $2.1T",
                  color: "text-green-500",
                },
                {
                  icon: <TrendingUp />,
                  text: "Annual Growth: 3.5%",
                  color: "text-blue-500",
                },
                {
                  icon: <BarChart />,
                  text: "Market Cap: $1.3T",
                  color: "text-purple-500",
                },
              ]}
            />
          </div>
          {/* Distribution Technology */}
          <div
            className="flex flex-col relative"
            onMouseEnter={() => setShowMarketCapRight(true)}
            onMouseLeave={() => setShowMarketCapRight(false)}
          >
            <HeadingBox ref={rightRef} className="flex flex-col w-40 h-40">
              <Image src="/efficient.svg" alt="" width={120} height={120} />
            </HeadingBox>
            <div className="flex flex-col items-center mt-2">
              <span className="text-center text-lg font-medium">
                Distribution Technology
              </span>
            </div>
            <MarketCapCard
              isVisible={showMarketCapRight}
              title="Smart Televisions Market"
              items={[
                {
                  icon: <DollarSign />,
                  text: "Total Revenue: $244B",
                  color: "text-green-500",
                },
                {
                  icon: <TrendingUp />,
                  text: "Annual Growth: 16.6% (2025-2030)",
                  color: "text-blue-500",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Animated Beams connecting top to left and right */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRef}
        toRef={leftRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRef}
        toRef={rightRef}
        curvature={-75}
        endYOffset={-10}
      />
    </div>
  );
}
