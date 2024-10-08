import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Images from "./components/images/images";
import Skills from "./components/homepage/skills";
import ExtraActivities from "./components/homepage/extraActivity/extraActivity";
export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <ExtraActivities />
      <Education />
      <Images />
      <ContactSection />
    </>
  )
};