'use client';
import { motion } from 'framer-motion';

export default function LifestyleGallery() {
  const items = [
    { image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop", label: "01. Space" },
    { image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop", label: "02. Light" },
    { image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop", label: "03. Form" },
    { image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop", label: "04. Detail" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 bg-white">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-end border-b border-gray-100 pb-12"
        >
           <h2 className="font-serif text-[32px] font-extrabold text-[#404552] tracking-tighter">The Curated Journal</h2>
           <div className="flex items-center gap-6 text-[#EFA98A] group cursor-pointer">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Stories</span>
              <div className="w-12 h-[1px] bg-peach/40 group-hover:w-20 transition-all duration-700"></div>
           </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden relative rounded-sm"
            >
               <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img src={item.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt={item.label} />
               </div>
               <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">{item.label}</span>
               </div>
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
