'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface KitchenProductGridProps {
  activeType: string;
}

export default function KitchenProductGrid({ activeType }: KitchenProductGridProps) {
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
    { title: "FOUNDRY SLAB", price: "$490", type: "furniture", image: "/images/kitchen-2.png" },
    { title: "MATTE BLADE SET", price: "$220", type: "furniture", image: "/images/kitchen-1.png" },
    { title: "CERAMIC BASIN", price: "$1200", type: "furniture", image: "/images/kitchen-3.png" },
    { title: "ASH WOOD BLOCK", price: "$150", type: "decor", image: "/images/kitchen-4.png" },
  ];

  const products = activeType === "all" 
    ? allProducts 
    : allProducts.filter(p => p.type === activeType);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-b border-gray-100 pb-12 gap-6 text-center sm:text-left">
           <div className="flex flex-col gap-4">
              <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Essential Tools</span>
              <h2 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#404552] tracking-tighter">The Culinary Registry</h2>
           </div>
           <button className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-peach transition-colors block">Catalog 24'</button>
        </div>

        {/* Industrial Asymmetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {products.map((p, i) => (
              <motion.div 
                key={`${p.title}-${i}`} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col gap-6 group cursor-pointer ${i === 2 ? 'md:col-span-2 lg:row-span-1' : ''}`}
              >
               <div className="relative aspect-[3/4] lg:aspect-auto h-[400px] overflow-hidden rounded-sm bg-[#F5F6F8]">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt={p.title} />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
                  
                  <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl">
                        <svg className="w-4 h-4 text-[#404552]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                     </div>
                  </div>
               </div>

               <div className="flex justify-between items-start pt-2 px-1">
                  <div className="flex flex-col gap-1">
                     <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#404552]">{p.title}</h3>
                     <span className="text-[9px] font-bold text-slate/40 uppercase tracking-widest">{p.price} / LIMITED</span>
                  </div>
                  <div className="w-8 h-[1px] bg-peach/30 mt-2 group-hover:w-12 transition-all"></div>
               </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
