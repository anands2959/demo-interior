'use client';
import { motion } from 'framer-motion';

export default function BathroomFeatures() {
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
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-[#F8F9FA] overflow-hidden">
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-40"
      >

        {/* Feature 1: The Sanctuary Fragment */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative">
           <motion.div variants={item} className="w-full lg:w-3/5 h-[500px] lg:h-[650px] rounded-sm overflow-hidden shadow-2xl relative z-0">
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bathroom Interior" />
              <div className="absolute inset-0 bg-white/10 opacity-40"></div>
           </motion.div>
           
           <motion.div 
             variants={item} 
             className="w-full lg:w-2/5 flex flex-col gap-10 bg-white p-12 lg:p-16 lg:-ml-32 lg:translate-x-0 relative z-10 shadow-3xl rounded-sm border border-gray-100"
           >
              <div className="flex flex-col gap-4">
                 <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Feature 01</span>
                 <h2 className="font-serif text-[42px] font-bold text-[#404552] tracking-tighter leading-tight uppercase" style={{ transform: 'scaleY(1.2)', transformOrigin: 'top left' }}>
                    SENSORY <br/> MARBLE
                 </h2>
              </div>
              <p className="text-[11px] text-slate/50 leading-loose max-w-sm font-bold uppercase tracking-[0.2em]">
                 Thermal surfaces that adjust to your rhythm. Every slab of stone is hand-selected and heat-treated for a sensory touch.
              </p>
              <div className="w-12 h-[2px] bg-peach/40"></div>
           </motion.div>
        </div>

        {/* Feature 2: Clarity & Light (Reverse) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32 relative">
           <motion.div variants={item} className="w-full lg:w-3/5 h-[500px] lg:h-[650px] rounded-sm overflow-hidden shadow-2xl relative z-0">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bathroom Light" />
              <div className="absolute inset-0 bg-white/5 opacity-40"></div>
           </motion.div>
           
           <motion.div 
             variants={item} 
             className="w-full lg:w-2/5 flex flex-col gap-10 bg-white p-12 lg:p-16 lg:-mr-32 relative z-10 shadow-3xl rounded-sm border border-gray-100 items-start lg:items-end lg:text-right"
           >
              <div className="flex flex-col gap-4">
                 <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Feature 02</span>
                 <h2 className="font-serif text-[42px] font-bold text-[#404552] tracking-tighter leading-tight uppercase" style={{ transform: 'scaleY(1.2)', transformOrigin: 'top right' }}>
                    ETCHED <br/> CLARITY
                 </h2>
              </div>
              <p className="text-[11px] text-slate/50 leading-loose max-w-sm font-bold uppercase tracking-[0.2em]">
                 Optic-grade glass foundations that manipulate light. Creating a environment where shadow and reflection live in harmony.
              </p>
              <div className="w-12 h-[2px] bg-peach/40"></div>
           </motion.div>
        </div>

      </motion.div>

    </section>
  );
}
