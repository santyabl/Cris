import React, { useState } from 'react';
import { GearProduct } from '../types';

interface PreorderModalProps {
  product: GearProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (product: GearProduct) => void;
}

export const PreorderModal: React.FC<PreorderModalProps> = ({
  product,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [size, setSize] = useState<string>('L');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onConfirm(product);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0e12]/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-md w-full bg-[#1e2024] border border-[#282a2e] rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-4 bg-[#1a1c20] border-b border-[#282a2e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping"></span>
            <span className="font-tech text-[11px] text-[#ff5722] font-bold uppercase tracking-wider">
              RESERVA PRIORITARIA // EARLY ACCESS
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#333539] hover:bg-[#ff5722] text-[#e2e2e8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 h-20 object-cover rounded bg-[#0c0e12] border border-[#282a2e]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-tech text-[10px] text-[#ab8980]">{product.ref}</span>
              <h3 className="font-headline text-lg uppercase text-white truncate">
                {product.name}
              </h3>
              <span className="font-headline text-xl text-[#ff5722] font-bold">
                ${product.priceUsd}{' '}
                <span className="font-tech text-[10px] text-[#b9c8de]">USD</span>
              </span>
            </div>
          </div>

          <div className="bg-[#1a1c20] p-2.5 rounded border border-[#282a2e] font-tech text-[10px] text-[#a7b6cc] flex justify-between">
            <span>SLOT ASIGNADO:</span>
            <span className="text-[#ff5722] font-bold">{product.preorderSlot}</span>
          </div>

          {submitted ? (
            <div className="py-6 flex flex-col items-center justify-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[28px]">check</span>
              </div>
              <h4 className="font-headline text-lg uppercase text-white">
                ¡PRE-ORDEN REGISTRADA!
              </h4>
              <p className="font-body text-xs text-[#a7b6cc]">
                Recibirás alerta técnica y ficha de despacho prioritario en tu correo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="font-tech text-[11px] text-[#ab8980] block mb-1">
                  SELECCIONAR TALLA / CONFIGURACIÓN
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL'].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-2 rounded font-tech text-xs font-bold transition-colors cursor-pointer ${
                        size === s
                          ? 'bg-[#ff5722] text-[#541200]'
                          : 'bg-[#282a2e] text-[#e2e2e8] hover:bg-[#333539]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-tech text-[11px] text-[#ab8980] block mb-1">
                  CORREO ELECTRÓNICO PARA ALERTA
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="piloto@velocita.com"
                  className="w-full bg-[#0c0e12] border border-[#282a2e] text-white px-3 py-2 rounded font-body text-sm focus:outline-none focus:border-[#ff5722]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#ff5722] hover:bg-[#ec6a07] text-[#541200] font-headline text-base font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#ff5722]/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span>Confirmar Pre-Orden Sin Depósito</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
