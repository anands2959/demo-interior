export default function Footer() {
   return (
      <footer className="relative w-full overflow-hidden bg-[#1A1D21] text-white pt-20 lg:pt-32 pb-12 border-t border-white/5">

         {/* High-End Architectural Photo Background */}
         <div className="absolute inset-0 pointer-events-none z-0">
            <img
               src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
               className="w-full h-full object-cover opacity-20 grayscale brightness-50"
               alt="background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D21] via-transparent to-[#1A1D21] opacity-60"></div>

            {/* Noise Grain Overlay */}
            <div
               className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>
         </div>

         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 lg:mb-32">

               {/* Logo & Intro */}
               <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
                  <div className="flex items-center gap-4">
                     <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path className="iso-frame" d="M40 30L80 15V90L40 105V30Z" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                           <path className="iso-frame" d="M80 15L100 30V105L80 90" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                           <path className="iso-frame" d="M40 30L20 45V120L40 105" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                           <path className="iso-fill" d="M80 15L100 30V105L80 90V15Z" fill="#FF8E6E" />
                           <line x1="50" y1="35" x2="50" y2="65" stroke="white" strokeWidth="3" />
                           <path d="M35 75C35 70 41.7157 66 50 66C58.2843 66 65 70 65 75H35Z" fill="white" />
                           <circle cx="50" cy="78" r="4" fill="white" />
                        </svg>
                        <div className="absolute inset-0 border border-white/20 rounded-sm -m-1"></div>
                     </div>
                     <span className="font-serif font-black text-xl tracking-[0.2em] text-white uppercase">ISO & LUME</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-[2.2] uppercase tracking-[0.2em] font-medium max-w-[280px]">
                     Bringing architectural isometric form to life through luminous design and structural ethics.
                  </p>
                  <div className="flex gap-2">
                     {[
                        // LinkedIn
                        <svg key="in" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                        // Twitter
                        <svg key="tw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
                        // Facebook
                        <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                     ].map((icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-sm flex items-center justify-center hover:bg-peach hover:text-[#1A1D21] hover:border-peach transition-all cursor-pointer">
                           {icon}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Links 1 */}
               <div className="flex flex-col gap-6 pt-2 text-center md:text-left items-center md:items-start">
                  <h4 className="text-[10px] uppercase font-black text-peach tracking-[0.4em]">COLLECTIONS</h4>
                  <ul className="flex flex-col gap-4 text-[11px] font-bold text-white/80 uppercase tracking-[0.2em]">
                     <li className="hover:text-peach cursor-pointer transition-colors">Spring / Summer Archive</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">Isometric Pieces</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">Luminous Series</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">ISO Studio</li>
                  </ul>
               </div>

               {/* Links 2 */}
               <div className="flex flex-col gap-6 pt-2 text-center md:text-left items-center md:items-start">
                  <h4 className="text-[10px] uppercase font-black text-peach tracking-[0.4em]">SPACE</h4>
                  <ul className="flex flex-col gap-4 text-[11px] font-bold text-white/80 uppercase tracking-[0.2em]">
                     <li className="hover:text-peach cursor-pointer transition-colors">Our Ethos</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">Sustainability</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">The Journal</li>
                     <li className="hover:text-peach cursor-pointer transition-colors">About Studio</li>
                  </ul>
               </div>

               {/* Contact */}
               <div className="flex flex-col gap-6 pt-2 text-center md:text-left items-center md:items-start">
                  <h4 className="text-[10px] uppercase font-black text-peach tracking-[0.4em]">CONTACT</h4>
                  <div className="flex flex-col gap-6 items-center md:items-start">
                     <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-white/80 uppercase tracking-[0.2em]">Sanctuary. ISO NYC</span>
                        <p className="text-[11px] font-bold text-white tracking-widest uppercase mt-1">Hello@ISOLUME.com</p>
                     </div>
                     <div className="h-[1px] w-12 bg-white/20"></div>
                     
                  </div>
               </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/60 text-center md:text-left">
               <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
                  <span className="hover:text-peach cursor-pointer transition-colors">Legal</span>
                  <span className="hover:text-peach cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-peach cursor-pointer transition-colors">T&C</span>
               </div>
               <div className="max-w-[400px] text-white/80">
                  © 2026 ISO & LUME Studio. Handcrafted for your inner peace.
               </div>
            </div>

         </div>

      </footer>
   );
}
