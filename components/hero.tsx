// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/ui/craft";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Asset imports

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={"/pellican.png"}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0 sm:text-4xl md:text-4xl lg:text-5xl font-bold">
          <Balancer>
            An American Entertainment Company
          </Balancer>
        </h1>
        {/* <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <a href="#main">Learn More about Joseph Profitt</a>
          </Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default Hero;
