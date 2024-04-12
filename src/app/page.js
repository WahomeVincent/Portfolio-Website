import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0033]">
        <Navbar />
        <HeroSection />
        <About />
    </main>
  );
}
