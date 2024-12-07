"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function FutureEntertainment() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full p-4">
      {/* Legacy Systems (Crossed Out) */}
      <WobbleCard containerClassName="bg-gray-200 min-h-[150px] flex flex-col justify-center p-6 relative">
        <div className="absolute inset-0 bg-white opacity-70 transform rotate-12 -z-10"></div>
        <h2 className="text-left text-base md:text-xl lg:text-2xl font-semibold tracking-wide text-gray-800">
          <span className="line-through">Legacy Systems</span>
        </h2>
        <p className="mt-4 text-left text-sm md:text-base text-gray-600">
          Traditional broadcasters relied on cable and broadcast models with
          leased satellite and cable infrastructure.
        </p>
      </WobbleCard>

      {/* Efficient Studio - Innovative Content Creation */}
      <WobbleCard containerClassName="bg-gray-100 min-h-[150px] flex flex-col justify-center p-6">
        <h2 className="text-left text-base md:text-xl lg:text-2xl font-semibold tracking-wide text-gray-800">
          Efficient Studio
        </h2>
        <p className="mt-4 text-left text-sm md:text-base text-gray-600">
          Efficient Studio revolutionizes content creation by leveraging
          cutting-edge technologies and data-driven insights to produce
          engaging, high-quality content tailored for modern platforms and
          diverse audiences.
        </p>
      </WobbleCard>

      {/* Efficient TV - Direct-to-Consumer Distribution */}
      <WobbleCard containerClassName="bg-gray-100 min-h-[150px] flex flex-col justify-center p-6">
        <h2 className="text-left text-base md:text-xl lg:text-2xl font-semibold tracking-wide text-gray-800">
          Efficient TV
        </h2>
        <p className="mt-4 text-left text-sm md:text-base text-gray-600">
          Efficient TV transforms content delivery by utilizing advanced ISPs to
          provide direct-to-consumer streaming, bypassing traditional cable
          bundles and ensuring seamless, high-speed access to entertainment
          worldwide.
        </p>
      </WobbleCard>

      {/* Global Adoption - Enabled by Advanced ISPs */}
      <WobbleCard containerClassName="bg-gray-100 min-h-[150px] flex flex-col justify-center p-6">
        <h2 className="text-left text-base md:text-xl lg:text-2xl font-semibold tracking-wide text-gray-800">
          Global Adoption
        </h2>
        <p className="mt-4 text-left text-sm md:text-base text-gray-600">
          Leveraging advanced ISPs like Ericsson, Starlink, T-Mobile, Amazon,
          and Google Fiber, Efficient Studio and Efficient TV ensure scalable
          and inclusive content distribution, reaching global audiences with
          unparalleled speed and reliability.
        </p>
      </WobbleCard>
    </div>
  );
}
