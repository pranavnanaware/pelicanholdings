"use client";

import { cn } from "@/lib/utils";

export function HorizonCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto bg-cover flex flex-col justify-between p-4"
        )}
        style={{ backgroundImage: `url(${image})` }} // Set background image via inline styles
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
