'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface BathroomProductGridProps {
  activeType: string;
}

export default function BathroomProductGrid({ activeType }: BathroomProductGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const allProducts = [
    { title: "CARA SLAB BASIN", price: "$1800", type: "furniture", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" },
    { title: "THE ARCH MIRROR", price: "$650", type: "decor", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
    { title: "MONO TAP SET", price: "$420", type: "furniture", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
    { title: "PIQUE COTTON TOWEL", price: "$90", type: "textiles", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" },
  ];

  const products = activeType === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.type === activeType);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12 sm:gap-16"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-b border-gray-100 pb-12 gap-6 text-center sm:text-left">
           <div className="flex flex-col gap-4">
              <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Sanctuary Essentials</span>
              <h2 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#404552] tracking-tighter uppercase">The Purity Registry</h2>
           </div>
           <button className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-peach transition-colors block">Digital Folio</button>
        </div>

        {/* Purity Asymmetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {products.map((p, i) => (
              <motion.div 
                key={`${p.title}-${i}`} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col gap-6 group cursor-pointer ${i === 1 ? 'lg:translate-y-12' : ''} ${i === 3 ? 'lg:translate-y-8' : ''}`}
              >
               <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#FBFBFC] shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img src={p.image} className="w-full h-full object-cover grayscale-0 opacity-100 group-hover:scale-105 transition-all duration-1000" alt={p.title} />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                     <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl">
                        <svg className="w-4 h-4 text-[#404552]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-2 pt-2 text-center lg:text-left">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#404552]">{p.title}</h3>
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                     <span className="text-[9px] font-bold text-slate/40 uppercase tracking-widest">{p.price} / ETCHED</span>
                     <div className="w-8 h-[1px] bg-peach/30 mt-1"></div>
                  </div>
               </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
