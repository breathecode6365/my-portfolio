"use client";
import Loading from "./loading";
import HeroCard from "@/components/HeroCard";
import React, { useState, useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;

  return (
    <main className="w-screen items-center xl:ml-20 md:min-h-screen overflow-x-hidden flex flex-col   ">
      <HeroCard />
      <ProfileCard />
      <Skills />
    </main>
  );
}
