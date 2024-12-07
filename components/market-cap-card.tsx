"use client";

import { motion } from "framer-motion";
import React from "react";
import { Key } from "react";

interface MarketCapCardProps {
  isVisible: boolean;
  title: string;
  items: Array<{
    icon: JSX.Element;
    text: string;
    color: string;
  }>;
}

export function MarketCapCard({ isVisible, title, items }: MarketCapCardProps) {
  return (
    <motion.div
      className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-white p-4 shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {items.map(
          (
            item: { icon: JSX.Element; text: string; color: string },
            index: Key | null | undefined
          ) => (
            <li key={index} className="flex items-center">
              {React.cloneElement(item.icon, {
                className: `mr-2 h-4 w-4 ${item.color}`,
              })}
              <span className="text-sm">{item.text}</span>
            </li>
          )
        )}
      </ul>
    </motion.div>
  );
}
