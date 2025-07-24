import OpenAIWidget from "@/components/OpenAIWidget";
import TopVPNAccordion from "@/components/TopVPNAccordion";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Sticky top CTA only on desktop */}
      <div className="hidden md:flex sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 px-6 shadow-lg justify-between items-center">
        <span className="font-semibold text-lg">Jämför Sveriges bästa VPN-erbjudande</span>
        <a
          href="https://go.nordvpn.net/SH9uk"
          target="_blank"
          rel="noopener sponsored"
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-5 py-2 rounded-xl shadow transition ml-6"
        >
          Säkra NordVPN-erbjudandet
        </a>
      </div>
      {/* Jumpy Sticky CTA for mobile */}
      {/* <div className="fixed bottom-2 left-0 w-full z-50 flex md:hidden justify-center">
        <a
          href="https://go.nordvpn.net/SH9uk"
          target="_blank"
          rel="noopener sponsored"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-full shadow-xl transition animate-bounce"
        >
          🚀 Säkra NordVPN-erbjudandet nu
        </a>
      </div> */}
      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-gradient-to-r from-blue-700 to-blue-800 text-white p-3 shadow-lg flex justify-between items-center">
        <span className="font-semibold text-lg">Säkra NordVPN-erbjudandet</span>
        <a
          href="https://go.nordvpn.net/SH9uk"
          target="_blank"
          rel="noopener sponsored"
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-4 py-2 rounded-xl shadow ml-2"
        >
          Jämför nu
        </a>
      </div>


      {/* HERO */}
      <section className="max-w-3xl mx-auto py-16 md:py-24 px-4 text-center">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 font-bold px-4 py-1 rounded-xl shadow-sm text-sm uppercase tracking-wide mb-4 animate-pulse border border-yellow-300">
            🏆 Testvinnare 2025
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skydda din integritet online
        </h1>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
          Jämför de bästa VPN-tjänsterna i Sverige — snabbt, säkert & anonymt.
        </p>

        <ul className="flex flex-col md:flex-row gap-3 mb-8 justify-center items-center">
          <li className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Anonymt & säkert</li>
          <li className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Streama utan begränsningar</li>
          <li className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Spara pengar på streaming</li>
        </ul>

        {/* <a
          href="#top-vpn"
          className="block w-full md:w-auto text-center
            bg-gradient-to-r from-blue-600 to-blue-800 
            hover:from-blue-700 hover:to-blue-900
            text-white px-8 py-3 rounded-xl shadow-xl font-semibold
            transition focus:ring-2 focus:ring-blue-400"
        > */}

        <a
          href="#top-vpn"
          className="focus:ring-2 focus:ring-blue-400 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow font-semibold transition"
        >
          Jämför VPN-tjänster
        </a>
        {/* Trust signals */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-500 dark:text-gray-400 text-xs">
          <span>SSL-krypterad</span>
          <span>Uppdaterad: Juli 2025</span>
          <a
            href="https://www.trustpilot.com/review/nordvpn.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 hover:text-blue-400 text-green-600 dark:text-green-400 font-semibold transition"
          >
            {/* Trustpilot logotyp (SVG) */}
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#00B67A" className="inline-block">
              <path d="M8.004 0l2.005 6.17h6.488l-5.247 3.815 2.004 6.17-5.25-3.816-5.247 3.816 2.003-6.17-5.247-3.816h6.488L8.004 0z" />
            </svg>
            4.9/5 Trustpilot
          </a>
        </div>
      </section>
      { /* HERO END */}

      {/* Trust signals */}
      <div className="flex gap-2 mt-3 items-center justify-center">
        <img src="/images/trustpilot-logo.png" alt="Trustpilot" className="h-5" />
        <img src="/images/techradar-logo.png" alt="TechRadar" className="h-5" />
        <span className="text-xs text-gray-500">Topprankad av experter</span>
      </div>


      {/* NordVPN Long */}
      <section className="max-w-4xl mx-auto my-4 md:my-8 px-4 flex flex-col items-center">

        {/* Desktop banner */}
        <a
          href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=127910&file_id=775"
          target="_blank"
          rel="noopener sponsored"
          className="hidden md:block w-full"
          style={{ maxWidth: "100%" }}
        >
          <img
            src="https://media.go2speed.org/brand/files/nordvpn/15/nordvpn-header2025-desktop.png"
            alt="NordVPN banner desktop"
            width={728}
            height={90}
            className="mx-auto rounded-lg shadow-xl my-4"
            style={{ maxWidth: "100%", height: "auto" }}
            border={0}
          />
        </a>
        {/* Desktop tracking pixel */}
        <img
          src="https://go.nordvpn.net/aff_i?offer_id=15&file_id=775&aff_id=127910"
          width={0}
          height={0}
          alt=""
          style={{ position: "absolute", visibility: "hidden" }}
          border={0}
          className="hidden md:block"
        />

        {/* Mobile banner */}
        <a
          href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=127910&file_id=776"
          target="_blank"
          rel="noopener sponsored"
          className="block md:hidden w-full"
          style={{ maxWidth: "100%" }}
        >
          <img
            src="https://media.go2speed.org/brand/files/nordvpn/15/nordvpn-header2025-mobile.png"
            alt="NordVPN banner mobile"
            width={320}
            height={167}
            className="mx-auto rounded-lg shadow-xl my-4 max-w-xs"
            style={{ maxWidth: "100%", height: "auto" }}
            border={0}
          />
        </a>
        {/* Mobile tracking pixel */}
        <img
          src="https://go.nordvpn.net/aff_i?offer_id=15&file_id=776&aff_id=127910"
          width={0}
          height={0}
          alt=""
          style={{ position: "absolute", visibility: "hidden" }}
          border={0}
          className="block md:hidden"
        />

        {/* Text under banner */}
        <div className="mt-2 text-gray-700 dark:text-gray-300 text-xs text-center">
          <span className="font-bold text-blue-700 dark:text-blue-300">NordVPN</span>
          <span> – Testvinnare 2025, 30 dagars garanti.</span>
        </div>
      </section>


      {/* COMPARETABLE */}
      <section id="top-vpn" className="overflow-x-auto max-w-4xl mx-auto my-16 px-2">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Topp 3 VPN-tjänster 2025</h2>
        <div className="overflow-x-auto rounded-xl shadow bg-white dark:bg-gray-800">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-100 dark:bg-gray-900">
              <tr>
                <th className="py-3 px-4 text-left align-middle text-gray-700 dark:text-gray-100">VPN</th>
                <th className="py-3 px-4 text-center align-middle text-gray-700 dark:text-gray-100">Pris/mån</th>
                <th className="py-3 px-4 text-center align-middle hidden sm:table-cell text-gray-700 dark:text-gray-100">Testa gratis</th>
                <th className="py-3 px-4 text-center align-middle hidden sm:table-cell text-gray-700 dark:text-gray-100">Streaming</th>
                <th className="py-3 px-4 text-center align-middle w-32 text-gray-700 dark:text-gray-100">Omdöme</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* EXEMPEL — byt ut till egna länkar och info! */}
              <tr className="">
                <td className="py-4 px-4 align-middle">
                  <div className="flex items-center gap-2">
                    <img src="/images/nordvpn.png" alt="NordVPN" className="w-8 h-8 rounded" />
                    <span className="font-semibold">NordVPN</span>
                    <span className="ml-2 text-yellow-700 px-2 py-0.5 rounded-lg text-xs font-semibold hidden md:inline">
                      🏆 Testvinnare
                    </span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">35 kr</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center py-3 px-4">
                  <span className="text-green-600 font-bold">4.9</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <div className="relative">
                    <span className="absolute -top-3 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-lg">
                      REKOMMENDERAD
                    </span>
                    <a
                      href="https://go.nordvpn.net/SH9uk"
                      target="_blank"
                      rel="noopener sponsored"
                      className="my-2 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl shadow-xl font-semibold"
                    >
                      Till erbjudandet
                    </a>
                    {/* <span className="text-xs block mt-1 text-blue-700">Endast NordVPN ger provision just nu</span> */}
                  </div>
                </td>
              </tr>
              {/* ProtonVPN */}
              <tr className="">
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/images/protonvpn.png" alt="ProtonVPN" className="w-8 h-8 rounded" />
                    <span className="font-semibold">ProtonVPN</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">34 kr</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center py-3 px-4">
                  <span className="text-green-600 font-bold">4.8</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <div className="relative">
                    <span className="absolute -top-3 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-lg">REKOMMENDERAD</span>
                    <a href="https://go.getproton.me/SH1kS"
                      target="_blank"
                      rel="noopener sponsored"
                      className="my-2 focus:ring-2 focus:ring-green-400 block w-full md:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-xl font-semibold">
                      Till erbjudandet
                    </a>
                  </div>
                </td>
              </tr>
              {/* Surfshark */}
              <tr className="opacity-50">
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/images/surfshark.png" alt="Surfshark" className="w-8 h-8 rounded" />
                    <span className="font-semibold">Surfshark</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">23 kr</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center py-3 px-4">
                  <span className="text-gray-400 font-bold">4.8</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <span className="block text-xs text-gray-400 mt-2">Ej tillgänglig för kampanj</span>
                </td>
              </tr>
              {/* ExpressVPN */}
              <tr className="opacity-50">
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/images/expressvpn.png" alt="ExpressVPN" className="w-8 h-8 rounded grayscale" />
                    <span className="font-semibold">ExpressVPN</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">39 kr</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center hidden sm:table-cell">✅</td>
                <td className="h-12 align-middle text-center py-3 px-4">
                  <span className="text-gray-400 font-bold">4.5</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <span className="block text-xs text-gray-400 mt-2">Ej tillgänglig för kampanj</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        { /* COMPARETABLE END */}

        <TopVPNAccordion />

        {/* Proton Long */}
        <section className="max-w-4xl mx-auto my-8 md:my-12 px-4 flex flex-col items-center">
          <a href="DIN-PROTONVPN-LÄNK" target="_blank" rel="noopener sponsored">
            <img
              src="/images/protonvpn-header2025-hsl-desktop.png"
              alt="ProtonVPN High Speed Swiss VPN"
              width={728}
              height={90}
              className="hidden md:block mx-auto rounded-lg shadow-xl"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            {/* Mobile */}
            <img
              src="/images/protonvpn-header2025-hsl-mobile.png"
              alt="ProtonVPN High Speed Swiss VPN"
              width={320}
              height={50}
              className="block md:hidden mx-auto rounded-lg shadow-xl max-w-xs"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
          <div className="mt-2 text-gray-700 text-xs">
            <span className="font-bold text-green-700">ProtonVPN</span> – Säkra servrar i Schweiz, höga hastigheter.
          </div>
        </section>

        {/* SHORT REVIEWS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-6">
          <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow text-gray-900 dark:text-gray-100">Bäst för streaming</h3>
            <p className="text-gray-700 dark:text-gray-300">NordVPN låser upp Netflix, HBO, Viaplay & fler. Blixtsnabba servrar i Norden.</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow text-gray-900 dark:text-gray-100">Mest prisvärd</h3>
            <p className="text-gray-700 dark:text-gray-300">Surfshark har lägsta priset och obegränsat antal enheter på samma konto.</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow text-gray-900 dark:text-gray-100">Bäst för nybörjare</h3>
            <p className="text-gray-700 dark:text-gray-300">ExpressVPN är superenkel att installera & använda – perfekt för dig som vill ha maximal enkelhet.</p>
          </div>
        </div>
      </section>

      {/* GUIDE & FAQ */}
      <section className="max-w-3xl mx-auto my-14 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* GUIDE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 text-shadow">
              Så fungerar en VPN
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              En VPN (Virtual Private Network) skyddar din data och identitet när du surfar, streamar eller shoppar online.
              All din trafik krypteras och du kan byta virtuell plats med ett klick. Perfekt för dig som värnar om privatliv eller vill komma åt innehåll som annars är blockerat i Sverige.
            </p>
            <ol className="space-y-2 list-decimal list-inside mb-4 text-gray-800 dark:text-gray-200">
              <li>Välj en VPN-tjänst från listan ovan</li>
              <li>Skapa konto och installera appen på dator/mobil</li>
              <li>Välj en server — och du är skyddad!</li>
            </ol>
            <div className="flex gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">Integritet</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">Streaming</span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs font-medium">Spar pengar</span>
            </div>
          </div>
          {/* FAQ */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 text-shadow">Vanliga frågor</h3>
            <div>
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-gray-800 dark:text-gray-100">Är VPN lagligt i Sverige?</summary>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Ja, VPN är helt lagligt. Det är ett verktyg för privatlivet online och används av miljontals svenskar.</p>
              </details>
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-gray-800 dark:text-gray-100">Fungerar VPN för streaming?</summary>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Ja! De rekommenderade tjänsterna fungerar för Netflix, Viaplay, HBO, TV4 Play och fler.</p>
              </details>
              <details className="mb-2">
                <summary className="cursor-pointer font-medium text-gray-800 dark:text-gray-100">Hur mycket kostar en VPN?</summary>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Priserna varierar — men genom vår guide kan du få VPN för under 25 kr/mån.</p>
              </details>
              <details>
                <summary className="cursor-pointer font-medium text-gray-800 dark:text-gray-100">Vad är skillnaden på gratis och betald VPN?</summary>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Gratis-VPN har ofta hastighetsbegränsningar, reklam och sämre säkerhet. Betalda VPN är snabbare, säkrare och har bättre support.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* AI-widget */}
      {/* <section className="max-w-2xl mx-auto my-12 px-4">
        <h2 className="text-lg font-bold mb-3 text-center">Ställ en fråga till AI-assistenten</h2>
        <OpenAIWidget />
      </section> */}

      {/* Social proof & trust */}
      <section className="max-w-2xl mx-auto my-12 md:my-16 px-4 text-center">
        <h2 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Vad säger andra om VPN?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-xl">
            <span className="block font-semibold mb-1 text-gray-900 dark:text-gray-100">“Enkel guide, tog 5 minuter att komma igång!”</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">— Anna, Stockholm</span>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-xl">
            <span className="block font-semibold mb-1 text-gray-900 dark:text-gray-100">“Nu kan jag streama allt jag vill utomlands.”</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">— Erik, Malmö</span>
          </div>
        </div>
      </section>



      {/* NordVPN affiliate banner */}
      <section className="max-w-4xl mx-auto my-8 md:my-12 px-4 flex flex-col items-center">
        <h2 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Så ser NordVPN ut</h2>
        <img src="/images/nordvpn-screenshot.png" alt="NordVPN app screenshot" className="mx-auto rounded-xl shadow mb-16" />
        <a href="https://affiliate-nordvpn-link" target="_blank" rel="noopener">
          <img src="/images/nordvpn-banner-728x90.png" alt="NordVPN banner" className="mx-auto" />
        </a>
      </section>

      {/* AFFILIATE DISCLAIMER */}
      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 py-6">
        Denna sida innehåller affiliatelänkar. Det kostar inget extra för dig, men hjälper oss driva sidan. Tack för ditt stöd!
      </footer>
    </main >
  );
}
