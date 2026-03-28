'use client';
import { motion } from 'framer-motion';
import LifestyleOverlay from './FloralOverlay';

export default function FeatureBlocks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-white">

      {/* 3 Column Ditto Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start"
      >

        {/* COLUMN 1: VARLY HERE */}
        <motion.div variants={item} className="flex flex-col gap-6 pt-6">
          <h2 className="font-serif text-[48px] font-bold leading-tight text-[#404552] tracking-tighter"
            style={{ transform: 'scaleY(1.2) scaleX(1)', transformOrigin: 'left', letterSpacing: '-0.02em' }}>
            VARLY HERE
          </h2>

          <p className="text-[10px] text-slate/40 leading-loose font-bold uppercase tracking-[0.25em] max-w-[320px]">
            Design transcends into beauty. It communicates your inner style outward without saying a word.
          </p>



          <div className="w-full h-[1px] bg-gray-100 my-4"></div>

          <p className="text-[10.5px] text-slate/40 leading-loose max-w-[360px] font-medium">
            Over the last decade, we have honed our craft to bring you the best in minimalist design, combining effortless style with rugged utility. Each piece is treated as a work of art tailored for modern conscious living.
          </p>

          <button className="bg-[#EFA98A] text-white text-[10px] font-black px-12 py-4 rounded-lg hover:bg-[#404552] transition-all uppercase w-max tracking-[0.3em] shadow-[0_15px_30px_rgba(239,169,138,0.3)] mt-6">
            MAKING A MOVE
          </button>
        </motion.div>

        {/* COLUMN 2: THE CHAIR */}
        <motion.div variants={item} className="h-[550px] bg-[#F5F6F8] rounded-sm overflow-hidden flex items-center justify-center group shadow-sm border border-gray-50 mt-10 lg:mt-0">
          <img src="/images/bottom_chair_1774694423963.png" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000" alt="Lounge Chair" />
        </motion.div>

        {/* COLUMN 3: FLORALS */}
        <motion.div variants={item} className="flex flex-col gap-10 mt-10 lg:mt-0 relative">

          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-[36px] font-bold text-[#404552] tracking-tighter" style={{ transform: 'scaleY(1.1)', transformOrigin: 'top' }}>
                Florals
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-4 h-[1px] bg-slate/20"></div>
                <span className="text-[9px] font-bold text-slate/30 uppercase tracking-[0.3em]">Delicate Raw Nature</span>
              </div>
            </div>

            {/* Floating UI Circle */}
            <div className="w-16 h-16 rounded-full bg-peach shadow-[0_10px_30px_rgba(239,169,138,0.4)] flex items-center justify-center text-white font-serif text-2xl -rotate-12 cursor-pointer hover:scale-110 transition-transform -mt-2 -mr-2">
              t
            </div>
          </div>

          {/* Dark Secondary Box */}
          <div className="bg-[#E9EBEE] py-16 px-10 flex flex-col gap-6 rounded-sm relative z-0">
            {/* Subtle background texture/image for the box */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <span className="text-[7.5px] font-black text-slate/80 uppercase tracking-[0.4em]">STOKE GALLERY</span>
              <p className="text-[11px] leading-relaxed text-slate/80 font-medium">
                Experience the freshness of floral tones woven delicately into minimalist frames and textiles. We offer curated setups meant to inspire and calm the mind deeply.
              </p>

              <div className="h-[2px] w-8 bg-slate/10"></div>

              <button className="bg-[#404552] text-white text-[9px] font-black uppercase tracking-[0.3em] px-8 py-4 w-max hover:bg-[#EFA98A] transition-all rounded-sm shadow-xl">
                BROWSE COLLECTIONS
              </button>
            </div>

            <LifestyleOverlay />
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}
