import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, APP_ASSETS } from '../../data/mockData';
import { PortfolioItem } from '../../types';

interface PortafolioScreenProps {
  onOpenRawInspection: (item: PortfolioItem) => void;
  onNavigateToExpeditions: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const PortafolioScreen: React.FC<PortafolioScreenProps> = ({
  onOpenRawInspection,
  onNavigateToExpeditions,
  favorites,
  onToggleFavorite,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'motos' | 'supercars' | 'gear'>('all');

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full text-[#e2e2e8]">
      {/* Hero Section Editorial */}
      <section className="relative w-full bg-[#0c0e12] overflow-hidden">
        <div className="relative w-full h-[380px]">
          {/* Visual Backing with High-Speed Imagery */}
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url('${APP_ASSETS.heroHome}')` }}
            role="img"
            aria-label="Editorial motorsport photography of a customized scrambler motorbike tearing through a desert highway at twilight"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/60 to-transparent"></div>

          {/* Viewfinder Overlay Accents */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-[#282a2e]/90 backdrop-blur-md rounded border border-[#333539]/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-ping"></span>
            <span className="font-tech text-[10px] text-[#ff5722] tracking-wider font-bold">
              REC // TELEMETRY ACTIVE
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-[#0c0e12]/85 backdrop-blur-md rounded border border-[#333539]/50">
            <span className="material-symbols-outlined text-[#ff5722] text-[14px]">
              shutter_speed
            </span>
            <span className="font-tech text-[11px] text-[#e2e2e8] font-bold">
              1/2500s • ISO 100
            </span>
          </div>

          {/* Hero Typography Cluster */}
          <div className="absolute bottom-4 left-0 right-0 px-4 sm:px-6 flex flex-col gap-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 bg-[#ff5722] text-[#541200] font-tech text-[10px] tracking-widest uppercase font-bold rounded">
                MOTOR & LIFESTYLE STUDIO
              </span>
              <span className="font-tech text-[11px] text-[#ab8980]">
                LOC: 33.4489° S, 70.6693° W
              </span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl uppercase tracking-wide text-white font-bold leading-tight">
              Historias a toda velocidad & aventura sobre dos ruedas
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#e4beb4] max-w-lg">
              Fotografía automotriz, expediciones en motocicleta y catálogo de equipamiento técnico.
            </p>
          </div>
        </div>
      </section>

      {/* Live Stats Strip */}
      <section className="w-full bg-[#1a1c20] border-y border-[#282a2e] px-4 py-3">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2">
          <div className="flex flex-col">
            <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
              EXPEDICIONES
            </span>
            <span className="font-headline text-xl sm:text-2xl text-white font-semibold">
              14 <span className="text-[#ff5722] text-sm">RUTAS</span>
            </span>
          </div>
          <div className="flex flex-col border-x border-[#282a2e] px-2 sm:px-4">
            <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
              DISPAROS RAW
            </span>
            <span className="font-headline text-xl sm:text-2xl text-white font-semibold">
              48.2K <span className="text-[#ff5722] text-sm">FTS</span>
            </span>
          </div>
          <div className="flex flex-col text-right sm:text-left">
            <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
              ESTADO TRACK
            </span>
            <span className="font-headline text-xl sm:text-2xl text-[#ff5722] font-semibold">
              ACTIVO
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="w-full px-4 py-4 bg-[#111317]">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ff5722] text-[18px]">
                tune
              </span>
              <span className="font-tech text-[12px] uppercase tracking-wider text-[#e2e2e8] font-bold">
                FILTRAR ARCHIVOS
              </span>
            </div>
            <span className="font-tech text-[10px] text-[#ab8980]">
              {filteredItems.length} ACTIVOS
            </span>
          </div>

          {/* Scrollable Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#ff5722] text-[#541200] shadow-sm'
                  : 'bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e]'
              }`}
            >
              <span>Todos</span>
              <span
                className={`font-tech text-[10px] px-1.5 py-0.5 rounded ${
                  activeFilter === 'all' ? 'bg-[#541200]/20' : 'bg-[#0c0e12] text-[#e4beb4]'
                }`}
              >
                48
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('motos')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'motos'
                  ? 'bg-[#ff5722] text-[#541200] shadow-sm'
                  : 'bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e]'
              }`}
            >
              <span>Motos & Rutas</span>
              <span
                className={`font-tech text-[10px] px-1.5 py-0.5 rounded ${
                  activeFilter === 'motos' ? 'bg-[#541200]/20' : 'bg-[#0c0e12] text-[#e4beb4]'
                }`}
              >
                22
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('supercars')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'supercars'
                  ? 'bg-[#ff5722] text-[#541200] shadow-sm'
                  : 'bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e]'
              }`}
            >
              <span>Supercars & Clásicos</span>
              <span
                className={`font-tech text-[10px] px-1.5 py-0.5 rounded ${
                  activeFilter === 'supercars' ? 'bg-[#541200]/20' : 'bg-[#0c0e12] text-[#e4beb4]'
                }`}
              >
                16
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('gear')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'gear'
                  ? 'bg-[#ff5722] text-[#541200] shadow-sm'
                  : 'bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e]'
              }`}
            >
              <span>Equipamiento & Gear</span>
              <span
                className={`font-tech text-[10px] px-1.5 py-0.5 rounded ${
                  activeFilter === 'gear' ? 'bg-[#541200]/20' : 'bg-[#0c0e12] text-[#e4beb4]'
                }`}
              >
                10
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Photo Stream Mosaic */}
      <section className="w-full px-4 flex flex-col gap-5 py-2 max-w-4xl mx-auto">
        {filteredItems.map((item) => {
          const isFavorited = favorites.includes(item.id);
          return (
            <article
              key={item.id}
              className="group relative flex flex-col bg-[#1a1c20] border border-[#282a2e] overflow-hidden rounded shadow-md hover:border-[#ff5722]/50 transition-colors"
            >
              {/* Photo Container */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-[#0c0e12]">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  role="img"
                  aria-label={item.altText}
                />
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c20] via-transparent to-black/50"></div>

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-[#333539]/90 text-white backdrop-blur-md rounded font-tech text-[10px] font-bold border border-white/10">
                    {item.cameraRig}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 bg-[#ff5722] text-[#541200] rounded font-tech text-[10px] font-extrabold shadow">
                    {item.badge}
                  </span>
                </div>

                {/* In-image Bottom Telemetry */}
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[#e2e2e8]">
                  <div className="flex items-center gap-1 truncate mr-2">
                    <span className="material-symbols-outlined text-[14px] text-[#ff5722] shrink-0">
                      near_me
                    </span>
                    <span className="font-tech text-[11px] text-white truncate font-bold">
                      {item.location}
                    </span>
                  </div>
                  <span className="font-tech text-[10px] text-[#e4beb4] shrink-0 font-bold bg-[#0c0e12]/60 px-1.5 py-0.5 rounded">
                    {item.rpmOrSpeed}
                  </span>
                </div>
              </div>

              {/* Card Data Box */}
              <div className="p-3.5 sm:p-4 flex flex-col gap-2.5">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col">
                    <h2 className="font-headline text-xl sm:text-2xl uppercase text-white font-semibold leading-snug">
                      {item.title}
                    </h2>
                    <span className="font-body text-xs sm:text-sm text-[#e4beb4]">
                      {item.subtitle}
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleFavorite(item.id)}
                    aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    className={`flex items-center justify-center w-9 h-9 bg-[#282a2e] rounded transition-colors cursor-pointer ${
                      isFavorited
                        ? 'text-[#ff5722] bg-[#333539]'
                        : 'text-[#e2e2e8] hover:text-[#ff5722]'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        isFavorited ? 'material-symbols-filled' : ''
                      }`}
                    >
                      {isFavorited ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>
                </div>

                {/* Metadata Attributes */}
                <div className="flex items-center gap-2 flex-wrap">
                  {item.specs.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#1e2024] text-[#e4beb4] font-tech text-[10px] rounded border border-[#282a2e]"
                    >
                      {spec.label}: {spec.value}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-1 flex items-center justify-between">
                  <button
                    onClick={() => onOpenRawInspection(item)}
                    className="flex items-center gap-2 px-3 py-2 bg-[#282a2e] hover:bg-[#37393e] text-white rounded font-body text-xs font-semibold tracking-wider transition-colors cursor-pointer border border-[#333539]"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#ff5722]">
                      fullscreen
                    </span>
                    <span>Inspección RAW</span>
                  </button>
                  <span className="font-tech text-[11px] text-[#ab8980]">
                    {item.exif}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Technical Expedition Radar Section */}
      <section className="w-full px-4 py-6 max-w-4xl mx-auto">
        <div className="relative w-full bg-[#1e2024] border border-[#282a2e] overflow-hidden rounded p-5 flex flex-col gap-4 shadow-xl">
          {/* Ambient Glow Behind CTA */}
          <div className="absolute -right-8 -top-8 w-48 h-48 bg-[#ff5722]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]"></span>
              <span className="font-tech text-[10px] sm:text-[11px] text-[#ff5722] uppercase tracking-wider font-bold">
                PRÓXIMA MISIÓN EDITORIAL
              </span>
            </div>
            <span className="font-tech text-[11px] px-2 py-0.5 bg-[#333539] text-white rounded font-bold">
              ENERO 2025
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="font-headline text-2xl sm:text-3xl uppercase text-white font-bold leading-tight">
              Patagonia Austral 2025: Carretera Austral & Tierra del Fuego
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#e4beb4] max-w-2xl leading-relaxed">
              3,400 km de ruta off-road documentando convoyes de aventura, climatología extrema y fotografía nocturna en latitudes subpolares.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="p-2.5 bg-[#0c0e12] rounded border border-[#282a2e] flex flex-col">
              <span className="font-tech text-[10px] text-[#ab8980]">DISTANCIA</span>
              <span className="font-tech text-[12px] sm:text-[13px] text-white font-bold">
                3,400 KM
              </span>
            </div>
            <div className="p-2.5 bg-[#0c0e12] rounded border border-[#282a2e] flex flex-col">
              <span className="font-tech text-[10px] text-[#ab8980]">CUPOS PILOTO</span>
              <span className="font-tech text-[12px] sm:text-[13px] text-[#ff5722] font-bold">
                4 DISP.
              </span>
            </div>
            <div className="p-2.5 bg-[#0c0e12] rounded border border-[#282a2e] flex flex-col">
              <span className="font-tech text-[10px] text-[#ab8980]">EQUIPO</span>
              <span className="font-tech text-[12px] sm:text-[13px] text-white font-bold">
                4X4 + SATELLITE
              </span>
            </div>
          </div>

          {/* CTA Button Ignition Style */}
          <button
            onClick={onNavigateToExpeditions}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] font-headline text-lg sm:text-xl uppercase tracking-wider rounded font-bold transition-all shadow-lg shadow-[#ff5722]/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">explore</span>
            <span>Ver Bitácora Completa</span>
          </button>
        </div>
      </section>
    </div>
  );
};
