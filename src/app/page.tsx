import Navbar from "@/app/ui/Navbar";
import LandingHero from "./ui/LandingHero";
import Tools from "./ui/Tools";
import Services from "./ui/Services";
import Why from "./ui/Why"

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero/>
      <Tools/>
      <Services/>
      <Why/>
    </>
  );
}
