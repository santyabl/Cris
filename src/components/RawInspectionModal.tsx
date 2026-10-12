import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { APP_ASSETS } from '../data/mockData';

interface RawInspectionModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RawInspectionModal: React.FC<RawInspectionModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [colorSpace, setColorSpace] = useState<'AdobeRGB' | 'ProPhoto' | 'DCI-P3'>('AdobeRGB');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [requestedLicense, setRequestedLicense] = useState<boolean>(false);
  const [activeChannel, setActiveChannel] = useState<'RGB' | 'R' | 'G' | 'B'>('RGB');

  if (!isOpen) return null;

  const currentImage = item?.imageUrl || APP_ASSETS.modalRawDefault;
  const currentTitle = item?.title || 'FOTOGRAFÍA AUTOMOTRIZ RAW';
  const detailed = item?.detailedExif || {
    camera: 'Sony Alpha 1 // 50MP Full Frame',
    lens: 'FE 24-70mm f/2.8 GM II',
    shutter: '1/2000s',
    aperture: 'ƒ/2.0',
    iso: 'ISO 100',
    colorSpace: 'AdobeRGB (1998)',
    bitDepth: '14-Bit Uncompressed RAW',
    histogram: 'R 24% • G 30% • B 46%',
    focalLength: '50mm',
  };

  const handleRequestLicense = () => {
    setRequestedLicense(true);
    setTimeout(() => {
      setRequestedLicense(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0e12]/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      {/* Modal Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#282a2e]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ff5722] text-[20px]">
            visibility
          </span>
          <span className="font-tech text-[11px] sm:text-[12px] text-[#e2e2e8] uppercase tracking-wider font-bold">
            TELEMETRÍA RAW • MODERADOR DE CAPTURA
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="w-10 h-10 flex items-center justify-center rounded bg-[#333539] hover:bg-[#ff5722] text-[#e2e2e8] hover:text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Main Viewfinder Screen */}
      <div className="relative w-full my-auto py-2 flex flex-col items-center">
        <div className="relative w-full max-w-2xl h-[320px] sm:h-[400px] bg-[#1a1c20] rounded overflow-hidden flex items-center justify-center border border-[#333539]/60 shadow-2xl">
          {/* Main Photo with Zoom Transform */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 select-none"
            style={{
              backgroundImage: `url('${currentImage}')`,
              transform: `scale(${zoomLevel})`,
              filter:
                activeChannel === 'R'
                  ? 'sepia(1) hue-rotate(-50deg) saturate(3)'
                  : activeChannel === 'G'
                  ? 'sepia(1) hue-rotate(60deg) saturate(2)'
                  : activeChannel === 'B'
                  ? 'sepia(1) hue-rotate(180deg) saturate(3)'
                  : 'none',
            }}
          />

          {/* Corner Viewfinder Reticles */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#ff5722] pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#ff5722] pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#ff5722] pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#ff5722] pointer-events-none"></div>

          {/* Focus Crosshair Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="material-symbols-outlined text-white/30 text-[36px]">
              filter_center_focus
            </span>
          </div>

          {/* Top Live Sensor Telemetry Badge */}
          <div className="absolute top-3 left-8 flex items-center gap-1.5 px-2 py-0.5 bg-[#0c0e12]/85 backdrop-blur-md rounded border border-[#333539] text-[#e2e2e8] font-tech text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-ping"></span>
            <span>RAW SENSOR 1:1 BUFFER</span>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#0c0e12]/80 backdrop-blur-md px-2 py-1 rounded border border-[#333539]">
            <button
              onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
              className="text-[#e2e2e8] hover:text-[#ff5722] px-1 font-tech text-[13px]"
              title="Reducir zoom"
            >
              -
            </button>
            <span className="font-tech text-[10px] text-[#ffb5a0] px-1">
              {(zoomLevel * 100).toFixed(0)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="text-[#e2e2e8] hover:text-[#ff5722] px-1 font-tech text-[13px]"
              title="Aumentar zoom"
            >
              +
            </button>
          </div>
        </div>

        {/* Channel Selector */}
        <div className="flex items-center gap-2 mt-3 font-tech text-[11px]">
          <span className="text-[#ab8980]">CANAL:</span>
          {(['RGB', 'R', 'G', 'B'] as const).map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeChannel === ch
                  ? 'bg-[#ff5722] text-white font-bold'
                  : 'bg-[#1e2024] text-[#a7b6cc] hover:text-white'
              }`}
            >
              {ch}
            </button>
          ))}
          <span className="text-[#ab8980] ml-3">ESPACIO:</span>
          {(['AdobeRGB', 'ProPhoto', 'DCI-P3'] as const).map((cs) => (
            <button
              key={cs}
              onClick={() => setColorSpace(cs)}
              className={`px-2 py-0.5 rounded transition-colors ${
                colorSpace === cs
                  ? 'bg-[#333539] text-[#ffb5a0] font-bold border border-[#ff5722]'
                  : 'bg-[#1e2024] text-[#a7b6cc] hover:text-white'
              }`}
            >
              {cs}
            </button>
          ))}
        </div>
      </div>

      {/* Modal Metadata Inspection Readouts */}
      <div className="max-w-2xl mx-auto w-full p-3 sm:p-4 bg-[#1e2024] border border-[#282a2e] rounded flex flex-col gap-2.5">
        <div className="flex justify-between items-center text-[#e2e2e8]">
          <div className="flex items-center gap-2 truncate">
            <span className="font-tech text-[12px] sm:text-[13px] font-bold text-white truncate">
              {currentTitle}
            </span>
          </div>
          <span className="font-tech text-[11px] text-[#ff5722] font-bold shrink-0 ml-2">
            {detailed.bitDepth}
          </span>
        </div>

        {/* Detailed Sensor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[#e4beb4] font-tech text-[11px]">
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e]">
            <span className="text-[#ab8980] block text-[9px]">CÁMARA</span>
            <span className="truncate block font-bold text-white">{detailed.camera}</span>
          </div>
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e]">
            <span className="text-[#ab8980] block text-[9px]">ÓPTICA</span>
            <span className="truncate block font-bold text-white">{detailed.lens}</span>
          </div>
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e]">
            <span className="text-[#ab8980] block text-[9px]">EXPOSICIÓN</span>
            <span className="block font-bold text-[#ff5722]">
              {detailed.shutter} • {detailed.aperture}
            </span>
          </div>
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e]">
            <span className="text-[#ab8980] block text-[9px]">SENSIBILIDAD</span>
            <span className="block font-bold text-white">{detailed.iso}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#a7b6cc] font-tech text-[11px]">
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e] flex items-center justify-between">
            <span>ESPACIO COLOR:</span>
            <span className="text-white font-bold">{colorSpace} // 16-BIT PIPE</span>
          </div>
          <div className="p-2 bg-[#0c0e12] rounded border border-[#282a2e] flex items-center justify-between">
            <span>HISTOGRAMA:</span>
            <span className="text-[#ff5722] font-bold">{detailed.histogram}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleRequestLicense}
          className={`w-full py-3 px-4 uppercase font-tech text-[12px] font-bold tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-2 ${
            requestedLicense
              ? 'bg-emerald-600 text-white'
              : 'bg-[#333539] hover:bg-[#ff5722] text-[#e2e2e8] hover:text-white'
          }`}
        >
          {requestedLicense ? (
            <>
              <span className="material-symbols-outlined text-[18px]">done</span>
              <span>SOLICITUD REGISTRADA ✓ // COBERTURA COMERCIAL ENVIADA</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Solicitar Licencia de Uso Comercial</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
