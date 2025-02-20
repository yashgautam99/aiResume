"use client";
import { ArrowRightCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            AI That Elevates Your
            <br />
            Career Journey
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Unlock career opportunities with AI-powered insights and smart
            personalization. Stand out effortlessly and land your dream job
            faster! 🚀
          </p>
        </div>
        <div className="flex space-x-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
              <ArrowRightCircle
                name="arrowRight"
                className="inline-block ml-2"
              />
            </Button>
          </Link>
          <Link href="#">
            <Button size="lg" className="px-8" variant="outline">
              Watch Demo
              <PlayCircle name="arrowRight" className="inline-block ml-2" />
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner.jpeg"}
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
