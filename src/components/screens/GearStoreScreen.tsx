import React, { useState } from 'react';
import { GEAR_PRODUCTS } from '../../data/mockData';
import { GearProduct, PortfolioItem } from '../../types';

interface GearStoreScreenProps {
  onPreorder: (product: GearProduct) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onOpenRawInspection: (item: PortfolioItem) => void;
}

export const GearStoreScreen: React.FC<GearStoreScreenProps> = ({
  onPreorder,
  bookmarks,
  onToggleBookmark,
  onOpenRawInspection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'todos' | 'cascos' | 'chaquetas' | 'guantes' | 'botas' | 'monturas'
  >('todos');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories: {
    id: 'todos' | 'cascos' | 'chaquetas' | 'guantes' | 'botas' | 'monturas';
    label: string;
    count?: string;
  }[] = [
    { id: 'todos', label: 'Todos', count: '05' },
    { id: 'cascos', label: 'Cascos' },
    { id: 'chaquetas', label: 'Chaquetas & Airbags' },
    { id: 'guantes', label: 'Guantes' },
    { id: 'botas', label: 'Botas Adventure' },
    { id: 'monturas', label: 'Monturas Cámara' },
  ];

  const filteredProducts = GEAR_PRODUCTS.filter((prod) => {
    if (selectedCategory === 'todos') return true;
    return prod.category === selectedCategory;
  });

  const handleQuickNotify = (product: GearProduct) => {
    onPreorder(product);
    setToastMessage(`Pre-orden registrada para ${product.name}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-4 max-w-4xl mx-auto text-[#e2e2e8] pt-2">
      {/* Status Banner / Telemetry Notice */}
      <div className="flex items-center justify-between p-2.5 sm:p-3 bg-[#282a2e] border border-[#333539] rounded-lg text-white">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5722] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5722]"></span>
          </span>
          <span className="font-tech text-[10px] sm:text-[11px] text-[#ffb5a0] uppercase tracking-wider truncate font-bold">
            EARLY ACCESS // PRE-ORDEN DISPONIBLE
          </span>
        </div>
        <span className="font-tech text-[11px] text-[#ab8980] shrink-0 ml-2 font-bold">
          LOG: #GEAR-2025
        </span>
      </div>

      {/* Editorial Section Header */}
      <section className="flex flex-col space-y-1">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-3 bg-[#ff5722] inline-block"></span>
          <span className="font-tech text-[11px] uppercase tracking-widest text-[#ff5722] font-bold">
            VELOCITA TECH-LAB
          </span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-white font-bold leading-none">
          GEAR & PROTECCIÓN
        </h1>
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span className="font-tech text-[10px] px-2 py-0.5 bg-[#333539] text-[#d4e4fa] uppercase font-bold rounded">
            Curaduría Técnica
          </span>
          <span className="font-tech text-[10px] px-2 py-0.5 bg-[#333539] text-[#ab8980] uppercase font-bold rounded">
            Homologación FIM / CE
          </span>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#b9c8de] pt-1 leading-relaxed">
          Los accesorios que testeamos a límite en asfalto y ruta abierta. Diseñados para resistir el impacto, fotografiados con precisión quirúrgica de estudio.
        </p>
      </section>

      {/* Interactive Category Selector (Horizontal Scroll) */}
      <div className="flex gap-2 overflow-x-auto py-1 no-scrollbar -mx-4 px-4">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded font-headline text-xs sm:text-sm uppercase font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#ff5722] text-[#541200] shadow'
                  : 'bg-[#282a2e] text-[#b9c8de] hover:bg-[#37393e]'
              }`}
            >
              {cat.label} {cat.count ? `(${cat.count})` : ''}
            </button>
          );
        })}
      </div>

      {/* Product Catalog Grid */}
      <div className="flex flex-col space-y-6">
        {filteredProducts.map((product) => {
          const isBookmarked = bookmarks.includes(product.id);
          return (
            <article
              key={product.id}
              className="flex flex-col bg-[#1e2024] border border-[#282a2e] rounded-lg overflow-hidden shadow-lg group hover:border-[#ff5722]/50 transition-colors"
            >
              {/* Product Media Image with HUD */}
              <div className="relative w-full aspect-[4/3] sm:h-80 bg-[#0c0e12] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={product.imageUrl}
                  alt={product.altText}
                  referrerPolicy="no-referrer"
                />

                {/* Tech HUD Overlays */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                  <span className="font-tech text-[10px] bg-[#0c0e12]/90 backdrop-blur-md text-[#ff5722] px-2 py-0.5 rounded shadow font-bold border border-white/10">
                    {product.certifications.join(' // ')}
                  </span>
                  <span className="font-tech text-[10px] bg-[#282a2e]/90 backdrop-blur-md text-[#d4e4fa] px-1.5 py-0.5 rounded font-bold border border-white/10">
                    {product.impactGrade}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5">
                  <span className="font-tech text-[10px] bg-[#0c0e12]/85 text-white px-2 py-0.5 rounded flex items-center gap-1 font-bold border border-white/10">
                    <span className="material-symbols-outlined text-[13px] text-[#ffb5a0]">
                      verified
                    </span>
                    {product.testedDistance}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5">
                  <button
                    onClick={() => onToggleBookmark(product.id)}
                    aria-label="Guardar en favoritos"
                    className={`w-8 h-8 rounded bg-[#0c0e12]/80 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer ${
                      isBookmarked
                        ? 'text-[#ff5722] bg-[#282a2e]'
                        : 'text-white hover:text-[#ff5722]'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isBookmarked ? 'material-symbols-filled' : ''
                      }`}
                    >
                      {isBookmarked ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Specs & Details */}
              <div className="p-4 flex flex-col space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
                      {product.ref}
                    </span>
                    <h2 className="font-headline text-xl sm:text-2xl uppercase text-white truncate font-bold">
                      {product.name}
                    </h2>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-tech text-[10px] text-[#ab8980]">ESTIMADO</span>
                    <span className="font-headline text-xl sm:text-2xl text-[#ff5722] font-bold">
                      ${product.priceUsd}{' '}
                      <span className="font-tech text-[10px] text-[#b9c8de]">USD</span>
                    </span>
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#b9c8de] leading-relaxed">
                  {product.description}
                </p>

                {/* Technical Telemetry Matrix */}
                <div className="grid grid-cols-3 gap-1.5 py-1 bg-[#1a1c20] p-2.5 rounded border border-[#282a2e]">
                  {product.specs.map((sp, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-tech text-[9px] text-[#ab8980] uppercase">
                        {sp.label}
                      </span>
                      <span className="font-tech text-[11px] sm:text-[12px] text-white font-bold truncate">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleQuickNotify(product)}
                    className="flex-1 py-2.5 sm:py-3 bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] font-headline text-sm sm:text-base uppercase flex items-center justify-center gap-1.5 rounded font-bold shadow transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      notifications_active
                    </span>
                    <span>Reservar / Notificarme</span>
                  </button>

                  <button
                    onClick={() =>
                      onOpenRawInspection({
                        id: product.id,
                        category: 'gear',
                        title: product.name,
                        subtitle: `${product.ref} • ${product.impactGrade}`,
                        cameraRig: 'FUJIFILM GFX 100 II // MACRO',
                        badge: 'ESTUDIO TÉCNICO',
                        location: 'LABORATORIO DE IMPACTO VELOCITA',
                        rpmOrSpeed: `$${product.priceUsd} USD`,
                        specs: product.specs,
                        exif: 'ESTUDIO: 3-LIGHT STROBE',
                        imageUrl: product.imageUrl,
                        altText: product.altText,
                        detailedExif: {
                          camera: 'Fujifilm GFX 100 II // 102MP Medium Format',
                          lens: 'GF 120mm f/4 Macro R LM OIS WR',
                          shutter: '1/125s (Sync)',
                          aperture: 'ƒ/11.0',
                          iso: 'ISO 80',
                          colorSpace: 'AdobeRGB (1998)',
                          bitDepth: '16-Bit RAW',
                          histogram: 'R 25% • G 30% • B 45%',
                          focalLength: '120.0 mm',
                        },
                      })
                    }
                    className="px-3 py-2.5 sm:py-3 bg-[#282a2e] hover:bg-[#333539] text-white rounded flex items-center justify-center transition-colors cursor-pointer border border-[#333539]"
                    title="Inspección Fotográfica de Estudio"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#ff5722]">
                      photo_library
                    </span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Trust & Certification Telemetry Footer Module */}
      <section className="p-4 bg-[#1a1c20] border border-[#282a2e] rounded-lg space-y-2 mt-4">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#ff5722] text-[20px]">
            shield_with_heart
          </span>
          <h3 className="font-headline text-lg uppercase text-white font-bold">
            PROTOCOLO DE CERTIFICACIÓN VELOCITA
          </h3>
        </div>
        <p className="font-body text-xs sm:text-sm text-[#b9c8de] leading-relaxed">
          No vendemos ni recomendamos equipo que no haya resistido caídas reales, climas extremos y rodajes de más de 5.000 kilómetros. Cada pieza en este showcase cuenta con homologación de competición internacional.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 font-tech text-[10px] sm:text-[11px]">
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#1e2024] rounded text-white border border-[#282a2e]">
            <span className="text-[#ff5722] font-bold">✓</span> CE EN 17092
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#1e2024] rounded text-white border border-[#282a2e]">
            <span className="text-[#ff5722] font-bold">✓</span> FIM RACING
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#1e2024] rounded text-white border border-[#282a2e]">
            <span className="text-[#ff5722] font-bold">✓</span> D3O LABS CERTIFIED
          </div>
        </div>
      </section>

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-11/12 max-w-sm p-3 bg-[#333539] border border-[#ff5722] text-white rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom duration-200">
          <span className="material-symbols-outlined text-[#ff5722] text-[24px]">
            verified
          </span>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-headline text-sm uppercase font-bold text-white">
              Pre-orden Registrada
            </span>
            <span className="font-body text-[11px] text-[#b9c8de] truncate">
              {toastMessage}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
