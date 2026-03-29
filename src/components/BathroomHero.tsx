'use client';
import { motion } from 'framer-motion';

export default function BathroomHero() {
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
    hidden: { opacity: 0, y: 0, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2 } }
  };

  return (
    <section className="max-w-[1400px] mx-auto min-h-[600px] lg:min-h-[800px] mt-4 mb-20 relative px-6 lg:px-12 overflow-hidden flex items-center bg-[#FBFBFC]">
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full h-full py-20 lg:py-0"
      >
        
        {/* Left Content column (Lighter) */}
        <div className="lg:col-span-5 flex flex-col gap-12 z-10">
          <div className="flex items-center gap-4">
             <motion.div variants={item} className="w-[1px] h-12 bg-peach/30"></motion.div>
             <motion.span variants={item} className="text-peach text-[10.5px] uppercase font-black tracking-[0.4em]">The Wells Suite</motion.span>
          </div>
          
          <motion.h1 
            variants={item}
            className="font-serif text-[48px] md:text-[64px] lg:text-[88px] font-bold text-[#404552] tracking-tighter leading-[0.85] uppercase"
            style={{ transform: 'scaleY(1.3)', transformOrigin: 'top left' }}
          >
             PURE <br/> WELLS <br/> SPACE
          </motion.h1>

          <motion.p variants={item} className="text-[11px] text-slate/40 leading-[2.5] max-w-sm font-bold uppercase tracking-[0.2em] mt-8">
             Travertine foundations merged with the geometry of silence. A sanctuary meticulously crafted for the art of restoration. (Rev. 24)
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-8">
             <button className="bg-[#404552] text-white text-[10px] font-black px-12 py-5 rounded-sm hover:bg-peach hover:text-[#1A1D21] transition-all uppercase w-full sm:w-max tracking-[0.3em] shadow-xl">
                Explore Suite
             </button>
             <button className="border border-gray-200 text-[#404552] text-[10px] font-black px-12 py-5 rounded-sm hover:border-peach transition-all uppercase w-full sm:w-max tracking-[0.3em]">
                Brochure
             </button>
          </motion.div>
        </div>

        {/* Right Imagery Column (Asymmetrical Layout) */}
        <div className="lg:col-span-7 relative h-full flex items-center justify-end">
           {/* Main Large Image */}
           <motion.div 
             variants={item}
             className="w-[85%] aspect-[3/4] lg:h-[700px] rounded-sm overflow-hidden shadow-[0_80px_100px_rgba(0,0,0,0.1)] relative z-0"
           >
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1500&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-0 opacity-100 transition-all duration-1000" 
                alt="Sanctuary Space" 
              />
              <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
           </motion.div>

           {/* Small Offset Accent Box */}
           <motion.div 
             variants={item}
             className="absolute -left-10 bottom-20 w-[240px] aspect-square bg-[#F3F4F6] p-4 rounded-sm shadow-2xl z-10 hidden xl:block"
           >
              <img 
                src="/images/bath-1.png" 
                className="w-full h-full object-cover" 
                alt="Stone Detail" 
              />
              <div className="mt-4 flex flex-col gap-1">
                 <span className="text-[8px] font-black text-peach uppercase tracking-widest">Materiality</span>
                 <span className="text-[9px] font-bold text-[#404552] uppercase tracking-[0.2em]">Travertine Flow</span>
              </div>
           </motion.div>
        </div>

      </motion.div>

    </section>
  );
}
