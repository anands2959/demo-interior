'use client';
import { motion } from 'framer-motion';

export default function BathroomSection() {
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
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-white">
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center"
      >
        
        {/* Column 1: Vertical Identity */}
        <motion.div variants={item} className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex items-center gap-4">
             <div className="w-[2px] h-12 bg-peach/20"></div>
             <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Sanctuary</span>
          </div>
          
          <h2 className="font-serif text-[48px] font-bold text-[#404552] tracking-tighter leading-[0.9] uppercase" style={{ transform: 'scaleY(1.3)', transformOrigin: 'top' }}>
             THE <br/> WELLS <br/> SUITE
          </h2>

          <p className="text-[10.5px] text-slate/40 leading-loose max-w-[320px] font-bold uppercase tracking-[0.2em] mt-8">
             Pure marble foundations merged with soft lighting. Our bathroom selection is a journey into silence and deep restoration.
          </p>

          <div className="flex gap-4 mt-8">
             <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-peach hover:border-peach hover:text-white transition-all cursor-pointer text-[10px] font-black uppercase">01</div>
             <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-peach hover:border-peach hover:text-white transition-all cursor-pointer text-[10px] font-black uppercase">02</div>
          </div>
        </motion.div>

        {/* Column 2: Large Sanctuary Image */}
        <motion.div 
          variants={item}
          className="lg:col-span-1 h-[600px] rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2 bg-[#F8F9FA]"
        >
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000" 
            alt="Sanctuary Space" 
          />
        </motion.div>

        {/* Column 3: Texture Detail & UI */}
        <motion.div variants={item} className="flex flex-col gap-12 order-3">
          <div className="aspect-square w-full rounded-sm overflow-hidden bg-gray-100">
             <img 
               src="/images/bath-1.png" 
               className="w-full h-full object-cover grayscale brightness-110" 
               alt="Texture Detail" 
             />
          </div>
          
          <div className="flex flex-col gap-4 pl-4 border-l border-peach/20">
             <h4 className="text-[11px] font-black text-[#404552] tracking-widest uppercase">Pure Marble Flow</h4>
             <p className="text-[10px] text-slate/50 leading-relaxed max-w-[200px] font-medium">
                Ethically sourced travertine and carrara surfaces for an eternal aesthetic.
             </p>
          </div>

          <button className="text-peach text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 group">
             EXPLORE SUITE
             <div className="w-12 h-[1px] bg-peach/40 group-hover:w-20 transition-all duration-700"></div>
          </button>
        </motion.div>

      </motion.div>

    </section>
  );
}
