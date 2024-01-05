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
    <main className="w-screen md:min-h-screen flex flex-col 2xl:overflow-hidden  ">
      <HeroCard />
      <ProfileCard />
      <Skills />
    </main>
  );
}
