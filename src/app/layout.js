import "./globals.css";

export const metadata = {
  title: "H.A.U.L. PASS",
  description: "Emergency Freight Support by EZ Lumper Services",

  // Favicon + Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  // Social Preview Settings (Optional but recommended)
  openGraph: {
    title: "H.A.U.L. PASS — Emergency Freight Support Nationwide",
    description:
      "Activate the nation’s fastest freight emergency response plan. Powered by EZ Lumper Services.",
    url: "https://haul-pass-funnel.vercel.app",
    siteName: "H.A.U.L. PASS",
    images: [
      {
        url: "/og-image.png", // optional—add later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Better mobile experience
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white antialiased min-h-screen"
        suppressHydrationWarning={true}
      >
        {/* Global Wrapper */}
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
