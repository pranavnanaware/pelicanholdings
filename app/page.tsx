"use client";

import GradualSpacing from "@/components/ui/gradual-spacing";
import { motion } from "framer-motion";
import { Ventures } from "@/components/ventures";
import StudioCoreFunctions from "@/components/studio-functions";
import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/craft";
import { FutureEntertainment } from "@/components/future";
import { HorizonCard } from "@/components/horizon";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black">
      {/* Header Section */}
      <header className="min-h-screen flex items-center justify-center bg-white p-10">
        <Hero />
      </header>

      {/* Main Content */}
      <main id="main">
        <Container className="not-prose">
          {/* Our Ventures Section */}
          <motion.div
            className="flex flex-col items-start justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <h3 className="text-4xl mb-4">
              <Balancer>Our Ventures</Balancer>
            </h3>

            <div className="w-full">
              <Ventures />
            </div>
          </motion.div>

          {/* Studio Core Functions Section */}
          <motion.div
            className="flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="w-full">
              <StudioCoreFunctions />
            </div>
          </motion.div>
        </Container>

        <Container className="not-prose">
          {/* Future of Entertainment Section */}
          <motion.div
            className="flex flex-col items-start justify-center py-12 bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <h3 className="text-4xl mb-4">
              <Balancer>
                How are we transforming the future of entertainment
              </Balancer>
            </h3>
            <div className="w-full">
              <FutureEntertainment />
            </div>
          </motion.div>
        </Container>
        <Container className="not-prose">
          {/* Future of Entertainment Section */}
          <motion.div
            className="flex flex-col items-start justify-center py-12 bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <h3 className="text-4xl mb-4">
              <Balancer>Our Horizon</Balancer>
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <HorizonCard
                image={"./adventure.png"}
                title={"Adventure & Entertainment Resorts"}
              />
              <HorizonCard
                image={"./cityscapes.png"}
                title={"Cityscape Studios & Soundstages"}
              />
              <HorizonCard
                image={"./events.png"}
                title={"Live Events & Experiences"}
              />
            </div>
          </motion.div>
          {/* Our Vision Section */}
          <motion.div
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h3 className="text-4xl text-left w-full my-8">
              <Balancer>Our Vision</Balancer>
            </h3>

            <div className="w-full max-w-3xl flex justify-center items-center my-8">
              <GradualSpacing
                className="text-center text-2xl tracking-tight text-black dark:text-white sm:text-2xl md:text-3xl lg:text-4xl"
                text="To use artistry and technology to understand cultures and engage people"
              />
            </div>
          </motion.div>
        </Container>
        <Footer />
      </main>
    </div>
  );
}
