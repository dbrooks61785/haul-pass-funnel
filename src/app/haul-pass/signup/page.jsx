export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_10px_#002CFF]">
          Activate Your H.A.U.L. PASS
        </h1>
        <p className="text-gray-300 text-xl mb-12">
          Complete the qualification form below.  
          Your fleet support activation begins immediately.
        </p>

        {/* Form container */}
        <div className="bg-[#0f0f0f] border border-zinc-800 rounded-2xl p-6">
          <iframe
            src="https://www.ezlumperservices.com/widget/form/rzO4aGPK4HLk2zyHkBoM"
            style={{ width: "100%", height: "1100px", border: "none", borderRadius: "12px" }}
            data-layout='{"id":"INLINE"}'
            title="H.A.U.L. PASS Form"
          />
          <script src="https://www.ezlumperservices.com/js/form_embed.js"></script>
        </div>
      </section>
    </main>
  );
}
