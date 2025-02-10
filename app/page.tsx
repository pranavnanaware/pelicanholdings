"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
import { Ventures } from "@/components/ventures";
import StudioCoreFunctions from "@/components/personInfo";
import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/craft";
import { FutureEntertainment } from "@/components/future";
import { HorizonCard } from "@/components/horizon";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PersonInfo from "@/components/personInfo";
import {  biography } from "@/lib/constants";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black">
      {/* Header Section */}
      <header className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
        <Hero />
      </header>

      {/* Main Content */}
      <main id="main">
        <Container className="px-4 sm:px-6 lg:px-8 not-prose">
         
          <motion.div
            className="flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="w-full">
              <PersonInfo name={biography.name} role={biography.role} bio={biography.bio} imageUrl={biography.url} />
            </div>
          </motion.div>
        </Container>

        <Footer />
      </main>
    </div>
  );
}
