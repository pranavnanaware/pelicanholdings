"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-20">
      <div className="max-w-4xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href={pathname === "/efficient" ? "/" : "/efficient"}
          className="flex flex-row items-center gap-2 text-lg font-bold"
        >
          {pathname === "/efficient" ? "Pelican Holdings" : "Efficient"}{" "}
          <MoveUpRight className="w-5 h-5" />
        </Link>

        <Link
          href={pathname === "/efficientstudio" ? "/" : "/efficientstudio"}
          className="flex flex-row items-center gap-2 text-lg font-bold"
        >
          {pathname === "/efficientstudio"
            ? "Pelican Holdings"
            : "Efficient Studio"}{" "}
          <MoveUpRight className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
