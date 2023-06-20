import LogoHeader from "./components/LogoHeader";
import Navbar from "./components/Navbar";
import NavbarOptions from "./components/NavbarOptions";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <LogoHeader />
      <NavbarOptions />
      <TeamSection />
    </>
  );
}
