'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, X, Menu } from "lucide-react";

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  activeType: string;
  onTypeChange: (type: string) => void;
}

export default function Navbar({ activeCategory, onCategoryChange, activeType, onTypeChange }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Lock scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSearchOpen]);

  const trendingSearches = [
    "Signature Seating",
    "Italian Marble Slab",
    "Minimalist Basin Suite",
    "Matte Black Hardware",
    "Wellness Stone"
  ];

  return (
    <header className="w-full bg-white flex flex-col justify-center sticky top-0 z-[100] shadow-sm">
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-start pt-32 px-6"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-12 right-12 text-[#404552] hover:text-peach transition-colors p-2"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[800px] flex flex-col gap-12"
            >
              <div className="flex flex-col gap-4 items-center">
                <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">Search the Collection</span>
                <input
                  autoFocus
                  type="text"
                  placeholder="WHAT ARE YOU SEEKING?"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-6 text-[32px] lg:text-[48px] font-serif font-bold text-[#404552] placeholder:text-gray-100 focus:outline-none focus:border-peach transition-all uppercase tracking-tighter"
                  style={{ transformOrigin: 'left' }}
                />
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate/40">Trending Lately</h4>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {trendingSearches.map((term, i) => (
                    <motion.span
                      key={term}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="text-[11px] font-bold text-[#404552] hover:text-peach cursor-pointer uppercase tracking-widest border-b border-transparent hover:border-peach/30 transition-all"
                    >
                      {term}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Nav - Hides on Scroll */}
      <motion.div
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          marginBottom: isScrolled ? 0 : "1px"
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full border-b border-gray-100 overflow-hidden"
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3 sm:gap-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                {/* Isometric Frame + Lamp Logo */}
                <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 transition-transform duration-700 sm:w-[40px] sm:h-[40px]">
                  <path className="iso-frame" d="M40 30L80 15V90L40 105V30Z" stroke="#3B434C" strokeWidth="4" strokeLinejoin="round" />
                  <path className="iso-frame" d="M80 15L100 30V105L80 90" stroke="#3B434C" strokeWidth="4" strokeLinejoin="round" />
                  <path className="iso-frame" d="M40 30L20 45V120L40 105" stroke="#3B434C" strokeWidth="4" strokeLinejoin="round" />
                  <path className="iso-fill" d="M80 15L100 30V105L80 90V15Z" fill="#ee4714ff" />
                  <line x1="50" y1="35" x2="50" y2="65" stroke="#3B434C" strokeWidth="3" />
                  <path d="M35 75C35 70 41.7157 66 50 66C58.2843 66 65 70 65 75H35Z" fill="#3B434C" />
                  <circle cx="50" cy="78" r="4" fill="#3B434C" />
                </svg>
                <div className="absolute inset-0 border border-gray-100/50 rounded-sm -m-1 group-hover:border-peach/30 transition-all duration-700"></div>
              </div>
              <span className="hidden xs:block font-serif font-black text-[10px] sm:text-xs tracking-[0.2em] text-[#3B434C] uppercase">ISO & LUME</span>
            </Link>
          </div>

          {/* Main Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[9.5px] font-extrabold tracking-[0.2em] text-[#404552]/70 uppercase font-geist">
            <span className="hover:text-peach transition-colors cursor-pointer">Archive</span>
            <span className="hover:text-peach transition-colors cursor-pointer">Boutique</span>
            <span className="hover:text-peach transition-colors cursor-pointer">Stories</span>
            <span className="hover:text-peach transition-colors cursor-pointer">Objects</span>
            <svg width="6" height="6" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300"><circle cx="12" cy="12" r="12" /></svg>
            <span className="hover:text-peach transition-colors cursor-pointer">Support</span>
            <span className="hover:text-peach transition-colors cursor-pointer">About Studio</span>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="hidden sm:block bg-peach text-[#1A1D21] text-[9px] font-black tracking-[0.2em] px-8 py-[14px] rounded-full hover:bg-[#404552] hover:text-white transition-colors uppercase shadow-md shadow-peach/20">
              Access
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu size={20} className="text-[#404552]" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Secondary Nav - Pinned in the Header */}
      <div className={`w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'border-b border-gray-100 py-5'}`}>
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-slate/70">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-[#404552]">Home & Accessories.</span>
            {!isScrolled && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                className="text-[8.5px] font-bold uppercase tracking-[0.3em] mt-1 text-slate/40"
              >
                Curation of ISO & LUME Space
              </motion.span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <div className="flex items-center gap-[18px]">
              <span
                onClick={() => onTypeChange('all')}
                className={`uppercase font-extrabold text-[10px] tracking-widest cursor-pointer transition-colors ${activeType === 'all' ? 'text-[#404552]' : 'text-slate/40 hover:text-slate'}`}
              >
                All
              </span>
              <div className={`w-5 h-[2px] transition-all ${activeType === 'all' ? 'bg-peach' : 'bg-transparent'}`}></div>
            </div>
            <div className="flex items-center gap-[18px]">
              <span
                onClick={() => onTypeChange('furniture')}
                className={`uppercase font-extrabold text-[10px] tracking-widest cursor-pointer transition-colors ${activeType === 'furniture' ? 'text-[#404552]' : 'text-slate/40 hover:text-slate'}`}
              >
                Furniture
              </span>
              <div className={`w-5 h-[2px] transition-all ${activeType === 'furniture' ? 'bg-peach' : 'bg-transparent'}`}></div>
            </div>
            <div className="flex items-center gap-[18px]">
              <span
                onClick={() => onTypeChange('decor')}
                className={`uppercase font-extrabold text-[10px] tracking-widest cursor-pointer transition-colors ${activeType === 'decor' ? 'text-[#404552]' : 'text-slate/40 hover:text-slate'}`}
              >
                Decor
              </span>
              <div className={`w-5 h-[2px] transition-all ${activeType === 'decor' ? 'bg-peach' : 'bg-transparent'}`}></div>
            </div>
            <div className="flex items-center gap-[18px]">
              <span
                onClick={() => onTypeChange('lighting')}
                className={`uppercase font-extrabold text-[10px] tracking-widest cursor-pointer transition-colors ${activeType === 'lighting' ? 'text-[#404552]' : 'text-slate/40 hover:text-slate'}`}
              >
                Lighting
              </span>
              <div className={`w-5 h-[2px] transition-all ${activeType === 'lighting' ? 'bg-peach' : 'bg-transparent'}`}></div>
            </div>
            <div className="flex items-center gap-[18px]">
              <span
                onClick={() => onTypeChange('textiles')}
                className={`uppercase font-extrabold text-[10px] tracking-widest cursor-pointer transition-colors ${activeType === 'textiles' ? 'text-[#404552]' : 'text-slate/40 hover:text-slate'}`}
              >
                Textiles
              </span>
              <div className={`w-8 h-[2px] transition-all ${activeType === 'textiles' ? 'bg-peach' : 'bg-transparent'}`}></div>
            </div>

            {/* Right pills - Section Switchers */}
            <div className="flex items-center gap-2 ml-4">
              <span
                onClick={() => onCategoryChange('bathroom')}
                className={`text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm cursor-pointer transition-all ${activeCategory === 'bathroom' ? 'bg-[#404552] text-white shadow-sm' : 'bg-[#F3F4F6] text-[#404552] hover:bg-slate/10'}`}
              >
                Bathrooms
              </span>
              <span
                onClick={() => onCategoryChange('living')}
                className={`text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm cursor-pointer transition-all ${activeCategory === 'living' ? 'bg-[#404552] text-white shadow-sm' : 'bg-[#F3F4F6] text-[#404552] hover:bg-slate/10'}`}
              >
                Living
              </span>
              <span
                onClick={() => onCategoryChange('kitchen')}
                className={`text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm cursor-pointer transition-all ${activeCategory === 'kitchen' ? 'bg-[#404552] text-white shadow-sm' : 'bg-[#F3F4F6] text-[#404552] hover:bg-slate/10'}`}
              >
                Kitchen
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <Search
              size={18}
              strokeWidth={2.5}
              className="text-[#404552] hover:text-peach cursor-pointer transition-colors"
              onClick={() => setIsSearchOpen(true)}
            />
            <User size={18} strokeWidth={2.5} className="text-[#404552] hover:text-peach cursor-pointer transition-colors sm:block hidden" />
            <ShoppingBag size={18} strokeWidth={2.5} className="text-[#404552] hover:text-peach cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-8 border-b border-gray-100">
              <span className="font-serif font-black text-xs tracking-widest text-[#404552]">ISO & LUME</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X size={24} className="text-[#404552]" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {['Archive', 'Boutique', 'Stories', 'Objects', 'Support', 'About Studio'].map((item) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-serif font-bold text-[#404552] hover:text-peach transition-colors cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="p-10 border-t border-gray-100 flex flex-col gap-4">
              <button className="w-full bg-peach text-[#1A1D21] text-xs font-black tracking-widest py-5 rounded-full uppercase">
                Access Studio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
