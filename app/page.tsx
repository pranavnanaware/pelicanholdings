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
              <PersonInfo name={"Joseph Profitt"} role={"CEO"} bio={"He then joined Lionsgate Studios, one of the most reputable film and television studios in the world, to build a streaming television business, focusing on operating all aspects of the business including financial planning and analysis, marketing strategy, data synthesis, and cross-functional team leadership. At the core of Joseph's leadership philosophy is understanding human psychology and motivation. Joseph\'s vision for his company is not just about creating a valuable business but about innovating the media and entertainment landscape through a blend of creativity, technology, and human-centric leadership. While Joseph brings many strengths to the table, he is also aware of areas for improvement. Joseph works hard to address tendencies toward emotional impulses overshadowing objective analysis, and he recognizes the importance of setting realistic, near-term goals while pursuing long-term ambitions. Joseph enjoys spending time with his wife and two children in Los Angeles, staying physically active, surfing and giving back to the community and church through volunteering and community service."} imageUrl={"/joseph.webp"} />
            </div>
          </motion.div>
        </Container>

        <Footer />
      </main>
    </div>
  );
}
