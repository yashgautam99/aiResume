"use client";
import GridBackground from "@/components/ui/gridBackground";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight, Image } from "lucide-react";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const stats = [
    { value: 60, suffix: "+", label: "Industries & Job Roles Covered" },
    {
      value: 10000,
      suffix: "+",
      label: "Curated Interview Questions & Answers",
    },
    { value: 92, suffix: "%", label: "Users Report Career Improvement" },
    {
      value: 1200,
      suffix: "+",
      label: "AI-Optimized Resumes & Cover Letters Created",
    },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map(() => 0) // Initial state set to 0 for animation effect
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) =>
        prev.map((num, i) =>
          num < stats[i].value
            ? num + Math.ceil(stats[i].value / 50)
            : stats[i].value
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <GridBackground />
      <HeroSection />
      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-6">
            Powerful Features for Your Career Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Unlock the full potential of your career with AI-powered tools
            designed to give you a competitive edge.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-20  text-white">
        <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center space-y-3 p-8 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 
              transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Glowing Accent Circle */}
                <div className="absolute -top-2 -left-2 w-14 h-14 bg-indigo-400 rounded-full blur-2xl opacity-20"></div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-indigo-500 rounded-full blur-2xl opacity-20"></div>

                {/* Animated Number */}
                <h3 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
                  {animatedStats[index]}
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-lg font-medium text-gray-300 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
        {/* Light floating gradients for aesthetic touch */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-400 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
              How It Works
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
              Follow these four simple steps to unlock your full career
              potential.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center space-y-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
              >
                {/* Floating Glow Effect */}
                <div className="absolute -top-2 -left-2 w-14 h-14 bg-primary/50 rounded-full blur-2xl opacity-20"></div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-primary/50 rounded-full blur-2xl opacity-20"></div>

                {/* Icon with Animation */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Step Title */}
                <h3 className="font-semibold text-xl text-white">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-12">
            What Our Users Say
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
        {/* Light floating gradients for aesthetic touch */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-400 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8  relative">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
