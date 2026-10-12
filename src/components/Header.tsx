import React from 'react';
import { APP_ASSETS } from '../data/mockData';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  onOpenProfile: () => void;
  onNavigateHome: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenProfile,
  onNavigateHome,
  favoritesCount,
}) => {
  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'portafolio':
        return 'Portafolio';
      case 'expediciones':
        return 'Expediciones';
      case 'gear-store':
        return 'Gear Store';
      case 'servicios':
        return 'Servicios';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-safe bg-[#111317]/90 backdrop-blur-xl border-b border-[#1e2024]/80 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Brand Lockup */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left group transition-opacity hover:opacity-90"
        >
          <img
            alt="Velocita Studio Logo"
            className="h-8 w-auto object-contain filter drop-shadow"
            src={APP_ASSETS.logo}
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline text-2xl font-bold uppercase tracking-wide text-[#e2e2e8] group-hover:text-white transition-colors">
                VELOCITA
              </span>
              <span className="font-tech text-[10px] font-bold text-[#ff5722] px-1.5 py-0.5 bg-[#282a2e] rounded leading-none">
                RAW
              </span>
            </div>
            <span className="font-tech text-[10px] text-[#ab8980] tracking-wider hidden sm:inline leading-none mt-0.5">
              {getTabLabel(activeTab)}
            </span>
          </div>
        </button>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Telemetry Availability Pill */}
          <div className="hidden xs:flex items-center gap-1.5 px-3 py-1 bg-[#282a2e] rounded-full border border-[#333539]/60">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse"></span>
            <span className="font-tech text-[10px] font-bold uppercase tracking-wider text-[#e4beb4]">
              Available for Booking
            </span>
          </div>

          {/* Favorites Counter if any */}
          {favoritesCount > 0 && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-[#282a2e] rounded text-[#ff5722] font-tech text-[11px] border border-[#ff5722]/30">
              <span className="material-symbols-outlined text-[14px]">favorite</span>
              <span>{favoritesCount}</span>
            </div>
          )}

          {/* Profile Button */}
          <button
            onClick={onOpenProfile}
            title="Perfil de Fotógrafo"
            className="relative flex items-center justify-center p-0.5 rounded-full bg-[#333539] hover:ring-2 hover:ring-[#ff5722] transition-all cursor-pointer"
          >
            <img
              alt="Santiago Banquet - Lead Photographer"
              className="w-8 h-8 rounded-full object-cover border border-[#111317]"
              src={APP_ASSETS.profile}
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#111317]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
