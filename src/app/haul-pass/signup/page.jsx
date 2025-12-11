import Script from "next/script";

export default function HaulPassSignupPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Load the GHL form script */}
      <Script
        id="ghl-form-script"
        src="https://www.ezlumperservices.com/widget/form/rzO4aGPK4HLk2zyHkBoM"
        strategy="afterInteractive"
      />

      <div className="w-full max-w-2xl bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Activate Your H.A.U.L. PASS
        </h1>
        <p className="text-zinc-300 mb-6 text-center">
          Fill out the form below to securely send your fleet details into our system.
        </p>

        <div className="bg-black/40 rounded-xl p-4 min-h-[300px]">
          {/* GHL form mounts itself here */}
          <div id="ghl-form-embed">
            {/* The GHL script will automatically replace this with the form */}
          </div>
        </div>
      </div>
    </main>
  );
}
