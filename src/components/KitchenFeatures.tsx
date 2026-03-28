'use client';
import { motion } from 'framer-motion';

export default function KitchenFeatures() {
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
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-[#F8F9FA]">
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-32"
      >

        {/* Feature 1: The Monolith */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
           <motion.div variants={item} className="w-full lg:w-1/2 aspect-square lg:aspect-video rounded-sm overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kitchen Slab" />
           </motion.div>
           <motion.div variants={item} className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                 <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Feature 01</span>
                 <h2 className="font-serif text-[42px] font-bold text-[#404552] tracking-tighter leading-tight">Monolithic Stone Flow</h2>
              </div>
              <p className="text-[11px] text-slate/50 leading-loose max-w-sm font-bold uppercase tracking-[0.2em]">
                 Seamless surfaces carved from Italian volcanic slab. No joints, no compromises. Just pure materiality meant to anchor the room.
              </p>
              <div className="w-12 h-[2px] bg-peach/40"></div>
           </motion.div>
        </div>

        {/* Feature 2: Precision Controls (Reverse) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
           <motion.div variants={item} className="w-full lg:w-1/2 aspect-square lg:aspect-video rounded-sm overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556912170-453d8193007c?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kitchen Tech" />
           </motion.div>
           <motion.div variants={item} className="w-full lg:w-1/2 flex flex-col gap-8 items-start lg:items-end lg:text-right">
              <div className="flex flex-col gap-4">
                 <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Feature 02</span>
                 <h2 className="font-serif text-[42px] font-bold text-[#404552] tracking-tighter leading-tight">Hand-Pressed Controls</h2>
              </div>
              <p className="text-[11px] text-slate/50 leading-loose max-w-sm font-bold uppercase tracking-[0.2em]">
                 Manual interface design with heavy knurled steel knobs. Experience the tactile weight of tradition meeting modern culinary art.
              </p>
              <div className="w-12 h-[2px] bg-peach/40"></div>
           </motion.div>
        </div>

      </motion.div>

    </section>
  );
}
