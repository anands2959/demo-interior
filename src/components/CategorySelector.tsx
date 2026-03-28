'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface SelectorProps {
  onSelect: (category: string) => void;
}

export default function CategorySelector({ onSelect }: SelectorProps) {
  const choices = [
    {
      id: 'bathroom',
      title: 'Wells Suite',
      subtitle: 'The Sanctuary',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'living',
      title: 'Living Space',
      subtitle: 'Signature Selections',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'kitchen',
      title: 'Kitchen Foundry',
      subtitle: 'Culinary Precision',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/60 pointer-events-auto"
    >
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[580px] w-[90%] sm:w-full mx-auto bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-sm p-4 sm:p-10 relative border border-gray-100"
      >
        <div className="flex flex-col items-center text-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <span className="text-peach text-[7px] sm:text-[8px] uppercase font-black tracking-[0.4em]">ISO & LUME Selection</span>
          <h2 className="font-serif text-[18px] sm:text-[32px] font-bold text-[#404552] tracking-tighter leading-none uppercase" style={{ transform: 'scaleY(1.1)' }}>
            SELECT DESTINATION
          </h2>
          <div className="w-8 h-[1px] sm:w-10 sm:h-[2px] bg-peach mt-1 sm:mt-2"></div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {choices.map((choice, i) => (
            <motion.div
              key={choice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              onClick={() => onSelect(choice.id)}
              className="group cursor-pointer flex flex-col gap-4 text-center"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-gray-50 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img src={choice.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt={choice.title} />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <h4 className="text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#404552] whitespace-nowrap">{choice.title}</h4>
                <div className="w-0 h-[1.5px] bg-peach mt-0.5 group-hover:w-8 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer - Hide on small screens */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-50 flex justify-center opacity-10 hidden sm:flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#404552]">
            <path d="M4 12c2.5-4 5.5-4 8 0s5.5 4 8 0" />
            <path d="M8 8c-2.5-2-4 2-2 6" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
