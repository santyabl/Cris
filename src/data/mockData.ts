import { PortfolioItem, ExpeditionPhoto, GearProduct, ServicePackage } from '../types';

export const APP_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPNtJBZGTSoVs97am1st8PB9Py5rEW-JzeK4ln31s0WIOnbT-segBm8wRcgjb5nVKaopbs4njv0I2cyWPOngWs5F8yAvyWINpqELrVxUX8RiEc1t5nXuKIMGSI18D0Pe-pMHthD0lCZnRV3CXIhdMBGD4ctEWENLH3lFQtE1U0aQCEV5zdn5pOQinumF_5jgTUGo2fNYb68YL0ex1ZTU1PIpHbK3a35h5DSAwdfVw2kZoBotgxVt4O',
  profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEj1Z5EaeWKm-3Zh0UXHvZipF-vsyICbIkN-xwo9Mt2i4aRWFxOiE-PWMZpNFH1X9efSvVO0i3atIMRlWRf8yrlv_db8rxKphPbsi_vOeokuuzboT--ZhaoYHV7imN4zucog45vMYSiNaBMHf3lY9hVMJ6J1oB1dT2q3HzNiJNG7GekhPClHM_NNjQTB0G9B4FTGuYWmQAdPDh4s7wprzlA66kFdsvDThrr6jAlXylGs4HK0xeTRqL',
  heroHome: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQkia2GjNpz9OPduVlm2RGCcVItVeM0bHCdP2fyBvCG0dpXv72QTMPrH5-hh51Vh7noBi5NZh_Qrepg1SE2YoebgXhA4oYCPcqa_xoiZkkKAn4iRb34EEtWhKUl9nLZYJEY7UYEXTD4uDuboKOjBNUq5QmNV0TjrkuU70-Hxzx544_J4qASJa9vpfjERd_Fu6TXjt4jQSw41dv1ISEOoqT9cEmD7_k4ZGv_KSJsxIzVyipLKli7gm',
  modalRawDefault: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoECNml8DTDI0jyLx6_CxHqU80T9aYjJSgcSLm7b0JO52RxL_v7BzOKxD_5YnIofFZ4ZHNlGoo588tV5B6QQbcsf-pnfIgSl8eTPiLZcOMS8mnwhxxtVl8u3Cpb6L9oO4aQD2Rnc7-HM-3P4XcJyHEwA_ySaylN0ARYKIX9IB4c9Pof7-4eS75ob2YzAGhm84FBazfiIc5lPbJYWeqj-zxkwg4vN-i6jgblsH4lgv_sG-r2iRGJ25L',
  expeditionHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHI6sT8xUXNwiaTfxmtOhNpflz0NHHIcjzjN2VPb9ghFVk-qqduEB2u43HjukGx7gQAGxiui3CizhDCKGCb8NcXDRT3E45UYJBWYZwe9-757L1wRFnNhTzTO82evi0IgjsFoZOw5Y7UznpKdI_0a0-2891cn4SXrWm5S5tih-YnZJCOUHkM95XqIKCsLxLaOiwHcnPDp-2IFir11T9Ck-MQMVeNZE_W88gQnJpzKOxwd8gAbBZLs84',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'item-1',
    category: 'motos',
    title: 'BMW R1250GS ADVENTURE',
    subtitle: 'Cruce Transandino • Curvas de Caracoles',
    cameraRig: 'SONY A7IV • 85MM F/1.4',
    badge: 'EXPEDICIÓN',
    location: 'PASO LOS LIBERTADORES (3,200m)',
    rpmOrSpeed: '4,120 RPM',
    specs: [
      { label: 'TERRENO', value: 'RIPIO & HIELO' },
      { label: 'VELOCIDAD', value: '68 KM/H' },
      { label: 'CLIMA', value: 'VIENTO 45KT' },
    ],
    exif: 'EXIF: 1/1600s ƒ/2.0',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzF2Pmwv3Wd0xSFseAbwsiTWmnNr632z2D-_V5JGJNUaxfplmWA4mgGqjkS5YtdVkuKM4H5QWyrcUQkJn5Zs5p9yrH5T9xehXfZaBTXDfmRUh3q10Ql5OrhcnA_hNW6xO_z4_u2zmkffspJ0Ihxuy0W8PAOEPpCksXzw5_Q0fTi2Wm9xhTE9UStVNTWwysZmUz1W37nLMTC0BpAut4A48Szb30M7PVUxV-Bf0S8BcPWwNlULR330K',
    altText: 'Rugged adventure motorcycle BMW R1250GS traversing winding high-altitude switchbacks through the dramatic Andes mountain pass Paso Los Libertadores',
    detailedExif: {
      camera: 'Sony Alpha 7 IV (ILCE-7M4)',
      lens: 'FE 85mm F1.4 GM',
      shutter: '1/1600s',
      aperture: 'ƒ/2.0',
      iso: 'ISO 200',
      colorSpace: 'AdobeRGB (1998)',
      bitDepth: '14-Bit Uncompressed RAW',
      histogram: 'R 28% • G 34% • B 38%',
      focalLength: '85.0 mm',
    },
  },
  {
    id: 'item-2',
    category: 'supercars',
    title: 'PORSCHE 911 GT3 RS • DETALLE DE PISTA',
    subtitle: 'Sesión Aerodinámica & Telemetría en Vértice',
    cameraRig: 'HASSELBLAD X2D • 55MM',
    badge: 'PISTA',
    location: 'AUTÓDROMO DE LAS VIZCACHAS',
    rpmOrSpeed: '248 KM/H',
    specs: [
      { label: 'SUPERFICIE', value: 'ASFALTO SECO' },
      { label: 'FRENADO', value: '1.4G LATERAL' },
      { label: 'DISCOS', value: 'CERÁMICOS CARBÓN' },
    ],
    exif: 'EXIF: 1/8000s ƒ/2.8',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_dkJMPDC9thMENTG6dpusISfyM-3W6ZVTFojTyFcurW_nwr2sl7zyQ6jGISTH9AUhw_hBB5KHBrFe7ODWeX-xp8tq5Jpxz7J254O36OjGHsldcz8hKVleKl86AZ3U1_odlyp_MlCiHO5EUVgR4pm8K-tnpL8KEYKYlyDTBAUwODsLE0Wm3H6H7mF8_WHBIt1qfsln8D_6tRf5x53p6u4P0aasRr6d0x_EkBaY9D4-qYovxAwvB9lJ',
    altText: 'Porsche 911 GT3 RS drifting on asphalt race circuit track with red brake discs and tire smoke',
    detailedExif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5 V',
      shutter: '1/8000s (Electronic)',
      aperture: 'ƒ/2.8',
      iso: 'ISO 64',
      colorSpace: 'ProPhoto RGB / Hasselblad HNCS',
      bitDepth: '16-Bit RAW 3FR',
      histogram: 'R 42% • G 28% • B 30%',
      focalLength: '55.0 mm (43mm eq.)',
    },
  },
  {
    id: 'item-3',
    category: 'gear',
    title: 'CASCO CARBONO RACING • ESTUDIO TÉCNICO',
    subtitle: 'Análisis de Estructura Compuesta 3K & Ventilación',
    cameraRig: 'FUJIFILM GFX 100 II • MACRO',
    badge: 'TEST DE IMPACTO',
    location: 'CERTIFICACIÓN ECE 22.06',
    rpmOrSpeed: '1,280 GRS',
    specs: [
      { label: 'MATERIAL', value: 'FIBRA 100%' },
      { label: 'VISOR', value: 'PINLOCK 120 MAX' },
      { label: 'CIERRE', value: 'DOBLE ANILLA TI' },
    ],
    exif: 'ESTUDIO: 3-LIGHT STROBE',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7WQWgRwwwGzEUwr5Lcn_iLBoWv3ePNewCpauMkY8L37uJLawv-FlGzU3RKkdSaApzA79eF-txry9RjkFw5hR3Dzm5aW2ncJgtJsSppR_hrArG3mr2hGajWZ7Tn2OJlYfO_YOtBs3cJRU_2kH0Tk7QYdpZdJhqepHEXpd-0t9fbaswCNQkEFEamPwHXneE2Ftbim0yU58idBHN5FkOGlav0rm4BINPDwNuPUc9XzwJhKj6NUly9opx',
    altText: 'Ultra high-end carbon fiber motorcycle helmet resting on dark industrial textured metal with studio rim lighting',
    detailedExif: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 120mm f/4 Macro R LM OIS WR',
      shutter: '1/125s (Sync)',
      aperture: 'ƒ/11.0',
      iso: 'ISO 80',
      colorSpace: 'AdobeRGB (1998)',
      bitDepth: '16-Bit RAF RAW',
      histogram: 'R 22% • G 26% • B 52%',
      focalLength: '120.0 mm (95mm eq.)',
    },
  },
  {
    id: 'item-4',
    category: 'motos',
    title: 'CUSTOM TRACKER 1200 • DERIVA DE BARRO',
    subtitle: 'Pruebas Dinámicas en Circuito de Tierra',
    cameraRig: 'CANON R5C • 35MM F/1.8',
    badge: 'FLAT TRACK',
    location: 'OVALO DIRT ARENA',
    rpmOrSpeed: 'ÁNGULO: 42°',
    specs: [
      { label: 'TRACCIÓN', value: 'RUEDA LIBRE' },
      { label: 'SUSPENSIÓN', value: 'ÖHLINS TTX' },
    ],
    exif: 'EXIF: 1/4000s ƒ/2.2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXgTGg_KQdQyYpTRdVRnx4L1kqMFdqDW6opbFfrwbqeFRnbqIoqu9bVzxsbLa9JKgbNZhhpU52_h5d36Tld5H8YrFVJRC99FKRXCiwa71KQBqy7gDVly2U-L6qxlCW8oIRx8j9HquN6nwPiVmffxOIVLURVp5u0oHp7iwVtf5d5sQdI5ROul4B-b96XGOKcG5fFP93dW69o-qeMCBAvl206zO5Zn7_zydec_wTxT_CRx1Ybmf7okbg',
    altText: 'Harley Davidson custom flat track racer banking low in a dirt turn at sunset with dirt roost kicking up',
    detailedExif: {
      camera: 'Canon EOS R5 C Cinema EOS',
      lens: 'RF 35mm F1.8 IS STM',
      shutter: '1/4000s',
      aperture: 'ƒ/2.2',
      iso: 'ISO 320',
      colorSpace: 'Canon Cinema RAW Light',
      bitDepth: '12-Bit RAW CRM',
      histogram: 'R 36% • G 32% • B 32%',
      focalLength: '35.0 mm',
    },
  },
];

export const EXPEDITION_PHOTOS: ExpeditionPhoto[] = [
  {
    step: '01 // VISIÓN GENERAL',
    time: '06:42 AM',
    title: 'El Ascenso al Alba',
    description:
      'Toma panorámica en curva cerrada. La niebla matinal se desvanecía revelando el abismo de 800 metros mientras las motos entraban a régimen sostenido.',
    exif: '24mm • f/5.6 • 1/1600s • ISO 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-MWHURrHKeXrHT-laA99lithdkyvGEk01CoHrW0jQ4xReNp6HfRqyuRlv-exQeq9LR5zs5NXTrnXAehOrh1nj1h5QJqlEnGVO96y7_EgyuilsogIe7GT8zD0BINjiZl21vCUxyUai0LsKmM3B9E80Qqc_I_6R1Kh_EfIA0PQ3e9V0KYfnZua_6hOkRxV5NfJlmXKxEnKFBcGp-8k4j0EtnI7NoKEz8UGBpkNcT-S9I6G-VxPfm3JY',
    altText: 'Wide panoramic landscape of an extreme switchback mountain pass road at sunrise with an adventure motorcycle carving through cold dust',
  },
  {
    step: '02 // TELEMETRÍA MECÁNICA',
    time: '11:15 AM',
    title: 'Polvo y Resistencia',
    description:
      'Primer plano de neumático con tacos y suspensión completamente comprimida. El choque hidráulico contra el lecho de roca fría puso a prueba cada buje.',
    exif: '70mm • f/2.8 • 1/4000s • ISO 400',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKpvL42Io2SXX6FKwop-8k4cyGgAT5IEL96LNDgv-SOl8BMz1gIiIHaXBPxVdqq8WKEMmcxs7cv1yZlYCc5AHBJN8vV-tQMnxhkZNbfeLLNYcgoYcH71r7qtjVwOwOfQ-zq_CNh8D1YI_FbiN4175RxhqoaiS9qXiT-PRaU5AeLr2uMXuf21iIeMF4LsNDRQnV8Zv1-qgZ7Ez5-1f0iHGaRLrrkighTaDN5KSF3D-WJkgxqVufwnkN',
    altText: 'Macro action shot of an aggressive knobby adventure motorcycle tire spinning over loose wet gravel and thick mud',
  },
  {
    step: '03 // VIGILIA NOCTURNA',
    time: '22:40 PM',
    title: 'Campamento en Tierra de Fuego',
    description:
      'Larga exposición capturando la Vía Láctea con los faros LED auxiliares de las GS rebotando sutilmente sobre los vientos helados de la planicie.',
    exif: '24mm • f/2.8 • 25.0s • ISO 3200',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlcSyO5lMuC6Qfdxpnw6NyyeLFsCNltMCG2Q7x5J_-V9-m9jezJSaG-f8Dcv0yOGnbY7mjC2X8ONBfIplPkcHdqab7MX6npciAa9zVJ4xPS7fLtC5mKTOCgQh2UkUL-fXExIMggWm4yWWCN8K9av0ZWLS21eKMBR6fT_sfdXjtsc_6Jy7SumHmGOmuwzoq8ni7fPno1km94E0EjPM01Fh5CnNgeh85fzEd6knjBjSBj881_pzRgb9r',
    altText: 'Dark long-exposure night photograph of an expedition camp in a windblown valley under a dense starry Milky Way sky with motorcycles parked',
  },
  {
    step: '04 // FACTOR HUMANO',
    time: '17:05 PM',
    title: 'El Jinete y su Armadura',
    description:
      'Detalle de la armadura D3O integrada y costuras de kevlar tras 8 horas ininterrumpidas de lluvia torrencial y granizo en alta montaña.',
    exif: '85mm • f/2.0 • 1/1000s • ISO 800',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbS9i1gjfN8YgoDmoc9ezF77guMaGZEQa3cySgTi0WMyomLMEz1Z3bZGdnwBzM1xjMyl7pSx62qk8piJQDiVz9ScZmygZNFRv4PB1RnzWIf47nwc4O1IDIxrEgu3WOLUiF8eLKCwRutnYVPZa1BGLZ3eVrB6dYFI_Vm_P-BE_4k1qrM5ZEkyVguosO1Bn4xY0qw3rDKNPJCjkD5j7zP1fXx6fh5ZKM62qPvE_A38MMBbvub31kG0gd',
    altText: 'Tactile macro portrait of a motorcycle expedition rider in drenched Cordura and Gore-Tex technical jacket with D3O armor plates',
  },
];

export const GEAR_PRODUCTS: GearProduct[] = [
  {
    id: 'gear-1',
    ref: 'REF. AC-PRO-99',
    category: 'cascos',
    name: 'Casco Apex Carbon Pro',
    priceUsd: 680,
    certifications: ['ECE 22.06', 'FIM HOMOLOGATED'],
    impactGrade: 'NIVEL 5 IMPACT GRADE',
    testedDistance: 'RUTA: 5.000 KM TESTEADO',
    description:
      'Estructura de fibra de carbono 3K aeroacústica con bloqueo de pantalla electromecánico y canalizaciones de flujo NACA para fotografía en pista.',
    specs: [
      { label: 'PESO TOTAL', value: '1.280g ±50' },
      { label: 'COMPUESTO', value: 'Carbono 3K' },
      { label: 'ÓPTICA', value: 'Clase 1 Flat' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAILOcNw9nUZT9lN9QGPSf0xXhY5PW8AwW8vCqAspQFyD59qE3WoBe3Ivb6vuW4Dt6vcPllwePhsVibHLZKNzF9qbRrlI86rsTfzqs33TIeIpve2CyhKoklChIrPNyMDfdxtm_YePB1NpzqIikWX46p5WLYZRYUMH_aN_B8r11ozTmUfVSgjeIUH-OUVJ7qjfzRApzEephJnljaL_cNSrd468ThUkBg5l-uSpEyqkfs_AA60PjVQmgR',
    altText: 'Studio shot of high end carbon fiber motorcycle helmet with orange visor accents on dark background',
    inStock: true,
    preorderSlot: 'LOTE 01 // DESPACHO PRIORITARIO',
  },
  {
    id: 'gear-2',
    ref: 'REF. DK-4S-ADV',
    category: 'chaquetas',
    name: 'Chaqueta Dakar 4 Estaciones',
    priceUsd: 890,
    certifications: ['CE CLASE AA', 'D3O NIVEL 2'],
    impactGrade: 'GORE-TEX PRO 3L',
    testedDistance: 'RUTA: 5.000 KM TESTEADO',
    description:
      'Armadura D3O® LP2 en hombros, codos y espaldera Viper Pro. Diseñada para soportar tormentas desérticas y monzones sin perder transpirabilidad.',
    specs: [
      { label: 'IMPERMEAB.', value: '28.000 mm' },
      { label: 'VENTILACIÓN', value: '8 Puertos YKK' },
      { label: 'AIRBAG COMP.', value: 'Tech-Air® Ready' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkvUlN3Zkf9a61GsVrw8ZxBUSeVJLTB46a7Hqxeh-wD5nU5T7PNpsIsSWZ7ZMrejH6LuXKtTW7yyxJBwazmuyqNyErOkeHMM2OOWkxVbQBlfE-nR_tEGGT_qdARqK6PFlMOvsMVQjvu5DkIueUuwZoqff3PnFbeUDxt_5oQYq9LAwFQtoT2aIsVJ0Nq8OrKJX7tiPq7rw7vIn_oLCsL3irc4jy3CAuyzMYruyHSFkl8pg7KYQ6GRXE',
    altText: 'Macro product photograph of rugged dual sport adventure motorcycle jacket with Cordura fabric and matte orange zipper seals',
    inStock: true,
    preorderSlot: 'LOTE 02 // 14 CUPOS RESTANTES',
  },
  {
    id: 'gear-3',
    ref: 'REF. GLV-TITAN-X',
    category: 'guantes',
    name: 'Guantes Titanio Rallye Attack',
    priceUsd: 240,
    certifications: ['KP NIVEL 2', 'TITANIO PURO'],
    impactGrade: 'PIEL DE CANGURO',
    testedDistance: 'RUTA: 5.000 KM TESTEADO',
    description:
      'Confeccionados en piel de canguro con deslizaderas TPU en escafoides, refuerzos de hilo aramídico y ventilación directa en falanges.',
    specs: [
      { label: 'PROTECCIÓN', value: 'Placa Titanio' },
      { label: 'PALMA', value: 'Kangaroo 0.8mm' },
      { label: 'COSTURA', value: 'Kevlar® Ext.' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDfSsJAHsfry0ZO8eNIlp-_JD-FH2adJwz0blVv9T68mlbebqCBHFf955ukaT4GTf9JhJDB2PBiYpUA8VWsbswtP2c8FBEkNdSrIYzoS6W8-W3HeaEsuwF5C_OhI3IwjXyNUXIfmNYSEqYVkx5UpZLj-9lub4ifxL4nbeUL2bpZMIlHmxPUUrwRA9JIwjfGA5ZZCwQZ3LI21rYoAOlX72YkRdMaj9GjfNEaDPKKEKnCzkh4rFpsNeN',
    altText: 'Studio shot of high performance motorcycle racing gloves made with matte black kangaroo leather and titanium knuckle guards',
    inStock: true,
    preorderSlot: 'LOTE 03 // DISPONIBLE INMEDIATO',
  },
  {
    id: 'gear-4',
    ref: 'REF. BT-CROSS-WP',
    category: 'botas',
    name: 'Botas Enduro CrossMax WP',
    priceUsd: 520,
    certifications: ['EN 13634:2017', 'CE NIVEL 2'],
    impactGrade: 'SISTEMA BI-AXIAL',
    testedDistance: 'RUTA: 5.000 KM TESTEADO',
    description:
      'Mecanismo antitorsión con bisagra mecánica de tobillo, hebillas de magnesio micro-ajustables y compuesto Vibram® de alta adherencia en estriberas.',
    specs: [
      { label: 'SUELA', value: 'Vibram Apex' },
      { label: 'CIERRE', value: 'Magnesio CNC' },
      { label: 'TORSION', value: 'Limit 15° Lock' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqsMtpxy3Bx_qxJPHS84Vo4HBWYsIXSFCaICaOWIdLzby_2gM8zvu0YecIQTNZkitLrhfMfHVGJlWLgOIBjCEfIgwCT2cPPcMF5cBgfpV97vu2zWevQQ1l0SD9TKhHUjpwQ--eu0ypIJIn4rbSjow6_cAN9LrU8gFBxZnZpOLdpfV00_RN2qr_oW5DfCwRd3tp47NaHJX3Gv0lD3_SoxpTqQnfl3DsX-m_YDHR95DosvObtM8Mb3G_',
    altText: 'Technical product shot of heavy duty adventure enduro motorcycle boots with reinforced ankle hinge and Vibram tread sole',
    inStock: true,
    preorderSlot: 'LOTE 01 // ÚLTIMAS TALLAS 41-45',
  },
  {
    id: 'gear-5',
    ref: 'REF. MNT-CNC-CAM',
    category: 'monturas',
    name: 'Montura de Acción CNC',
    priceUsd: 135,
    certifications: ['AERO-GRADE T6061', 'DAMPED'],
    impactGrade: 'ANTI-VIBRACIÓN ÓPTICA',
    testedDistance: 'LAB: 12G ACCELERATION',
    description:
      'Mecanizado CNC en aluminio aeronáutico con aislamiento elastómero de 4 ejes para proteger los sensores de cámaras DSLR ligeras y cámaras de acción 4K/8K.',
    specs: [
      { label: 'MATERIAL', value: 'T6061 Billet' },
      { label: 'CARGA MÁX', value: '1.850g' },
      { label: 'MONTAJE', value: 'Arca / GoPro' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1CG51j3HfcUKcTk7ueCzqmtOybqPlhdPSxMK4qdqBpLMPfSZzBqAntk-j5x0NcBdfuDY7aYDruhvLar4wrhLBiB6XZZVvbf77OAzoMlGBnbSCi-PEyB0OWq1XqHkhvOvnLXYP8dj0In23zRBLtok5M-gZuG8GV3yYqvLy5_ORZLTNmZNwl6kwcm_GDg_-Sfs9ry_izgPNnLZerjE0SSqd2pikyhM8e7YFzolHjqLGl0dunrIRGwGa',
    altText: 'Macro engineering photograph of an anodized black aluminum motorcycle camera handlebar mount clamped onto carbon fiber tube',
    inStock: true,
    preorderSlot: 'LOTE DISPONIBLE // STOCK REGULAR',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pack-equipamiento',
    mode: 'MODO COMERCIAL // E-COMMERCE',
    badge: 'MARCAS',
    badgeType: 'marcas',
    title: 'Paquete Comercial de Equipamiento',
    description:
      'Fotos de producto en estudio con ciclorama limpio más tomas de acción de alto octanaje en locaciones reales con pilotos homologados.',
    features: [
      '25 fotos retocadas en alta resolución con licencia comercial completa',
      'Entrega técnica garantizada en 5 días hábiles',
      'Archivos optimizados para Web, Social y Catálogo impreso',
    ],
    cameraSpecs: 'ISO 100 // 85mm ƒ/2.8',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcNdjAibt9chMWY5_DsjPvgFG4PmB2kAwAYYuXrm6kr-tXquuFx6ulF5t4QnZJiT-p7inG95UAeV8E9v4arKRaUiMvB5ssNp27UmwhR6OBzvyFZaWOwAqntkYSCPM_bm0VYMGQfJepI9DQaFi2eDQSzuSeFKJYVBWfMRvPwvZ_fE3XXNRY7wxun8MrcbrFqpiG6Jn5elyPqxDtesXxttHzbFNCav8Shhg0Nka2ESP0ty15EaiJUhli',
    altText: 'High contrast commercial studio motorcycle photography of matte carbon fiber helmet illuminated with orange rim light',
    ctaText: 'Seleccionar Paquete Comercial',
    valueKey: 'equipamiento',
  },
  {
    id: 'pack-personal',
    mode: 'SESIÓN PRIVADA // AUTOR',
    badge: 'EDITORIAL',
    badgeType: 'editorial',
    title: 'Sesión Privada para Vehículo / Moto de Autor',
    description:
      'Sesión exclusiva de 3 horas en locación urbana de arquitectura brutalista o carretera escénica de montaña al atardecer.',
    features: [
      '15 fotografías de exhibición editorial de formato medio',
      'Tomas de macro-detalle: motor pulido, soldaduras, escape y texturas',
      'Calibración de color cinematográfico y archivos TIFF 16-bit',
    ],
    cameraSpecs: 'ISO 400 // 50mm ƒ/1.4',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCV_lnVtVcynca3MtlLcBWk6_R8f3vq5injptkl9xO9ViRsJdsoIyFYnjfrhkGfLNdVhcTg4eQrcia9YJIAuuLSPMU6GuHMNryVKWGvrmpRTWKz1_wUBpw7YTSnKWmpCoqemJWi_BwOihURMTj4NUUm31cV3MrP_XAKydfKgxjKGtu_V8AQDC4_n3Gz0C3Oku8xdan-sbI5Anqyzd9qKnn6j99TJL7ZXt5i2iZ4S1H2JtiUQp4Poi3V',
    altText: 'Dark asphalt highway curve at dusk with custom cafe racer motorcycle and blue and orange ambient lighting',
    ctaText: 'Seleccionar Sesión de Autor',
    valueKey: 'personal',
  },
  {
    id: 'pack-viaje',
    mode: 'ALL-TERRAIN // AÉREO + RUTA',
    badge: 'EXPEDICIÓN',
    badgeType: 'expedicion',
    title: 'Cobertura Integral de Expedición / Rodada',
    description:
      'Fotógrafo y piloto acompañante totalmente equipado durante todo el trayecto, listo para condiciones climáticas extremas.',
    features: [
      'Fotografía documental completa en campamento y ruta',
      'Rolling shots dinámicos en movimiento lateral y persecución',
      'Tomas aéreas FPV / Drone cinematográfico en 4K RAW',
    ],
    cameraSpecs: 'ISO 200 // 24-70mm ƒ/2.8 + DRONE 4K',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2ObNugqnjBmV4qrmcFd2yPgABgR7eJiGfJ4Ntm-pISK_I5ClVlFq5BldT_VdMYQb0rdMMcrjpepnx04BUAzJu-DnuDi6XDctcGPqQQnfZANt0l-D-jRjjdQ5kl34mFt-w0EidggZ1QtRovoIFkmIrEwJ_nJvMPteFDBw7sinBPH8cWmJXUL5rTr4Ra0gKNS3uHcVmRgiw4mrT_HIHRiepIvDArV6Z49ns6Bbk9MBx3Yr_3b1vGipd',
    altText: 'Adventure dual-sport motorcycle throwing a rooster tail of gravel on an Andean mountain pass at golden hour with chase vehicle',
    ctaText: 'Reservar Cobertura en Ruta',
    valueKey: 'viaje',
  },
];
