import { IService } from "@cosmetics-and-more/components";

export const cosmeticServices: IService[] = [
  {
    title: "Handpflege",
    imageURL: "images/services/manicure_low.jpg",
    variants: [
      { title: "Maniküre", price: "16" },
      {
        title: "Mit Naturlack oder Polieren",
        price: "19",
      },
      {
        title: "Mit Farblack",
        price: "22",
      },
      {
        title: "Mit Shellac",
        price: "32",
        info: "Hält circa 14 Tage",
      },
      {
        title: "Mit Handmassage",
        price: "22",
      },
    ],
  },
  {
    title: "Fußpflege",
    imageURL: "images/services/pedicure_low.jpg",
    variants: [
      { title: "Pediküre", price: "22" },
      { title: "Mit Naturlack oder polieren", price: "24" },
      { title: "Mit Farblack", price: "26" },
      { title: "Mit Shellac", price: "32", info: "Hält circa 14 Tage" },
      { title: "Mit Fußmassage", price: "27" },
    ],
  },
  {
    title: "Gesichtsbehandlung",
    imageURL: "images/services/facial_low.jpg",
    duration: 70,
    description: `Die Gesichtsbehandlung umfasst folgende Leistungen: Reinigung, Hautanalyse, Peeling, Entfernen von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme`,
    price: "53",
  },
  {
    title: "Haarentfernung mit Warmwachs",
    imageURL: "images/services/shave_low.jpg",
    variants: [
      {
        title: "Oberlippe",
        price: "9",
      },
      {
        title: "Unterschenkel",
        price: "22",
      },
      {
        title: "Oberschenkel",
        price: "25",
      },
      {
        title: "Beine komplett",
        price: "38",
      },
    ],
  },
  {
    title: "Rückenmassage mit Peeling",
    imageURL: "images/services/massage_low.jpg",
    duration: 40,
    description: `Die Massage dient der Lockerung der Muskulatur, entspannt und beruhigt. Durch den Einsatz von natürlichen Ölen wird die Haut gepflegt.`,
    price: "44",
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
        price: "37 / 42",
      },
      { title: "Standard Steckfrisur", price: "22" },
      {
        title: "Dauerwelle/Volumenwelle",
        price: "42 / 52",
      },
      { title: "Brautsteckfrisur inkl. Make-Up", price: "102" },
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
      { title: "Ansätze färben", info: "ca. 2cm", price: "27" },
      { title: "Tönung", price: "27 / 32" },
      { title: "Farbe komplett", price: "32 / 42" },
      { title: "Blondieren", price: "32 / 42" },
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
