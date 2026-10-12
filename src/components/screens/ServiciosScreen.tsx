import React, { useState } from 'react';
import { SERVICE_PACKAGES } from '../../data/mockData';

export const ServiciosScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('equipamiento');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [projectDate, setProjectDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectPackage = (serviceKey: string) => {
    setSelectedService(serviceKey);
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formEl = document.getElementById('booking-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setProjectDate('');
    setMessage('');
  };

  return (
    <div className="flex flex-col w-full text-[#e2e2e8]">
      {/* Status & Production Ticker */}
      <div className="px-4 pt-3 pb-1 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between bg-[#1a1c20] border border-[#282a2e] px-3 sm:px-4 py-2 rounded">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping"></span>
            <span className="font-tech text-[10px] sm:text-[11px] text-white uppercase tracking-widest font-bold">
              TEMPORADA 2025 // SLOTS ACTIVOS
            </span>
          </div>
          <span className="font-tech text-[11px] text-[#ff5722] uppercase font-bold">
            ESTUDIO & RUTA
          </span>
        </div>
      </div>

      {/* Editorial Section Header */}
      <section className="px-4 py-4 flex flex-col gap-1 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
            UNIDAD DE OPERACIONES
          </span>
          <span className="text-[#ab8980] text-sm">•</span>
          <span className="font-tech text-[10px] text-[#ffb690] uppercase tracking-wider font-bold">
            VELOCITA PRODUCTION
          </span>
        </div>
        <h2 className="font-headline text-2xl sm:text-4xl uppercase text-white tracking-tight leading-tight font-bold">
          PRODUCCIÓN FOTOGRÁFICA & AUDIOVISUAL PARA EL MUNDO MOTOR
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#e4beb4] mt-1 leading-relaxed">
          Campañas comerciales de accesorios, rodajes de vehículos, cobertura de expediciones y eventos de motor con estética cinematográfica y precisión técnica.
        </p>
      </section>

      {/* Live Telemetry KPI Metrics */}
      <section className="px-4 py-1 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-3 gap-2 bg-[#1a1c20] border border-[#282a2e] p-2.5 rounded">
          <div className="flex flex-col items-center text-center p-2 bg-[#1e2024] rounded border border-[#282a2e]">
            <span className="font-headline text-2xl sm:text-3xl text-[#ff5722] leading-none font-bold">
              +120
            </span>
            <span className="font-tech text-[9px] sm:text-[10px] text-[#a7b6cc] uppercase mt-1 font-bold">
              PROYECTOS OK
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-2 bg-[#1e2024] rounded border border-[#282a2e]">
            <span className="font-headline text-2xl sm:text-3xl text-[#ffb690] leading-none font-bold">
              14
            </span>
            <span className="font-tech text-[9px] sm:text-[10px] text-[#a7b6cc] uppercase mt-1 font-bold">
              PAÍSES RUTA
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-2 bg-[#1e2024] rounded border border-[#282a2e]">
            <span className="font-headline text-2xl sm:text-3xl text-white leading-none font-bold">
              100%
            </span>
            <span className="font-tech text-[9px] sm:text-[10px] text-[#a7b6cc] uppercase mt-1 font-bold">
              RAW EXIF
            </span>
          </div>
        </div>
      </section>

      {/* Trusted Brands Ticker / Grid */}
      <section className="px-4 pt-4 pb-2 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="font-tech text-[10px] text-[#ab8980] uppercase tracking-wider font-bold">
            MARCAS DESTACADAS QUE CONFÍAN EN NOSOTROS
          </span>
          <span className="material-symbols-outlined text-[#ab8980] text-[16px]">
            verified
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['DUCATI', "REV'IT", 'SHOEI', 'PORSCHE'].map((brand) => (
            <div
              key={brand}
              className="bg-[#282a2e] border border-[#333539] py-2 px-2 sm:px-4 flex items-center justify-center rounded"
            >
              <span className="font-headline text-sm sm:text-base tracking-widest text-[#e2e2e8] font-bold">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages Showcase */}
      <section className="px-4 py-4 flex flex-col gap-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <span className="font-headline text-lg sm:text-xl uppercase text-white tracking-wide font-bold">
            PAQUETES DISPONIBLES
          </span>
          <span className="font-tech text-[11px] text-[#ff5722] uppercase font-bold">
            TARIFAS A MEDIDA
          </span>
        </div>

        {/* 3 Packages */}
        {SERVICE_PACKAGES.map((pkg) => (
          <article
            key={pkg.id}
            className="bg-[#1e2024] border border-[#282a2e] flex flex-col rounded overflow-hidden shadow-xl group hover:border-[#ff5722]/50 transition-colors"
          >
            {/* Package Cover Image */}
            <div className="relative w-full h-48 sm:h-64 bg-cover bg-center overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${pkg.imageUrl}')` }}
                role="img"
                aria-label={pkg.altText}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2024] via-[#1e2024]/40 to-transparent"></div>

              <div className="absolute top-3 left-3 flex gap-1.5 items-center flex-wrap">
                <span className="bg-[#0c0e12]/90 backdrop-blur-md px-2 py-0.5 rounded font-tech text-[10px] text-[#ff5722] uppercase font-bold border border-white/10">
                  {pkg.mode}
                </span>
              </div>

              <div className="absolute bottom-2 right-3 font-tech text-[11px] text-white/90 bg-[#0c0e12]/70 px-2 py-0.5 rounded border border-white/10 font-bold">
                {pkg.cameraSpecs}
              </div>
            </div>

            {/* Package Details */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-headline text-lg sm:text-2xl uppercase text-white leading-snug font-bold">
                  {pkg.title}
                </h3>
                <span className="font-tech text-[10px] px-2 py-0.5 bg-[#ff5722]/20 text-[#ff5722] rounded shrink-0 font-bold border border-[#ff5722]/30">
                  {pkg.badge}
                </span>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#e4beb4] leading-relaxed">
                {pkg.description}
              </p>

              {/* Spec Sheet List */}
              <div className="flex flex-col gap-1.5 pt-1">
                {pkg.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2 bg-[#1a1c20] p-2 rounded border border-[#282a2e]"
                  >
                    <span className="material-symbols-outlined text-[#ff5722] text-[18px] shrink-0 mt-0.5">
                      {fIdx === 0 ? 'check_circle' : fIdx === 1 ? 'schedule' : 'layers'}
                    </span>
                    <span className="font-body text-xs text-white leading-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSelectPackage(pkg.valueKey)}
                className={`mt-1 w-full py-3 px-4 rounded font-body text-xs sm:text-sm font-bold uppercase flex items-center justify-between transition-colors cursor-pointer ${
                  pkg.badgeType === 'expedicion'
                    ? 'bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] shadow-lg shadow-[#ff5722]/20'
                    : 'bg-[#282a2e] hover:bg-[#37393e] text-white border border-[#333539]'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Instant WhatsApp Direct Channel */}
      <section className="px-4 py-2 max-w-4xl mx-auto w-full">
        <div className="bg-[#282a2e] border border-[#333539] p-4 rounded flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded bg-[#0c0e12] flex items-center justify-center shrink-0 border border-[#333539]">
              <span className="material-symbols-outlined text-[#ff5722] text-[28px]">
                chat
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-tech text-[10px] text-[#ff5722] uppercase font-bold">
                CONSULTA INMEDIATA
              </span>
              <span className="font-body text-sm font-bold text-white truncate">
                ¿Tienes una fecha urgente?
              </span>
              <span className="font-body text-xs text-[#a7b6cc] truncate">
                Chat en vivo con el director de fotografía
              </span>
            </div>
          </div>
          <a
            className="shrink-0 bg-[#37393e] hover:bg-[#ff5722] hover:text-[#541200] text-white px-3 sm:px-4 py-2 rounded font-tech text-xs uppercase font-bold flex items-center gap-1.5 transition-colors border border-white/10"
            href="https://wa.me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>WHATSAPP</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>
      </section>

      {/* Booking & Direct Inquiry Form */}
      <section
        className="px-4 py-4 flex flex-col gap-3 max-w-4xl mx-auto w-full"
        id="booking-form"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#ff5722] rounded-full"></span>
            <span className="font-tech text-[10px] text-[#ab8980] uppercase font-bold">
              TELEMETRÍA DE CONTACTO
            </span>
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl uppercase text-white tracking-tight font-bold">
            SOLICITAR COTIZACIÓN & FECHA
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#e4beb4]">
            Cuéntanos sobre tu vehículo, marca o ruta prevista. Respondemos con desglose técnico y cotización en menos de 24 horas.
          </p>
        </div>

        {isSubmitted ? (
          <div
            className="bg-[#282a2e] border border-[#ff5722] p-6 rounded flex flex-col items-center text-center gap-3 animate-in fade-in"
            id="booking-success"
          >
            <div className="w-14 h-14 rounded-full bg-[#ff5722] flex items-center justify-center text-[#541200] shadow-lg shadow-[#ff5722]/30">
              <span className="material-symbols-outlined text-[32px]">done_all</span>
            </div>
            <h4 className="font-headline text-xl uppercase text-white font-bold">
              ¡SOLICITUD ENVIADA CON ÉXITO!
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#e4beb4] max-w-md leading-relaxed">
              Hemos registrado tu proyecto en nuestra bitácora de producción con folio <strong className="text-white">#VEL-2025-Q{Math.floor(Math.random() * 899 + 100)}</strong>. Te enviaremos la disponibilidad y ficha técnica a <strong className="text-white">{email || 'tu correo'}</strong> en menos de 24 horas hábiles.
            </p>
            <button
              onClick={handleResetForm}
              className="mt-2 bg-[#1e2024] hover:bg-[#333539] px-4 py-2 rounded font-tech text-xs text-[#ff5722] uppercase font-bold border border-[#ff5722]/40 transition-colors cursor-pointer"
            >
              ENVIAR OTRA CONSULTA
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-[#1e2024] border border-[#282a2e] p-4 sm:p-5 rounded shadow-xl"
          >
            {/* Full Name Field */}
            <div className="flex flex-col gap-1">
              <label
                className="font-tech text-[11px] text-[#e2e2e8] uppercase flex justify-between font-bold"
                htmlFor="full-name"
              >
                <span>01 // NOMBRE COMPLETO</span>
                <span className="text-[#ff5722]">*</span>
              </label>
              <input
                className="w-full bg-[#0c0e12] border border-[#282a2e] text-white placeholder:text-[#ab8980] px-3.5 py-2.5 rounded font-body text-sm focus:outline-none focus:border-[#ff5722]"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Carlos Mendoza"
                required
                type="text"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label
                className="font-tech text-[11px] text-[#e2e2e8] uppercase flex justify-between font-bold"
                htmlFor="email"
              >
                <span>02 // CORREO ELECTRÓNICO</span>
                <span className="text-[#ff5722]">*</span>
              </label>
              <input
                className="w-full bg-[#0c0e12] border border-[#282a2e] text-white placeholder:text-[#ab8980] px-3.5 py-2.5 rounded font-body text-sm focus:outline-none focus:border-[#ff5722]"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cmendoza@ejemplo.com"
                required
                type="email"
              />
            </div>

            {/* Project Type Selector */}
            <div className="flex flex-col gap-1">
              <label
                className="font-tech text-[11px] text-[#e2e2e8] uppercase flex justify-between font-bold"
                htmlFor="service-select"
              >
                <span>03 // TIPO DE PROYECTO</span>
                <span className="text-[#ff5722]">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full bg-[#0c0e12] border border-[#282a2e] text-white px-3.5 py-2.5 rounded font-body text-sm appearance-none focus:outline-none focus:border-[#ff5722] cursor-pointer"
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="equipamiento">
                    Marca de Equipamiento / E-Commerce
                  </option>
                  <option value="personal">
                    Auto o Moto Personal (Sesión de Autor)
                  </option>
                  <option value="viaje">
                    Expedición / Rodada / Viaje Documental
                  </option>
                  <option value="otro">Evento de Motor / Otro Formato</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#ab8980] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Estimated Date */}
            <div className="flex flex-col gap-1">
              <label
                className="font-tech text-[11px] text-[#e2e2e8] uppercase flex justify-between font-bold"
                htmlFor="project-date"
              >
                <span>04 // FECHA ESTIMADA O TENTATIVA</span>
                <span className="text-[#ab8980]">OPCIONAL</span>
              </label>
              <input
                className="w-full bg-[#0c0e12] border border-[#282a2e] text-white px-3.5 py-2.5 rounded font-body text-sm focus:outline-none focus:border-[#ff5722]"
                id="project-date"
                value={projectDate}
                onChange={(e) => setProjectDate(e.target.value)}
                type="date"
              />
            </div>

            {/* Message / Details */}
            <div className="flex flex-col gap-1">
              <label
                className="font-tech text-[11px] text-[#e2e2e8] uppercase flex justify-between font-bold"
                htmlFor="message"
              >
                <span>05 // DETALLES DEL PROYECTO</span>
                <span className="text-[#ff5722]">*</span>
              </label>
              <textarea
                className="w-full bg-[#0c0e12] border border-[#282a2e] text-white placeholder:text-[#ab8980] px-3.5 py-2.5 rounded font-body text-sm focus:outline-none focus:border-[#ff5722] resize-none"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Modelo de la moto o auto, locación deseada, número de productos o duración de la rodada..."
                required
                rows={3}
              />
            </div>

            {/* Submit Ignition CTA */}
            <button
              className="w-full bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] py-3.5 px-4 rounded font-headline text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#ff5722]/20 cursor-pointer"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              <span>Solicitar Cotización y Disponibilidad</span>
            </button>

            {/* Trust Assurance Note */}
            <div className="flex items-center justify-center gap-1.5 text-center pt-1">
              <span className="material-symbols-outlined text-[#ab8980] text-[16px]">
                lock
              </span>
              <span className="font-tech text-[10px] text-[#e4beb4] uppercase">
                CONTRATO & NDAS DISPONIBLES // COBERTURA MUNDIAL
              </span>
            </div>
          </form>
        )}
      </section>

      {/* Studio FAQ & Gear Technical Specs Quick-Drawer */}
      <section className="px-4 pt-1 pb-8 max-w-4xl mx-auto w-full">
        <div className="bg-[#1a1c20] border border-[#282a2e] p-4 rounded flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb690] text-[18px]">
              engineering
            </span>
            <span className="font-tech text-[10px] sm:text-[11px] text-[#ffb690] uppercase tracking-wider font-bold">
              ESPECIFICACIONES DEL EQUIPO TÉCNICO
            </span>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#e4beb4] leading-relaxed">
            Operamos con cuerpos Sony FX3 y A7R V (61 MPX), ópticas G-Master fijas de apertura f/1.2 a f/2.8, estabilizadores Ronin RS3 Pro en soportes vehiculares y drones DJI Cine con perfil Apple ProRes.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-[#282a2e]">
            <span className="font-tech text-[10px] text-[#ab8980]">
              ESTÁNDAR EDITORIAL 4K / 8K RAW
            </span>
            <span className="font-tech text-[10px] text-white uppercase font-bold bg-[#282a2e] px-2 py-0.5 rounded">
              ISO COMPLIANT
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
