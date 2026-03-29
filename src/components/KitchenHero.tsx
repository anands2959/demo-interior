'use client';
import { motion } from 'framer-motion';

export default function KitchenHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
  };

  return (
    <section className="max-w-[1400px] mx-auto min-h-[600px] lg:min-h-[700px] flex flex-col lg:flex-row mt-4 mb-20 relative px-0 lg:px-6 overflow-hidden">
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[750px] overflow-hidden bg-[#1A1D21] text-white border-b border-white/5 shadow-2xl"
      >
        
        {/* Left Hero Image */}
        <motion.div 
          variants={item}
          className="w-full lg:w-[60%] h-[500px] lg:h-full relative overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-[1.05] transition-all duration-[2s]" 
            alt="Chef's Kitchen" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#212529]/40 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Right Focus Column */}
        <motion.div 
          variants={item}
          className="w-full lg:w-[40%] bg-[#212529] p-12 lg:p-20 flex flex-col justify-between relative z-10"
        >
          <div className="flex flex-col gap-8 mt-10">
            <motion.span variants={item} className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">The Foundry</motion.span>
            
            <motion.h1 
              variants={item}
              className="font-serif text-[38px] sm:text-[48px] lg:text-[64px] font-extrabold leading-[0.9] tracking-tighter uppercase"
              style={{ transform: 'scaleY(1.2)', transformOrigin: 'top left' }}
            >
              CULINARY <br/> PRECISION
            </motion.h1>

            <motion.div variants={item} className="w-16 h-[2px] bg-peach/40 mt-4"></motion.div>

            <motion.p variants={item} className="text-[11px] text-white/40 leading-relaxed max-w-sm font-bold uppercase tracking-[0.2em] mt-4">
               Engineering the heart of the home. Hand-cast stones, cold-pressed steel, and monolithic surfaces meant to last generations.
            </motion.p>

            <motion.button 
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-peach text-[#1A1D21] text-[10px] font-black px-12 py-5 rounded-sm hover:bg-white hover:text-[#212529] transition-all uppercase w-max tracking-[0.3em] mt-8"
            >
               Request Catalog
            </motion.button>
          </div>

          <div className="mt-16 flex items-center gap-10 opacity-30">
              <span className="text-[10px] font-black tracking-widest uppercase">01</span>
              <div className="w-full h-[1px] bg-white/10"></div>
              <span className="text-[10px] font-black tracking-widest uppercase text-peach italic">2026</span>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
