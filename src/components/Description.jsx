import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, FileText } from 'lucide-react';

export default function Description() {
  const services = [
    {
      title: "Product & Narrative Strategy",
      description: "We blend product positioning with compelling AI-driven storytelling to clarify value, shape market perception, and inspire action. From feature framing to founder voice, we turn technical depth into narratives that win customers and partners.",
      icon: Target
    },
    {
      title: "Go-to-Market Strategy",
      description: "Tailored go-to-market plans that drive traction. We translate technical value into buyer-ready messaging, define launch priorities, and equip your team with strategies to win early adopters.",
      icon: Rocket
    },
    {
      title: "Business Development",
      description: "We help AI-driven companies scale by identifying strategic partners, opening market channels, and shaping growth plays, blending relationship-building with AI insights to accelerate adoption and revenue.",
      icon: FileText
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hand-drawn squiggle
  const Squiggle = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8C4 4 6 12 8 8C10 4 12 12 14 8C16 4 18 12 20 8C22 4 22 8 22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  // Hand-drawn underline for title
  const TitleUnderline = () => (
    <svg className="absolute -bottom-1 left-0 w-16" height="8" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4C15 6 25 2 35 4C45 6 55 3 58 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  // Hand-drawn scribble decoration
  const ScribbleLines = () => (
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L45 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 12L42 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 19L38 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 26L32 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const ServiceCard = ({ service, index }) => (
    <motion.div
      variants={cardVariants}
      className='relative p-10 flex flex-col h-[550px] bg-[#ffff] overflow-hidden group'
      style={{ minHeight: '550px' }}
    >
      {/* Orange hover background - only covers bottom portion with curved top */}
      <div 
        className='absolute bottom-0 left-0 right-0 h-[60%] bg-[#FFAB6E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out'
        style={{ borderTopLeftRadius: '50% 15%', borderTopRightRadius: '50% 15%' }}
      ></div>

      {/* Green accent icon - lazy loaded */}
      <motion.div 
        className='mb-4 z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <div className='w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center'>
          <service.icon className='w-6 h-6 text-black' strokeWidth={2} />
        </div>
      </motion.div>
      {/* Decorative squiggle top right */}
      <div className='absolute top-6 right-6 text-gray-400 group-hover:text-white/60 transition-colors duration-300 z-10'>
        <Squiggle />
      </div>

      {/* Title with underline */}
      <div className='relative inline-block mb-4 z-10'>
        <h3 className='text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300'>
          {service.title}
        </h3>
        <div className='text-gray-300 group-hover:text-white/60 transition-colors duration-300'>
          <TitleUnderline />
        </div>
      </div>

      {/* Description */}
      <p className='leading-relaxed flex-grow text-gray-600 group-hover:text-black/80 transition-colors duration-300 z-10'>
        {service.description}
      </p>

      {/* Learn More Button - positioned at bottom right */}
      <div className='mt-8 z-10 flex justify-end'>
        <motion.button
          className='bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(150,150,150,0.6)]'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Small dot decoration */}
      {index === 0 && (
        <div className='absolute bottom-4 left-4 w-2 h-2 bg-black rounded-full'></div>
      )}
    </motion.div>
  );

  return (
    <div className='py-20 px-6 md:px-12 lg:px-20 bg-[#FFF8F0]'>
      {/* Section Header */}
      <motion.div 
        className='text-center mb-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          Strategic Advisory <br />Services
        </h2>
        {/* Orange underline decoration */}
        <svg className='mx-auto mb-6' width="150" height="12" viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6C30 2 50 10 75 6C100 2 120 10 145 6" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 9C30 5 50 13 75 9C100 5 120 13 145 9" stroke="#FFAB6E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          
Excellence in every detail, crafted for your success. Enterprise Growth Strategies.
        </p>
      </motion.div>

      {/* Services Grid - 3 cards with gap */}
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </div>
  );
}