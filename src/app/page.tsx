import Navbar from "@/app/ui/Navbar";
import LandingHero from "./ui/LandingHero";
import Tools from "./ui/Tools";
import Services from "./ui/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero/>
      <Tools/>
      <Services/>
    </>
  );
}
