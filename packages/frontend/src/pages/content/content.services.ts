import { IService } from "@cosmetics-and-more/components";

export const cosmeticServices: IService[] = [
  {
    title: "Handpflege",
    imageURL: "images/services/manicure_low.jpg",
    variants: [
      { title: "Maniküre", price: "18" },
      {
        title: "Mit Naturlack oder Polieren",
        price: "21",
      },
      {
        title: "Mit Farblack",
        price: "24",
      },
      {
        title: "Mit Shellac",
        price: "37",
        info: "Hält circa 14 Tage",
      },
      {
        title: "Mit Handmassage",
        price: "24",
      },
    ],
  },
  {
    title: "Fußpflege",
    imageURL: "images/services/pedicure_low.jpg",
    variants: [
      { title: "Pediküre", price: "24" },
      { title: "Mit Naturlack oder polieren", price: "26" },
      { title: "Mit Farblack", price: "28" },
      { title: "Mit Shellac", price: "37", info: "Hält circa 14 Tage" },
      { title: "Mit Fußmassage", price: "29" },
    ],
  },
  {
    title: "Gesichtsbehandlung",
    imageURL: "images/services/facial_low.jpg",
    duration: 70,
    description: `Die Gesichtsbehandlung umfasst folgende Leistungen: Reinigung, Hautanalyse, Peeling, Entfernen von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme`,
    price: "60",
  },
  {
    title: "Haarentfernung mit Warmwachs",
    imageURL: "images/services/shave_low.jpg",
    variants: [
      {
        title: "Oberlippe",
        price: "9",
      },
    ],
  },
  {
    title: "Sonstiges",
    imageURL: "images/services/augenbrauen.jpg",
    variants: [
      { title: "Augenbrauenkorrektur", price: "8" },
      { title: "Augenbrauen Färben", price: "8" },
      { title: "Wimpern Färben", price: "8" },
    ],
  },
];

export const hairServices: IService[] = [
  {
    title: "Damen - Frisur",
    imageURL: "images/services/kaemmen_low.jpg",
    variantsHeader: { priceColumn: "kurz / lang" },
    variants: [
      {
        title: "Trockenschnitt",
        price: "27 / 32",
      },
      {
        title: "Waschen, Schneiden, Föhnen",
        price: "39 / 44",
      },
      { title: "Standard Steckfrisur", price: "24" },
      {
        title: "Dauerwelle/Volumenwelle",
        price: "44 / 54",
      },
    ],
  },
  {
    title: "Damen - Farbe",
    imageURL: "images/services/faerben_low.jpg",
    variantsHeader: { priceColumn: "kurz / lang" },
    variants: [
      {
        title: "Foliensträhne",
        info: "je Folie",
        price: "1,50 / 2",
      },
      { title: "Ansätze färben", info: "ca. 2cm", price: "29" },
      { title: "Tönung", price: "29 / 34" },
      { title: "Farbe komplett", price: "34 / 44" },
      { title: "Blondieren", price: "34 / 44" },
    ],
  },
  {
    title: "Herren/Kinder",
    imageURL: "images/services/schneiden_low.jpg",
    variantsHeader: { priceColumn: "kurz / lang" },
    variants: [
      { title: "Schnitt Jungs", info: "Bis 14 Jahre", price: "15" },
      {
        title: "Schnitt Mädchen",
        info: "Bis 14 Jahre",
        price: "15 / 18",
      },
      { title: "\xa0" }, // spacing to distinguish children from adults
      { title: "Schneiden mit Maschine", price: "17" },
      { title: "Trockenschnitt", price: "21" },
      { title: "Waschen, Schneiden, Föhnen", price: "26" },
      { title: "Bartkonturen schneiden", price: "7" },
    ],
  },
];
