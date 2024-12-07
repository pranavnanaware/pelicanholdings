// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Icon imports
import { Mail } from "lucide-react";

// Asset imports
import { Container, Section } from "./ui/craft";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={"/pellican.png"}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
          </div>
          <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <Link href="/">Pelican Holdings</Link>. All rights reserved.
            2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
