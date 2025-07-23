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
    rating: "4.9",
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
          className="bg-white rounded-xl shadow my-3 overflow-hidden"
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
              {vpn.rating} <span className="text-gray-400">★</span>
            </span>
          </button>
          {openIdx === idx && (
            <div className="px-4 pb-4 pt-2 text-sm">
              <div className="mb-1">Pris/mån: <b>{vpn.price}</b></div>
              <div className="mb-1">Testa gratis: {vpn.freeTrial}</div>
              <div className="mb-1">Streaming: {vpn.streaming}</div>
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


