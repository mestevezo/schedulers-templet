"use client"

import LogoHeader from "./components/LogoHeader";
import Navbar from "./components/Navbar";
import NavbarOptions from "./components/NavbarOptions";
import TeamSection from "./components/TeamSection";
import { useState } from "react";
import Loader from "./components/Loader";


export default function Home() {

  const [loading, setLoading] = useState(false);
  const handleLoading = (isLoading) => {
    setLoading(isLoading)
  };

  const [optimizationData, setOptimizationData] = useState({});

  return (
    <>
      <Navbar setOnLoading={handleLoading} OpData={setOptimizationData}/>
      <LogoHeader />
      <NavbarOptions />
      {loading ? <Loader /> : <TeamSection OpData={optimizationData}/>}
    </>
  );
}
