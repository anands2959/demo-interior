export default function Newsletter() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-white">
      <div className="bg-[#404552] rounded-[40px] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
        {/* Abstract Background Detail */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-peach rounded-full blur-[120px]"></div>
        </div>

        <div className="flex flex-col gap-6 relative z-10 lg:w-1/2 text-center lg:text-left">
          <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">The Journal</span>
          <h2 className="font-serif text-[38px] lg:text-[52px] font-bold text-white tracking-tighter leading-none">
            Stay in the <br /> minimalist circle.
          </h2>
          <p className="text-white/40 text-[11px] font-medium leading-relaxed uppercase tracking-[0.2em] max-w-[400px]">
            Curated looks, artisan stories, and collection drops delivered to your sanctuary.
          </p>
        </div>

        <div className="w-full lg:w-[400px] relative z-10">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white text-[10px] font-bold tracking-widest focus:outline-none focus:border-peach/50 transition-all placeholder:text-white/10"
            />
            <button className="w-full bg-peach text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 rounded-full shadow-[0_20px_40px_rgba(239,169,138,0.2)] hover:bg-white hover:text-[#404552] transition-all">
              Join Selection
            </button>
          </div>
          <p className="text-white/20 text-[8px] mt-4 uppercase tracking-widest text-center">Privacy secured by Co. Premium</p>
        </div>
      </div>
    </section>
  );
}
