import { IService } from "@cosmetics-and-more/components";

export const cosmeticServices: IService[] = [
  {
    title: "Handpflege",
    imageURL: "images/services/manicure_low.jpg",
    variants: [
      { title: "Maniküre", price: "23" },
      {
        title: "Mit Naturlack oder Polieren",
        price: "26",
      },
      {
        title: "Mit Farblack",
        price: "29",
      },
      {
        title: "Mit Shellac",
        price: "45",
        info: "Hält circa 14 Tage",
      },
      {
        title: "Mit Handmassage",
        price: "29",
      },
    ],
  },
  {
    title: "Fußpflege",
    imageURL: "images/services/pedicure_low.jpg",
    variants: [
      { title: "Pediküre", price: "29" },
      { title: "Mit Naturlack oder polieren", price: "31" },
      { title: "Mit Farblack", price: "33" },
      { title: "Mit Shellac", price: "45", info: "Hält circa 14 Tage" },
      { title: "Mit Fußmassage", price: "34" },
    ],
  },
  {
    title: "Gesichtsbehandlung",
    imageURL: "images/services/facial_low.jpg",
    duration: 70,
    description: `Die Gesichtsbehandlung umfasst folgende Leistungen: Reinigung, Hautanalyse, Peeling, Entfernen von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme`,
    price: "65",
  },
  {
    title: "Haarentfernung mit Warmwachs",
    imageURL: "images/services/shave_low.jpg",
    variants: [
      {
        title: "Oberlippe",
        price: "12",
      },
    ],
  },
  {
    title: "Sonstiges",
    imageURL: "images/services/augenbrauen.jpg",
    variants: [
      { title: "Augenbrauenkorrektur", price: "8" },
      { title: "Augenbrauen Färben", price: "12" },
      { title: "Wimpern Färben", price: "12" },
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
        price: "37 / 42",
      },
      {
        title: "Waschen, Schneiden, Föhnen",
        price: "49 / 54",
      },
      {
        title: "Waschen, Föhnen",
        price: "30 / 35",
      },
      { title: "Standard Steckfrisur", price: "34" },
      {
        title: "Dauerwelle/Volumenwelle",
        price: "54 / 64",
      },
    ],
  },
  {
    title: "Damen - Farbe",
    imageURL: "images/services/faerben_low.jpg",
    variantsHeader: { priceColumn: "kurz / lang" },
    variants: [
      {
        title: "Foliensträhnen komplett",
        info: "Strähnen volle Länge + Pflege",
        price: "64 / 81",
      },
      {
        title: "Foliensträhnen Oberkopf",
        info: "Ansatzsträhnen + Pflege",
        price: "54 / 64",
      },
      { title: "Ansätze färben", info: "ca. 2cm", price: "39" },
      { title: "Tönung", price: "39 / 44" },
      { title: "Farbe komplett", price: "44 / 54" },
      { title: "Blondieren", price: "34 / 44" },
    ],
  },
  {
    title: "Herren/Kinder",
    imageURL: "images/services/schneiden_low.jpg",
    variantsHeader: { priceColumn: "kurz / lang" },
    variants: [
      { title: "Schnitt Jungs", info: "Bis 14 Jahre", price: "20" },
      {
        title: "Schnitt Mädchen",
        info: "Bis 14 Jahre",
        price: "20 / 23",
      },
      { title: "\xa0" }, // spacing to distinguish children from adults
      { title: "Schneiden mit Maschine", price: "22" },
      { title: "Trockenschnitt", price: "26" },
      { title: "Waschen, Schneiden, Föhnen", price: "31" },
      { title: "Bartkonturen schneiden", price: "12" },
    ],
  },
];
