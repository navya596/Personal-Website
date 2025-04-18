import About from "@/components/about";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
