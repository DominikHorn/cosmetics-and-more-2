import { IService } from "@cosmetics-and-more/components";

export const cosmeticServices: IService[] = [
  {
    title: "Handpflege",
    imageURL: "images/services/manicure_low.jpg",
    variants: [
      { title: "Maniküre", price: "14" },
      {
        title: "Mit Naturlack oder Polieren",
        price: "17",
      },
      {
        title: "Mit Farblack",
        price: "20",
      },
      {
        title: "Mit Shellac",
        price: "30",
        info: "Hält circa 14 Tage",
      },
      {
        title: "Mit Handmassage",
        price: "20",
      },
    ],
  },
  {
    title: "Fußpflege",
    imageURL: "images/services/pedicure_low.jpg",
    variants: [
      { title: "Pediküre", price: "20" },
      { title: "Mit Naturlack oder polieren", price: "22" },
      { title: "Mit Farblack", price: "24" },
      { title: "Mit Shellac", price: "30", info: "Hält circa 14 Tage" },
      { title: "Mit Fußmassage", price: "25" },
    ],
  },
  {
    title: "Gesichtsbehandlung",
    imageURL: "images/services/facial_low.jpg",
    duration: 70,
    description: `Die Gesichtsbehandlung umfasst folgende Leistungen: Reinigung, Hautanalyse, Peeling, Entfernen von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme`,
    price: "51",
  },
  {
    title: "Haarentfernung mit Warmwachs",
    imageURL: "images/services/shave_low.jpg",
    variants: [
      {
        title: "Oberlippe",
        price: "7",
      },
      {
        title: "Unterschenkel",
        price: "20",
      },
      {
        title: "Oberschenkel",
        price: "23",
      },
      {
        title: "Beine komplett",
        price: "36",
      },
    ],
  },
  {
    title: "Klassische Rückenmassage mit Peeling",
    imageURL: "images/services/massage_low.jpg",
    duration: 40,
    description: `Die Massage dient der Lockerung der Muskulatur, entspannt und beruhigt. Durch den Einsatz von natürlichen Ölen wird die Haut gepflegt.`,
    price: "42",
  },
  {
    title: "Sonstiges",
    imageURL: "images/services/utensilien_low.jpg",
    variants: [
      { title: "Augenbrauenkorrektur", price: "6" },
      { title: "Augenbrauen Färben", price: "6" },
      { title: "Wimpern Färben", price: "6" },
    ],
  },
];

export const hairServices: IService[] = [
  {
    title: "Damen - Frisur",
    variantsHeader: { priceHeader: "kurz / lang" },
    variants: [
      {
        title: "Trockenschnitt",
        price: "25 / 30",
      },
      {
        title: "Waschen, Schneiden, Föhnen",
        price: "35 / 40",
      },
      { title: "Standard Steckfrisur", price: "20" },
      {
        title: "Dauerwelle/Volumenwelle",
        price: "40 / 50",
      },
      { title: "Brautsteckfrisur inkl. Make-Up", price: "100" },
    ],
  },
  {
    title: "Damen - Farbe",
    variantsHeader: { priceHeader: "kurz / lang" },
    variants: [
      {
        title: "Foliensträhne",
        info: "je Folie",
        price: "1 / 1,50",
      },
      { title: "Ansätze färben", info: "ca. 2cm", price: "25" },
      { title: "Tönung", price: "25 / 30" },
      { title: "Farbe komplett", price: "30 / 40" },
      { title: "Blondierung", price: "30 / 40" },
    ],
  },
  {
    title: "Herren",
    variants: [
      { title: "Schneiden komplett mit Maschine", price: "15" },
      { title: "Trockenschnitt", price: "19" },
      { title: "Waschen, Schneiden, Föhnen", price: "24" },
      { title: "Bartkonturen schneiden", price: "5" },
    ],
  },
  {
    title: "Kinder",
    variantsHeader: { priceHeader: "kurz / lang" },
    variants: [
      { title: "Schnitt Jungs", info: "Bis 14 Jahre", price: "13" },
      {
        title: "Schnitt Mädchen",
        info: "Bis 14 Jahre",
        price: "13 / 16",
      },
    ],
  },
];
