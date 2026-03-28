'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeatureBlocks from "@/components/FeatureBlocks";
import KitchenHero from "@/components/KitchenHero";
import KitchenProductGrid from "@/components/KitchenProductGrid";
import KitchenFeatures from "@/components/KitchenFeatures";
import BathroomHero from "@/components/BathroomHero";
import BathroomProductGrid from "@/components/BathroomProductGrid";
import BathroomFeatures from "@/components/BathroomFeatures";
import CategorySelector from "@/components/CategorySelector";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import LifestyleGallery from "@/components/LifestyleGallery";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("living");
  const [activeType, setActiveType] = useState("all");
  const [showSelector, setShowSelector] = useState(true);

  // Handle selection from popup
  const handleInitialSelection = (category: string) => {
    setActiveCategory(category);
    setShowSelector(false);
  };

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence>
        {showSelector && <CategorySelector onSelect={handleInitialSelection} />}
      </AnimatePresence>

      <Navbar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        activeType={activeType}
        onTypeChange={setActiveType}
      />
      
      <AnimatePresence mode="wait">
        {activeCategory === "living" && (
          <motion.div 
            key="living"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <ProductGrid activeType={activeType} />
            <FeatureBlocks />
          </motion.div>
        )}

        {activeCategory === "kitchen" && (
          <motion.div 
            key="kitchen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <KitchenHero />
            <KitchenProductGrid activeType={activeType} />
            <KitchenFeatures />
          </motion.div>
        )}

        {activeCategory === "bathroom" && (
          <motion.div 
            key="bathroom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BathroomHero />
            <BathroomProductGrid activeType={activeType} />
            <BathroomFeatures />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Sections */}
      <Testimonials />
      <LifestyleGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
