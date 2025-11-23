'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Check, TrendingUp, Users, Sparkles, ArrowRight, Linkedin  } from 'lucide-react';
import Footer from "@/components/Footer";
import Image from "next/image";
import ceoImage from "../../../public/images/ceo.jpg";

export default function AboutUs() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <>
     <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
      <Section3/>
      <Footer/>
    </main>
    
    </>
   
  );
}

const Section1 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div 
      style={{scale, rotate}} 
      className="sticky top-0 min-h-screen bg-[#0A0A0A] pt-60 relative overflow-hidden"
    >
          <div className="absolute inset-0">
          {/* Team photo - extends to full right side */}
          <div className="absolute right-0 top-0 w-2/3 h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-center-admin-looking-maintenance-files-monitoring-system-performance.jpg-up6KRYL4lWTII3qgbkenfbIXGKVXbI.jpeg"
              alt="Team working in office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Black gradient overlay that blends the image into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30"></div>
        </div>

         <div className="relative z-10 min-h-3.5 flex flex-col justify-center">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1 className="text-white text-3xl sm:text-xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                We don&apos;t just market AI,{" "}
                <span className="italic">we make it matter.</span>
                <br />
                {/* <br /> */}
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                With deep expertise in AI marketing, cloud ecosystems, and founder-led storytelling, we help you launch fast, create visibility, and grow sustainably.
              </p>

              <button
                size="lg"
                className="group mb-16 relative overflow-hidden bg-[#00FF94] hover:bg-[#00D17A]/80 text-[#0F3D3E] px-8 py-4 text-lg font-semibold"
              >
                <span className="relative z-10 flex items-center font-bold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#A0F0D0]/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Trusted by section - positioned at bottom */}
          <div className="container mx-auto px-8 lg:px-16 pb-16">
            <div className="max-w-4xl">
              <p className="text-gray-400 text-sm mb-8">
                Trusted and endorsed by
              </p>

              <div className="flex items-center space-x-8 lg:space-x-12 opacity-70">
                {/* PayPal */}
                <div className="text-white font-bold text-xl tracking-wide">
                  PayPal
                </div>

                {/* LITHISOZ */}
                <div className="text-white">
                  <div className="text-sm font-bold tracking-wider">
                    LITHISOZ
                  </div>
                  <div className="text-xs text-gray-400">
                    Digital Future of Retail
                  </div>
                </div>

                {/* NOVAVENTE */}
                <div className="text-white font-bold text-lg tracking-wider">
                  NOVAVENTE
                </div>

                {/* WiZR */}
                <div className="text-white font-bold text-xl">WiZR</div>

                {/* PrimeOrbit */}
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute w-4 h-0.5 bg-black transform rotate-45"></div>
                  </div>
                  <span className="font-bold">PrimeOrbit</span>
                </div>

                {/* ellow */}
                <div className="text-white font-bold text-xl italic">
                  ellow.
                </div>
              </div>
            </div>
          </div>
        </div>
 
    </motion.div>
  );
};

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const edges = [
    {
      icon: Sparkles,
      title: "Proven AI Expertise",
      description: "9+ years at Google leading product marketing across Google Cloud, YouTube Ads, and Google Ads."
    },
    {
      icon: Users,
      title: "Founder-First Approach",
      description: "We operate as your embedded strategy partner, not a distant consultant."
    },
    {
      icon: TrendingUp,
      title: "Story + Strategy",
      description: "From positioning to launch playbooks, we connect vision with results that move markets."
    }
  ];

  return (
    <motion.div 
      style={{scale, rotate}} 
      className="relative h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built from the ground up<br />
            <span className="text-[#FF6B35]">to be efficient for you.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-[#00FF94] transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <edge.icon className="w-12 h-12 text-[#00FF94] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {edge.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {edge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA or subtext */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-lg">
            Ready to transform your AI startup's go-to-market strategy?
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};


const Section3 = () => {
  return (
    <div className="relative bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Founder
        </motion.h2>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
               <Image
                  src={ceoImage}
                  alt="CEO of Nunu Consulting"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-sm">Professional Headshot</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Name and Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Tjimke
            </h3>
            <p className="text-[#FF6B35] font-semibold text-lg mb-6 uppercase tracking-wide">
              Founder & Principal Consultant
            </p>

            {/* Bio */}
            <p className="text-[#B0B0B0] leading-relaxed mb-6">
              A trusted advisor to multiple early-stage AI founders, Tjimke has helped products at Google 
              and beyond find their market and scale. She started Nunu Consulting to bring that same clarity 
              and momentum to the next generation of AI startups—ensuring they launch fast, resonate deeply, 
              and grow sustainably.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#00FF94] pl-4 py-2 mb-6 italic text-[#B0B0B0]">
              Great technology becomes great products when the market understands the value.
            </blockquote>

            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-[#00FF94] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#0A0A0A] group-hover:bg-[#00FF94] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};