'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGridProps {
  activeType: string;
}

export default function ProductGrid({ activeType }: ProductGridProps) {
  const allProducts = [
    { image: "/images/product-1.png", title: "CARA CHAIR", type: "furniture" },
    { image: "/images/product-2.png", title: "SERENE SOFA", type: "furniture" },
    { image: "/images/product-3.png", title: "STONE VASE", type: "decor" },
    { image: "/images/product-4.png", title: "NORDIC LAMP", type: "lighting" },
    { image: "/images/product-5.png", title: "ASH WOOD SHELF", type: "furniture" },
    { image: "/images/product-6.png", title: "PILLOW SET", type: "textiles" },
    { image: "/images/product-7.png", title: "LOUNGE SLAB", type: "furniture" },
  ];
  const products = activeType === 'all'
    ? allProducts
    : allProducts.filter(p => p.type === activeType);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-12 bg-white overflow-hidden">

      {/* Master Compact Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
      >

        {/* ROW 1: FILTERED PRODUCT CARDS */}
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div
              key={`${product.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8F9FA] p-2 h-[220px] rounded-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-full h-full bg-white flex items-center justify-center p-6 rounded-sm group-hover:bg-slate/5 transition-colors">
                <img src={product.image} className="w-full h-full object-contain mix-blend-multiply opacity-95 group-hover:scale-105 transition-transform duration-700" alt={product.title} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Top Right Header Text */}
        <motion.div variants={item} className="flex flex-col gap-4 lg:pl-6 pt-6 lg:h-full justify-center text-center lg:text-left">
          <h2 className="font-serif text-[28px] font-bold leading-tight text-[#404552] tracking-tight">
            Chic and Bold <br /> Signature Selection
          </h2>
          <p className="text-[11px] text-slate/40 leading-relaxed font-bold uppercase tracking-[0.2em] max-w-[240px] mx-auto lg:mx-0">
            Minimalist accessories tailored for you.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3 text-peach mt-2 cursor-pointer group">
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase">VIEW ALL</span>
            <div className="w-8 h-[1px] bg-peach/40 group-hover:w-12 transition-all"></div>
          </div>
        </motion.div>

        {/* ROW 2 & 3: RESPONSIVE ADAPTATION */}

        {/* Left Info */}
        <motion.div variants={item} className="lg:col-span-1 flex flex-col gap-4 lg:pr-6 mt-12 text-center lg:text-left items-center lg:items-start">
          <h3 className="font-serif text-[24px] font-bold text-[#404552]">Timeless Essentials</h3>
          <p className="text-[11px] text-slate/40 leading-[2.2] max-w-[220px] font-bold uppercase tracking-[0.2em]">Curated looks blending art into life experience.</p>
          <div className="flex gap-2 mt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-peach/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-peach"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-peach/20"></div>
          </div>
        </motion.div>

        {/* Center Presentation */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 bg-[#F5F6F8] p-6 shadow-sm rounded-sm lg:mt-8 h-[300px] flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <img src="/images/product-2.png" className="w-[90%] h-auto object-contain mix-blend-multiply group-hover:scale-[1.03] transition-transform duration-1000" alt="Wide sofa" />
        </motion.div>

        {/* Tall UI Mockup - Collapses to full width or 2-col on small screens */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col gap-6 pt-6 lg:pt-0">
          <div className="bg-[#1A1D21] w-full h-[520px] rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center border border-white/5 relative overflow-hidden">
            <div className="w-full flex justify-between items-center text-white/40 text-[11px] font-bold tracking-[0.4em] uppercase mb-12">
              <span className="font-serif italic text-xl text-white/90 font-bold">Curated</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-peach"></div>
              </div>
            </div>

            {/* Interaction Grid */}
            <div className="w-full grid grid-cols-3 gap-3 px-1 relative mb-auto">
              <div className="absolute inset-0 m-auto w-16 h-16 bg-peach rounded-full flex items-center justify-center text-[#1A1D21] font-black text-[10px] tracking-[0.3em] shadow-2xl z-30 cursor-pointer hover:scale-110 transition-transform uppercase">
                BUY
              </div>
              {[...Array(9)].map((_, i) => (
                <div key={i} className="aspect-square bg-white/[0.04] rounded-lg border border-white/[0.08] overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=200&auto=format&fit=crop&sig=${i + 20}`} className="w-full h-full object-cover opacity-10 hover:opacity-40 transition-opacity" alt="thumb" />
                </div>
              ))}
            </div>

            <div className="w-full space-y-6 pt-8 border-t border-white/[0.08]">
              <div className="w-full h-[1px] bg-white/[0.08] relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-peach/50"></div>
              </div>
              <div className="flex justify-between items-center text-[9px] font-black text-white/30 uppercase tracking-[0.5em]">
                <span>CAT.ISO24</span>
                <span>STOKE.NYC</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button className="w-full sm:w-auto px-12 py-5 bg-peach text-[#1A1D21] rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-peach/10 hover:bg-[#3B434C] hover:text-white transition-all duration-500">
              Shop Selection
            </button>
          </div>
        </motion.div>

        {/* Bottom Feature */}
        <motion.div variants={item} className="md:col-span-2 lg:col-span-2 bg-[#1A1D21] h-auto lg:h-[280px] flex flex-col sm:flex-row shadow-2xl rounded-sm overflow-hidden border border-white/[0.05] relative z-10 transition-all hover:border-peach/20">
          <div className="w-full sm:w-1/2 p-10 lg:p-14 flex flex-col justify-center gap-5 text-white">
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-peach/60">Sustainability</span>
            <h4 className="font-serif text-[32px] font-bold tracking-tighter leading-tight uppercase">Pure Ethics <br /> & Craft</h4>
            <div className="w-12 h-[1px] bg-white/20"></div>
            <p className="text-[10px] text-white/40 leading-loose font-bold uppercase tracking-[0.3em]">Modern living redefined.</p>
          </div>
          <div className="w-full sm:w-1/2 h-64 sm:h-auto grayscale opacity-60 mix-blend-luminosity hover:opacity-95 transition-opacity duration-1000">
            <img src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="dark accent" />
          </div>
        </motion.div>

        {/* Small Highlight */}
        <motion.div variants={item} className="bg-[#FAFAFA] md:col-span-2 lg:col-span-1 p-8 h-[280px] shadow-sm rounded-sm flex flex-col justify-between items-center group cursor-pointer hover:bg-white transition-all">
          <div className="w-full flex justify-between opacity-30">
            <span className="text-[10px] font-black tracking-[0.4em] tabular-nums">04</span>
            <div className="w-2 h-2 rounded-full bg-peach"></div>
          </div>
          <div className="h-32 w-full flex items-center justify-center p-4">
            <img src="/images/product-8.png" className="w-full h-full object-contain mix-blend-multiply  group-hover:scale-110 transition-all duration-700" alt="display" />
          </div>
          <p className="text-[11px] text-slate/30 font-black uppercase tracking-[0.5em]">View Series</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
