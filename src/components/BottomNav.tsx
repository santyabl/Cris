import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  bookmarksCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  bookmarksCount,
}) => {
  const tabs: { id: TabType; label: string; icon: string; hasBadge?: boolean }[] = [
    { id: 'portafolio', label: 'Portafolio', icon: 'grid_view' },
    { id: 'expediciones', label: 'Expediciones', icon: 'explore' },
    { id: 'gear-store', label: 'Gear Store', icon: 'shield', hasBadge: true },
    { id: 'servicios', label: 'Servicios', icon: 'photo_camera' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-[#111317]/95 backdrop-blur-2xl border-t border-[#1e2024] shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-4xl mx-auto flex justify-around items-center h-16 px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onChangeTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center min-w-[64px] min-h-[44px] py-1 transition-colors group cursor-pointer ${
                isActive ? 'text-[#ff5722]' : 'text-[#a7b6cc] hover:text-[#e2e2e8]'
              }`}
            >
              {tab.hasBadge && (
                <span className="absolute top-0 right-2 px-1 bg-[#ff5722] text-[#541200] font-tech text-[9px] font-extrabold rounded-sm leading-none py-0.5 tracking-tight shadow">
                  SHOP
                </span>
              )}
              <span
                className={`material-symbols-outlined text-[23px] transition-transform group-hover:scale-110 ${
                  isActive ? 'scale-105' : ''
                }`}
              >
                {tab.icon}
              </span>
              <span className="font-tech text-[11px] uppercase tracking-wider mt-0.5 font-bold">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-[2px] bg-[#ff5722] rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
