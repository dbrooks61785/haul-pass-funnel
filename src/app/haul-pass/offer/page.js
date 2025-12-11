export default function OfferPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 drop-shadow-[0_0_10px_#002CFF]">
          What Is The H.A.U.L. PASS?
        </h1>

        <p className="text-gray-300 text-xl leading-relaxed mb-12">
          The **High Alert Urgent Labor PASS** is a national emergency freight response plan designed for fleets ranging from 1 to 200+ trucks.
          It guarantees priority access to EZ Lumper Services’ nationwide network of emergency labor — including restacks, pallet rebuilds, 
          load recovery, emergency transloads, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Nationwide Coverage</h2>
            <p className="text-gray-400">
              Since 2013 we’ve built the largest on-demand lumper network in the U.S.  
              Your drivers are never left stranded again.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">10–60 Min Activation</h2>
            <p className="text-gray-400">
              Fastest labor activation times in the industry. We dispatch immediately.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Emergency Restacks</h2>
            <p className="text-gray-400">
              Damaged pallets? Fallen freight? Leaning loads?  
              We rebuild your freight and get your truck rolling.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Guaranteed Priority</h2>
            <p className="text-gray-400">
              HAUL PASS members jump to the top of the queue during peak demand.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="/haul-pass/pricing"
            className="px-10 py-4 bg-[#002CFF] rounded-xl text-white font-semibold text-lg shadow-[0_0_20px_#002CFF]"
          >
            SEE PLANS & PRICING →
          </a>
        </div>
      </section>
    </main>
  );
}
