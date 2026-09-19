import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Volunteering } from "@/components/volunteering";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Volunteering />
      <Certificates />
      <Contact />
    </>
  );
}