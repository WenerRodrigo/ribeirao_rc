import productGear from "@/assets/product-gear.jpg";
import productSynchronizer from "@/assets/product-synchronizer.jpg";
import productClutch from "@/assets/product-clutch.jpg";
import productBearing from "@/assets/product-bearing.jpg";
import productShaft from "@/assets/product-shaft.jpg";
import productGearbox from "@/assets/product-gearbox.jpg";
import productFork from "@/assets/product-fork.jpg";
import productSeal from "@/assets/product-seal.jpg";
import productKit from "@/assets/product-kit.jpg";

export interface Product {
  id: string;
  name: string;
  code: string;
  category: string;
  brand: string;
  application: string;
  model: string;
  engine: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  image: string;
  images: string[];
  badge?: "destaque" | "mais-vendido" | "estoque-limitado" | "envio-imediato";
  guarantee: string;
  availability: string;
  shipping: string;
}

export const categories = [
  "Engrenagens",
  "Sincronizadores",
  "Kits de Embreagem",
  "Rolamentos",
  "Eixos",
  "Carcaças",
  "Garfos e Trambuladores",
  "Retentores e Vedações",
  "Kits de Reparo",
];

export const brands = [
  "Volkswagen",
  "Fiat",
  "Chevrolet",
  "Ford",
  "Renault",
  "Honda",
  "Toyota",
  "Hyundai",
  "Peugeot",
];

export const products: Product[] = [
  {
    id: "eng-001",
    name: "Engrenagem 3ª Marcha",
    code: "RC-ENG-3M-001",
    category: "Engrenagens",
    brand: "Volkswagen",
    application: "Gol G5 1.0",
    model: "Gol G5",
    engine: "1.0 8V",
    yearStart: 2009,
    yearEnd: 2013,
    description: "Engrenagem de 3ª marcha para câmbio manual. Fabricada em aço temperado de alta resistência, garantindo durabilidade e performance. Peça compatível com câmbio modelo 02T.",
    image: productGear,
    images: [productGear, productGear],
    badge: "mais-vendido",
    guarantee: "6 meses",
    availability: "Pronta entrega",
    shipping: "Envio em até 24h",
  },
  {
    id: "sinc-001",
    name: "Anel Sincronizador 1ª/2ª",
    code: "RC-SINC-12-001",
    category: "Sincronizadores",
    brand: "Fiat",
    application: "Palio 1.0/1.4",
    model: "Palio",
    engine: "1.0/1.4 Fire",
    yearStart: 2005,
    yearEnd: 2017,
    description: "Anel sincronizador para 1ª e 2ª marcha. Material de alta qualidade com acabamento preciso para troca de marchas suave.",
    image: productSynchronizer,
    images: [productSynchronizer],
    badge: "destaque",
    guarantee: "6 meses",
    availability: "Pronta entrega",
    shipping: "Envio em até 24h",
  },
  {
    id: "emb-001",
    name: "Kit Embreagem Completo",
    code: "RC-EMB-KIT-001",
    category: "Kits de Embreagem",
    brand: "Chevrolet",
    application: "Onix 1.0/1.4",
    model: "Onix",
    engine: "1.0/1.4 SPE",
    yearStart: 2013,
    yearEnd: 2019,
    description: "Kit completo de embreagem contendo platô, disco e rolamento. Peças de primeira linha para máxima durabilidade.",
    image: productClutch,
    images: [productClutch],
    badge: "envio-imediato",
    guarantee: "12 meses",
    availability: "Pronta entrega",
    shipping: "Envio imediato",
  },
  {
    id: "rol-001",
    name: "Rolamento de Entrada",
    code: "RC-ROL-ENT-001",
    category: "Rolamentos",
    brand: "Volkswagen",
    application: "Fox 1.0/1.6",
    model: "Fox",
    engine: "1.0/1.6",
    yearStart: 2004,
    yearEnd: 2021,
    description: "Rolamento de entrada do câmbio. Fabricado com aço especial para suportar altas rotações e cargas.",
    image: productBearing,
    images: [productBearing],
    guarantee: "6 meses",
    availability: "Pronta entrega",
    shipping: "Envio em até 48h",
  },
  {
    id: "eix-001",
    name: "Eixo Piloto Câmbio",
    code: "RC-EIX-PIL-001",
    category: "Eixos",
    brand: "Ford",
    application: "Ka 1.0/1.5",
    model: "Ka",
    engine: "1.0/1.5 Ti-VCT",
    yearStart: 2014,
    yearEnd: 2023,
    description: "Eixo piloto (primário) do câmbio manual. Usinagem de precisão em aço cromo-níquel para máxima resistência ao desgaste.",
    image: productShaft,
    images: [productShaft],
    badge: "destaque",
    guarantee: "6 meses",
    availability: "Sob consulta",
    shipping: "Envio em até 72h",
  },
  {
    id: "car-001",
    name: "Carcaça de Câmbio",
    code: "RC-CAR-CBX-001",
    category: "Carcaças",
    brand: "Volkswagen",
    application: "Gol G6/G7 1.0/1.6",
    model: "Gol G6/G7",
    engine: "1.0/1.6 MSI",
    yearStart: 2013,
    yearEnd: 2023,
    description: "Carcaça completa do câmbio em alumínio fundido. Peça nova com todos os alojamentos e roscas em perfeito estado.",
    image: productGearbox,
    images: [productGearbox],
    badge: "estoque-limitado",
    guarantee: "12 meses",
    availability: "Estoque limitado",
    shipping: "Envio em até 48h",
  },
  {
    id: "gar-001",
    name: "Garfo Seletor 3ª/4ª",
    code: "RC-GAR-34-001",
    category: "Garfos e Trambuladores",
    brand: "Fiat",
    application: "Uno 1.0/1.4",
    model: "Uno",
    engine: "1.0/1.4 Evo",
    yearStart: 2010,
    yearEnd: 2022,
    description: "Garfo seletor para 3ª e 4ª marcha. Peça em aço forjado com tratamento térmico para alta durabilidade.",
    image: productFork,
    images: [productFork],
    guarantee: "6 meses",
    availability: "Pronta entrega",
    shipping: "Envio em até 24h",
  },
  {
    id: "ret-001",
    name: "Kit Retentores Câmbio",
    code: "RC-RET-KIT-001",
    category: "Retentores e Vedações",
    brand: "Renault",
    application: "Sandero 1.0/1.6",
    model: "Sandero",
    engine: "1.0/1.6 16V",
    yearStart: 2008,
    yearEnd: 2020,
    description: "Kit completo de retentores e vedações para câmbio manual. Inclui todos os retentores, juntas e o-rings necessários.",
    image: productSeal,
    images: [productSeal],
    badge: "mais-vendido",
    guarantee: "6 meses",
    availability: "Pronta entrega",
    shipping: "Envio em até 24h",
  },
  {
    id: "kit-001",
    name: "Kit Reparo Câmbio Completo",
    code: "RC-KIT-REP-001",
    category: "Kits de Reparo",
    brand: "Honda",
    application: "Civic 1.8/2.0",
    model: "Civic",
    engine: "1.8/2.0 i-VTEC",
    yearStart: 2012,
    yearEnd: 2021,
    description: "Kit completo para reparo do câmbio incluindo engrenagens, sincronizadores, rolamentos, retentores e garfos. Solução completa para recondicionamento.",
    image: productKit,
    images: [productKit],
    badge: "destaque",
    guarantee: "12 meses",
    availability: "Sob consulta",
    shipping: "Envio em até 72h",
  },
];

export const WHATSAPP_NUMBER = "5516981115555";

export function getWhatsAppLink(productName?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (productName) {
    const message = encodeURIComponent(
      `Olá, tenho interesse na peça ${productName}, poderia me passar mais informações?`
    );
    return `${baseUrl}?text=${message}`;
  }
  return `${baseUrl}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento.")}`;
}
