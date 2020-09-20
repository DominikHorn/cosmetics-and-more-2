import { IService } from "@cosmetics-and-more/components";

export const cosmeticServices: IService[] = [
  {
    title: "Handpflege",
    variants: [
      { title: "Maniküre", price: 14 },
      {
        title: "Mit Naturlack oder Polieren",
        price: 17,
      },
      {
        title: "Mit Farblack",
        price: 20,
      },
      {
        title: "Mit Shellac",
        price: 30,
        info: "Hält circa 14 Tage",
      },
      {
        title: "Mit Handmassage",
        price: 20,
      },
    ],
  },
  {
    title: "Fußpflege",
    variants: [
      { title: "Pediküre", price: 20 },
      { title: "Mit Naturlack oder polieren", price: 22 },
      { title: "Mit Farblack", price: 24 },
      { title: "Mit Shellac", price: 30, info: "Hält circa 14 Tage" },
      { title: "Mit Fußmassage", price: 25 },
    ],
  },
  {
    title: "Gesichtsbehandlung - Klassisch",
    duration: 70,
    description: `Reinigung, Hautanalyse, Peeling, Entfernung von Unreinheiten, Augenbrauenkorrektur, Wirkstoffpackung, Gesicht-, Hals und Dekolletemassage, Ampulle, Tagescreme.`,
    price: 51,
  },
  {
    title: "Haarentfernung mit Warmwachs",
    variants: [
      {
        title: "Oberlippe",
        price: 7,
      },
      {
        title: "Unterschenkel",
        price: 20,
      },
      {
        title: "Oberschenkel",
        price: 23,
      },
      {
        title: "Beine komplett",
        price: 36,
      },
    ],
  },
  {
    title: "Klassische Rückenmassage mit Peeling",
    duration: 40,
    description: `Die Massage dient der Lockerung der Muskulatur, entspannt und beruhigt. Durch den Einsatz von natürlichen Ölen wird die Haut gepflegt.`,
    price: 42,
  },
  {
    title: "Sonstiges",
    variants: [
      { title: "Augenbrauenkorrektur", price: 6 },
      { title: "Augenbrauen Färben", price: 6 },
      { title: "Wimpern Färben", price: 6 },
    ],
  },
];

export const hairServices: IService[] = [
  {
    title: "Damen - Haarschnitt",
    variants: [
      {
        title: "Trockenschnitt (kurz)",
        price: 25,
      },
      {
        title: "Trockenschnitt (lang)",
        price: 30,
      },
      {
        title: "Waschen, Schneiden, Föhnen (kurz)",
        price: 35,
      },
      {
        title: "Waschen, Schneiden, Föhnen (lang)",
        price: 40,
      },
    ],
  },
  {
    title: "Damen - Farbe",
    variants: [
      { title: "Foliensträhne (kurz)", info: "je Folie", price: 1 },
      { title: "Foliensträhne (lang)", info: "je Folie", price: 1.5 },
      { title: "Ansätze färben", info: "ca. 2cm", price: 25 },
      { title: "Tönung (kurz)", price: 25 },
      { title: "Tönung (lang)", price: 30 },
      { title: "Farbe komplett (kurz)", price: 30 },
      { title: "Farbe komplett (lang)", price: 40 },
      { title: "Blondierung (kurz)", price: 30 },
      { title: "Blondierung (lang)", price: 40 },
    ],
  },
  {
    title: "Damen - Frisur",
    variants: [
      { title: "Standard Steckfrisur", price: 20 },
      {
        title: "Dauerwelle/Volumenwelle (kurz)",
        price: 40,
      },
      { title: "Dauerwelle/Volumenwelle (lang)", price: 50 },
      { title: "Brautsteckfrisur inkl. Make-Up", price: 100 },
    ],
  },
  {
    title: "Herren",
    variants: [
      { title: "Schneiden komplett mit Maschine", price: 15 },
      { title: "Trockenschnitt", price: 19 },
      { title: "Waschen, Schneiden, Föhnen", price: 24 },
      { title: "Bartkonturen schneiden", price: 5 },
    ],
  },
  {
    title: "Kinder",
    variants: [
      { title: "Schnitt Jungs", info: "Bis 14 Jahre", price: 13 },
      { title: "Schnitt Mädchen (kurz)", info: "Bis 14 Jahre", price: 13 },
      { title: "Schnitt Mädchen (lang)", info: "Bis 14 Jahre", price: 16 },
    ],
  },
];
