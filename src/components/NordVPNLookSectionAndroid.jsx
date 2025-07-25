'use client';
import { useState } from "react";

const screenshots = [
  {
    src: "/images/nordvpn-look/android-not-connected-us.png",
    alt: "NordVPN inte ansluten – Android",
    caption: "Ej ansluten – välj land och klicka Quick Connect.",
  },
  {
    src: "/images/nordvpn-look/android-connected-us.png",
    alt: "NordVPN ansluten – Android",
    caption: "Ansluten till VPN (USA) – du surfar säkert.",
  },
  {
    src: "/images/nordvpn-look/android-meshnet-us.png",
    alt: "NordVPN Meshnet – Android",
    caption: "Meshnet – koppla ihop enheter, dela filer och surfa privat.",
  },
  {
    src: "/images/nordvpn-look/android-settings-us.png",
    alt: "NordVPN inställningar – Android",
    caption: "Inställningar – Kill Switch, Split Tunneling m.m.",
  },
  {
    src: "/images/nordvpn-look/android-specialty-servers-us.png",
    alt: "NordVPN specialservrar – Android",
    caption: "Specialservrar: P2P, Onion Over VPN, Obfuscated m.m.",
  },
];

export default function NordVPNLookSectionAndroid() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Så ser NordVPN ut på <span className="text-green-700">Android</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((img, i) => (
          <div key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-2 flex flex-col items-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:scale-105 transition"
            onClick={() => setModalImg(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="rounded shadow max-h-56 md:max-h-60 w-auto object-contain"
              loading="lazy"
            />
            <span className="text-xs text-gray-700 dark:text-gray-300 mt-2 text-center">{img.caption}</span>
          </div>
        ))}
      </div>
      {/* Modal */}
      {modalImg !== null && screenshots[modalImg] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #233554 80%, #344365 100%)", // Modern blå-grå bakgrund
            backgroundColor: "rgba(30, 41, 59, 0.98)", // Fallback för mörkblå
            // Byt till t.ex. "rgba(255,255,255,0.98)" för ljus halvgenomskinlig
          }}
          onClick={() => setModalImg(null)}
        >
          {/* Prev */}
          <button
            onClick={e => {
              e.stopPropagation();
              setModalImg(modalImg === 0 ? screenshots.length - 1 : modalImg - 1);
            }}
            className="fixed left-2 top-1/2 -translate-y-1/2 z-50
    flex items-center justify-center w-14 h-14 md:w-20 md:h-20
    text-4xl text-white bg-black/60 hover:bg-black/80 rounded-full
    focus:outline-none shadow-lg transition"
            aria-label="Föregående"
            style={{ border: "none" }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M22 28L14 18L22 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={e => {
              e.stopPropagation();
              setModalImg(modalImg === screenshots.length - 1 ? 0 : modalImg + 1);
            }}
            className="fixed right-2 top-1/2 -translate-y-1/2 z-50
    flex items-center justify-center w-14 h-14 md:w-20 md:h-20
    text-4xl text-white bg-black/60 hover:bg-black/80 rounded-full
    focus:outline-none shadow-lg transition"
            aria-label="Nästa"
            style={{ border: "none" }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M14 8L22 18L14 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Main image & close */}
          <div className="relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-white text-3xl z-50 font-bold px-3 py-1 bg-black/60 rounded-full hover:bg-black/80 transition"
              aria-label="Stäng"
            >
              &times;
            </button>
            <img
              src={screenshots[modalImg].src}
              alt={screenshots[modalImg].alt}
              className="max-w-[95vw] max-h-[85vh] rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="mt-3 text-white text-center text-sm">{screenshots[modalImg].caption}</div>
            <div className="mt-2 text-gray-300 text-xs">{modalImg + 1} / {screenshots.length}</div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
        Fler guider för <span className="font-bold text-blue-700">iPhone, Mac</span> och <span className="font-bold text-blue-700">Smart TV</span> kommer snart!
      </div>
    </section>
  );
}
