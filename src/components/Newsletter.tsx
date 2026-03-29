export default function Newsletter() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <span className="text-peach text-[10px] uppercase font-black tracking-[0.4em]">The Journal</span>
          <h2 className="font-serif text-[38px] lg:text-[56px] font-bold text-[#404552] tracking-tighter leading-tight">
            Stay in the minimalist circle.
          </h2>
          <p className="text-[#404552]/60 text-[11px] font-medium leading-relaxed uppercase tracking-[0.2em] max-w-[400px]">
            Curated looks, artisan stories, and collection drops delivered to your sanctuary.
          </p>
        </div>

        <div className="w-full max-w-[400px]">
          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border-b border-[#404552]/20 px-2 py-4 text-[#404552] text-[10px] font-bold tracking-widest focus:outline-none focus:border-peach rounded-none transition-colors placeholder:text-[#404552]/40 text-center"
            />
            <button className="w-full bg-[#404552] text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 hover:bg-peach hover:shadow-[0_20px_40px_rgba(239,169,138,0.25)] transition-all duration-300">
              Join Selection
            </button>
          </div>
          <p className="text-[#404552]/40 text-[8px] mt-6 uppercase tracking-widest text-center">Privacy secured by Co. Premium</p>
        </div>
      </div>
    </section>
  );
}
