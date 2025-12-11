export default function HaulPassVSLPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">

      {/* Cinematic Background Image */}
<div className="absolute inset-0 bg-hero opacity-25"></div>

      {/* Dark Blue Neon Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001133] to-black opacity-70"></div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-[0_0_20px_#002CFF]">
          NATIONAL EMERGENCY FREIGHT COVERAGE
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-12 leading-relaxed">
          When your load is stuck, damaged, shifted, or behind schedule…  
          <strong>H.A.U.L. PASS</strong> deploys the fastest emergency labor response in the country.
        </p>

        <a
          href="/haul-pass/offer"
          className="px-12 py-4 bg-[#002CFF] text-white font-semibold rounded-xl shadow-[0_0_25px_#002CFF] hover:bg-blue-700 transition-all text-xl"
        >
          WATCH THE VSL →
        </a>
      </section>

    </main>
  );
}
