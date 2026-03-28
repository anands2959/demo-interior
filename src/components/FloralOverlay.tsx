'use client';
import { motion } from 'framer-motion';

export default function LifestyleOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="absolute -bottom-36 -right-12 w-[180px] bg-white p-4 shadow-[0_30px_60px_rgba(0,0,0,0.08)] hidden xl:block z-30"
    >
      <div className="flex flex-col gap-4">
        {/* The Lifestyle Image Frame */}
        <div className="aspect-[4/5] w-full bg-[#F5F6F8] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-90"
            alt="Materiality"
          />
        </div>

        {/* The Typography from the user screenshot */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[7px] font-black tracking-[0.4em] text-[#FF8E6E] uppercase">
            MATERIALITY
          </span>
          <h4 className="font-serif text-[11px] font-black text-[#1A1D21] tracking-[0.2em] uppercase leading-tight">
            TRAVERTINE FLOW
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
