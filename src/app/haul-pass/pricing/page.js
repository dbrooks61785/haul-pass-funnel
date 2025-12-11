export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_10px_#002CFF]">
          Choose Your H.A.U.L. PASS Plan
        </h1>

        <p className="text-gray-300 text-xl mb-16">
          Designed for fleets of all sizes.  
          Simple pricing. No surprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Tier 1 */}
          <div className="p-8 bg-[#0f0f0f] border border-zinc-800 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Tier 1</h2>
            <p className="text-gray-400 mb-6">1–10 Trucks</p>
            <p className="text-5xl font-bold mb-4">$199<span className="text-lg">/mo</span></p>
            <ul className="text-left text-gray-400 space-y-3 mb-10">
              <li>✓ Priority emergency staffing</li>
              <li>✓ Nationwide coverage</li>
              <li>✓ 10–60 minute activation</li>
              <li>✓ Member-only rates</li>
            </ul>
            <a
              href="/haul-pass/signup"
              className="block w-full bg-[#002CFF] py-3 rounded-xl text-white font-semibold shadow-[0_0_20px_#002CFF]"
            >
              Get Started →
            </a>
          </div>

          {/* Tier 2 */}
          <div className="p-8 bg-[#0f0f0f] border border-zinc-800 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Tier 2</h2>
            <p className="text-gray-400 mb-6">11–50 Trucks</p>
            <p className="text-5xl font-bold mb-4">$399<span className="text-lg">/mo</span></p>
            <ul className="text-left text-gray-400 space-y-3 mb-10">
              <li>✓ Guaranteed dispatch</li>
              <li>✓ SLA-backed response times</li>
              <li>✓ Discounted restack rates</li>
              <li>✓ Monthly incident reporting</li>
            </ul>
            <a
              href="/haul-pass/signup"
              className="block w-full bg-[#002CFF] py-3 rounded-xl text-white font-semibold shadow-[0_0_20px_#002CFF]"
            >
              Get Started →
            </a>
          </div>

          {/* Tier 3 */}
          <div className="p-8 bg-[#0f0f0f] border border-zinc-800 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Tier 3</h2>
            <p className="text-gray-400 mb-6">51–200+ Trucks</p>
            <p className="text-5xl font-bold mb-4">$799<span className="text-lg">/mo</span></p>
            <ul className="text-left text-gray-400 space-y-3 mb-10">
              <li>✓ Enterprise-grade support</li>
              <li>✓ Dedicated emergency manager</li>
              <li>✓ Priority network routing</li>
              <li>✓ Unlimited dispatch requests</li>
            </ul>
            <a
              href="/haul-pass/signup"
              className="block w-full bg-[#002CFF] py-3 rounded-xl text-white font-semibold shadow-[0_0_20px_#002CFF]"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
