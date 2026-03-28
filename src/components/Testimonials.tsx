'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      text: "The architectural depth of the furniture is unmatched. Every piece feels like it was designed specifically for my space's geometry.",
      author: "Julian Vance",
      role: "Architect, NYC",
      rating: 5
    },
    {
      text: "Varly's commitment to minimalist ethics isn't just marketing. The quality of the materials speaks of a lifelong investment.",
      author: "Sarah Chen",
      role: "Interior Stylist",
      rating: 5
    },
    {
      text: "Finding a brand that understands the balance between raw nature and modern form is rare. This collection is a masterpiece.",
      author: "Marcus Thorne",
      role: "Designer",
      rating: 5
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-white flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 mb-20 text-center"
      >
        <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Testimonials</span>
        <h2 className="font-serif text-[42px] font-bold text-[#404552] tracking-tighter">Verified Experience</h2>
        <div className="w-12 h-[1px] bg-peach/30 mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 group cursor-default"
          >
            {/* Stars */}
            <div className="flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
               {[...Array(review.rating)].map((_, s) => (
                 <div key={s} className="w-1.5 h-1.5 rounded-full bg-peach"></div>
               ))}
            </div>

            <p className="font-serif text-[22px] italic leading-snug text-[#404552] tracking-tight group-hover:text-peach transition-colors duration-500">
               "{review.text}"
            </p>

            <div className="flex flex-col gap-2 pt-6 border-t border-gray-100">
               <span className="text-[11px] font-black uppercase text-[#404552] tracking-widest">{review.author}</span>
               <span className="text-[9px] font-bold uppercase text-slate/30 tracking-[0.3em]">{review.role}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
