import React, { useState } from 'react';
import { EXPEDITION_PHOTOS, APP_ASSETS } from '../../data/mockData';
import { PortfolioItem } from '../../types';

interface ExpedicionesScreenProps {
  onNavigateToGear: () => void;
  onOpenRawInspection: (item: PortfolioItem) => void;
}

export const ExpedicionesScreen: React.FC<ExpedicionesScreenProps> = ({
  onNavigateToGear,
  onOpenRawInspection,
}) => {
  const [downloadToastVisible, setDownloadToastVisible] = useState(false);

  const handleDownloadPreset = () => {
    // Generate and trigger download of mock .xmp preset file
    const xmpContent = `
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"
      crs:PresetName="VELOCITA - Alta Cordillera RAW Pack"
      crs:Contrast2012="+22"
      crs:Highlights2012="-35"
      crs:Shadows2012="+28"
      crs:Whites2012="+14"
      crs:Blacks2012="-18"
      crs:Texture="+15"
      crs:Clarity2012="+10"
      crs:Dehaze="+8"
      crs:Vibrance="+12"
      crs:Saturation="-4"
      crs:ToneCurveName2012="Linear"
      crs:Sharpness="45"
      crs:ColorNoiseReduction="25">
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
    `.trim();

    const blob = new Blob([xmpContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'VELOCITA_ALTA_CORDILLERA_V2.xmp';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadToastVisible(true);
    setTimeout(() => {
      setDownloadToastVisible(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full text-[#e2e2e8]">
      {/* Banner Hero Visual */}
      <div className="relative w-full overflow-hidden bg-[#0c0e12]">
        <div
          className="w-full h-80 sm:h-96 bg-cover bg-center flex flex-col justify-between p-4 sm:p-6"
          style={{ backgroundImage: `url('${APP_ASSETS.expeditionHero}')` }}
          role="img"
          aria-label="Adventure touring dual-sport motorcycle caked in mud on an Andean high mountain pass"
        >
          {/* Telemetry Chip Overlay */}
          <div className="flex items-center justify-between z-10 max-w-4xl mx-auto w-full">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#333539]/90 backdrop-blur-md rounded text-[#ff5722] font-tech text-[10px] font-bold tracking-wider border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-ping"></span>
              EXP-04 // BITÁCORA VIVA
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#333539]/80 backdrop-blur-md rounded font-tech text-[11px] text-white font-bold border border-white/10">
              <span className="material-symbols-outlined text-[14px] text-[#ff5722]">
                gps_fixed
              </span>
              <span>31°18'S 70°24'W</span>
            </div>
          </div>

          {/* Scrim & Title Block */}
          <div className="z-10 mt-auto max-w-4xl mx-auto w-full">
            <div className="inline-block px-2 py-0.5 bg-[#ff5722] text-[#541200] font-tech text-[10px] font-bold uppercase tracking-widest rounded mb-1">
              Andes Australes
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl uppercase text-white tracking-tight leading-none drop-shadow-md font-bold">
              Ruta Alta Cordillera
            </h1>
            <p className="font-headline text-lg sm:text-2xl text-[#ffb5a0] uppercase tracking-wide mt-1">
              Paso de los Vientos
            </p>
          </div>

          {/* Darkening Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/50 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Telemetría & Métricas Rápidas Grid */}
      <div className="px-4 -mt-4 relative z-20 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-2 bg-[#1a1c20] p-2.5 sm:p-3 rounded-lg shadow-2xl border border-[#282a2e]">
          {/* Métrica 1 */}
          <div className="bg-[#1e2024] p-2.5 sm:p-3 rounded flex flex-col justify-between border border-[#282a2e]">
            <div className="flex items-center justify-between text-[#ab8980]">
              <span className="font-tech text-[10px] uppercase font-bold">Altitud Máxima</span>
              <span className="material-symbols-outlined text-[16px] text-[#ff5722]">
                terrain
              </span>
            </div>
            <div className="mt-1">
              <div className="font-headline text-2xl sm:text-3xl text-white leading-none font-bold">
                4.120
              </div>
              <span className="font-tech text-[11px] text-[#ffb5a0] font-bold">MSNM</span>
            </div>
          </div>

          {/* Métrica 2 */}
          <div className="bg-[#1e2024] p-2.5 sm:p-3 rounded flex flex-col justify-between border border-[#282a2e]">
            <div className="flex items-center justify-between text-[#ab8980]">
              <span className="font-tech text-[10px] uppercase font-bold">Distancia Total</span>
              <span className="material-symbols-outlined text-[16px] text-[#ff5722]">
                route
              </span>
            </div>
            <div className="mt-1">
              <div className="font-headline text-2xl sm:text-3xl text-white leading-none font-bold">
                1.840
              </div>
              <span className="font-tech text-[11px] text-[#ffb5a0] font-bold">
                KM RECORRIDOS
              </span>
            </div>
          </div>

          {/* Métrica 3 */}
          <div className="bg-[#1e2024] p-2.5 sm:p-3 rounded flex flex-col justify-between border border-[#282a2e]">
            <div className="flex items-center justify-between text-[#ab8980]">
              <span className="font-tech text-[10px] uppercase font-bold">Clima & Viento</span>
              <span className="material-symbols-outlined text-[16px] text-[#ff5722]">
                air
              </span>
            </div>
            <div className="mt-1">
              <div className="font-headline text-2xl sm:text-3xl text-white leading-none font-bold">
                4°C
              </div>
              <span className="font-tech text-[10px] sm:text-[11px] text-[#b9c8de]">
                VIENTO CRUZADO 62 KM/H
              </span>
            </div>
          </div>

          {/* Métrica 4 */}
          <div className="bg-[#1e2024] p-2.5 sm:p-3 rounded flex flex-col justify-between border border-[#282a2e]">
            <div className="flex items-center justify-between text-[#ab8980]">
              <span className="font-tech text-[10px] uppercase font-bold">Escuadrón Moto</span>
              <span className="material-symbols-outlined text-[16px] text-[#ff5722]">
                two_wheeler
              </span>
            </div>
            <div className="mt-1">
              <div className="font-tech text-[11px] sm:text-[12px] text-white font-bold truncate">
                2x BMW GS 1250
              </div>
              <span className="font-tech text-[10px] text-[#ffb5a0] block truncate">
                1x HONDA AFRICA TWIN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fotógrafo & Especificaciones de Cámara */}
      <div className="px-4 mt-6 max-w-4xl mx-auto w-full">
        <div className="bg-[#282a2e] border border-[#333539] rounded-lg p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ff5722] text-[20px]">
                lens
              </span>
              <h2 className="font-headline text-lg sm:text-xl text-white uppercase tracking-wide font-bold">
                Óptica & Cargas Técnicas
              </h2>
            </div>
            <span className="font-tech text-[10px] text-[#e4beb4] bg-[#1e2024] px-2 py-0.5 rounded font-bold">
              EXIF RIG
            </span>
          </div>

          {/* Kit Fotográfico Horizontal Cards */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between bg-[#1a1c20] p-2.5 rounded border border-[#333539]/40">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="material-symbols-outlined text-[#b9c8de] text-[22px] shrink-0">
                  camera
                </span>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm font-semibold text-white truncate">
                    Cuerpo Principal
                  </p>
                  <p className="font-tech text-[11px] text-[#ab8980] truncate">
                    Sony Alpha 1 // Sensor Full Frame 50MP
                  </p>
                </div>
              </div>
              <span className="font-tech text-[10px] text-[#ff5722] bg-[#333539] px-2 py-0.5 rounded font-bold shrink-0 ml-2">
                RIG A
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#1a1c20] p-2.5 rounded border border-[#333539]/40">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="material-symbols-outlined text-[#b9c8de] text-[22px] shrink-0">
                  photo_camera
                </span>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm font-semibold text-white truncate">
                    Lentes Primarios
                  </p>
                  <p className="font-tech text-[11px] text-[#ab8980] truncate">
                    FE 24-70mm f/2.8 GM II & 70-200mm f/2.8 OSS
                  </p>
                </div>
              </div>
              <span className="font-tech text-[10px] text-[#b9c8de] bg-[#333539] px-2 py-0.5 rounded font-bold shrink-0 ml-2">
                OPTICS
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#1a1c20] p-2.5 rounded border border-[#333539]/40">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="material-symbols-outlined text-[#b9c8de] text-[22px] shrink-0">
                  flight
                </span>
                <div className="min-w-0">
                  <p className="font-body text-xs sm:text-sm font-semibold text-white truncate">
                    Aéreo & Filtros
                  </p>
                  <p className="font-tech text-[11px] text-[#ab8980] truncate">
                    DJI Mavic 3 Cine + PolarPro Circular CPL / ND32
                  </p>
                </div>
              </div>
              <span className="font-tech text-[10px] text-[#b9c8de] bg-[#333539] px-2 py-0.5 rounded font-bold shrink-0 ml-2">
                AERO
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Galería Secuencial de la Travesía */}
      <div className="px-4 mt-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#ff5722] text-[20px]">
              photo_library
            </span>
            <h2 className="font-headline text-lg sm:text-xl text-white uppercase tracking-wide font-bold">
              Secuencia Fotográfica
            </h2>
          </div>
          <span className="font-tech text-[11px] text-[#ab8980] font-bold">
            4 REGISTROS
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {EXPEDITION_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="bg-[#1a1c20] border border-[#282a2e] rounded-lg overflow-hidden shadow-md flex flex-col group"
            >
              <div
                className="relative w-full h-56 sm:h-72 bg-[#0c0e12] overflow-hidden cursor-pointer"
                onClick={() =>
                  onOpenRawInspection({
                    id: `exp-${index}`,
                    category: 'motos',
                    title: photo.title,
                    subtitle: photo.step,
                    cameraRig: 'SONY ALPHA 1 // GM II',
                    badge: 'EXPEDICIÓN',
                    location: 'ANDES AUSTRALES // PASO DE LOS VIENTOS',
                    rpmOrSpeed: photo.time,
                    specs: [
                      { label: 'HORA', value: photo.time },
                      { label: 'PASO', value: photo.step },
                    ],
                    exif: photo.exif,
                    imageUrl: photo.imageUrl,
                    altText: photo.altText,
                    detailedExif: {
                      camera: 'Sony Alpha 1 (ILCE-1)',
                      lens: 'Sony FE G-Master Series',
                      shutter: photo.exif.split('•')[2]?.trim() || '1/2000s',
                      aperture: photo.exif.split('•')[1]?.trim() || 'ƒ/2.8',
                      iso: photo.exif.split('•')[3]?.trim() || 'ISO 100',
                      colorSpace: 'AdobeRGB (1998)',
                      bitDepth: '14-Bit Compressed RAW',
                      histogram: 'R 30% • G 32% • B 38%',
                      focalLength: photo.exif.split('•')[0]?.trim() || '24mm',
                    },
                  })
                }
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={photo.imageUrl}
                  alt={photo.altText}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <div className="absolute bottom-2 left-2 bg-[#0c0e12]/85 backdrop-blur-md px-2 py-0.5 rounded flex items-center gap-1.5 font-tech text-[10px] text-white border border-white/10">
                  <span>{photo.exif}</span>
                </div>

                <div className="absolute top-2 right-2 bg-[#0c0e12]/80 backdrop-blur-md px-2 py-0.5 rounded font-tech text-[10px] text-[#ff5722] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[13px]">fullscreen</span>
                  <span>Ver RAW</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech text-[10px] text-[#ff5722] uppercase font-bold">
                    {photo.step}
                  </span>
                  <span className="font-tech text-[11px] text-[#ab8980]">
                    {photo.time}
                  </span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl text-white uppercase tracking-tight font-bold">
                  {photo.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#e4beb4] mt-1 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bitácora & Notas del Fotógrafo */}
      <div className="px-4 mt-6 max-w-4xl mx-auto w-full">
        <div className="bg-[#1e2024] border border-[#282a2e] p-4 sm:p-5 rounded-lg shadow-md relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="material-symbols-outlined text-[#ff5722] text-[20px]">
              edit_note
            </span>
            <h2 className="font-headline text-lg sm:text-xl text-white uppercase tracking-wide font-bold">
              Notas de Campo del Fotógrafo
            </h2>
          </div>

          {/* Quote Accent Block */}
          <div className="bg-[#1a1c20] p-3 rounded mb-3 border-l-2 border-[#ff5722]">
            <p className="font-body text-xs sm:text-sm text-[#e2e2e8] italic leading-relaxed">
              “A más de 4.000 metros, las baterías de litio pierden un 35% de rendimiento por el frío extremo. Cada ráfaga de viento cruzado amenaza con voltear el trípode y el polvo de arcilla se infiltra en los anillos de enfoque si no se sella el equipo religiosamente.”
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-body text-xs sm:text-sm text-[#ff5722] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">thermostat</span>
                Gestión Térmica de Ópticas
              </h4>
              <p className="font-body text-xs text-[#e4beb4] mt-0.5 leading-relaxed">
                Evitar guardar la cámara caliente dentro del bolso impermeable de inmediato; el choque térmico con el aire exterior a 4°C empaña los elementos internos al instante. Usar calentadores químicos en los bolsillos laterales de las maletas de aluminio.
              </p>
            </div>

            <div>
              <h4 className="font-body text-xs sm:text-sm text-[#ff5722] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">speed</span>
                Sincronización en Marcha
              </h4>
              <p className="font-body text-xs text-[#e4beb4] mt-0.5 leading-relaxed">
                Para las tomas en movimiento continuo utilizamos comunicación intercom Sena integrada en los cascos para calcular puntos de frenado precisos sin detener la marcha del convoy.
              </p>
            </div>
          </div>

          {/* Certificación Homologada Badge */}
          <div className="mt-4 pt-3 border-t border-[#282a2e] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#ff5722] rounded-sm"></div>
              <div>
                <div className="font-tech text-[10px] uppercase text-white font-bold">
                  VELOCITA RAW EXPEDITION LOG
                </div>
                <div className="font-tech text-[10px] text-[#ab8980]">
                  VERIFICADO GPS TRACKER // 2024
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#b9c8de] text-[24px]">
              verified
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Action CTAs */}
      <div className="px-4 mt-6 mb-8 max-w-4xl mx-auto w-full flex flex-col gap-3">
        {/* CTA Primario: Descargar Preset */}
        <button
          onClick={handleDownloadPreset}
          className="w-full flex items-center justify-between p-4 bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] rounded shadow-lg active:scale-[0.98] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px]">tune</span>
            <div className="text-left">
              <div className="font-headline text-lg sm:text-xl uppercase tracking-wide leading-none font-bold">
                Descargar Preset Lightroom
              </div>
              <div className="font-tech text-[10px] text-[#541200]/90 tracking-wider mt-1 font-extrabold">
                ALTA CORDILLERA RAW PACK (.XMP)
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined text-[24px]">download</span>
        </button>

        {/* Feedback Toast Notification */}
        {downloadToastVisible && (
          <div className="bg-[#333539] border border-[#ff5722] p-3 rounded flex items-center justify-between text-white animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ff5722] text-[18px]">
                check_circle
              </span>
              <span className="font-tech text-xs font-bold">
                PRESET V2.4 ENLAZADO AL PERFIL
              </span>
            </div>
            <span className="font-tech text-[10px] text-[#b9c8de] bg-[#0c0e12] px-2 py-0.5 rounded">
              DESCARGADO
            </span>
          </div>
        )}

        {/* CTA Secundario: Explorar Equipamiento */}
        <button
          onClick={onNavigateToGear}
          className="w-full flex items-center justify-between p-4 bg-[#282a2e] hover:bg-[#333539] text-white rounded shadow-md border border-[#333539] active:bg-[#37393e] transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ff5722] text-[24px]">
              shield
            </span>
            <div className="text-left">
              <div className="font-headline text-lg sm:text-xl uppercase tracking-wide leading-none font-bold">
                Explorar Equipamiento Usado
              </div>
              <div className="font-tech text-[10px] text-[#ab8980] tracking-wider mt-1">
                CHAQUETAS, GUANTES & MALETAS TÉCNICAS
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined text-[20px] text-[#ff5722]">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
