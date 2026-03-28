'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
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
    <section className="max-w-[1400px] mx-auto min-h-[700px] flex flex-col mt-4 mb-20 relative px-0 lg:px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[750px] overflow-hidden bg-slate text-white md:bg-transparent md:text-inherit border-b border-gray-200"
      >

        {/* Left Dark Column */}
        <motion.div
          variants={item}
          className="w-full lg:w-[32%] bg-[#404552] text-white p-8 sm:p-14 flex flex-col justify-between relative inset-0 shadow-2xl z-10 shrink-0"
        >
          <div className="flex flex-col gap-6 mt-16 relative">
            <motion.span
              variants={item}
              className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/50"
            >
              Explore
            </motion.span>

            {/* Custom stylized alien/serif font imitation */}
            <motion.h1
              variants={item}
              className="font-serif text-[32px] sm:text-[42px] leading-[1.1] font-extrabold tracking-tight mt-2 text-[#E7E8EB]"
              style={{ fontFamily: "Impact, serif", textTransform: 'uppercase', letterSpacing: '-0.02em' }}
            >
              MODERN DESIGN<br />
              ESSENTIALS FOR<br />
              HIGH-LIVING
            </motion.h1>

            <motion.div
              variants={item}
              className="w-12 h-[2px] bg-gold/80 mt-2 mb-1 origin-left"
            ></motion.div>

            <motion.p
              variants={item}
              className="text-[11px] text-white/60 leading-loose max-w-sm tracking-wide font-medium mt-2"
            >
              Space exists over minimal shapes. Find harmony through essential design.
              Our collection values function over excess, making room for elevated peace
              at home or whatever aesthetic you wish to project.
            </motion.p>

            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-[#1A1D21] text-[10px] font-bold px-8 py-[14px] rounded-full hover:bg-white hover:text-[#404552] transition-colors uppercase w-max tracking-[0.2em] shadow-lg mt-8"
            >
              Explore Now
            </motion.button>
          </div>

          <div className="mb-4 flex flex-col gap-8 mt-4">
            <motion.p
              variants={item}
              className="text-[9px] text-white/50 uppercase tracking-[0.3em] leading-loose max-w-[200px] font-medium border-t border-white/20 pt-6"
            >
              <span className="block mb-2 text-white/80 font-bold tracking-widest text-[8px] uppercase">Sustainability & Ethics</span>
              Environmental friendly materials. Sustainably sourced.
            </motion.p>

          </div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          variants={item}
          className="w-full lg:w-[68%] h-[400px] lg:h-full relative overflow-hidden bg-[#F5F6F8]"
        >
          <img
            src="/images/hero_sofa_plant_1774694342600.png"
            alt="Minimalist Living Room"
            className="w-full h-full object-cover object-center scale-[1.03]"
          />

          <motion.div
            variants={item}
            className="absolute top-12 right-12 flex flex-col z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-between min-w-[140px]">
              <span className="text-[9px] font-bold text-slate uppercase tracking-widest">Trending</span>
              <div className="w-[1px] h-3 bg-gray-200 mx-3"></div>
              <span className="text-gold text-[10px] font-bold tracking-widest">2026</span>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-10 z-30"
          >
            <div className="hidden md:flex items-center gap-8">
              <div className="border border-white/30 backdrop-blur-sm rounded-sm px-4 py-[4px] text-[10px] font-serif italic text-white/90 shadow-sm">01/02</div>
              <div className="flex gap-4 text-[9px] uppercase tracking-[0.2em] text-white/50 cursor-pointer font-bold">
                <span className="hover:text-white transition-all">FB</span>
                <span className="hover:text-white transition-all">IG</span>
                <span className="hover:text-white transition-all">X</span>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-[#1A1D21] text-[10px] font-black px-10 py-[16px] rounded-full hover:bg-white hover:text-slate transition-all uppercase tracking-[0.2em]"
            >
              Browse Our Room
            </motion.button>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
