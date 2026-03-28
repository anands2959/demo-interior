'use client';
import { motion } from 'framer-motion';

export default function KitchenSection() {
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
    show: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-white overflow-hidden">
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative"
      >
        
        {/* Large Hero Image (Left) */}
        <motion.div 
          variants={item}
          className="w-full lg:w-[65%] aspect-[16/9] lg:aspect-auto h-[400px] lg:h-[650px] rounded-sm overflow-hidden shadow-2xl z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover  opacity-90 transition-all duration-1000" 
            alt="Culinary Minimalist" 
          />
        </motion.div>

        {/* Floating Material Card (Right - Overlapping) */}
        <motion.div 
          variants={item}
          className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 p-8 lg:p-16 bg-[#2A2E35] text-white shadow-[0_50px_100px_rgba(0,0,0,0.2)] z-10 rounded-sm flex flex-col gap-8 border border-white/5"
        >
          <div className="flex flex-col gap-4">
             <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Culinary Select</span>
             <h2 className="font-serif text-[42px] font-extrabold text-white tracking-tighter leading-tight" style={{ transform: 'scaleY(1.1)', transformOrigin: 'left' }}>
                KITCHEN <br/> FOUNDRY
             </h2>
             <div className="w-12 h-[2px] bg-peach/60 my-2"></div>
          </div>

          <p className="text-[11px] text-white/40 leading-[2.5] font-bold uppercase tracking-[0.2em]">
             Monolithic slab structures blending volcanic stone and matte aluminum. Our kitchen foundations prioritize flow and raw tactile experience.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-4 border-t border-white/10 pt-8">
             <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase text-peach tracking-widest">Base Material</span>
                <span className="text-[11px] font-bold text-white tracking-widest uppercase">Cast Concrete</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase text-peach tracking-widest">Accent</span>
                <span className="text-[11px] font-bold text-white tracking-widest uppercase">Dark Oak</span>
             </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-[#2A2E35] text-[10px] font-black px-12 py-5 rounded-sm hover:bg-peach hover:text-white transition-all uppercase w-max tracking-[0.3em]"
          >
             View Configuration
          </motion.button>
        </motion.div>

      </motion.div>

    </section>
  );
}
