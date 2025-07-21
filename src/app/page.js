import OpenAIWidget from "@/components/OpenAIWidget";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen text-gray-800">
      {/* HERO */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skydda din integritet online
        </h1>
        <p className="mb-6 text-lg">
          Jämför de bästa VPN-tjänsterna i Sverige — snabbt, säkert & anonymt.
        </p>
        <ul className="flex flex-col md:flex-row gap-3 mb-8 justify-center items-center">
          <li className="bg-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Anonymt & säkert</li>
          <li className="bg-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Streama utan begränsningar</li>
          <li className="bg-white px-6 py-2 rounded-lg shadow text-sm whitespace-nowrap">Spara pengar på streaming</li>
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
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
          <span>SSL-krypterad</span>
          <span>Uppdaterad: Juli 2025</span>
          <span>4.9/5 Trustpilot</span>
        </div>
      </section>

      {/* JÄMFÖRELSETABELL */}
      <section id="top-vpn" className="max-w-4xl mx-auto my-12 px-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Topp 3 VPN-tjänster 2025</h2>
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">VPN</th>
                <th className="py-3 px-4">Pris/mån</th>
                <th className="py-3 px-4">Testa gratis</th>
                <th className="py-3 px-4">Streaming</th>
                <th className="py-3 px-4">Omdöme</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* EXEMPEL — byt ut till egna länkar och info! */}
              <tr className="border-b">
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/nordvpn.png" alt="NordVPN" className="w-8 h-8 rounded" />
                    <span className="font-semibold">NordVPN</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">39 kr</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td>
                  <span className="text-green-600 font-bold">4.9</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <a
                    href="https://affiliate-nordvpn-link"
                    target="_blank"
                    rel="noopener"
                    //className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                    className="my-2 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                  >
                     Till erbjudandet
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/surfshark.png" alt="Surfshark" className="w-8 h-8 rounded" />
                    <span className="font-semibold">Surfshark</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">24 kr</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td>
                  <span className="text-green-600 font-bold">4.8</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <a
                    href="https://affiliate-surfshark-link"
                    target="_blank"
                    rel="noopener"
                    //className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                    className="my-2 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                  >
                    Till erbjudandet
                  </a>
                </td>
              </tr>
              <tr>
                <td className="gap-3 py-3 px-4 align-middle">
                  <div className="flex items-center gap-3">
                    <img src="/expressvpn.png" alt="ExpressVPN" className="w-8 h-8 rounded" />
                    <span className="font-semibold">ExpressVPN</span>
                  </div>
                </td>
                <td className="h-12 align-middle text-center">59 kr</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td className="h-12 align-middle text-center">✅</td>
                <td>
                  <span className="text-green-600 font-bold">4.7</span> / 5
                  <span className="ml-1">★</span>
                </td>
                <td>
                  <a
                    href="https://affiliate-expressvpn-link"
                    target="_blank"
                    rel="noopener"
                    //className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                    className="my-2 focus:ring-2 focus:ring-blue-400 block w-full md:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow font-semibold"
                  >
                    Till erbjudandet
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Korta recensionsrutor */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow">Bäst för streaming</h3>
            <p className="text-gray-700">NordVPN låser upp Netflix, HBO, Viaplay & fler. Blixtsnabba servrar i Norden.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow">Mest prisvärd</h3>
            <p className="text-gray-700">Surfshark har lägsta priset och obegränsat antal enheter på samma konto.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-1 text-shadow">Bäst för nybörjare</h3>
            <p className="text-gray-700">ExpressVPN är superenkel att installera & använda – perfekt för dig som vill ha maximal enkelhet.</p>
          </div>
        </div>
      </section>

      {/* GUIDE & FAQ */}
      <section className="max-w-3xl mx-auto my-14 px-4">
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* GUIDE */}
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3 text-gray-900 text-shadow">
        Så fungerar en VPN
      </h2> 
      <p className="mb-4 text-gray-700">
        En VPN (Virtual Private Network) skyddar din data och identitet när du surfar, streamar eller shoppar online.
        All din trafik krypteras och du kan byta virtuell plats med ett klick. Perfekt för dig som värnar om privatliv eller vill komma åt innehåll som annars är blockerat i Sverige.
      </p>
      <ol className="space-y-2 list-decimal list-inside mb-4 text-gray-800">
        <li>Välj en VPN-tjänst från listan ovan</li>
        <li>Skapa konto och installera appen på dator/mobil</li>
        <li>Välj en server — och du är skyddad!</li>
      </ol>
      <div className="flex gap-2">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Integritet</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Streaming</span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Spar pengar</span>
      </div>
    </div>
    {/* FAQ */}
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-3 text-blgray-900 text-shadow">Vanliga frågor</h3>
      <div>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Är VPN lagligt i Sverige?</summary>
          <p className="mt-1 text-gray-700">Ja, VPN är helt lagligt. Det är ett verktyg för privatlivet online och används av miljontals svenskar.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Fungerar VPN för streaming?</summary>
          <p className="mt-1 text-gray-700">Ja! De rekommenderade tjänsterna fungerar för Netflix, Viaplay, HBO, TV4 Play och fler.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer font-medium">Hur mycket kostar en VPN?</summary>
          <p className="mt-1 text-gray-700">Priserna varierar — men genom vår guide kan du få VPN för under 25 kr/mån.</p>
        </details>
        <details>
          <summary className="cursor-pointer font-medium">Vad är skillnaden på gratis och betald VPN?</summary>
          <p className="mt-1 text-gray-700">Gratis-VPN har ofta hastighetsbegränsningar, reklam och sämre säkerhet. Betalda VPN är snabbare, säkrare och har bättre support.</p>
        </details>
      </div>
    </div>
  </div>
</section>

      {/* AI-widget */}
      <section className="max-w-2xl mx-auto my-12 px-4">
        <h2 className="text-lg font-bold mb-3 text-center">Ställ en fråga till AI-assistenten</h2>
        <OpenAIWidget />
      </section>

      {/* Social proof & trust */}
      <section className="max-w-2xl mx-auto my-10 px-4 text-center">
        <h2 className="font-bold text-lg mb-3">Vad säger andra om VPN?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-gray-700">
          <div className="bg-white shadow p-4 rounded-xl">
            <span className="block font-semibold mb-1">“Enkel guide, tog 5 minuter att komma igång!”</span>
            <span className="text-xs text-gray-400">— Anna, Stockholm</span>
          </div>
          <div className="bg-white shadow p-4 rounded-xl">
            <span className="block font-semibold mb-1">“Nu kan jag streama allt jag vill utomlands.”</span>
            <span className="text-xs text-gray-400">— Erik, Malmö</span>
          </div>
        </div>
      </section>

      {/* AFFILIATE DISCLAIMER */}
      <footer className="text-center text-xs text-gray-500 py-6">
        Denna sida innehåller affiliatelänkar. Det kostar inget extra för dig, men hjälper oss driva sidan. Tack för ditt stöd!
      </footer>
    </main>
  );
}
