'use client';

import { useState } from "react";

const vpnList = [
  {
    name: "NordVPN",
    img: "/images/nordvpn.png",
    price: "Från 35 kr",
    freeTrial: "✅",
    streaming: "✅",
    rating: "4.9",
    ratingColor: "text-green-600",
    offerUrl: "https://go.nordvpn.net/SH9uk",
    offerLabel: "Till erbjudandet",
    winner: true,
  },
  {
    name: "ProtonVPN",
    img: "/images/protonvpn.png",
    price: "Från 34 kr",
    freeTrial: "✅",
    streaming: "✅",
    rating: "4.8",
    ratingColor: "text-green-600",
    offerUrl: "https://go.nordvpn.net/SH9uk",
    offerLabel: "Till erbjudandet",
    winner: false,
  },];

export default function TopVPNAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  return (

    <div className="w-full max-w-2xl mx-auto md:hidden">

      {vpnList.map((vpn, idx) => (
        <div
          key={vpn.name}
          className="bg-white dark:bg-gray-900 rounded-xl shadow my-3 overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left"
            onClick={() => setOpenIdx(idx === openIdx ? null : idx)}
          >
            <div className="flex items-center gap-3">
              <img src={vpn.img} alt={vpn.name} className="w-8 h-8 rounded" />
              <span className="font-semibold">{vpn.name}</span>
              {vpn.winner && (
                <span className="ml-2 text-yellow-700 px-2 py-0.5 rounded-lg text-xs font-semibold">
                  🏆 Testvinnare
                </span>
              )}
            </div>
            <span className={`${vpn.ratingColor} font-bold`}>
              {vpn.rating} <span className="text-gray-400 dark:text-gray-100">★</span>
            </span>
          </button>
          {openIdx === idx && (
            <div className="px-4 pb-4 pt-2 text-sm">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-1">
                <span className={`${vpn.ratingColor} font-bold text-lg`}>4.2</span>
                <span className="text-gray-500 dark:text-gray-100">Trustpilot</span>
              </div>
              <div className="flex gap-2 mb-5">
                <img src="/images/trustpilot-four-stars.png" alt="Trustpilot" className="h-5" />
              </div>
              <ul className="flex gap-1 flex-wrap mb-2">
                {vpn.name === "NordVPN" && (
                  <>
                    <li className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                      Bäst i test
                      </li>
                    <li className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                      Snabbaste servrar
                      </li>
                  </>
                )}
                {vpn.name === "ProtonVPN" && (
                  <li className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                    Schweizisk integritet
                    </li>
                )}
              </ul>
              <div className="mb-1 dark:text-gray-100">Pris/mån: <b>{vpn.price}</b></div>
              <div className="mb-1 dark:text-gray-100">Testa gratis: {vpn.freeTrial}</div>
              <div className="mb-1 dark:text-gray-100">Streaming: {vpn.streaming}</div>
              <a
                href={vpn.offerUrl}
                target="_blank"
                rel="noopener"
                className="block mt-3 bg-blue-600 hover:bg-blue-800 text-white text-center px-4 py-2 rounded-xl font-semibold shadow transition"
              >
                {vpn.offerLabel}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


