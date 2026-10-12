import React from 'react';
import { APP_ASSETS } from '../data/mockData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0e12]/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-lg w-full bg-[#1e2024] border border-[#282a2e] rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col">
        {/* Header Banner */}
        <div className="relative h-28 bg-[#1a1c20] p-4 flex items-start justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ff5722] text-[#541200] font-tech text-[10px] font-bold rounded">
            DIRECTOR DE FOTOGRAFÍA // EXPEDITION LEAD
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#333539] hover:bg-[#ff5722] text-[#e2e2e8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Profile Details */}
        <div className="px-5 pb-5 -mt-10 flex flex-col">
          <div className="flex items-end justify-between mb-3">
            <div className="relative">
              <img
                src={APP_ASSETS.profile}
                alt="Santiago Banquet"
                className="w-20 h-20 rounded-full border-4 border-[#1e2024] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#1e2024]"></span>
            </div>
            <div className="flex items-center gap-1 text-[#ff5722] font-tech text-[11px] font-bold px-2.5 py-1 bg-[#282a2e] rounded border border-[#ff5722]/30">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              <span>SLOTS ABIERTOS 2025</span>
            </div>
          </div>

          <h2 className="font-headline text-2xl uppercase tracking-wide text-white">
            Santiago Banquet
          </h2>
          <span className="font-tech text-[12px] text-[#ffb5a0] tracking-wider mb-2">
            Automotive & High-Altitude Motorcycle Documentarist
          </span>

          <p className="font-body text-sm text-[#a7b6cc] leading-relaxed mb-4">
            Especializado en captura editorial de vehículos en movimiento continuo, expediciones off-road extremas por la Cordillera de los Andes y campañas técnicas de equipamiento para marcas de competición.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 py-2 mb-4 bg-[#1a1c20] p-3 rounded border border-[#282a2e]">
            <div className="flex flex-col text-center">
              <span className="font-headline text-lg text-[#ff5722] font-bold">14+</span>
              <span className="font-tech text-[9px] text-[#ab8980] uppercase">Países Cubiertos</span>
            </div>
            <div className="flex flex-col text-center border-x border-[#282a2e]">
              <span className="font-headline text-lg text-white font-bold">4.800m</span>
              <span className="font-tech text-[9px] text-[#ab8980] uppercase">Récord Altura</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-headline text-lg text-[#ffb5a0] font-bold">8 Años</span>
              <span className="font-tech text-[9px] text-[#ab8980] uppercase">Expedición Moto</span>
            </div>
          </div>

          {/* Camera Bag Setup */}
          <div className="mb-4">
            <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider block mb-1.5">
              MALETA TÉCNICA PRINCIPAL (PELICAN 1510)
            </span>
            <ul className="text-xs text-[#e2e2e8] space-y-1 font-tech">
              <li className="flex items-center gap-1.5">
                <span className="text-[#ff5722]">•</span> Sony Alpha 1 & FX3 Cinema Line
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#ff5722]">•</span> FE 24-70mm GM II + 70-200mm GM OSS
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#ff5722]">•</span> DJI Mavic 3 Cine ProRes + FPV Avata 2
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#ff5722]">•</span> Sena Mesh Intercom Helmet Comms Sync
              </li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToBooking();
              }}
              className="flex-1 py-3 px-4 bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] font-headline text-base font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#ff5722]/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Solicitar Fecha / Booking</span>
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 bg-[#282a2e] hover:bg-[#333539] text-white font-tech text-[12px] uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ff5722]">chat</span>
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
