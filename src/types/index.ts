export type TabType = 'portafolio' | 'expediciones' | 'gear-store' | 'servicios';

export interface PortfolioItem {
  id: string;
  category: 'motos' | 'supercars' | 'gear';
  title: string;
  subtitle: string;
  cameraRig: string;
  badge: string;
  location: string;
  rpmOrSpeed: string;
  specs: { label: string; value: string }[];
  exif: string;
  imageUrl: string;
  altText: string;
  detailedExif?: {
    camera: string;
    lens: string;
    shutter: string;
    aperture: string;
    iso: string;
    colorSpace: string;
    bitDepth: string;
    histogram: string;
    focalLength: string;
  };
}

export interface ExpeditionPhoto {
  step: string;
  time: string;
  title: string;
  description: string;
  exif: string;
  imageUrl: string;
  altText: string;
}

export interface GearProduct {
  id: string;
  ref: string;
  category: 'cascos' | 'chaquetas' | 'guantes' | 'botas' | 'monturas';
  name: string;
  priceUsd: number;
  certifications: string[];
  impactGrade: string;
  testedDistance: string;
  description: string;
  specs: { label: string; value: string }[];
  imageUrl: string;
  altText: string;
  inStock: boolean;
  preorderSlot: string;
}

export interface ServicePackage {
  id: string;
  mode: string;
  badge: string;
  badgeType: 'marcas' | 'editorial' | 'expedicion';
  title: string;
  description: string;
  features: string[];
  cameraSpecs: string;
  imageUrl: string;
  altText: string;
  ctaText: string;
  valueKey: string;
}
