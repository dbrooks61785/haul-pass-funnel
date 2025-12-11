export default function HaulPassVSLPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background cinematic overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597006681570-791cb7f98346?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>

      {/* Blue neon gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001133] to-black opacity-70"></div>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-[0_0_15px_#002CFF]">
          NATIONAL EMERGENCY FREIGHT COVERAGE
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-12">
          When your load is stuck, damaged, or behind schedule…  
          **H.A.U.L. PASS** activates the fastest emergency labor response in the country.
        </p>

        <a
          href="/haul-pass/offer"
          className="px-10 py-4 bg-[#002CFF] text-white font-semibold rounded-xl shadow-[0_0_20px_#002CFF] hover:bg-blue-700 transition-all text-lg"
        >
          WATCH THE SHORT VSL →
        </a>
      </section>
    </main>
  );
}
